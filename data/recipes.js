/**
 * PantryChef Curated Starter Recipes
 * Complete recipe schema with timers, scalable quantities, equipment, and mood tags
 */
window.PANTRY_RECIPES = [
  {
    id: "garlic-butter-chicken-rice-skillet",
    title: "Garlic Butter Chicken Rice Skillet",
    subtitle: "Golden seared chicken tossed with fragrant garlic butter, tender rice, and wilted greens.",
    moods: ["15-minute", "one-pot", "high-protein", "budget"],
    totalTimeMinutes: 15,
    activeTimeMinutes: 15,
    baseServings: 2,
    equipment: ["Large skillet", "Wooden spoon"],
    ingredients: [
      {
        ingredientId: "chicken-thighs",
        qty: 350,
        unit: "g",
        note: "cut into bite-size pieces",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "olive-oil",
        qty: 1,
        unit: "tbsp",
        note: "for searing",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "garlic",
        qty: 3,
        unit: "clove",
        note: "minced",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "butter",
        qty: 2,
        unit: "tbsp",
        note: "rich finishing butter",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "chicken-broth",
        qty: 60,
        unit: "ml",
        note: "or water + pinch salt",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "rice",
        qty: 300,
        unit: "g",
        note: "cooked or quick microwave rice",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "spinach",
        qty: 60,
        unit: "g",
        note: "or chopped greens",
        optional: true,
        scalable: true
      },
      {
        ingredientId: "paprika",
        qty: 1,
        unit: "tsp",
        note: "sweet or smoked",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "salt",
        qty: null,
        unit: "to taste",
        note: "",
        optional: false,
        scalable: false
      },
      {
        ingredientId: "black-pepper",
        qty: null,
        unit: "to taste",
        note: "",
        optional: false,
        scalable: false
      }
    ],
    steps: [
      {
        id: "step-1",
        title: "Season Chicken",
        text: "Pat chicken pieces dry with a paper towel. Season generously on all sides with paprika, 1/2 tsp salt, and cracked black pepper.",
        timer: null,
        ingredients: ["chicken-thighs", "paprika", "salt", "black-pepper"]
      },
      {
        id: "step-2",
        title: "Sear to Golden",
        text: "Heat olive oil in your skillet over medium-high heat until shimmering. Add chicken in a single layer and sear undisturbed until deep golden crust forms.",
        timer: {
          label: "Sear Chicken",
          seconds: 240,
          cue: "flip once browned"
        },
        ingredients: ["chicken-thighs", "olive-oil"]
      },
      {
        id: "step-3",
        title: "Fragrant Garlic",
        text: "Turn down heat to medium. Drop in minced garlic, stirring constantly for 30 seconds until aromatic and sweet (do not let it burn).",
        timer: {
          label: "Sauté Garlic",
          seconds: 30,
          cue: "smells sweet & fragrant"
        },
        ingredients: ["garlic"]
      },
      {
        id: "step-4",
        title: "Pan Sauce Glaze",
        text: "Pour in chicken broth and add butter. Scrape up all delicious caramelized browned bits from the bottom of the pan with your spoon. Let bubble rapidly.",
        timer: {
          label: "Simmer Glaze",
          seconds: 60,
          cue: "glossy butter sauce"
        },
        ingredients: ["butter", "chicken-broth"]
      },
      {
        id: "step-5",
        title: "Toss Rice & Greens",
        text: "Fold in the cooked rice and spinach. Toss continuously over medium heat until rice absorbs the savory pan sauce and spinach wilts gently.",
        timer: {
          label: "Warm & Wilt",
          seconds: 120,
          cue: "spinach fully wilted"
        },
        ingredients: ["rice", "spinach"]
      },
      {
        id: "step-6",
        title: "Finish & Serve",
        text: "Taste a spoonful. Add an extra pinch of salt, pepper, or squeeze of lemon if desired. Serve steaming hot straight from the skillet!",
        timer: null,
        ingredients: ["salt", "black-pepper"]
      }
    ]
  },
  {
    id: "clean-the-fridge-fried-rice",
    title: "Clean-the-Fridge Golden Fried Rice",
    subtitle: "The ultimate 10-minute dinner for leftover rice, scrambled eggs, savory soy, and whatever veggies are in your crisper.",
    moods: ["15-minute", "one-pot", "budget", "clean-fridge"],
    totalTimeMinutes: 12,
    activeTimeMinutes: 12,
    baseServings: 2,
    equipment: ["Large skillet or wok", "Spatula"],
    ingredients: [
      {
        ingredientId: "rice",
        qty: 350,
        unit: "g",
        note: "cold leftover or quick cooked rice",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "eggs",
        qty: 3,
        unit: "whole",
        note: "lightly beaten",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "garlic",
        qty: 2,
        unit: "clove",
        note: "minced",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "onion",
        qty: 0.5,
        unit: "whole",
        note: "or 2 scallions, diced",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "soy-sauce",
        qty: 2,
        unit: "tbsp",
        note: "light or all-purpose",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "neutral-oil",
        qty: 2,
        unit: "tbsp",
        note: "or butter / olive oil",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "frozen-peas",
        qty: 80,
        unit: "g",
        note: "or corn / diced carrots / chopped greens",
        optional: true,
        scalable: true
      },
      {
        ingredientId: "black-pepper",
        qty: null,
        unit: "to taste",
        note: "",
        optional: false,
        scalable: false
      }
    ],
    steps: [
      {
        id: "step-1",
        title: "Scramble Eggs",
        text: "Heat 1 tbsp oil in skillet over high heat. Pour in beaten eggs. Swirl and scramble for 45 seconds until just softly set. Transfer eggs to a plate.",
        timer: {
          label: "Soft Scramble",
          seconds: 45,
          cue: "tender curds"
        },
        ingredients: ["eggs", "neutral-oil"]
      },
      {
        id: "step-2",
        title: "Aromatics & Veggies",
        text: "Add remaining 1 tbsp oil to pan. Toss in diced onion, garlic, and frozen peas (or whatever chopped vegetables you have). Stir-fry over high heat.",
        timer: {
          label: "Sizzle Veggies",
          seconds: 90,
          cue: "onions translucent"
        },
        ingredients: ["onion", "garlic", "frozen-peas", "neutral-oil"]
      },
      {
        id: "step-3",
        title: "Fry & Toast Rice",
        text: "Add the rice into the screaming hot pan, breaking up any clumps with your spatula. Let the rice sit against the pan for 1 minute to toast and get slightly crispy.",
        timer: {
          label: "Toast Rice",
          seconds: 120,
          cue: "rice starts popping"
        },
        ingredients: ["rice"]
      },
      {
        id: "step-4",
        title: "Season & Combine",
        text: "Drizzle soy sauce around the outer perimeter of the skillet so it caramelizes immediately. Toss the cooked scrambled eggs back into the rice, folding everything together.",
        timer: {
          label: "High Heat Toss",
          seconds: 60,
          cue: "evenly golden brown"
        },
        ingredients: ["soy-sauce", "black-pepper"]
      },
      {
        id: "step-5",
        title: "Serve",
        text: "Top with sliced scallions, a drizzle of sriracha or sesame oil if available, and serve immediately.",
        timer: null,
        ingredients: []
      }
    ]
  },
  {
    id: "one-pot-tomato-basil-pasta",
    title: "One-Pot Rich Tomato Basil Pasta",
    subtitle: "Pasta cooks directly inside a rich tomato-garlic broth, creating an ultra-silky, starchy restaurant sauce with zero colander cleanup.",
    moods: ["one-pot", "budget", "15-minute"],
    totalTimeMinutes: 16,
    activeTimeMinutes: 5,
    baseServings: 2,
    equipment: ["Wide deep pot or deep skillet", "Tongs"],
    ingredients: [
      {
        ingredientId: "pasta",
        qty: 220,
        unit: "g",
        note: "spaghetti, linguine, or penne",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "canned-tomatoes",
        qty: 400,
        unit: "g",
        note: "1 can crushed or diced tomatoes",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "garlic",
        qty: 3,
        unit: "clove",
        note: "thinly sliced",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "onion",
        qty: 0.5,
        unit: "whole",
        note: "thinly sliced",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "olive-oil",
        qty: 2,
        unit: "tbsp",
        note: "extra virgin for silky sheen",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "oregano",
        qty: 1,
        unit: "tsp",
        note: "or Italian seasoning",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "parmesan",
        qty: 30,
        unit: "g",
        note: "grated for finishing",
        optional: true,
        scalable: true
      },
      {
        ingredientId: "salt",
        qty: null,
        unit: "to taste",
        note: "about 1 tsp",
        optional: false,
        scalable: false
      }
    ],
    steps: [
      {
        id: "step-1",
        title: "Layer Ingredients",
        text: "Place dry pasta, canned tomatoes, sliced onion, garlic, oregano, olive oil, and 1 tsp salt directly into the pot. Add 450 ml (about 2 cups) water.",
        timer: null,
        ingredients: ["pasta", "canned-tomatoes", "garlic", "onion", "olive-oil", "oregano", "salt"]
      },
      {
        id: "step-2",
        title: "Bring to Rolling Boil",
        text: "Cover and bring to a rapid boil over high heat. Once boiling, remove lid and use tongs to submerge and separate pasta strands.",
        timer: {
          label: "Boil Up",
          seconds: 180,
          cue: "rolling bubbling boil"
        },
        ingredients: []
      },
      {
        id: "step-3",
        title: "Simmer & Reduce Sauce",
        text: "Cook uncovered over medium-high heat, stirring frequently so pasta does not stick. The pasta starch will thicken the tomatoes and water into a rich glossy sauce.",
        timer: {
          label: "Simmer Pasta",
          seconds: 480,
          cue: "pasta al dente, sauce thick"
        },
        ingredients: []
      },
      {
        id: "step-4",
        title: "Finish with Cheese",
        text: "Remove from heat. Fold in grated parmesan (or a splash of cream/butter) and black pepper. Let rest 1 minute to thicken and enjoy!",
        timer: {
          label: "Rest & Thicken",
          seconds: 60,
          cue: "sauce clings to pasta"
        },
        ingredients: ["parmesan", "black-pepper"]
      }
    ]
  },
  {
    id: "creamy-tomato-chickpea-curry",
    title: "15-Minute Creamy Chickpea Curry",
    subtitle: "Hearty pantry chickpeas simmered in a spiced tomato sauce finished with a swirl of rich cream or yogurt.",
    moods: ["one-pot", "budget", "high-protein", "clean-fridge", "15-minute"],
    totalTimeMinutes: 15,
    activeTimeMinutes: 15,
    baseServings: 2,
    equipment: ["Medium saucepan or skillet"],
    ingredients: [
      {
        ingredientId: "chickpeas",
        qty: 400,
        unit: "g",
        note: "1 can, drained and rinsed",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "canned-tomatoes",
        qty: 300,
        unit: "g",
        note: "or tomato sauce / passata",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "onion",
        qty: 1,
        unit: "whole",
        note: "diced",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "garlic",
        qty: 3,
        unit: "clove",
        note: "minced",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "curry-powder",
        qty: 1.5,
        unit: "tbsp",
        note: "or cumin + paprika + chili powder",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "heavy-cream",
        qty: 60,
        unit: "ml",
        note: "or Greek yogurt / coconut milk swap",
        optional: true,
        scalable: true
      },
      {
        ingredientId: "olive-oil",
        qty: 1,
        unit: "tbsp",
        note: "",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "spinach",
        qty: 50,
        unit: "g",
        note: "optional fresh greens",
        optional: true,
        scalable: true
      },
      {
        ingredientId: "salt",
        qty: null,
        unit: "to taste",
        note: "",
        optional: false,
        scalable: false
      }
    ],
    steps: [
      {
        id: "step-1",
        title: "Sizzle Spices & Onions",
        text: "Heat oil in saucepan over medium heat. Sauté diced onion for 3 minutes until soft. Add garlic and curry powder, stirring for 45 seconds until spices bloom and release fragrant oils.",
        timer: {
          label: "Bloom Spices",
          seconds: 180,
          cue: "golden & fragrant"
        },
        ingredients: ["onion", "garlic", "curry-powder", "olive-oil"]
      },
      {
        id: "step-2",
        title: "Simmer Chickpeas & Tomato",
        text: "Pour in canned tomatoes, drained chickpeas, and 1/2 tsp salt. Bring to a gentle simmer, mashing a few chickpeas with the back of your spoon to naturally thicken the curry.",
        timer: {
          label: "Simmer Curry",
          seconds: 360,
          cue: "rich bubbling stew"
        },
        ingredients: ["canned-tomatoes", "chickpeas", "salt"]
      },
      {
        id: "step-3",
        title: "Swirl Cream & Wilt Spinach",
        text: "Turn heat to low. Stir in heavy cream (or Greek yogurt swap) and spinach. Heat through for 1-2 minutes until greens wilt and curry is velvety.",
        timer: {
          label: "Finish Velvety",
          seconds: 90,
          cue: "creamy golden sauce"
        },
        ingredients: ["heavy-cream", "spinach"]
      },
      {
        id: "step-4",
        title: "Serve",
        text: "Ladle into warm bowls over fluffy rice or alongside warm toasted bread / tortillas.",
        timer: null,
        ingredients: []
      }
    ]
  },
  {
    id: "lemon-butter-salmon-green-beans",
    title: "12-Minute Lemon Butter Salmon & Crisp Beans",
    subtitle: "Pan-seared salmon with a sizzling garlic-lemon pan sauce and tender blistered green beans.",
    moods: ["15-minute", "one-pot", "high-protein"],
    totalTimeMinutes: 12,
    activeTimeMinutes: 12,
    baseServings: 2,
    equipment: ["Large skillet", "Fish spatula / tongs"],
    ingredients: [
      {
        ingredientId: "salmon",
        qty: 2,
        unit: "whole",
        note: "fillets (approx 300g)",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "green-beans",
        qty: 200,
        unit: "g",
        note: "trimmed",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "butter",
        qty: 2,
        unit: "tbsp",
        note: "",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "garlic",
        qty: 2,
        unit: "clove",
        note: "minced",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "lemon",
        qty: 0.5,
        unit: "whole",
        note: "juiced",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "olive-oil",
        qty: 1,
        unit: "tbsp",
        note: "for pan searing",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "salt",
        qty: null,
        unit: "to taste",
        note: "",
        optional: false,
        scalable: false
      },
      {
        ingredientId: "black-pepper",
        qty: null,
        unit: "to taste",
        note: "",
        optional: false,
        scalable: false
      }
    ],
    steps: [
      {
        id: "step-1",
        title: "Season Salmon",
        text: "Pat salmon fillets thoroughly dry. Season flesh side generously with salt and cracked black pepper.",
        timer: null,
        ingredients: ["salmon", "salt", "black-pepper"]
      },
      {
        id: "step-2",
        title: "Crisp Salmon & Blister Beans",
        text: "Heat olive oil in skillet over medium-high heat. Add salmon skin-side down (or presentation side first) and arrange green beans around the fillets. Sear undisturbed for 4 minutes.",
        timer: {
          label: "Pan Sear",
          seconds: 240,
          cue: "crispy base & tender beans"
        },
        ingredients: ["salmon", "green-beans", "olive-oil"]
      },
      {
        id: "step-3",
        title: "Flip & Baste with Butter",
        text: "Flip salmon fillets over. Add butter and minced garlic to the pan center. As butter foams, spoon it over the salmon and toss the beans.",
        timer: {
          label: "Butter Basting",
          seconds: 120,
          cue: "golden garlic butter"
        },
        ingredients: ["butter", "garlic"]
      },
      {
        id: "step-4",
        title: "Lemon Glaze",
        text: "Squeeze fresh lemon juice over everything. The pan will sizzle and emulsify with the butter into a glossy sauce. Plate salmon alongside bright green beans.",
        timer: {
          label: "Lemon Sizzle",
          seconds: 30,
          cue: "sauce bright and glossy"
        },
        ingredients: ["lemon"]
      }
    ]
  },
  {
    id: "crispy-black-bean-quesadillas",
    title: "Crispy Black Bean & Cheddar Melts",
    subtitle: "Toasted golden tortillas packed with seasoned black beans, gooey melted cheese, and sweet caramelized onions.",
    moods: ["15-minute", "budget", "one-pot", "clean-fridge"],
    totalTimeMinutes: 10,
    activeTimeMinutes: 10,
    baseServings: 2,
    equipment: ["Skillet or flat griddle", "Spatula"],
    ingredients: [
      {
        ingredientId: "tortillas",
        qty: 4,
        unit: "whole",
        note: "medium flour or corn tortillas",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "black-beans",
        qty: 240,
        unit: "g",
        note: "1 can, drained and lightly mashed with a fork",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "cheese",
        qty: 120,
        unit: "g",
        note: "shredded cheddar, jack, or mozzarella",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "onion",
        qty: 0.5,
        unit: "whole",
        note: "finely diced",
        optional: true,
        scalable: true
      },
      {
        ingredientId: "cumin",
        qty: 1,
        unit: "tsp",
        note: "or taco seasoning / chili powder",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "butter",
        qty: 1,
        unit: "tbsp",
        note: "or oil for crisping",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "salsa",
        qty: 2,
        unit: "tbsp",
        note: "or hot sauce for dipping",
        optional: true,
        scalable: true
      }
    ],
    steps: [
      {
        id: "step-1",
        title: "Season Bean Filling",
        text: "In a bowl, roughly mash drained black beans with a fork. Mix in cumin, diced onion, and a pinch of salt.",
        timer: null,
        ingredients: ["black-beans", "cumin", "onion"]
      },
      {
        id: "step-2",
        title: "Assemble Tortillas",
        text: "Lay tortillas flat. Spread bean mash over half of each tortilla, and top generously with shredded cheese. Fold over to create half-moons.",
        timer: null,
        ingredients: ["tortillas", "cheese"]
      },
      {
        id: "step-3",
        title: "Pan Crisp Side 1",
        text: "Melt a touch of butter or oil in skillet over medium heat. Place quesadillas in pan and press down with spatula until bottom is deeply golden and crispy.",
        timer: {
          label: "Crisp Bottom",
          seconds: 150,
          cue: "golden brown & crunchy"
        },
        ingredients: ["butter"]
      },
      {
        id: "step-4",
        title: "Flip & Melt",
        text: "Carefully flip over. Cook second side until cheese is completely melted and bubbling at edges.",
        timer: {
          label: "Melt & Brown",
          seconds: 120,
          cue: "cheese gooey & melted"
        },
        ingredients: []
      },
      {
        id: "step-5",
        title: "Slice & Serve",
        text: "Cut into wedges on a board. Serve with salsa, sour cream (or Greek yogurt swap), or hot sauce!",
        timer: null,
        ingredients: ["salsa"]
      }
    ]
  },
  {
    id: "garlic-parmesan-butter-penne",
    title: "15-Minute Garlic Parmesan Silk Penne",
    subtitle: "Tender penne coated in a velvety emulsion of pasta water, sweet garlic, golden butter, and sharp parmesan.",
    moods: ["15-minute", "one-pot", "budget"],
    totalTimeMinutes: 14,
    activeTimeMinutes: 14,
    baseServings: 2,
    equipment: ["Medium pot or skillet", "Tongs"],
    ingredients: [
      {
        ingredientId: "penne",
        qty: 200,
        unit: "g",
        note: "or spaghetti / any pasta shape",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "butter",
        qty: 3,
        unit: "tbsp",
        note: "quality butter",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "garlic",
        qty: 4,
        unit: "clove",
        note: "minced",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "parmesan",
        qty: 45,
        unit: "g",
        note: "freshly grated",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "red-pepper-flakes",
        qty: 0.5,
        unit: "tsp",
        note: "for gentle warmth",
        optional: true,
        scalable: true
      },
      {
        ingredientId: "black-pepper",
        qty: null,
        unit: "to taste",
        note: "plenty of fresh cracked pepper",
        optional: false,
        scalable: false
      },
      {
        ingredientId: "salt",
        qty: null,
        unit: "to taste",
        note: "",
        optional: false,
        scalable: false
      }
    ],
    steps: [
      {
        id: "step-1",
        title: "Boil Pasta",
        text: "Boil penne in salted water until just shy of al dente (about 8-9 minutes). Before draining, scoop out 1/2 cup of starchy pasta water!",
        timer: {
          label: "Boil Penne",
          seconds: 510,
          cue: "al dente with bite"
        },
        ingredients: ["penne", "salt"]
      },
      {
        id: "step-2",
        title: "Sizzle Garlic Butter",
        text: "In the warm pot over medium-low heat, melt 2 tbsp butter. Add minced garlic and red pepper flakes. Sauté gently for 60 seconds until sweet and fragrant without browning.",
        timer: {
          label: "Gently Warm Garlic",
          seconds: 60,
          cue: "fragrant & infused"
        },
        ingredients: ["butter", "garlic", "red-pepper-flakes"]
      },
      {
        id: "step-3",
        title: "Emulsify Sauce",
        text: "Toss the drained hot penne into the garlic butter with 4 tbsp of reserved starchy pasta water, the remaining 1 tbsp butter, and grated parmesan. Swirl vigorously until a glossy, creamy sauce clings to every tube.",
        timer: {
          label: "Vigorous Swirl",
          seconds: 90,
          cue: "creamy restaurant emulsion"
        },
        ingredients: ["parmesan", "black-pepper"]
      },
      {
        id: "step-4",
        title: "Plate & Devour",
        text: "Dish into warm bowls, crack fresh black pepper over the top, and shower with extra parmesan.",
        timer: null,
        ingredients: ["parmesan"]
      }
    ]
  },
  {
    id: "smoky-beef-pepper-skillet",
    title: "Smoky Beef & Sweet Pepper Skillet",
    subtitle: "High-protein savory ground beef sizzled with bell peppers, garlic, and smoked paprika over a quick pan glaze.",
    moods: ["15-minute", "one-pot", "high-protein", "clean-fridge"],
    totalTimeMinutes: 15,
    activeTimeMinutes: 15,
    baseServings: 2,
    equipment: ["Large skillet", "Wooden spoon"],
    ingredients: [
      {
        ingredientId: "ground-beef",
        qty: 350,
        unit: "g",
        note: "or ground turkey / pork",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "bell-pepper",
        qty: 1,
        unit: "whole",
        note: "sliced into strips",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "onion",
        qty: 0.5,
        unit: "whole",
        note: "sliced",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "garlic",
        qty: 3,
        unit: "clove",
        note: "minced",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "smoked-paprika",
        qty: 1.5,
        unit: "tsp",
        note: "",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "cumin",
        qty: 0.5,
        unit: "tsp",
        note: "",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "soy-sauce",
        qty: 1,
        unit: "tbsp",
        note: "or Worcestershire sauce",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "olive-oil",
        qty: 1,
        unit: "tbsp",
        note: "",
        optional: false,
        scalable: true
      },
      {
        ingredientId: "salt",
        qty: null,
        unit: "to taste",
        note: "",
        optional: false,
        scalable: false
      }
    ],
    steps: [
      {
        id: "step-1",
        title: "Brown Ground Beef",
        text: "Heat skillet over medium-high heat with a dash of oil. Add ground beef, breaking it up with a wooden spoon. Brown well until caramelized.",
        timer: {
          label: "Brown Beef",
          seconds: 240,
          cue: "deep savory crust"
        },
        ingredients: ["ground-beef", "olive-oil"]
      },
      {
        id: "step-2",
        title: "Toss Peppers & Aromatics",
        text: "Add sliced bell peppers, onions, and minced garlic into the beef. Sauté for 3 minutes until peppers are blistered yet tender-crisp.",
        timer: {
          label: "Sauté Peppers",
          seconds: 180,
          cue: "peppers vibrant & tender"
        },
        ingredients: ["bell-pepper", "onion", "garlic"]
      },
      {
        id: "step-3",
        title: "Glaze & Season",
        text: "Stir in smoked paprika, cumin, soy sauce, and 1/2 tsp salt. Toss continuously to coat all beef and peppers in the smoky glaze.",
        timer: {
          label: "Glaze Sizzle",
          seconds: 90,
          cue: "fragrant & glossy"
        },
        ingredients: ["smoked-paprika", "cumin", "soy-sauce", "salt"]
      },
      {
        id: "step-4",
        title: "Serve",
        text: "Spoon directly over rice, wrap in warm tortillas, or eat straight from the bowl for a quick high-protein dinner.",
        timer: null,
        ingredients: []
      }
    ]
  }
];
