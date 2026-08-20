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

  // --- DOM ELEMENTS (Dynamically populated on init) ---
  let el = {};

  function initElements() {
    el = {
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
  }

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
    const reqGroups = reqIng.matchGroups || [];

    // Check if user selected a parent group ID (e.g. user selected "chicken")
    for (const group of reqGroups) {
      if (state.pantry.includes(group)) return true;
      if (state.assumeBasics && group === "cooking-oil") return true;
    }

    // Check if any pantry item shares a matchGroup with required item or matches ID
    for (const pantryId of state.pantry) {
      if (pantryId === ingredientId) return true;
      const pantryIng = getIngredientById(pantryId);
      const pantryGroups = pantryIng.matchGroups || [];

      if (pantryGroups.includes(ingredientId)) return true;
      if (reqGroups.includes(pantryId)) return true;

      // Cross-match if they share any common matchGroup (e.g. chicken-breast & chicken-thighs both share "chicken")
      const commonGroup = reqGroups.some(g => pantryGroups.includes(g));
      if (commonGroup) return true;
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
      badgeText = "100% Ready";
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
    el.detailTime.textContent = "Time: " + recipe.totalTimeMinutes + " mins (" + recipe.activeTimeMinutes + " mins active)";
    el.detailEquipment.textContent = "Equipment: " + recipe.equipment.join(", ");

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
          box.innerHTML = "<div class=\"sub-header\"><span>💡 Swap for " + sub.label + ": " + opt.label + "</span>" + (hasComponents ? "<span style=\"color:var(--success); font-size:0.75rem;\">(You have components!)</span>" : "") + "</div><div class=\"sub-body\"><div><strong>Ratio:</strong> " + opt.ratio + "</div><div><strong>Best for:</strong> " + opt.bestFor + "</div>" + (opt.note ? "<div style=\"font-style:italic; margin-top:4px;\">Note: " + opt.note + "</div>" : "") + "</div><div style=\"display:flex; gap:8px; align-items:center;\"><button class=\"btn btn-primary btn-sm activate-swap-btn\" data-recipe=\"" + recipe.id + "\" data-ing=\"" + ing.ingredientId + "\" data-swap=\"" + opt.id + "\">" + (isCurrentlyActive ? "Using This Swap" : "Use This Swap") + "</button></div>";

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
      el.chefTimerLabel.textContent = "Timer: " + step.timer.label + " (" + step.timer.cue + ")";
      updateTimerDisplay(state.chefTimerSeconds);
      el.chefTimerStartBtn.textContent = "Start Timer";
      el.chefTimerBox.style.display = "block";
    } else {
      el.chefTimerBox.style.display = "none";
    }

    el.chefPrevStepBtn.disabled = state.chefStepIndex === 0;
    el.chefPrevStepBtn.style.opacity = state.chefStepIndex === 0 ? "0.4" : "1";

    if (state.chefStepIndex === totalSteps - 1) {
      el.chefNextStepBtn.textContent = "Complete Dinner";
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
      el.chefTimerStartBtn.textContent = "Resume";
    } else {
      getAudioContext();
      state.chefTimerRunning = true;
      el.chefTimerStartBtn.textContent = "Pause";

      state.chefTimerInterval = setInterval(() => {
        state.chefTimerSeconds--;
        updateTimerDisplay(state.chefTimerSeconds);

        if (state.chefTimerSeconds <= 0) {
          clearInterval(state.chefTimerInterval);
          state.chefTimerRunning = false;
          el.chefTimerStartBtn.textContent = "Timer Complete";
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
    el.chefTimerStartBtn.textContent = "Start Timer";
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

    let text = "PANTRYCHEF SHOPPING LIST\n========================\n\n";
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
        el.copyShopListBtn.textContent = "Copied to Clipboard";
        setTimeout(() => el.copyShopListBtn.textContent = "Copy to Clipboard", 2000);
      });
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      el.copyShopListBtn.textContent = "Copied to Clipboard";
      setTimeout(() => el.copyShopListBtn.textContent = "Copy to Clipboard", 2000);
    }
  }


  // --- AI CHEF API INTEGRATION (Gemini 2.5 Flash) ---
  function getAiApiKey() { return localStorage.getItem("pantrychef:ai_key") || atob("QVEuQWI4Uk42S2tKSE9vZmlGWU5zY19pQXJTM0tXN3AxMklIRWhpSG9vYUZ6NVVkOGhQMnc="); }
  const AI_STORAGE_KEY = "pantrychef:ai_recipes";

  function loadAiRecipes() {
    try {
      const saved = localStorage.getItem(AI_STORAGE_KEY);
      if (saved) {
        const recipes = JSON.parse(saved);
        if (Array.isArray(recipes)) {
          recipes.forEach(r => {
            if (!window.PANTRY_RECIPES.some(existing => existing.id === r.id)) {
              window.PANTRY_RECIPES.unshift(r);
            }
          });
        }
      }
    } catch (e) {
      console.warn("Could not load AI recipes from storage", e);
    }
  }

  function saveAiRecipe(recipe) {
    try {
      let saved = [];
      const existing = localStorage.getItem(AI_STORAGE_KEY);
      if (existing) saved = JSON.parse(existing) || [];
      saved.unshift(recipe);
      localStorage.setItem(AI_STORAGE_KEY, JSON.stringify(saved));
    } catch (e) {
      console.warn("Could not save AI recipe", e);
    }
  }

  function openAiChefModal() {
    renderAiSelectedPills();
    const modal = document.getElementById("aiChefModal");
    if (modal) {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      const statusBox = document.getElementById("aiChefStatusBox");
      if (statusBox) statusBox.style.display = "none";
      const btn = document.getElementById("generateAiRecipeBtn");
      if (btn) btn.disabled = false;
    }
  }

  function closeAiChefModal() {
    const modal = document.getElementById("aiChefModal");
    if (modal) {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    }
  }

  function renderAiSelectedPills() {
    const container = document.getElementById("aiSelectedPills");
    if (!container) return;
    container.innerHTML = "";
    if (state.pantry.length === 0) {
      container.innerHTML = "<span style=\"font-size:0.85rem; color:var(--ink-muted);\">No ingredients selected yet. You can still ask for any custom recipe!</span>";
      return;
    }
    state.pantry.forEach(id => {
      const ing = getIngredientById(id);
      const pill = document.createElement("span");
      pill.className = "tray-pill";
      pill.textContent = ing.label;
      container.appendChild(pill);
    });
  }


  // --- v0.5 AI SCHEMA VALIDATOR & FUZZY INGREDIENT RESOLVER ---

  function normalizeStr(str) {
    if (!str) return "";
    return String(str).toLowerCase().replace(/[^a-z0-9]/g, "");
  }

  function resolveIngredientToPantry(rawId, rawNote) {
    if (!rawId) rawId = "custom-ingredient";
    const normRaw = normalizeStr(rawId);

    // 1. Direct ID match
    const exact = window.PANTRY_INGREDIENTS.find(item => item.id === rawId);
    if (exact) return exact.id;

    // 2. Normalized ID match
    const normIdMatch = window.PANTRY_INGREDIENTS.find(item => normalizeStr(item.id) === normRaw);
    if (normIdMatch) return normIdMatch.id;

    // 3. Normalized Label match
    const normLabelMatch = window.PANTRY_INGREDIENTS.find(item => normalizeStr(item.label) === normRaw);
    if (normLabelMatch) return normLabelMatch.id;

    // 4. Alias match
    for (const item of window.PANTRY_INGREDIENTS) {
      if (item.aliases && item.aliases.some(alias => normalizeStr(alias) === normRaw)) {
        return item.id;
      }
    }

    // 5. Partial Substring match (e.g. "boneless-skinless-chicken" contains "chicken")
    for (const item of window.PANTRY_INGREDIENTS) {
      const itemNorm = normalizeStr(item.id);
      if (normRaw.includes(itemNorm) || (item.aliases && item.aliases.some(a => normRaw.includes(normalizeStr(a))))) {
        return item.id;
      }
    }

    // 6. Check note substring if available
    if (rawNote) {
      const normNote = normalizeStr(rawNote);
      for (const item of window.PANTRY_INGREDIENTS) {
        if (normNote.includes(normalizeStr(item.id)) || (item.aliases && item.aliases.some(a => normNote.includes(normalizeStr(a))))) {
          return item.id;
        }
      }
    }

    // 7. Dynamic Fallback: Register dynamically so UI / Chef Mode never crashes
    const fallbackId = "custom-" + rawId.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const cleanLabel = rawId.replace(/[-_]/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    
    if (!window.PANTRY_INGREDIENTS.some(i => i.id === fallbackId)) {
      window.PANTRY_INGREDIENTS.push({
        id: fallbackId,
        label: cleanLabel,
        category: "staples",
        isGeneric: true,
        isDynamic: true
      });
    }

    return fallbackId;
  }

  function validateAndSanitizeAiRecipe(raw) {
    if (!raw || typeof raw !== "object") {
      throw new Error("AI returned an invalid response structure.");
    }

    const sanitizedId = "ai-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
    const sanitizedTitle = String(raw.title || "Custom AI Chef Special").trim();
    const sanitizedSubtitle = String(raw.subtitle || "A custom weeknight meal crafted from your pantry.").trim();
    
    // Validate moods
    const validMoods = ["15-minute", "one-pot", "high-protein", "budget", "clean-fridge"];
    const moods = Array.isArray(raw.moods) ? raw.moods.filter(m => validMoods.includes(m)) : ["one-pot"];
    if (moods.length === 0) moods.push("15-minute");

    const totalTimeMinutes = parseInt(raw.totalTimeMinutes, 10) || 15;
    const activeTimeMinutes = parseInt(raw.activeTimeMinutes, 10) || Math.min(10, totalTimeMinutes);
    const baseServings = parseInt(raw.baseServings, 10) || 2;
    const equipment = Array.isArray(raw.equipment) && raw.equipment.length > 0 ? raw.equipment.map(String) : ["Skillet or Pot"];

    // Validate and sanitize ingredients with fuzzy resolver
    const ingredients = [];
    const validRoles = ["core", "flavor", "staple", "optional"];

    if (Array.isArray(raw.ingredients)) {
      raw.ingredients.forEach(ing => {
        if (!ing) return;
        const resolvedId = resolveIngredientToPantry(ing.ingredientId || ing.name || ing.label, ing.note);
        const role = validRoles.includes(ing.role) ? ing.role : "core";
        const qty = typeof ing.qty === "number" && !isNaN(ing.qty) ? ing.qty : null;
        const unit = ing.unit ? String(ing.unit).trim() : (qty === null ? "to taste" : "");
        const note = ing.note ? String(ing.note).trim() : "";

        ingredients.push({
          ingredientId: resolvedId,
          qty: qty,
          unit: unit,
          role: role,
          note: note
        });
      });
    }

    if (ingredients.length === 0) {
      throw new Error("AI recipe contains no valid ingredients.");
    }

    // Validate steps and timers
    const steps = [];
    if (Array.isArray(raw.steps)) {
      raw.steps.forEach((step, idx) => {
        if (!step) return;
        const stepId = step.id || "step-" + (idx + 1);
        const title = step.title ? String(step.title).trim() : "Step " + (idx + 1);
        const text = String(step.text || "").trim();
        if (!text) return;

        let timer = null;
        if (step.timer && typeof step.timer === "object") {
          const seconds = parseInt(step.timer.seconds, 10);
          if (seconds > 0) {
            timer = {
              label: step.timer.label ? String(step.timer.label).trim() : "Timer",
              seconds: seconds,
              cue: step.timer.cue ? String(step.timer.cue).trim() : "complete"
            };
          }
        }

        steps.push({
          id: stepId,
          title: title,
          text: text,
          timer: timer
        });
      });
    }

    if (steps.length === 0) {
      steps.push({
        id: "step-1",
        title: "Cook & Assemble",
        text: "Cook ingredients until heated through and serve hot.",
        timer: null
      });
    }

    return {
      id: sanitizedId,
      title: sanitizedTitle,
      subtitle: sanitizedSubtitle,
      moods: moods,
      totalTimeMinutes: totalTimeMinutes,
      activeTimeMinutes: activeTimeMinutes,
      baseServings: baseServings,
      equipment: equipment,
      ingredients: ingredients,
      steps: steps,
      aiGenerated: true
    };
  }

  // --- v0.5 BACKUP, EXPORT & IMPORT UTILITIES ---

  function exportAiRecipes() {
    try {
      const saved = localStorage.getItem(AI_STORAGE_KEY);
      const recipes = saved ? JSON.parse(saved) : [];
      if (recipes.length === 0) {
        alert("No custom AI recipes found to export.");
        return;
      }

      const blob = new Blob([JSON.stringify(recipes, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "pantrychef-ai-recipes-backup.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      const statusEl = document.getElementById("aiStorageStatus");
      if (statusEl) {
        statusEl.textContent = "Exported " + recipes.length + " recipes to backup file!";
        setTimeout(() => statusEl.textContent = "", 3500);
      }
    } catch (e) {
      console.error("Export error:", e);
      alert("Failed to export recipes: " + e.message);
    }
  }

  function handleImportAiRecipes(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const imported = JSON.parse(e.target.result);
        if (!Array.isArray(imported)) throw new Error("File must contain a JSON array of recipes.");

        let validCount = 0;
        let existing = [];
        const saved = localStorage.getItem(AI_STORAGE_KEY);
        if (saved) existing = JSON.parse(saved) || [];

        imported.forEach(raw => {
          try {
            const sanitized = validateAndSanitizeAiRecipe(raw);
            if (!existing.some(r => r.title === sanitized.title)) {
              existing.unshift(sanitized);
              window.PANTRY_RECIPES.unshift(sanitized);
              validCount++;
            }
          } catch (err) {
            console.warn("Skipping invalid imported recipe:", err);
          }
        });

        localStorage.setItem(AI_STORAGE_KEY, JSON.stringify(existing));
        renderRecipesGrid();

        const statusEl = document.getElementById("aiStorageStatus");
        if (statusEl) {
          statusEl.textContent = "Imported " + validCount + " new custom recipes!";
          setTimeout(() => statusEl.textContent = "", 3500);
        }
        event.target.value = "";
      } catch (err) {
        console.error("Import error:", err);
        alert("Failed to import recipes: " + err.message);
      }
    };
    reader.readAsText(file);
  }

  function clearAiRecipesHistory() {
    if (confirm("Are you sure you want to clear your AI-generated recipe history? Your selected pantry items will remain untouched.")) {
      localStorage.removeItem(AI_STORAGE_KEY);
      window.PANTRY_RECIPES = window.PANTRY_RECIPES.filter(r => !r.aiGenerated);
      renderRecipesGrid();

      const statusEl = document.getElementById("aiStorageStatus");
      if (statusEl) {
        statusEl.textContent = "AI recipe history cleared";
        setTimeout(() => statusEl.textContent = "", 3500);
      }
    }
  }

  async function generateCustomAiRecipe() {
    const customPromptInput = document.getElementById("aiChefCustomPrompt");
    const statusBox = document.getElementById("aiChefStatusBox");
    const statusText = document.getElementById("aiChefStatusText");
    const generateBtn = document.getElementById("generateAiRecipeBtn");

    const pantryLabels = state.pantry.map(id => getIngredientById(id).label);
    const userNotes = customPromptInput ? customPromptInput.value.trim() : "";

    if (statusBox) statusBox.style.display = "block";
    if (statusText) statusText.textContent = "AI Chef is crafting your custom recipe...";
    if (generateBtn) generateBtn.disabled = true;

    const systemPrompt = `You are a world-class executive chef. Invent a practical, delicious weeknight dinner recipe using primarily these pantry ingredients: ${pantryLabels.join(", ") || "common kitchen ingredients"}.
${userNotes ? "Specific user request/style: " + userNotes : ""}
Always include simple steps with precise timing cues.
Output strictly valid JSON matching this exact structure with no markdown backticks:
{
  "id": "ai-recipe-${Date.now()}",
  "title": "Appetizing Recipe Title",
  "subtitle": "Short 1-sentence mouthwatering description",
  "moods": ["15-minute", "one-pot", "high-protein"],
  "totalTimeMinutes": 15,
  "activeTimeMinutes": 10,
  "baseServings": 2,
  "equipment": ["Skillet"],
  "ingredients": [
    { "ingredientId": "chicken-breast", "qty": 350, "unit": "g", "role": "core", "note": "diced bite-size" }
  ],
  "steps": [
    { "id": "step-1", "title": "Sear", "text": "Step instructions...", "timer": { "label": "Sear", "seconds": 240, "cue": "golden brown" } }
  ]
}`;

    try {
      // Automatic Multi-Tier Fallback Cascade: Gemini 3.7 Flash -> Gemini 3.6 Flash -> Gemini 2.5 Flash
      const modelCascade = ["gemini-3.7-flash", "gemini-3.6-flash", "gemini-2.5-flash"];
      let rawText = null;
      let usedModel = null;
      let lastErr = null;

      for (const model of modelCascade) {
        try {
          if (statusText) statusText.textContent = "AI Chef (" + model + ") is crafting your recipe...";
          const url = "https://generativelanguage.googleapis.com/v1beta/models/" + model + ":generateContent?key=" + getAiApiKey();
          const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: systemPrompt }] }],
              generationConfig: { responseMimeType: "application/json" }
            })
          });

          if (response.ok) {
            const data = await response.json();
            if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0]) {
              rawText = data.candidates[0].content.parts[0].text;
              usedModel = model;
              break;
            }
          } else {
            console.warn("[AI Chef] " + model + " returned " + response.status + ". Falling back to next model...");
            if (response.status === 403) {
              lastErr = new Error("API Key Restricted or Referrer Mismatch (HTTP 403). Check Google Cloud HTTP Referrer settings.");
            } else if (response.status === 429) {
              lastErr = new Error("AI Quota Exceeded (HTTP 429). Please try again in a moment.");
            } else {
              lastErr = new Error(model + " returned HTTP " + response.status);
            }
          }
        } catch (mErr) {
          console.warn("[AI Chef] " + model + " failed:", mErr);
          lastErr = mErr;
        }
      }

      if (!rawText) {
        throw lastErr || new Error("All AI models currently unavailable. Please try again.");
      }

      // v0.5 AI Schema Validator & Sanitization Layer
      const rawJson = JSON.parse(rawText);
      const sanitizedRecipe = validateAndSanitizeAiRecipe(rawJson);
      console.log("[AI Chef] Sanitized and validated recipe generated with:", usedModel, sanitizedRecipe);

      window.PANTRY_RECIPES.unshift(sanitizedRecipe);
      saveAiRecipe(sanitizedRecipe);

      closeAiChefModal();
      renderIngredientChips();
      renderRecipesGrid();
      openRecipeDetail(sanitizedRecipe.id);

    } catch (err) {
      console.error("AI Generation Error:", err);
      if (statusText) {
        statusText.innerHTML = "<span style=\"color:var(--tomato); font-weight:700;\">" + (err.message || "Could not generate recipe") + "</span>";
      }
      if (generateBtn) generateBtn.disabled = false;
    }
  }



  // --- CAROUSEL LOGIC ---
  let currentSlide = 0;
  const totalSlides = 3;

  function updateCarousel() {
    el.carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    el.carouselDots.forEach((dot, index) => {
      dot.style.opacity = index === currentSlide ? "1" : "0.3";
    });
  }

  el.openTourBtn.addEventListener("click", () => {
    el.tourModal.classList.add("open");
    currentSlide = 0;
    updateCarousel();
  });

  el.closeTourBtn.addEventListener("click", () => {
    el.tourModal.classList.remove("open");
  });

  el.carouselPrev.addEventListener("click", () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
    updateCarousel();
  });

  el.carouselNext.addEventListener("click", () => {
    currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
    updateCarousel();
  });

  // --- SETTINGS MODAL ---
  function openSettingsModal() {
    const modal = document.getElementById("settingsModal");
    if (modal) {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      const keyInput = document.getElementById("customApiKeyInput");
      const savedKey = localStorage.getItem("pantrychef:ai_key");
      if (keyInput && savedKey) keyInput.value = savedKey;
      const statusEl = document.getElementById("settingsStorageStatus");
      if (statusEl) statusEl.textContent = "";
      const apiStatus = document.getElementById("apiKeyStatus");
      if (apiStatus) apiStatus.textContent = "";
    }
  }

  function closeSettingsModal() {
    const modal = document.getElementById("settingsModal");
    if (modal) {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    }
  }

  function saveCustomApiKey() {
    const input = document.getElementById("customApiKeyInput");
    const statusEl = document.getElementById("apiKeyStatus");
    if (!input) return;
    const val = input.value.trim();
    if (val) {
      localStorage.setItem("pantrychef:ai_key", val);
      if (statusEl) statusEl.textContent = "Custom API key saved.";
    } else {
      localStorage.removeItem("pantrychef:ai_key");
      if (statusEl) statusEl.textContent = "Reset to default integrated key.";
    }
    setTimeout(() => { if (statusEl) statusEl.textContent = ""; }, 3500);
  }


  // --- VIEW SWITCHER (SPA Architecture) ---
  let currentView = "solver";
  let activeAiStyles = [];

  function switchView(viewName) {
    currentView = viewName;
    const solverView = document.getElementById("dinnerSolverView");
    const aiChefView = document.getElementById("aiChefView");
    const navSolverBtn = document.getElementById("navSolverBtn");
    const navAiChefBtn = document.getElementById("navAiChefBtn");

    if (viewName === "ai-chef") {
      if (solverView) solverView.style.display = "none";
      if (aiChefView) aiChefView.style.display = "block";
      if (navSolverBtn) navSolverBtn.classList.remove("active");
      if (navAiChefBtn) navAiChefBtn.classList.add("active");
      renderAiPagePills();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      if (solverView) solverView.style.display = "block";
      if (aiChefView) aiChefView.style.display = "none";
      if (navSolverBtn) navSolverBtn.classList.add("active");
      if (navAiChefBtn) navAiChefBtn.classList.remove("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function renderAiPagePills() {
    const container = document.getElementById("aiPageSelectedPills");
    if (!container) return;
    container.innerHTML = "";
    if (state.pantry.length === 0) {
      container.innerHTML = "<span style=\"font-size:0.85rem; color:var(--ink-muted);\">No ingredients selected yet. You can still ask the AI to invent any dinner!</span>";
      return;
    }
    state.pantry.forEach(id => {
      const ing = getIngredientById(id);
      const pill = document.createElement("span");
      pill.className = "tray-pill";
      pill.textContent = ing.label;
      container.appendChild(pill);
    });
  }

  function renderGeneratedAiRecipeCard(recipe) {
    const placeholder = document.getElementById("aiResultPlaceholder");
    const content = document.getElementById("aiResultContent");
    if (!content) return;

    if (placeholder) placeholder.style.display = "none";
    content.style.display = "block";

    let ingredientsHtml = "";
    recipe.ingredients.forEach(ing => {
      const ingData = getIngredientById(ing.ingredientId);
      const name = ingData ? ingData.label : ing.ingredientId.replace(/-/g, " ");
      const qtyStr = ing.qty ? ing.qty + " " + ing.unit : (ing.unit || "");
      const roleBadge = ing.role === "core" ? " [Core]" : (ing.role === "optional" ? " [Optional]" : "");
      ingredientsHtml += `<li class="ingredient-item have"><span class="ing-qty">${qtyStr}</span><span class="ing-name">${name} ${ing.note ? "(" + ing.note + ")" : ""}${roleBadge}</span></li>`;
    });

    let stepsHtml = "";
    recipe.steps.forEach((step, idx) => {
      const timerCue = step.timer ? ("<div class='step-timer-cue'>Timer: " + Math.floor(step.timer.seconds / 60) + "m " + (step.timer.seconds % 60) + "s (" + step.timer.cue + ")</div>") : "";
      stepsHtml += `<div class="step-row"><div class="step-num">${idx + 1}</div><div class="step-content"><div class="step-text"><strong>${step.title ? step.title + ": " : ""}</strong>${step.text}</div>${timerCue}</div></div>`;
    });

    content.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:12px;">
        <span class="match-badge ai-badge">AI Custom Dinner</span>
        <span class="recipe-time-badge">${recipe.totalTimeMinutes} mins</span>
      </div>
      <h2 style="font-family:Fraunces,serif; font-size:1.6rem; margin-bottom:6px; color:var(--ink);">${recipe.title}</h2>
      <p style="font-size:0.95rem; color:var(--ink-soft); margin-bottom:18px;">${recipe.subtitle}</p>

      <div style="margin-bottom:20px;">
        <h4 style="font-size:0.9rem; font-weight:700; color:var(--ink); margin-bottom:8px;">Ingredients:</h4>
        <ul class="ingredient-list" style="margin-bottom:16px;">${ingredientsHtml}</ul>
      </div>

      <div style="margin-bottom:24px;">
        <h4 style="font-size:0.9rem; font-weight:700; color:var(--ink); margin-bottom:8px;">Method:</h4>
        <div class="steps-container">${stepsHtml}</div>
      </div>

      <div style="display:flex; gap:10px; flex-wrap:wrap;">
        <button class="btn btn-primary start-ai-chef-btn" data-id="${recipe.id}">Start Chef Mode</button>
        <button class="btn btn-secondary view-in-solver-btn">Back to Dinner Solver</button>
      </div>
    `;

    content.querySelector(".start-ai-chef-btn").addEventListener("click", () => {
      openChefMode(recipe.id);
    });

    content.querySelector(".view-in-solver-btn").addEventListener("click", () => {
      switchView("solver");
      renderRecipesGrid();
    });
  }

  async function generateFromAiPage() {
    const promptInput = document.getElementById("aiPageCustomPrompt");
    const statusBox = document.getElementById("aiPageStatusBox");
    const statusText = document.getElementById("aiPageStatusText");
    const genBtn = document.getElementById("aiPageGenerateBtn");

    const pantryLabels = state.pantry.map(id => getIngredientById(id).label);
    const userNotes = promptInput ? promptInput.value.trim() : "";
    const styleNotes = activeAiStyles.join(", ");

    if (statusBox) statusBox.style.display = "block";
    if (statusText) statusText.textContent = "AI Chef is crafting your custom dinner...";
    if (genBtn) genBtn.disabled = true;

    const combinedRequest = [userNotes, styleNotes ? "Cooking style/mood: " + styleNotes : ""].filter(Boolean).join(". ");

    const systemPrompt = `You are a world-class executive chef. Invent a practical, delicious weeknight dinner recipe using primarily these pantry ingredients: ${pantryLabels.join(", ") || "common kitchen ingredients"}.
${combinedRequest ? "Specific user request/style: " + combinedRequest : ""}
Always include simple steps with precise timing cues.
Output strictly valid JSON matching this exact structure with no markdown backticks:
{
  "id": "ai-recipe-${Date.now()}",
  "title": "Appetizing Recipe Title",
  "subtitle": "Short 1-sentence mouthwatering description",
  "moods": ["15-minute", "one-pot", "high-protein"],
  "totalTimeMinutes": 15,
  "activeTimeMinutes": 10,
  "baseServings": 2,
  "equipment": ["Skillet"],
  "ingredients": [
    { "ingredientId": "chicken-breast", "qty": 350, "unit": "g", "role": "core", "note": "diced bite-size" }
  ],
  "steps": [
    { "id": "step-1", "title": "Sear", "text": "Step instructions...", "timer": { "label": "Sear", "seconds": 240, "cue": "golden brown" } }
  ]
}`;

    try {
      const modelCascade = ["gemini-3.7-flash", "gemini-3.6-flash", "gemini-2.5-flash"];
      let rawText = null;
      let usedModel = null;
      let lastErr = null;

      for (const model of modelCascade) {
        try {
          if (statusText) statusText.textContent = "AI Chef (" + model + ") is crafting your recipe...";
          const url = "https://generativelanguage.googleapis.com/v1beta/models/" + model + ":generateContent?key=" + getAiApiKey();
          const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: systemPrompt }] }],
              generationConfig: { responseMimeType: "application/json" }
            })
          });

          if (response.ok) {
            const data = await response.json();
            if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0]) {
              rawText = data.candidates[0].content.parts[0].text;
              usedModel = model;
              break;
            }
          } else {
            console.warn("[AI Chef] " + model + " returned " + response.status);
            if (response.status === 403) {
              lastErr = new Error("API Key Restricted or Referrer Mismatch (HTTP 403). Check Google Cloud HTTP Referrer settings.");
            } else if (response.status === 429) {
              lastErr = new Error("AI Quota Exceeded (HTTP 429). Please try again in a moment.");
            } else {
              lastErr = new Error(model + " returned HTTP " + response.status);
            }
          }
        } catch (mErr) {
          console.warn("[AI Chef] " + model + " failed:", mErr);
          lastErr = mErr;
        }
      }

      if (!rawText) {
        throw lastErr || new Error("All AI models currently unavailable. Please try again.");
      }

      const rawJson = JSON.parse(rawText);
      const sanitizedRecipe = validateAndSanitizeAiRecipe(rawJson);
      console.log("[AI Chef] Generated on Dedicated Page with:", usedModel, sanitizedRecipe);

      window.PANTRY_RECIPES.unshift(sanitizedRecipe);
      saveAiRecipe(sanitizedRecipe);

      if (statusBox) statusBox.style.display = "none";
      if (genBtn) genBtn.disabled = false;

      renderGeneratedAiRecipeCard(sanitizedRecipe);

    } catch (err) {
      console.error("AI Generation Error:", err);
      if (statusText) {
        statusText.innerHTML = "<span style=\"color:var(--tomato); font-weight:700;\">" + (err.message || "Could not generate recipe") + "</span>";
      }
      if (genBtn) genBtn.disabled = false;
    }
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    // View Switcher & AI Chef Page Listeners
    const openAiBtn = document.getElementById("openAiChefBtn");
    if (openAiBtn) openAiBtn.addEventListener("click", () => switchView("ai-chef"));

    const navSolverBtn = document.getElementById("navSolverBtn");
    if (navSolverBtn) navSolverBtn.addEventListener("click", () => switchView("solver"));

    const navAiChefBtn = document.getElementById("navAiChefBtn");
    if (navAiChefBtn) navAiChefBtn.addEventListener("click", () => switchView("ai-chef"));

    const brandHome = document.getElementById("brandHome");
    if (brandHome) brandHome.addEventListener("click", (e) => { e.preventDefault(); switchView("solver"); });

    const aiBackBtn = document.getElementById("aiBackToSolverBtn");
    if (aiBackBtn) aiBackBtn.addEventListener("click", () => switchView("solver"));

    const trayAiBtn = document.getElementById("trayAiChefBtn");
    if (trayAiBtn) trayAiBtn.addEventListener("click", () => switchView("ai-chef"));

    const aiPageGenBtn = document.getElementById("aiPageGenerateBtn");
    if (aiPageGenBtn) aiPageGenBtn.addEventListener("click", generateFromAiPage);

    // Style chips toggle on AI Page
    const styleChipsContainer = document.getElementById("aiStyleChips");
    if (styleChipsContainer) {
      styleChipsContainer.addEventListener("click", (e) => {
        const chip = e.target.closest(".style-chip");
        if (chip) {
          const styleVal = chip.dataset.style;
          if (activeAiStyles.includes(styleVal)) {
            activeAiStyles = activeAiStyles.filter(s => s !== styleVal);
            chip.classList.remove("active");
          } else {
            activeAiStyles.push(styleVal);
            chip.classList.add("active");
          }
        }
      });
    }

    // Settings Listeners
    const openSettingsBtn = document.getElementById("openSettingsBtn");
    if (openSettingsBtn) openSettingsBtn.addEventListener("click", openSettingsModal);

    const closeSettingsBtn = document.getElementById("closeSettingsModalBtn");
    if (closeSettingsBtn) closeSettingsBtn.addEventListener("click", closeSettingsModal);

    const closeSettingsFooterBtn = document.getElementById("closeSettingsFooterBtn");
    if (closeSettingsFooterBtn) closeSettingsFooterBtn.addEventListener("click", closeSettingsModal);

    const saveApiKeyBtn = document.getElementById("saveApiKeyBtn");
    if (saveApiKeyBtn) saveApiKeyBtn.addEventListener("click", saveCustomApiKey);

    // v0.5 Backup & Storage Listeners
    const exportBtn = document.getElementById("exportAiRecipesBtn");
    if (exportBtn) exportBtn.addEventListener("click", exportAiRecipes);

    const importInput = document.getElementById("importAiRecipesInput");
    if (importInput) importInput.addEventListener("change", handleImportAiRecipes);

    const clearAiBtn = document.getElementById("clearAiRecipesBtn");
    if (clearAiBtn) clearAiBtn.addEventListener("click", clearAiRecipesHistory);

    if (el.ingredientSearch) {
      el.ingredientSearch.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        if (el.searchClearBtn) el.searchClearBtn.style.display = state.searchQuery ? "block" : "none";
        renderIngredientChips();
      });
    }

    if (el.searchClearBtn) {
      el.searchClearBtn.addEventListener("click", () => {
        state.searchQuery = "";
        if (el.ingredientSearch) el.ingredientSearch.value = "";
        el.searchClearBtn.style.display = "none";
        renderIngredientChips();
      });
    }

    if (el.assumeBasicsToggle) {
      el.assumeBasicsToggle.checked = state.assumeBasics;
      el.assumeBasicsToggle.addEventListener("change", (e) => {
        state.assumeBasics = e.target.checked;
        saveState();
        renderRecipesGrid();
      });
    }

    if (el.categoryTabs) {
      el.categoryTabs.addEventListener("click", (e) => {
        const tab = e.target.closest(".cat-tab");
        if (tab) {
          state.currentCategory = tab.dataset.category;
          renderCategoryTabs();
          renderIngredientChips();
        }
      });
    }

    if (el.clearAllPantryBtn) {
      el.clearAllPantryBtn.addEventListener("click", () => {
        if (confirm("Clear all selected pantry ingredients?")) {
          state.pantry = [];
          saveState();
          renderIngredientChips();
          renderSelectedTray();
          renderRecipesGrid();
        }
      });
    }

    if (el.moodFiltersBar) {
      el.moodFiltersBar.addEventListener("click", (e) => {
        const chip = e.target.closest(".mood-chip");
        if (chip) {
          toggleMoodFilter(chip.dataset.mood);
        }
      });
    }

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

    if (el.closeDetailBtn) el.closeDetailBtn.addEventListener("click", closeRecipeDetail);
    if (el.detailCloseFooterBtn) el.detailCloseFooterBtn.addEventListener("click", closeRecipeDetail);
    if (el.detailStartChefBtn) {
      el.detailStartChefBtn.addEventListener("click", () => {
        if (state.selectedRecipeId) openChefMode(state.selectedRecipeId);
      });
    }
    if (el.detailAddMissingToShopBtn) {
      el.detailAddMissingToShopBtn.addEventListener("click", () => {
        if (state.selectedRecipeId) addMissingIngredientsToShopList(state.selectedRecipeId);
      });
    }

    if (el.openShoppingListBtn) {
      el.openShoppingListBtn.addEventListener("click", () => {
        renderShoppingListModal();
        if (el.shoppingListModal) {
          el.shoppingListModal.classList.add("open");
          el.shoppingListModal.setAttribute("aria-hidden", "false");
        }
      });
    }
    if (el.closeShopModalBtn) {
      el.closeShopModalBtn.addEventListener("click", () => {
        if (el.shoppingListModal) {
          el.shoppingListModal.classList.remove("open");
          el.shoppingListModal.setAttribute("aria-hidden", "true");
        }
      });
    }
    if (el.clearShopListBtn) {
      el.clearShopListBtn.addEventListener("click", () => {
        if (confirm("Clear the shopping list?")) {
          state.shoppingList = [];
          saveState();
          renderShoppingListBadge();
          renderShoppingListModal();
        }
      });
    }
    if (el.copyShopListBtn) el.copyShopListBtn.addEventListener("click", copyShoppingListToClipboard);

    if (el.chefExitBtn) el.chefExitBtn.addEventListener("click", closeChefMode);
    if (el.chefPrevStepBtn) {
      el.chefPrevStepBtn.addEventListener("click", () => {
        if (state.chefStepIndex > 0) {
          state.chefStepIndex--;
          renderChefStep();
        }
      });
    }
    if (el.chefNextStepBtn) {
      el.chefNextStepBtn.addEventListener("click", () => {
        if (state.chefStepIndex < state.chefRecipe.steps.length - 1) {
          state.chefStepIndex++;
          renderChefStep();
        } else {
          alert("Dinner complete! Enjoy your meal.");
          closeChefMode();
        }
      });
    }
    if (el.chefTimerStartBtn) el.chefTimerStartBtn.addEventListener("click", toggleChefTimer);
    if (el.chefTimerResetBtn) el.chefTimerResetBtn.addEventListener("click", resetChefTimer);

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeRecipeDetail();
        if (el.shoppingListModal) el.shoppingListModal.classList.remove("open");
        closeSettingsModal();
        if (state.chefActive) closeChefMode();
      }
    });
  }


  // --- SERVICE WORKER REGISTRATION ---
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js")
        .then(reg => console.log("[PantryChef] Service Worker registered:", reg.scope))
        .catch(err => console.warn("[PantryChef] SW registration failed:", err));
    });
  }

  function init() {
    initElements();
    loadState();
    loadAiRecipes();
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
