/**
 * PantryChef Smart Ingredient Substitutions Database
 * First-class kitchen hacks for missing ingredients
 */
window.PANTRY_SUBSTITUTIONS = [
  {
    forIngredientId: "buttermilk",
    label: "Buttermilk",
    options: [
      {
        id: "buttermilk-milk-vinegar",
        label: "Milk + Vinegar",
        ratio: "1 cup milk + 1 tbsp white vinegar (or lemon juice)",
        bestFor: "Marinades, pancakes, baking, tenders",
        restTimeMinutes: 5,
        components: [
          { ingredientId: "milk", qty: 1, unit: "cup" },
          { ingredientId: "white-vinegar", qty: 1, unit: "tbsp" }
        ],
        note: "Stir together and let sit 5 minutes to curdle slightly."
      },
      {
        id: "buttermilk-yogurt-milk",
        label: "Greek Yogurt + Milk",
        ratio: "3/4 cup Greek yogurt + 1/4 cup milk",
        bestFor: "Marinades, dressings, and baking",
        components: [
          { ingredientId: "greek-yogurt", qty: 0.75, unit: "cup" },
          { ingredientId: "milk", qty: 0.25, unit: "cup" }
        ],
        note: "Whisk until smooth and liquid."
      }
    ]
  },
  {
    forIngredientId: "heavy-cream",
    label: "Heavy Cream",
    options: [
      {
        id: "heavy-cream-milk-butter",
        label: "Milk + Melted Butter",
        ratio: "3/4 cup milk + 1/4 cup melted butter",
        bestFor: "Creamy pan sauces, soups, casseroles (not for whipping)",
        components: [
          { ingredientId: "milk", qty: 0.75, unit: "cup" },
          { ingredientId: "butter", qty: 0.25, unit: "cup" }
        ],
        note: "Whisk melted butter vigorously into warm milk."
      },
      {
        id: "heavy-cream-yogurt-milk",
        label: "Greek Yogurt + Milk",
        ratio: "1/2 cup Greek yogurt + 1/2 cup milk",
        bestFor: "Curries, pasta sauces, stroganoff",
        components: [
          { ingredientId: "greek-yogurt", qty: 0.5, unit: "cup" },
          { ingredientId: "milk", qty: 0.5, unit: "cup" }
        ],
        note: "Stir in at low heat at the very end to prevent curdling."
      },
      {
        id: "heavy-cream-sour-cream",
        label: "Sour Cream / Cream Cheese",
        ratio: "Equal amount thinned with a splash of milk/water",
        bestFor: "Creamy pasta sauces, stroganoff, skillet pan sauces",
        components: [
          { ingredientId: "sour-cream", qty: 1, unit: "cup" }
        ],
        note: "Stir in gently off direct heat."
      }
    ]
  },
  {
    forIngredientId: "sour-cream",
    label: "Sour Cream",
    options: [
      {
        id: "sour-cream-greek-yogurt",
        label: "Plain Greek Yogurt",
        ratio: "Use 1:1 equal amount",
        bestFor: "Tacos, bowls, dips, dollops, creamy sauces",
        components: [
          { ingredientId: "greek-yogurt", qty: 1, unit: "cup" }
        ],
        note: "Direct 1:1 drop-in replacement with identical texture."
      },
      {
        id: "sour-cream-yogurt-lemon",
        label: "Yogurt + Lemon Juice",
        ratio: "1 cup yogurt + 1 tsp lemon juice",
        bestFor: "Dips and dollops needing bright tang",
        components: [
          { ingredientId: "greek-yogurt", qty: 1, unit: "cup" },
          { ingredientId: "lemon", qty: 1, unit: "tsp" }
        ],
        note: "Whisk lemon juice into yogurt for added tang."
      }
    ]
  },
  {
    forIngredientId: "white-wine",
    label: "White Wine (Cooking)",
    options: [
      {
        id: "white-wine-broth-vinegar",
        label: "Chicken Broth + Vinegar",
        ratio: "1 cup chicken broth + 1 tsp white vinegar (or lemon juice)",
        bestFor: "Deglazing pans, risottos, pasta sauces, skillet chicken",
        components: [
          { ingredientId: "chicken-broth", qty: 1, unit: "cup" },
          { ingredientId: "white-vinegar", qty: 1, unit: "tsp" }
        ],
        note: "Provides depth and acidity for deglazing browned pan bits."
      },
      {
        id: "white-wine-water-lemon",
        label: "Water + Lemon Juice",
        ratio: "1 cup water + 1 tbsp lemon juice",
        bestFor: "Light pan sauces and seafood deglazing",
        components: [
          { ingredientId: "lemon", qty: 1, unit: "tbsp" }
        ],
        note: "Bright, clean, non-alcoholic acidity."
      }
    ]
  },
  {
    forIngredientId: "red-wine",
    label: "Red Wine",
    options: [
      {
        id: "red-wine-broth-vinegar",
        label: "Beef Broth + Red Wine Vinegar",
        ratio: "1 cup beef broth + 1 tbsp red wine vinegar",
        bestFor: "Beef stews, rich pan sauces, bolognese",
        components: [
          { ingredientId: "beef-broth", qty: 1, unit: "cup" },
          { ingredientId: "red-wine-vinegar", qty: 1, unit: "tbsp" }
        ],
        note: "Simmer to reduce for rich restaurant-depth flavor."
      }
    ]
  },
  {
    forIngredientId: "chicken-broth",
    label: "Chicken Broth",
    options: [
      {
        id: "chicken-broth-water-butter",
        label: "Water + Butter + Seasoning",
        ratio: "1 cup warm water + 1 tbsp butter + pinch salt/garlic powder",
        bestFor: "Rice dishes, pan sauces, and quick skillets",
        components: [
          { ingredientId: "butter", qty: 1, unit: "tbsp" },
          { ingredientId: "salt", qty: 0.5, unit: "tsp" }
        ],
        note: "Adds richness and savory base liquid without pre-made stock."
      },
      {
        id: "chicken-broth-veggie-broth",
        label: "Vegetable Broth / Stock",
        ratio: "Use 1:1 equal amount",
        bestFor: "Any soup, sauce, or grain cooking",
        components: [
          { ingredientId: "vegetable-broth", qty: 1, unit: "cup" }
        ],
        note: "Direct 1:1 swap."
      }
    ]
  },
  {
    forIngredientId: "butter",
    label: "Butter",
    options: [
      {
        id: "butter-olive-oil",
        label: "Olive Oil / Cooking Oil",
        ratio: "3/4 tbsp olive oil for every 1 tbsp butter",
        bestFor: "Sautéing, pan searing, and pasta tossing",
        components: [
          { ingredientId: "olive-oil", qty: 0.75, unit: "tbsp" }
        ],
        note: "Healthy fat swap for cooking and finishing."
      }
    ]
  },
  {
    forIngredientId: "breadcrumbs",
    label: "Breadcrumbs",
    options: [
      {
        id: "breadcrumbs-toasted-bread",
        label: "Toasted Bread Slices (Crushed)",
        ratio: "1 slice dry toasted bread crushed finely",
        bestFor: "Meatballs, binding, and crispy crispy skillet toppings",
        components: [
          { ingredientId: "bread", qty: 1, unit: "slice" }
        ],
        note: "Toast bread well and crush with a rolling pin or fork."
      },
      {
        id: "breadcrumbs-crushed-oats",
        label: "Crushed Rolled Oats",
        ratio: "Equal amount crushed oats",
        bestFor: "Meatloaf, burger binding, and crispy coatings",
        components: [
          { ingredientId: "oats", qty: 1, unit: "cup" }
        ],
        note: "Pulse oats in a blender or chop with a knife."
      }
    ]
  },
  {
    forIngredientId: "parmesan",
    label: "Parmesan Cheese",
    options: [
      {
        id: "parmesan-cheddar-feta",
        label: "Grated Cheddar or Crumbled Feta",
        ratio: "Use equal amount",
        bestFor: "Pasta toppings, salads, and creamy sauces",
        components: [
          { ingredientId: "cheese", qty: 1, unit: "cup" }
        ],
        note: "Gives salty savory umami punch."
      }
    ]
  }
];
