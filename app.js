/**
 * PantryChef Application Core Logic (v1.1)
 * Core vs Staple Weighted Engine + Assume Basics
 */

(function () {
  "use strict";

  // --- STATE ---
  const STORAGE_KEY = "pantrychef:v1";
  
  let state = {
    pantry: ["chicken-thighs", "rice"],
    moodFilters: [],
    currentCategory: "all",
    searchQuery: "",
    assumeBasics: true,
    selectedRecipeId: null,
    activeServingsMultiplier: 1,
    activeSwaps: {},
    shoppingList: [],
    // Chef Mode
    chefActive: false,
    chefRecipe: null,
    chefStepIndex: 0,
    chefTimerSeconds: 0,
    chefTimerInitial: 0,
    chefTimerInterval: null,
    chefTimerRunning: false,
    wakeLock: null
  };

  // Load from LocalStorage
  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.pantry)) state.pantry = parsed.pantry;
        if (Array.isArray(parsed.moodFilters)) state.moodFilters = parsed.moodFilters;
        if (Array.isArray(parsed.shoppingList)) state.shoppingList = parsed.shoppingList;
        if (parsed.activeSwaps) state.activeSwaps = parsed.activeSwaps;
        if (typeof parsed.assumeBasics === "boolean") state.assumeBasics = parsed.assumeBasics;
      }
    } catch (e) {
      console.warn("Could not load localStorage", e);
    }
  }

  function saveState() {
    try {
      const payload = {
        pantry: state.pantry,
        moodFilters: state.moodFilters,
        shoppingList: state.shoppingList,
        activeSwaps: state.activeSwaps,
        assumeBasics: state.assumeBasics
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  }

  // --- AUDIO CHIME ---
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playCompletionChime() {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      const freqs = [523.25, 659.25, 783.99, 1046.50];
      freqs.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + i * 0.12);

        gain.gain.setValueAtTime(0.001, now + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.2, now + i * 0.12 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.12 + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + i * 0.12);
        osc.stop(now + i * 0.12 + 1.3);
      });
    } catch (e) {
      console.warn("Audio chime error", e);
    }
  }

  // --- WAKE LOCK ---
  async function requestWakeLock() {
    if ("wakeLock" in navigator) {
      try {
        state.wakeLock = await navigator.wakeLock.request("screen");
      } catch (err) {
        console.warn("Wake Lock error:", err);
      }
    }
  }

  function releaseWakeLock() {
    if (state.wakeLock) {
      state.wakeLock.release().catch(() => {});
      state.wakeLock = null;
    }
  }

  // --- DOM ELEMENTS ---
  const el = {
    ingredientSearch: document.getElementById("ingredientSearch"),
    searchClearBtn: document.getElementById("searchClearBtn"),
    assumeBasicsToggle: document.getElementById("assumeBasicsToggle"),
    categoryTabs: document.getElementById("categoryTabs"),
    ingredientChips: document.getElementById("ingredientChips"),
    clearAllPantryBtn: document.getElementById("clearAllPantryBtn"),
    selectedCountText: document.getElementById("selectedCountText"),
    matchSummaryText: document.getElementById("matchSummaryText"),
    selectedPills: document.getElementById("selectedPills"),
    moodFiltersBar: document.getElementById("moodFiltersBar"),
    recipesGrid: document.getElementById("recipesGrid"),
    emptyState: document.getElementById("emptyState"),

    // Recipe Detail Modal
    recipeDetailModal: document.getElementById("recipeDetailModal"),
    closeDetailBtn: document.getElementById("closeDetailBtn"),
    detailCloseFooterBtn: document.getElementById("detailCloseFooterBtn"),
    detailTitle: document.getElementById("detailTitle"),
    detailSubtitle: document.getElementById("detailSubtitle"),
    detailMatchBadge: document.getElementById("detailMatchBadge"),
    detailTime: document.getElementById("detailTime"),
    detailEquipment: document.getElementById("detailEquipment"),
    detailIngredientList: document.getElementById("detailIngredientList"),
    detailSubstitutionsSection: document.getElementById("detailSubstitutionsSection"),
    detailSubstitutionsList: document.getElementById("detailSubstitutionsList"),
    detailStepsList: document.getElementById("detailStepsList"),
    detailStartChefBtn: document.getElementById("detailStartChefBtn"),
    detailAddMissingToShopBtn: document.getElementById("detailAddMissingToShopBtn"),

    // Shopping List
    openShoppingListBtn: document.getElementById("openShoppingListBtn"),
    shopListCount: document.getElementById("shopListCount"),
    shoppingListModal: document.getElementById("shoppingListModal"),
    closeShopModalBtn: document.getElementById("closeShopModalBtn"),
    shopListContent: document.getElementById("shopListContent"),
    clearShopListBtn: document.getElementById("clearShopListBtn"),
    copyShopListBtn: document.getElementById("copyShopListBtn"),

    // Chef Mode
    chefModeOverlay: document.getElementById("chefModeOverlay"),
    chefRecipeTitle: document.getElementById("chefRecipeTitle"),
    chefExitBtn: document.getElementById("chefExitBtn"),
    chefStepIndicator: document.getElementById("chefStepIndicator"),
    chefStepTitle: document.getElementById("chefStepTitle"),
    chefStepText: document.getElementById("chefStepText"),
    chefTimerBox: document.getElementById("chefTimerBox"),
    chefTimerLabel: document.getElementById("chefTimerLabel"),
    chefTimerDisplay: document.getElementById("chefTimerDisplay"),
    chefTimerStartBtn: document.getElementById("chefTimerStartBtn"),
    chefTimerResetBtn: document.getElementById("chefTimerResetBtn"),
    chefPrevStepBtn: document.getElementById("chefPrevStepBtn"),
    chefNextStepBtn: document.getElementById("chefNextStepBtn")
  };

  // --- INGREDIENT & MATCH LOGIC ---

  function getIngredientById(id) {
    return window.PANTRY_INGREDIENTS.find(item => item.id === id) || {
      id: id,
      label: id.replace(/-/g, " "),
      category: "staples"
    };
  }

  function getSubstitutionsFor(ingredientId) {
    return window.PANTRY_SUBSTITUTIONS.find(s => s.forIngredientId === ingredientId);
  }

  const ASSUMED_STAPLE_IDS = ["salt", "black-pepper", "neutral-oil", "olive-oil", "cooking-oil", "water"];

  function isAssumedStaple(id) {
    return ASSUMED_STAPLE_IDS.includes(id);
  }

  function userHasIngredient(ingredientId) {
    if (state.pantry.includes(ingredientId)) return true;

    // Check assumed staples toggle
    if (state.assumeBasics && isAssumedStaple(ingredientId)) return true;

    const reqIng = getIngredientById(ingredientId);

    // Parent group checks
    if (reqIng.matchGroups) {
      for (const group of reqIng.matchGroups) {
        if (state.pantry.includes(group)) return true;
        if (state.assumeBasics && group === "cooking-oil") return true;
      }
    }

    for (const pantryId of state.pantry) {
      const pantryIng = getIngredientById(pantryId);
      if (pantryIng.matchGroups && pantryIng.matchGroups.includes(ingredientId)) {
        return true;
      }
    }

    return false;
  }

  function checkSubstitutionAvailability(ingredientId) {
    const sub = getSubstitutionsFor(ingredientId);
    if (!sub) return null;

    for (const option of sub.options) {
      const hasAllComponents = option.components.every(comp => userHasIngredient(comp.ingredientId));
      if (hasAllComponents) {
        return option;
      }
    }
    return null;
  }

  /**
   * Core vs Staple Weighted Match Scoring (v1.1)
   */
  function calculateRecipeMatch(recipe) {
    const coreIngs = recipe.ingredients.filter(ing => ing.role === "core");
    const flavorIngs = recipe.ingredients.filter(ing => ing.role === "flavor");
    const stapleIngs = recipe.ingredients.filter(ing => ing.role === "staple");
    const optionalIngs = recipe.ingredients.filter(ing => ing.role === "optional");

    let matchedCore = 0;
    let matchedFlavor = 0;
    const missingCore = [];
    const missingFlavor = [];
    const missingStaple = [];
    const swappable = [];

    const activeRecipeSwaps = state.activeSwaps[recipe.id] || {};

    // 1. Evaluate Core Ingredients
    coreIngs.forEach(ing => {
      const direct = userHasIngredient(ing.ingredientId);
      const isSwap = activeRecipeSwaps[ing.ingredientId];
      if (direct || isSwap) {
        matchedCore++;
      } else {
        const sub = checkSubstitutionAvailability(ing.ingredientId);
        if (sub) {
          swappable.push({ ingredient: ing, substitutionOption: sub });
          matchedCore += 0.85; // partial core credit for swappable
        } else {
          missingCore.push(ing);
        }
      }
    });

    // 2. Evaluate Flavor Ingredients
    flavorIngs.forEach(ing => {
      const direct = userHasIngredient(ing.ingredientId);
      const isSwap = activeRecipeSwaps[ing.ingredientId];
      if (direct || isSwap) {
        matchedFlavor++;
      } else {
        const sub = checkSubstitutionAvailability(ing.ingredientId);
        if (sub) {
          swappable.push({ ingredient: ing, substitutionOption: sub });
          matchedFlavor += 0.9;
        } else {
          missingFlavor.push(ing);
        }
      }
    });

    // 3. Evaluate Staples
    stapleIngs.forEach(ing => {
      const direct = userHasIngredient(ing.ingredientId);
      if (!direct) {
        missingStaple.push(ing);
      }
    });

    const totalCore = Math.max(1, coreIngs.length);
    const totalFlavor = Math.max(1, flavorIngs.length);

    const coreScore = Math.min(1, matchedCore / totalCore);
    const flavorScore = flavorIngs.length === 0 ? 1 : Math.min(1, matchedFlavor / totalFlavor);

    let weightedScore = Math.round(coreScore * 90 + flavorScore * 10);

    // Confidence bonus if missing items are assumed staples or covered by swaps
    const allNonCoreCovered = (missingFlavor.length === 0 && (state.assumeBasics || missingStaple.length === 0));
    if (coreScore === 1 && allNonCoreCovered) {
      weightedScore = Math.min(100, weightedScore + 5);
    }

    const missingTotal = [...missingCore, ...missingFlavor, ...(state.assumeBasics ? [] : missingStaple)];

    // Badge Copy Generator
    let badgeText = "";
    let badgeClass = "high";

    if (weightedScore >= 100 && missingTotal.length === 0) {
      badgeText = "✓ 100% Ready";
      badgeClass = "perfect";
    } else if (coreScore === 1 && (state.assumeBasics && missingFlavor.length === 0)) {
      badgeText = "95% Ready — basics assumed";
      badgeClass = "basics-ready";
    } else if (coreScore === 1 && weightedScore >= 90) {
      badgeText = "90%+ Core Ready";
      badgeClass = "core-ready";
    } else if (swappable.length > 0 && weightedScore >= 80) {
      badgeText = "80% Ready — " + swappable.length + " swap" + (swappable.length > 1 ? "s" : "");
      badgeClass = "swappable";
    } else if (coreScore >= 0.75) {
      badgeText = "Close — missing 1 core";
      badgeClass = "high";
    } else {
      badgeText = weightedScore + "% Match";
      badgeClass = "low";
    }

    return {
      recipe,
      weightedScore,
      coreScore,
      flavorScore,
      matchedCore: Math.floor(matchedCore),
      totalCore: coreIngs.length,
      missingCore,
      missingFlavor,
      missingStaple,
      missingTotal,
      swappable,
      badgeText,
      badgeClass,
      isCoreReady: coreScore === 1
    };
  }

  // --- UNIT SCALING ---
  function scaleQuantity(qty, unit, multiplier) {
    if (qty === null || qty === undefined) return null;
    const raw = qty * multiplier;

    if (unit === "g") return raw >= 100 ? Math.round(raw / 5) * 5 : Math.round(raw);
    if (unit === "ml") return Math.round(raw / 5) * 5;
    if (unit === "tsp" || unit === "tbsp" || unit === "cup") {
      const quarters = Math.round(raw * 4) / 4;
      if (quarters === 0.25) return "1/4";
      if (quarters === 0.5) return "1/2";
      if (quarters === 0.75) return "3/4";
      if (quarters % 1 === 0.5) return Math.floor(quarters) + " 1/2";
      if (quarters % 1 === 0.25) return Math.floor(quarters) + " 1/4";
      if (quarters % 1 === 0.75) return Math.floor(quarters) + " 3/4";
      return quarters;
    }
    if (["whole", "clove", "slice", "can"].includes(unit)) {
      return Math.ceil(raw);
    }
    return Math.round(raw * 10) / 10;
  }

  function formatIngredientText(ing, multiplier) {
    const scaledQty = scaleQuantity(ing.qty, ing.unit, multiplier);
    const ingData = getIngredientById(ing.ingredientId);
    let name = ingData ? ingData.label : ing.ingredientId.replace(/-/g, " ");

    let qtyStr = "";
    if (scaledQty !== null) {
      qtyStr = scaledQty + " " + ing.unit;
    } else if (ing.unit) {
      qtyStr = ing.unit;
    }

    let noteStr = ing.note ? " (" + ing.note + ")" : "";
    let roleBadge = ing.role === "core" ? " [Core]" : (ing.role === "optional" ? " [Optional]" : "");

    return { qtyStr, name, noteStr, roleBadge };
  }

  // --- RENDER FUNCTIONS ---

  function renderCategoryTabs() {
    el.categoryTabs.querySelectorAll(".cat-tab").forEach(tab => {
      tab.classList.toggle("active", tab.dataset.category === state.currentCategory);
    });
  }

  function renderIngredientChips() {
    const q = state.searchQuery.toLowerCase().trim();
    let filtered = window.PANTRY_INGREDIENTS;

    if (state.currentCategory !== "all") {
      filtered = filtered.filter(item => item.category === state.currentCategory);
    }

    if (q) {
      filtered = filtered.filter(item => {
        if (item.label.toLowerCase().includes(q)) return true;
        if (item.id.toLowerCase().includes(q)) return true;
        if (item.aliases && item.aliases.some(alias => alias.toLowerCase().includes(q))) return true;
        if (item.subcategory && item.subcategory.toLowerCase().includes(q)) return true;
        return false;
      });
    }

    el.ingredientChips.innerHTML = "";
    if (filtered.length === 0) {
      el.ingredientChips.innerHTML = "<div style=\"font-size:0.85rem; color:var(--ink-muted); padding:10px 0;\">No ingredients found matching \"" + q + "\"</div>";
      return;
    }

    filtered.forEach(ing => {
      const isSelected = state.pantry.includes(ing.id);
      const chip = document.createElement("button");
      chip.className = "ingredient-chip " + (isSelected ? "selected" : "");
      chip.setAttribute("aria-pressed", isSelected ? "true" : "false");
      chip.dataset.id = ing.id;
      chip.innerHTML = "<span class=\"chip-dot\"></span><span>" + ing.label + "</span>";
      chip.addEventListener("click", () => togglePantryIngredient(ing.id));
      el.ingredientChips.appendChild(chip);
    });
  }

  function renderSelectedTray() {
    const count = state.pantry.length;
    el.selectedCountText.textContent = count + " Selected";

    el.selectedPills.innerHTML = "";
    state.pantry.forEach(id => {
      const ing = getIngredientById(id);
      const pill = document.createElement("span");
      pill.className = "tray-pill";
      pill.innerHTML = "<span>" + ing.label + "</span><button class=\"tray-pill-remove\" data-id=\"" + id + "\" aria-label=\"Remove " + ing.label + "\">✕</button>";
      pill.querySelector(".tray-pill-remove").addEventListener("click", (e) => {
        e.stopPropagation();
        togglePantryIngredient(id);
      });
      el.selectedPills.appendChild(pill);
    });
  }

  function renderRecipesGrid() {
    let matchResults = window.PANTRY_RECIPES.map(calculateRecipeMatch);

    if (state.moodFilters.length > 0) {
      matchResults = matchResults.filter(result => {
        return state.moodFilters.every(mood => result.recipe.moods.includes(mood));
      });
    }

    // Sort: weightedScore desc -> coreScore desc -> missingCore asc -> missingFlavor asc -> time asc
    matchResults.sort((a, b) => {
      if (b.weightedScore !== a.weightedScore) return b.weightedScore - a.weightedScore;
      if (b.coreScore !== a.coreScore) return b.coreScore - a.coreScore;
      if (a.missingCore.length !== b.missingCore.length) return a.missingCore.length - b.missingCore.length;
      if (a.missingFlavor.length !== b.missingFlavor.length) return a.missingFlavor.length - b.missingFlavor.length;
      return a.recipe.totalTimeMinutes - b.recipe.totalTimeMinutes;
    });

    const readyCount = matchResults.filter(r => r.weightedScore >= 80 || r.isCoreReady).length;
    const topScore = matchResults.length > 0 ? matchResults[0].weightedScore : 0;
    if (readyCount > 0) {
      el.matchSummaryText.textContent = readyCount + " dinner" + (readyCount > 1 ? "s" : "") + " ready (Best: " + topScore + "%)";
    } else {
      el.matchSummaryText.textContent = "Select ingredients to match";
    }

    el.recipesGrid.innerHTML = "";

    if (matchResults.length === 0) {
      el.emptyState.style.display = "block";
      return;
    }
    el.emptyState.style.display = "none";

    matchResults.forEach(({ recipe, weightedScore, coreScore, missingCore, missingFlavor, missingStaple, swappable, badgeText, badgeClass, isCoreReady }) => {
      const card = document.createElement("article");
      card.className = "recipe-card";
      card.dataset.recipeId = recipe.id;

      const tagsHtml = recipe.moods.map(m => {
        return "<span class=\"recipe-tag\">" + m.replace(/-/g, " ") + "</span>";
      }).join("");

      // Status text
      let statusHtml = "";
      if (weightedScore === 100) {
        statusHtml = "<div class=\"match-status-row\"><span class=\"status-matched\">✓ You have all ingredients!</span></div>";
      } else if (isCoreReady && missingFlavor.length > 0) {
        const flavorNames = missingFlavor.map(f => getIngredientById(f.ingredientId).label).slice(0, 2).join(", ");
        statusHtml = "<div class=\"match-status-row\"><span class=\"status-matched\">✓ Core ready</span><span class=\"status-missing\" style=\"color:var(--warning); font-size:0.78rem;\">missing flavor: " + flavorNames + "</span></div>";
      } else if (missingCore.length > 0) {
        const coreNames = missingCore.map(c => getIngredientById(c.ingredientId).label).join(", ");
        statusHtml = "<div class=\"match-status-row\"><span class=\"status-missing\">Missing core: " + coreNames + "</span>" + (swappable.length > 0 ? "<span class=\"status-swappable\">(" + swappable.length + " swap)</span>" : "") + "</div>";
      } else if (swappable.length > 0) {
        statusHtml = "<div class=\"match-status-row\"><span class=\"status-swappable\">✨ " + swappable.length + " ingredient can be swapped</span></div>";
      }

      card.innerHTML = "<div><div class=\"recipe-card-top\"><span class=\"match-badge " + badgeClass + "\">" + badgeText + "</span><span class=\"recipe-time-badge\">⏱️ " + recipe.totalTimeMinutes + "m</span></div><h3 class=\"recipe-title\">" + recipe.title + "</h3><p class=\"recipe-subtitle\">" + recipe.subtitle + "</p><div class=\"recipe-tags\">" + tagsHtml + "</div><div class=\"recipe-match-status\">" + statusHtml + "</div></div><div class=\"recipe-card-footer\"><button class=\"btn btn-secondary btn-sm open-detail-btn\" data-id=\"" + recipe.id + "\">View Recipe &amp; Swaps</button><button class=\"btn btn-primary btn-sm open-chef-direct-btn\" data-id=\"" + recipe.id + "\">👨‍🍳 Cook Now</button></div>";

      card.addEventListener("click", (e) => {
        if (e.target.closest(".open-chef-direct-btn")) {
          openChefMode(recipe.id);
        } else {
          openRecipeDetail(recipe.id);
        }
      });

      el.recipesGrid.appendChild(card);
    });
  }

  function renderShoppingListBadge() {
    const total = state.shoppingList.length;
    if (total > 0) {
      el.shopListCount.textContent = total;
      el.shopListCount.style.display = "inline-block";
    } else {
      el.shopListCount.style.display = "none";
    }
  }

  // --- ACTIONS & HANDLERS ---

  function togglePantryIngredient(id) {
    if (state.pantry.includes(id)) {
      state.pantry = state.pantry.filter(item => item !== id);
    } else {
      state.pantry.push(id);
    }
    saveState();
    renderIngredientChips();
    renderSelectedTray();
    renderRecipesGrid();
  }

  function toggleMoodFilter(mood) {
    if (state.moodFilters.includes(mood)) {
      state.moodFilters = state.moodFilters.filter(m => m !== mood);
    } else {
      state.moodFilters.push(mood);
    }
    saveState();
    renderMoodFilters();
    renderRecipesGrid();
  }

  function renderMoodFilters() {
    el.moodFiltersBar.querySelectorAll(".mood-chip").forEach(chip => {
      chip.classList.toggle("active", state.moodFilters.includes(chip.dataset.mood));
    });
  }

  // --- RECIPE DETAIL MODAL ---

  function openRecipeDetail(recipeId) {
    state.selectedRecipeId = recipeId;
    const recipe = window.PANTRY_RECIPES.find(r => r.id === recipeId);
    if (!recipe) return;

    const matchInfo = calculateRecipeMatch(recipe);

    el.detailTitle.textContent = recipe.title;
    el.detailSubtitle.textContent = recipe.subtitle;
    el.detailTime.textContent = "⏱️ " + recipe.totalTimeMinutes + " mins (" + recipe.activeTimeMinutes + "m active)";
    el.detailEquipment.textContent = "🍳 " + recipe.equipment.join(", ");

    el.detailMatchBadge.textContent = matchInfo.badgeText;
    el.detailMatchBadge.className = "hero-tag " + matchInfo.badgeClass;

    renderDetailIngredients(recipe);
    renderDetailSubstitutions(recipe);
    renderDetailSteps(recipe);

    el.recipeDetailModal.classList.add("open");
    el.recipeDetailModal.setAttribute("aria-hidden", "false");
  }

  function renderDetailIngredients(recipe) {
    el.detailIngredientList.innerHTML = "";
    const mult = state.activeServingsMultiplier;

    recipe.ingredients.forEach(ing => {
      const fmt = formatIngredientText(ing, mult);
      const isDirect = userHasIngredient(ing.ingredientId);
      const hasSwap = state.activeSwaps[recipe.id] && state.activeSwaps[recipe.id][ing.ingredientId];
      const canSwap = !isDirect && checkSubstitutionAvailability(ing.ingredientId);

      let statusClass = "missing";
      let badgeLabel = "Missing";
      if (isDirect) {
        statusClass = "have";
        badgeLabel = "In Pantry";
      } else if (hasSwap) {
        statusClass = "swapped";
        badgeLabel = "Swapped";
      } else if (canSwap) {
        statusClass = "swapped";
        badgeLabel = "Swap Available";
      }

      const li = document.createElement("li");
      li.className = "ingredient-item " + statusClass;
      li.innerHTML = "<span class=\"ing-qty\">" + fmt.qtyStr + "</span><span class=\"ing-name\">" + fmt.name + fmt.noteStr + fmt.roleBadge + "</span><span class=\"ing-badge " + statusClass + "\">" + badgeLabel + "</span>";
      el.detailIngredientList.appendChild(li);
    });
  }

  function renderDetailSubstitutions(recipe) {
    const missing = recipe.ingredients.filter(ing => ing.role !== "optional" && !userHasIngredient(ing.ingredientId));
    const subContainer = el.detailSubstitutionsList;
    subContainer.innerHTML = "";

    let foundSubs = 0;
    missing.forEach(ing => {
      const sub = getSubstitutionsFor(ing.ingredientId);
      if (sub) {
        foundSubs++;
        sub.options.forEach(opt => {
          const hasComponents = opt.components.every(c => userHasIngredient(c.ingredientId));
          const isCurrentlyActive = state.activeSwaps[recipe.id] && state.activeSwaps[recipe.id][ing.ingredientId] === opt.id;

          const box = document.createElement("div");
          box.className = "sub-box";
          box.innerHTML = "<div class=\"sub-header\"><span>💡 Swap for " + sub.label + ": " + opt.label + "</span>" + (hasComponents ? "<span style=\"color:var(--success); font-size:0.75rem;\">(You have components!)</span>" : "") + "</div><div class=\"sub-body\"><div><strong>Ratio:</strong> " + opt.ratio + "</div><div><strong>Best for:</strong> " + opt.bestFor + "</div>" + (opt.note ? "<div style=\"font-style:italic; margin-top:4px;\">Note: " + opt.note + "</div>" : "") + "</div><div style=\"display:flex; gap:8px; align-items:center;\"><button class=\"btn btn-primary btn-sm activate-swap-btn\" data-recipe=\"" + recipe.id + "\" data-ing=\"" + ing.ingredientId + "\" data-swap=\"" + opt.id + "\">" + (isCurrentlyActive ? "✓ Using This Swap" : "Use This Swap") + "</button></div>";

          box.querySelector(".activate-swap-btn").addEventListener("click", () => {
            if (!state.activeSwaps[recipe.id]) state.activeSwaps[recipe.id] = {};
            state.activeSwaps[recipe.id][ing.ingredientId] = opt.id;
            saveState();
            renderDetailIngredients(recipe);
            renderDetailSubstitutions(recipe);
            renderRecipesGrid();
          });

          subContainer.appendChild(box);
        });
      }
    });

    el.detailSubstitutionsSection.style.display = foundSubs > 0 ? "block" : "none";
  }

  function renderDetailSteps(recipe) {
    el.detailStepsList.innerHTML = "";
    recipe.steps.forEach((step, idx) => {
      const row = document.createElement("div");
      row.className = "step-row";
      row.innerHTML = "<div class=\"step-num\">" + (idx + 1) + "</div><div class=\"step-content\"><div class=\"step-text\"><strong>" + (step.title ? step.title + ": " : "") + "</strong>" + step.text + "</div>" + (step.timer ? "<div class=\"step-timer-cue\">⏱️ Timer: " + Math.floor(step.timer.seconds / 60) + "m " + (step.timer.seconds % 60) + "s (" + step.timer.cue + ")</div>" : "") + "</div>";
      el.detailStepsList.appendChild(row);
    });
  }

  function closeRecipeDetail() {
    el.recipeDetailModal.classList.remove("open");
    el.recipeDetailModal.setAttribute("aria-hidden", "true");
  }

  // --- CHEF MODE ---

  function openChefMode(recipeId) {
    closeRecipeDetail();
    const recipe = window.PANTRY_RECIPES.find(r => r.id === recipeId);
    if (!recipe) return;

    state.chefActive = true;
    state.chefRecipe = recipe;
    state.chefStepIndex = 0;
    clearInterval(state.chefTimerInterval);
    state.chefTimerRunning = false;

    el.chefRecipeTitle.textContent = recipe.title;
    requestWakeLock();
    renderChefStep();

    el.chefModeOverlay.classList.add("active");
  }

  function closeChefMode() {
    state.chefActive = false;
    clearInterval(state.chefTimerInterval);
    state.chefTimerRunning = false;
    releaseWakeLock();
    el.chefModeOverlay.classList.remove("active");
  }

  function renderChefStep() {
    const recipe = state.chefRecipe;
    const step = recipe.steps[state.chefStepIndex];
    const totalSteps = recipe.steps.length;

    el.chefStepIndicator.textContent = "Step " + (state.chefStepIndex + 1) + " of " + totalSteps;
    el.chefStepTitle.textContent = step.title || ("Step " + (state.chefStepIndex + 1));
    el.chefStepText.textContent = step.text;

    clearInterval(state.chefTimerInterval);
    state.chefTimerRunning = false;

    if (step.timer && step.timer.seconds > 0) {
      state.chefTimerInitial = step.timer.seconds;
      state.chefTimerSeconds = step.timer.seconds;
      el.chefTimerLabel.textContent = "⏱️ " + step.timer.label + " (" + step.timer.cue + ")";
      updateTimerDisplay(state.chefTimerSeconds);
      el.chefTimerStartBtn.textContent = "▶ Start Timer";
      el.chefTimerBox.style.display = "block";
    } else {
      el.chefTimerBox.style.display = "none";
    }

    el.chefPrevStepBtn.disabled = state.chefStepIndex === 0;
    el.chefPrevStepBtn.style.opacity = state.chefStepIndex === 0 ? "0.4" : "1";

    if (state.chefStepIndex === totalSteps - 1) {
      el.chefNextStepBtn.textContent = "🎉 Complete Dinner!";
    } else {
      el.chefNextStepBtn.textContent = "Next Step →";
    }
  }

  function updateTimerDisplay(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    el.chefTimerDisplay.textContent = String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0");
  }

  function toggleChefTimer() {
    if (state.chefTimerRunning) {
      clearInterval(state.chefTimerInterval);
      state.chefTimerRunning = false;
      el.chefTimerStartBtn.textContent = "▶ Resume";
    } else {
      getAudioContext();
      state.chefTimerRunning = true;
      el.chefTimerStartBtn.textContent = "⏸ Pause";

      state.chefTimerInterval = setInterval(() => {
        state.chefTimerSeconds--;
        updateTimerDisplay(state.chefTimerSeconds);

        if (state.chefTimerSeconds <= 0) {
          clearInterval(state.chefTimerInterval);
          state.chefTimerRunning = false;
          el.chefTimerStartBtn.textContent = "✓ Done!";
          playCompletionChime();
        }
      }, 1000);
    }
  }

  function resetChefTimer() {
    clearInterval(state.chefTimerInterval);
    state.chefTimerRunning = false;
    state.chefTimerSeconds = state.chefTimerInitial;
    updateTimerDisplay(state.chefTimerSeconds);
    el.chefTimerStartBtn.textContent = "▶ Start Timer";
  }

  // --- SHOPPING LIST LOGIC ---

  function addMissingIngredientsToShopList(recipeId) {
    const recipe = window.PANTRY_RECIPES.find(r => r.id === recipeId);
    if (!recipe) return;

    const match = calculateRecipeMatch(recipe);
    let addedCount = 0;

    match.missingTotal.forEach(ing => {
      // If assumeBasics is ON, do not add staples automatically
      if (state.assumeBasics && ing.role === "staple") return;

      const exists = state.shoppingList.some(item => item.ingredientId === ing.ingredientId && item.sourceRecipeId === recipe.id);
      if (!exists) {
        state.shoppingList.push({
          ingredientId: ing.ingredientId,
          qty: ing.qty,
          unit: ing.unit,
          sourceRecipeId: recipe.id,
          sourceRecipeTitle: recipe.title
        });
        addedCount++;
      }
    });

    saveState();
    renderShoppingListBadge();
    alert("Added " + addedCount + " missing ingredient" + (addedCount === 1 ? "" : "s") + " to your Shopping List!");
  }

  function renderShoppingListModal() {
    el.shopListContent.innerHTML = "";

    if (state.shoppingList.length === 0) {
      el.shopListContent.innerHTML = "<div class=\"empty-state\" style=\"padding:20px;\"><div class=\"empty-icon\">🛒</div><div class=\"empty-title\" style=\"font-size:1.1rem;\">Shopping List is empty</div><div class=\"empty-desc\">Add missing ingredients from any recipe card to build your list.</div></div>";
      return;
    }

    const grouped = {};
    state.shoppingList.forEach((item, index) => {
      const ing = getIngredientById(item.ingredientId);
      const cat = ing.category || "staples";
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push({ item, index });
    });

    for (const [cat, items] of Object.entries(grouped)) {
      const groupDiv = document.createElement("div");
      groupDiv.className = "shop-list-group";
      groupDiv.innerHTML = "<div class=\"shop-group-title\">" + cat.toUpperCase() + "</div>";

      items.forEach(({ item, index }) => {
        const ing = getIngredientById(item.ingredientId);
        const row = document.createElement("div");
        row.className = "shop-item";
        row.innerHTML = "<span><strong>" + (item.qty ? item.qty + " " + item.unit : "") + "</strong> " + ing.label + "</span><button class=\"btn-ghost btn-sm remove-shop-item-btn\" data-index=\"" + index + "\">✕</button>";
        row.querySelector(".remove-shop-item-btn").addEventListener("click", () => {
          state.shoppingList.splice(index, 1);
          saveState();
          renderShoppingListBadge();
          renderShoppingListModal();
        });
        groupDiv.appendChild(row);
      });

      el.shopListContent.appendChild(groupDiv);
    }
  }

  function copyShoppingListToClipboard() {
    if (state.shoppingList.length === 0) return;

    let text = "🍳 PantryChef Shopping List\n========================\n\n";
    const grouped = {};
    state.shoppingList.forEach(item => {
      const ing = getIngredientById(item.ingredientId);
      const cat = (ing.category || "staples").toUpperCase();
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push((item.qty ? item.qty + " " + item.unit + " " : "") + ing.label);
    });

    for (const [cat, items] of Object.entries(grouped)) {
      text += cat + ":\n";
      items.forEach(i => { text += " - " + i + "\n"; });
      text += "\n";
    }

    text += "Generated with PantryChef — Zero AI Slop Kitchen Copilot";

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        el.copyShopListBtn.textContent = "✓ Copied!";
        setTimeout(() => el.copyShopListBtn.textContent = "📋 Copy to Clipboard", 2000);
      });
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      el.copyShopListBtn.textContent = "✓ Copied!";
      setTimeout(() => el.copyShopListBtn.textContent = "📋 Copy to Clipboard", 2000);
    }
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    el.ingredientSearch.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      el.searchClearBtn.style.display = state.searchQuery ? "block" : "none";
      renderIngredientChips();
    });

    el.searchClearBtn.addEventListener("click", () => {
      state.searchQuery = "";
      el.ingredientSearch.value = "";
      el.searchClearBtn.style.display = "none";
      renderIngredientChips();
    });

    if (el.assumeBasicsToggle) {
      el.assumeBasicsToggle.checked = state.assumeBasics;
      el.assumeBasicsToggle.addEventListener("change", (e) => {
        state.assumeBasics = e.target.checked;
        saveState();
        renderRecipesGrid();
      });
    }

    el.categoryTabs.addEventListener("click", (e) => {
      const tab = e.target.closest(".cat-tab");
      if (tab) {
        state.currentCategory = tab.dataset.category;
        renderCategoryTabs();
        renderIngredientChips();
      }
    });

    el.clearAllPantryBtn.addEventListener("click", () => {
      if (confirm("Clear all selected pantry ingredients?")) {
        state.pantry = [];
        saveState();
        renderIngredientChips();
        renderSelectedTray();
        renderRecipesGrid();
      }
    });

    el.moodFiltersBar.addEventListener("click", (e) => {
      const chip = e.target.closest(".mood-chip");
      if (chip) {
        toggleMoodFilter(chip.dataset.mood);
      }
    });

    document.querySelectorAll(".servings-control .servings-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const scale = parseInt(e.target.dataset.scale, 10);
        state.activeServingsMultiplier = scale;

        document.querySelectorAll(".servings-control .servings-btn").forEach(b => {
          b.classList.toggle("active", parseInt(b.dataset.scale, 10) === scale);
        });

        if (state.selectedRecipeId) {
          const recipe = window.PANTRY_RECIPES.find(r => r.id === state.selectedRecipeId);
          if (recipe) renderDetailIngredients(recipe);
        }
      });
    });

    el.closeDetailBtn.addEventListener("click", closeRecipeDetail);
    el.detailCloseFooterBtn.addEventListener("click", closeRecipeDetail);
    el.detailStartChefBtn.addEventListener("click", () => {
      if (state.selectedRecipeId) openChefMode(state.selectedRecipeId);
    });
    el.detailAddMissingToShopBtn.addEventListener("click", () => {
      if (state.selectedRecipeId) addMissingIngredientsToShopList(state.selectedRecipeId);
    });

    el.openShoppingListBtn.addEventListener("click", () => {
      renderShoppingListModal();
      el.shoppingListModal.classList.add("open");
      el.shoppingListModal.setAttribute("aria-hidden", "false");
    });
    el.closeShopModalBtn.addEventListener("click", () => {
      el.shoppingListModal.classList.remove("open");
      el.shoppingListModal.setAttribute("aria-hidden", "true");
    });
    el.clearShopListBtn.addEventListener("click", () => {
      if (confirm("Clear the shopping list?")) {
        state.shoppingList = [];
        saveState();
        renderShoppingListBadge();
        renderShoppingListModal();
      }
    });
    el.copyShopListBtn.addEventListener("click", copyShoppingListToClipboard);

    el.chefExitBtn.addEventListener("click", closeChefMode);
    el.chefPrevStepBtn.addEventListener("click", () => {
      if (state.chefStepIndex > 0) {
        state.chefStepIndex--;
        renderChefStep();
      }
    });
    el.chefNextStepBtn.addEventListener("click", () => {
      if (state.chefStepIndex < state.chefRecipe.steps.length - 1) {
        state.chefStepIndex++;
        renderChefStep();
      } else {
        alert("🎉 Dinner complete! Enjoy your meal!");
        closeChefMode();
      }
    });
    el.chefTimerStartBtn.addEventListener("click", toggleChefTimer);
    el.chefTimerResetBtn.addEventListener("click", resetChefTimer);

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeRecipeDetail();
        el.shoppingListModal.classList.remove("open");
        if (state.chefActive) closeChefMode();
      }
    });
  }

  function init() {
    loadState();
    setupEventListeners();
    renderCategoryTabs();
    renderIngredientChips();
    renderSelectedTray();
    renderMoodFilters();
    renderRecipesGrid();
    renderShoppingListBadge();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
