/**
 * PantryChef Recipe Database (v1.1 Expanded 27-Recipe Library)
 * Categorized with Core, Flavor, Staple, and Optional ingredient roles
 */
window.PANTRY_RECIPES = [
  {
    id: "two-ingredient-salsa-chicken",
    title: "Two-Ingredient Juicy Salsa Chicken",
    subtitle: "Tender chicken simmered in rich zesty salsa. The ultimate weeknight dinner hack.",
    moods: ["15-minute", "one-pot", "high-protein", "budget"],
    totalTimeMinutes: 15,
    activeTimeMinutes: 5,
    baseServings: 2,
    equipment: ["Medium skillet with lid"],
    ingredients: [
      { ingredientId: "chicken-breast", qty: 350, unit: "g", role: "core", note: "cut into bite-size pieces" },
      { ingredientId: "salsa", qty: 200, unit: "g", role: "core", note: "mild or medium chunky salsa" },
      { ingredientId: "neutral-oil", qty: 1, unit: "tbsp", role: "staple" },
      { ingredientId: "salt", qty: null, unit: "to taste", role: "staple" },
      { ingredientId: "cheese", qty: 40, unit: "g", role: "optional", note: "shredded on top" },
      { ingredientId: "rice", qty: 200, unit: "g", role: "optional", note: "for serving" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Sear Chicken",
        text: "Heat oil in skillet over medium-high heat. Add bite-size chicken pieces and sear for 3 minutes until lightly golden.",
        timer: { label: "Sear", seconds: 180, cue: "lightly golden" }
      },
      {
        id: "step-2",
        title: "Simmer in Salsa",
        text: "Pour salsa directly over chicken. Cover with lid, turn heat to medium-low, and let bubble until chicken is tender and juicy.",
        timer: { label: "Simmer", seconds: 420, cue: "chicken fully cooked" }
      },
      {
        id: "step-3",
        title: "Melt & Serve",
        text: "Top with shredded cheese if you have it. Serve over fluffy rice or with warm tortillas!",
        timer: null
      }
    ]
  },
  {
    id: "honey-garlic-chicken",
    title: "Three-Ingredient Honey Garlic Chicken",
    subtitle: "Crisp golden chicken bites glazed in a sticky, sweet-and-savory caramelized garlic sauce.",
    moods: ["15-minute", "one-pot", "high-protein"],
    totalTimeMinutes: 15,
    activeTimeMinutes: 15,
    baseServings: 2,
    equipment: ["Large skillet"],
    ingredients: [
      { ingredientId: "chicken-thighs", qty: 350, unit: "g", role: "core", note: "cut bite-size" },
      { ingredientId: "honey", qty: 3, unit: "tbsp", role: "core" },
      { ingredientId: "garlic", qty: 4, unit: "clove", role: "core", note: "minced" },
      { ingredientId: "soy-sauce", qty: 2, unit: "tbsp", role: "flavor" },
      { ingredientId: "neutral-oil", qty: 1, unit: "tbsp", role: "staple" },
      { ingredientId: "salt", qty: null, unit: "to taste", role: "staple" },
      { ingredientId: "black-pepper", qty: null, unit: "to taste", role: "staple" },
      { ingredientId: "scallions", qty: 2, unit: "whole", role: "optional", note: "sliced" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Sear Chicken",
        text: "Season chicken with salt and pepper. Heat oil in skillet over high heat; sear chicken pieces until golden and cooked through.",
        timer: { label: "Sear", seconds: 300, cue: "golden brown" }
      },
      {
        id: "step-2",
        title: "Glaze & Caramelize",
        text: "Add minced garlic, honey, and soy sauce to the pan. Toss continuously over medium heat as the honey bubbles into a thick, glossy lacquer.",
        timer: { label: "Caramelize Glaze", seconds: 120, cue: "thick & sticky" }
      },
      {
        id: "step-3",
        title: "Serve",
        text: "Spoon over hot rice and top with sliced green scallions.",
        timer: null
      }
    ]
  },
  {
    id: "three-ingredient-teriyaki-salmon",
    title: "Three-Ingredient Sweet Teriyaki Salmon",
    subtitle: "Pan-seared tender salmon fillets glazed with sweet caramelized soy sauce.",
    moods: ["15-minute", "one-pot", "high-protein"],
    totalTimeMinutes: 12,
    activeTimeMinutes: 12,
    baseServings: 2,
    equipment: ["Skillet", "Tongs"],
    ingredients: [
      { ingredientId: "salmon", qty: 2, unit: "whole", role: "core", note: "fillets" },
      { ingredientId: "soy-sauce", qty: 2, unit: "tbsp", role: "core" },
      { ingredientId: "honey", qty: 1.5, unit: "tbsp", role: "core", note: "or brown sugar" },
      { ingredientId: "neutral-oil", qty: 1, unit: "tbsp", role: "staple" },
      { ingredientId: "garlic", qty: 1, unit: "clove", role: "flavor", note: "optional aromatics" },
      { ingredientId: "rice", qty: 250, unit: "g", role: "optional", note: "for serving" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Sear Salmon",
        text: "Heat oil in skillet over medium-high heat. Place salmon fillets in pan and sear for 4 minutes until crust is golden.",
        timer: { label: "Sear Salmon", seconds: 240, cue: "crispy crust" }
      },
      {
        id: "step-2",
        title: "Flip & Glaze",
        text: "Flip salmon. Add soy sauce and honey directly into the pan. Spoon the bubbling glaze over the salmon until cooked through.",
        timer: { label: "Glaze Simmer", seconds: 120, cue: "sauce thickens" }
      },
      {
        id: "step-3",
        title: "Plate",
        text: "Drizzle pan sauce over salmon and serve immediately with rice.",
        timer: null
      }
    ]
  },
  {
    id: "beef-and-broccoli",
    title: "15-Minute Savory Beef & Broccoli",
    subtitle: "Crispy browned beef tossed with tender broccoli florets in a savory garlic-soy pan glaze.",
    moods: ["15-minute", "one-pot", "high-protein"],
    totalTimeMinutes: 15,
    activeTimeMinutes: 15,
    baseServings: 2,
    equipment: ["Large skillet or wok"],
    ingredients: [
      { ingredientId: "ground-beef", qty: 350, unit: "g", role: "core", note: "or sliced beef" },
      { ingredientId: "broccoli", qty: 200, unit: "g", role: "core", note: "cut into bite-size florets" },
      { ingredientId: "soy-sauce", qty: 2, unit: "tbsp", role: "core" },
      { ingredientId: "garlic", qty: 3, unit: "clove", role: "flavor", note: "minced" },
      { ingredientId: "brown-sugar", qty: 1, unit: "tbsp", role: "flavor", note: "or honey" },
      { ingredientId: "neutral-oil", qty: 1, unit: "tbsp", role: "staple" },
      { ingredientId: "black-pepper", qty: null, unit: "to taste", role: "staple" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Brown Beef",
        text: "Brown beef in skillet over high heat with oil for 4 minutes until deeply caramelized.",
        timer: { label: "Brown Beef", seconds: 240, cue: "crispy browned bits" }
      },
      {
        id: "step-2",
        title: "Steam-Fry Broccoli",
        text: "Add broccoli florets, garlic, and 2 tbsp water. Cover for 2 minutes to steam-cook broccoli tender-crisp.",
        timer: { label: "Steam Broccoli", seconds: 120, cue: "vibrant green" }
      },
      {
        id: "step-3",
        title: "Toss in Sauce",
        text: "Uncover, pour in soy sauce and brown sugar, and toss for 1 minute until sauce glazes the beef and broccoli.",
        timer: { label: "Glaze Toss", seconds: 60, cue: "glossy & coated" }
      }
    ]
  },
  {
    id: "pesto-pasta",
    title: "10-Minute Basil Pesto Pasta",
    subtitle: "Hot al dente pasta swirled with fragrant basil pesto and creamy parmesan.",
    moods: ["15-minute", "budget", "one-pot"],
    totalTimeMinutes: 10,
    activeTimeMinutes: 10,
    baseServings: 2,
    equipment: ["Pot", "Tongs"],
    ingredients: [
      { ingredientId: "pasta", qty: 220, unit: "g", role: "core", note: "penne, spaghetti, or fusilli" },
      { ingredientId: "pesto", qty: 4, unit: "tbsp", role: "core", note: "green basil pesto" },
      { ingredientId: "parmesan", qty: 25, unit: "g", role: "flavor", note: "grated" },
      { ingredientId: "salt", qty: null, unit: "to taste", role: "staple" },
      { ingredientId: "cherry-tomatoes", qty: 80, unit: "g", role: "optional", note: "halved" },
      { ingredientId: "spinach", qty: 40, unit: "g", role: "optional" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Boil Pasta",
        text: "Boil pasta in salted water until al dente. Reserve 1/4 cup pasta water before draining.",
        timer: { label: "Boil Pasta", seconds: 540, cue: "al dente" }
      },
      {
        id: "step-2",
        title: "Toss with Pesto",
        text: "Off heat, stir pesto and 2 tbsp pasta water into the hot pasta until silky and glossy.",
        timer: null
      },
      {
        id: "step-3",
        title: "Finish with Cheese",
        text: "Fold in parmesan and fresh cherry tomatoes if using. Serve warm.",
        timer: null
      }
    ]
  },
  {
    id: "butter-garlic-noodles",
    title: "Comforting Garlic Butter Noodles",
    subtitle: "Silky noodles coated in a rich emulsion of melted butter, golden toasted garlic, and parmesan.",
    moods: ["15-minute", "budget", "one-pot"],
    totalTimeMinutes: 12,
    activeTimeMinutes: 12,
    baseServings: 2,
    equipment: ["Medium pot or skillet"],
    ingredients: [
      { ingredientId: "pasta", qty: 200, unit: "g", role: "core", note: "spaghetti, ramen noodles, or penne" },
      { ingredientId: "butter", qty: 3, unit: "tbsp", role: "core" },
      { ingredientId: "garlic", qty: 4, unit: "clove", role: "core", note: "minced" },
      { ingredientId: "parmesan", qty: 30, unit: "g", role: "flavor", note: "or cheddar swap" },
      { ingredientId: "salt", qty: null, unit: "to taste", role: "staple" },
      { ingredientId: "black-pepper", qty: null, unit: "to taste", role: "staple" },
      { ingredientId: "red-pepper-flakes", qty: 0.5, unit: "tsp", role: "optional" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Cook Noodles",
        text: "Boil pasta until al dente. Save 1/3 cup starchy cooking water and drain.",
        timer: { label: "Boil Noodles", seconds: 480, cue: "tender with bite" }
      },
      {
        id: "step-2",
        title: "Sizzle Garlic Butter",
        text: "Melt butter in the warm pot over medium-low heat. Add garlic and sizzle gently for 60 seconds until sweet and aromatic.",
        timer: { label: "Sizzle Garlic", seconds: 60, cue: "fragrant" }
      },
      {
        id: "step-3",
        title: "Emulsify",
        text: "Toss hot noodles into the garlic butter with reserved water and parmesan. Swirl until creamy and saucy!",
        timer: null
      }
    ]
  },
  {
    id: "tuscan-chicken",
    title: "Creamy Tuscan Garlic Chicken",
    subtitle: "Golden chicken breast simmered with sweet tomatoes and wilted spinach in a velvety garlic cream sauce.",
    moods: ["15-minute", "one-pot", "high-protein"],
    totalTimeMinutes: 16,
    activeTimeMinutes: 16,
    baseServings: 2,
    equipment: ["Large skillet"],
    ingredients: [
      { ingredientId: "chicken-breast", qty: 350, unit: "g", role: "core", note: "sliced into cutlets" },
      { ingredientId: "canned-tomatoes", qty: 200, unit: "g", role: "core", note: "or cherry tomatoes" },
      { ingredientId: "spinach", qty: 60, unit: "g", role: "core" },
      { ingredientId: "heavy-cream", qty: 80, unit: "ml", role: "core", note: "or milk+butter swap" },
      { ingredientId: "garlic", qty: 3, unit: "clove", role: "flavor", note: "minced" },
      { ingredientId: "parmesan", qty: 25, unit: "g", role: "flavor" },
      { ingredientId: "olive-oil", qty: 1, unit: "tbsp", role: "staple" },
      { ingredientId: "salt", qty: null, unit: "to taste", role: "staple" },
      { ingredientId: "black-pepper", qty: null, unit: "to taste", role: "staple" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Pan Sear Chicken",
        text: "Season chicken with salt and pepper. Heat oil in skillet and sear for 4 minutes per side until golden.",
        timer: { label: "Sear Chicken", seconds: 360, cue: "golden crust" }
      },
      {
        id: "step-2",
        title: "Build Cream Sauce",
        text: "Remove chicken. Add garlic, tomatoes, and cream to the skillet. Simmer for 2 minutes until bubbling.",
        timer: { label: "Simmer Sauce", seconds: 120, cue: "thick cream" }
      },
      {
        id: "step-3",
        title: "Wilt Spinach & Combine",
        text: "Fold in spinach and parmesan until wilted. Return chicken into the sauce and spoon over.",
        timer: { label: "Wilt & Warm", seconds: 60, cue: "sauce clings" }
      }
    ]
  },
  {
    id: "sheet-pan-sausage-peppers",
    title: "Sheet-Pan Smoky Sausage & Peppers",
    subtitle: "Juicy sliced sausage and sweet bell peppers roasted to caramelized perfection with minimal dish cleanup.",
    moods: ["one-pot", "clean-fridge", "high-protein"],
    totalTimeMinutes: 20,
    activeTimeMinutes: 5,
    baseServings: 2,
    equipment: ["Baking sheet or large skillet"],
    ingredients: [
      { ingredientId: "sausage", qty: 300, unit: "g", role: "core", note: "sliced thick" },
      { ingredientId: "bell-pepper", qty: 2, unit: "whole", role: "core", note: "sliced into strips" },
      { ingredientId: "onion", qty: 1, unit: "whole", role: "core", note: "sliced into wedges" },
      { ingredientId: "olive-oil", qty: 1, unit: "tbsp", role: "staple" },
      { ingredientId: "paprika", qty: 1, unit: "tsp", role: "flavor" },
      { ingredientId: "salt", qty: null, unit: "to taste", role: "staple" },
      { ingredientId: "potatoes", qty: 2, unit: "whole", role: "optional", note: "diced" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Toss on Pan",
        text: "Toss sliced sausage, bell peppers, and onion wedges on a baking sheet (or skillet) with oil, paprika, and a pinch of salt.",
        timer: null
      },
      {
        id: "step-2",
        title: "Roast or Sizzle",
        text: "Roast in 200°C (400°F) oven or cook in a large skillet over high heat until edges are blistered and caramelized.",
        timer: { label: "Roast / Sear", seconds: 720, cue: "charred & juicy" }
      },
      {
        id: "step-3",
        title: "Serve",
        text: "Serve immediately with rice, crusty bread, or straight from the pan.",
        timer: null
      }
    ]
  },
  {
    id: "shakshuka",
    title: "Classic Shakshuka (Eggs in Tomato Glaze)",
    subtitle: "Gently poached eggs in a rich, bubbling garlic-tomato sauce spiced with smoked paprika.",
    moods: ["one-pot", "budget", "high-protein"],
    totalTimeMinutes: 15,
    activeTimeMinutes: 5,
    baseServings: 2,
    equipment: ["Skillet with lid"],
    ingredients: [
      { ingredientId: "eggs", qty: 4, unit: "whole", role: "core" },
      { ingredientId: "canned-tomatoes", qty: 400, unit: "g", role: "core", note: "diced or crushed" },
      { ingredientId: "paprika", qty: 1.5, unit: "tsp", role: "core", note: "or smoked paprika" },
      { ingredientId: "onion", qty: 0.5, unit: "whole", role: "flavor", note: "diced" },
      { ingredientId: "garlic", qty: 2, unit: "clove", role: "flavor", note: "minced" },
      { ingredientId: "olive-oil", qty: 1, unit: "tbsp", role: "staple" },
      { ingredientId: "salt", qty: null, unit: "to taste", role: "staple" },
      { ingredientId: "bread", qty: 2, unit: "slice", role: "optional", note: "for dipping" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Sizzle Spiced Sauce",
        text: "Heat oil in skillet. Sauté onion and garlic for 2 minutes, then pour in tomatoes and paprika with a pinch of salt. Simmer 4 minutes.",
        timer: { label: "Simmer Sauce", seconds: 240, cue: "thick bubbling sauce" }
      },
      {
        id: "step-2",
        title: "Poach Eggs",
        text: "Make 4 small wells in the sauce. Crack eggs into the wells. Cover skillet with lid and cook over medium-low heat until whites are set and yolks are runny.",
        timer: { label: "Poach Eggs", seconds: 300, cue: "runny yolks, set whites" }
      },
      {
        id: "step-3",
        title: "Serve with Toast",
        text: "Dip warm crusty bread into the runny yolks and savory tomato sauce.",
        timer: null
      }
    ]
  },
  {
    id: "clean-the-fridge-fried-rice",
    title: "Clean-the-Fridge Golden Fried Rice",
    subtitle: "The ultimate 10-minute dinner for leftover rice, scrambled eggs, savory soy, and whatever veggies are in your crisper.",
    moods: ["15-minute", "one-pot", "budget", "clean-fridge"],
    totalTimeMinutes: 10,
    activeTimeMinutes: 10,
    baseServings: 2,
    equipment: ["Large skillet or wok"],
    ingredients: [
      { ingredientId: "rice", qty: 350, unit: "g", role: "core", note: "cold leftover or quick cooked rice" },
      { ingredientId: "eggs", qty: 3, unit: "whole", role: "core", note: "lightly beaten" },
      { ingredientId: "soy-sauce", qty: 2, unit: "tbsp", role: "core" },
      { ingredientId: "garlic", qty: 2, unit: "clove", role: "flavor", note: "minced" },
      { ingredientId: "onion", qty: 0.5, unit: "whole", role: "flavor", note: "diced" },
      { ingredientId: "neutral-oil", qty: 2, unit: "tbsp", role: "staple" },
      { ingredientId: "frozen-peas", qty: 80, unit: "g", role: "optional" },
      { ingredientId: "black-pepper", qty: null, unit: "to taste", role: "staple" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Soft Scramble Eggs",
        text: "Heat 1 tbsp oil in pan. Scramble beaten eggs for 45 seconds until soft. Set aside.",
        timer: { label: "Scramble", seconds: 45, cue: "soft curds" }
      },
      {
        id: "step-2",
        title: "Fry Rice",
        text: "Add remaining oil and fry rice over screaming high heat with garlic and onion for 2 minutes.",
        timer: { label: "Fry Rice", seconds: 120, cue: "toasted grains" }
      },
      {
        id: "step-3",
        title: "Soy Drizzle & Combine",
        text: "Pour soy sauce around pan edge and fold eggs back in. Toss vigorously for 1 minute and serve.",
        timer: { label: "Toss", seconds: 60, cue: "golden brown" }
      }
    ]
  },
  {
    id: "garlic-butter-chicken-rice-skillet",
    title: "Garlic Butter Chicken Rice Skillet",
    subtitle: "Golden seared chicken tossed with fragrant garlic butter, tender rice, and wilted greens.",
    moods: ["15-minute", "one-pot", "high-protein", "budget"],
    totalTimeMinutes: 15,
    activeTimeMinutes: 15,
    baseServings: 2,
    equipment: ["Large skillet"],
    ingredients: [
      { ingredientId: "chicken-thighs", qty: 350, unit: "g", role: "core", note: "cut bite-size" },
      { ingredientId: "rice", qty: 300, unit: "g", role: "core", note: "cooked or quick microwave rice" },
      { ingredientId: "butter", qty: 2, unit: "tbsp", role: "flavor" },
      { ingredientId: "garlic", qty: 3, unit: "clove", role: "flavor", note: "minced" },
      { ingredientId: "chicken-broth", qty: 60, unit: "ml", role: "flavor" },
      { ingredientId: "neutral-oil", qty: 1, unit: "tbsp", role: "staple" },
      { ingredientId: "paprika", qty: 1, unit: "tsp", role: "flavor" },
      { ingredientId: "spinach", qty: 60, unit: "g", role: "optional" },
      { ingredientId: "salt", qty: null, unit: "to taste", role: "staple" },
      { ingredientId: "black-pepper", qty: null, unit: "to taste", role: "staple" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Sear Chicken",
        text: "Season chicken with paprika, salt, and pepper. Sear in hot oil until deep golden.",
        timer: { label: "Sear", seconds: 240, cue: "deep golden crust" }
      },
      {
        id: "step-2",
        title: "Garlic Butter Sauce",
        text: "Add garlic, butter, and broth. Let bubble rapidly for 1 minute.",
        timer: { label: "Sauce Glaze", seconds: 60, cue: "glossy butter sauce" }
      },
      {
        id: "step-3",
        title: "Fold Rice",
        text: "Toss in cooked rice and spinach until warm and coated in sauce.",
        timer: { label: "Warm & Wilt", seconds: 120, cue: "spinach wilted" }
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
    equipment: ["Skillet or flat griddle"],
    ingredients: [
      { ingredientId: "tortillas", qty: 4, unit: "whole", role: "core" },
      { ingredientId: "black-beans", qty: 240, unit: "g", role: "core", note: "drained & mashed" },
      { ingredientId: "cheese", qty: 120, unit: "g", role: "core", note: "shredded" },
      { ingredientId: "cumin", qty: 1, unit: "tsp", role: "flavor" },
      { ingredientId: "onion", qty: 0.5, unit: "whole", role: "optional", note: "diced" },
      { ingredientId: "butter", qty: 1, unit: "tbsp", role: "staple" },
      { ingredientId: "salsa", qty: 2, unit: "tbsp", role: "optional" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Assemble",
        text: "Mash black beans with cumin. Spread over tortillas and top with cheese. Fold into half moons.",
        timer: null
      },
      {
        id: "step-2",
        title: "Pan Crisp",
        text: "Melt butter in skillet over medium heat. Crisp quesadillas for 2.5 minutes per side until crunchy and cheese is melted.",
        timer: { label: "Crisp Tortillas", seconds: 150, cue: "golden brown & melted" }
      },
      {
        id: "step-3",
        title: "Serve",
        text: "Slice into wedges and serve with salsa or sour cream.",
        timer: null
      }
    ]
  },
  {
    id: "peanut-noodles",
    title: "10-Minute Creamy Peanut Noodles",
    subtitle: "Hot noodles tossed in a rich, savory peanut butter and soy sauce dressing.",
    moods: ["15-minute", "budget", "one-pot"],
    totalTimeMinutes: 10,
    activeTimeMinutes: 10,
    baseServings: 2,
    equipment: ["Pot", "Whisk"],
    ingredients: [
      { ingredientId: "noodles", qty: 200, unit: "g", role: "core", note: "ramen, spaghetti, or rice noodles" },
      { ingredientId: "peanut-butter", qty: 3, unit: "tbsp", role: "core" },
      { ingredientId: "soy-sauce", qty: 2, unit: "tbsp", role: "core" },
      { ingredientId: "honey", qty: 1, unit: "tbsp", role: "flavor", note: "or brown sugar" },
      { ingredientId: "garlic", qty: 1, unit: "clove", role: "flavor", note: "minced" },
      { ingredientId: "hot-sauce", qty: 1, unit: "tsp", role: "optional", note: "or sriracha" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Boil Noodles",
        text: "Boil noodles until tender. Scoop out 3 tbsp warm noodle water.",
        timer: { label: "Boil Noodles", seconds: 300, cue: "tender" }
      },
      {
        id: "step-2",
        title: "Whisk Peanut Sauce",
        text: "In a bowl, whisk peanut butter, soy sauce, honey, garlic, and warm noodle water until silky.",
        timer: null
      },
      {
        id: "step-3",
        title: "Toss & Devour",
        text: "Toss hot noodles into the peanut dressing. Top with chili flakes or scallions if you have them!",
        timer: null
      }
    ]
  },
  {
    id: "creamy-tomato-chickpea-curry",
    title: "15-Minute Creamy Chickpea Curry",
    subtitle: "Hearty pantry chickpeas simmered in a spiced tomato sauce finished with cream or yogurt.",
    moods: ["one-pot", "budget", "high-protein", "clean-fridge", "15-minute"],
    totalTimeMinutes: 15,
    activeTimeMinutes: 15,
    baseServings: 2,
    equipment: ["Saucepan"],
    ingredients: [
      { ingredientId: "chickpeas", qty: 400, unit: "g", role: "core", note: "1 can drained" },
      { ingredientId: "canned-tomatoes", qty: 300, unit: "g", role: "core" },
      { ingredientId: "curry-powder", qty: 1.5, unit: "tbsp", role: "core" },
      { ingredientId: "heavy-cream", qty: 60, unit: "ml", role: "flavor", note: "or Greek yogurt swap" },
      { ingredientId: "onion", qty: 1, unit: "whole", role: "flavor" },
      { ingredientId: "garlic", qty: 2, unit: "clove", role: "flavor" },
      { ingredientId: "neutral-oil", qty: 1, unit: "tbsp", role: "staple" },
      { ingredientId: "salt", qty: null, unit: "to taste", role: "staple" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Sizzle Aromatics",
        text: "Sauté onion and garlic in oil with curry powder for 2 minutes until fragrant.",
        timer: { label: "Bloom Spices", seconds: 120, cue: "aromatic" }
      },
      {
        id: "step-2",
        title: "Simmer Curry",
        text: "Add tomatoes, chickpeas, and salt. Simmer for 6 minutes.",
        timer: { label: "Simmer", seconds: 360, cue: "bubbling stew" }
      },
      {
        id: "step-3",
        title: "Finish Creamy",
        text: "Stir in heavy cream and serve hot over rice or bread.",
        timer: null
      }
    ]
  },
  {
    id: "mustard-honey-chicken",
    title: "Crispy Honey Mustard Chicken",
    subtitle: "Pan-seared chicken glazed in tangy Dijon mustard and sweet honey.",
    moods: ["15-minute", "high-protein", "one-pan"],
    totalTimeMinutes: 14,
    activeTimeMinutes: 14,
    baseServings: 2,
    equipment: ["Skillet"],
    ingredients: [
      { ingredientId: "chicken-breast", qty: 350, unit: "g", role: "core" },
      { ingredientId: "mustard", qty: 2, unit: "tbsp", role: "core" },
      { ingredientId: "honey", qty: 2, unit: "tbsp", role: "core" },
      { ingredientId: "garlic", qty: 2, unit: "clove", role: "flavor" },
      { ingredientId: "neutral-oil", qty: 1, unit: "tbsp", role: "staple" },
      { ingredientId: "salt", qty: null, unit: "to taste", role: "staple" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Sear Chicken",
        text: "Sear seasoned chicken pieces in oil for 4 minutes until golden.",
        timer: { label: "Sear", seconds: 240, cue: "golden" }
      },
      {
        id: "step-2",
        title: "Honey Mustard Glaze",
        text: "Mix mustard, honey, and garlic. Pour over chicken and simmer for 2 minutes until glossy.",
        timer: { label: "Glaze", seconds: 120, cue: "glossy coating" }
      }
    ]
  },
  {
    id: "sausage-rice-skillet",
    title: "One-Pan Smoky Sausage Rice Skillet",
    subtitle: "Browned sausage tossed with tender rice, garlic, and sweet caramelized onions.",
    moods: ["one-pot", "budget", "high-protein", "15-minute"],
    totalTimeMinutes: 14,
    activeTimeMinutes: 14,
    baseServings: 2,
    equipment: ["Large skillet"],
    ingredients: [
      { ingredientId: "sausage", qty: 300, unit: "g", role: "core", note: "sliced into rounds" },
      { ingredientId: "rice", qty: 300, unit: "g", role: "core", note: "cooked rice" },
      { ingredientId: "onion", qty: 0.5, unit: "whole", role: "flavor" },
      { ingredientId: "garlic", qty: 2, unit: "clove", role: "flavor" },
      { ingredientId: "paprika", qty: 1, unit: "tsp", role: "flavor" },
      { ingredientId: "neutral-oil", qty: 1, unit: "tbsp", role: "staple" },
      { ingredientId: "salt", qty: null, unit: "to taste", role: "staple" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Brown Sausage & Onion",
        text: "Sizzle sausage rounds and sliced onion in oil for 4 minutes until deeply browned.",
        timer: { label: "Brown Sausage", seconds: 240, cue: "crispy edges" }
      },
      {
        id: "step-2",
        title: "Toss in Rice",
        text: "Add garlic, paprika, and cooked rice. Toss over high heat for 2 minutes to soak up savory sausage oils.",
        timer: { label: "Toast Rice", seconds: 120, cue: "heated through" }
      }
    ]
  },
  {
    id: "tuna-quesadillas",
    title: "10-Minute Crispy Tuna & Cheddar Melts",
    subtitle: "Savory canned tuna paired with gooey melted cheese inside a crispy toasted tortilla.",
    moods: ["15-minute", "budget", "one-pot"],
    totalTimeMinutes: 10,
    activeTimeMinutes: 10,
    baseServings: 2,
    equipment: ["Skillet"],
    ingredients: [
      { ingredientId: "canned-tuna", qty: 1, unit: "can", role: "core", note: "drained" },
      { ingredientId: "tortillas", qty: 2, unit: "whole", role: "core" },
      { ingredientId: "cheese", qty: 80, unit: "g", role: "core", note: "shredded" },
      { ingredientId: "mayonnaise", qty: 1, unit: "tbsp", role: "flavor" },
      { ingredientId: "butter", qty: 1, unit: "tbsp", role: "staple" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Mix Tuna",
        text: "Mix drained tuna with mayonnaise and a pinch of black pepper.",
        timer: null
      },
      {
        id: "step-2",
        title: "Pan Crisp",
        text: "Melt butter in skillet. Place filled tortilla in pan and crisp for 2.5 minutes per side until golden and bubbly.",
        timer: { label: "Pan Crisp", seconds: 150, cue: "crunchy & melted" }
      }
    ]
  },
  {
    id: "one-pot-tomato-basil-pasta",
    title: "One-Pot Rich Tomato Basil Pasta",
    subtitle: "Pasta cooks directly inside a rich tomato-garlic broth with zero colander cleanup.",
    moods: ["one-pot", "budget", "15-minute"],
    totalTimeMinutes: 15,
    activeTimeMinutes: 5,
    baseServings: 2,
    equipment: ["Wide pot"],
    ingredients: [
      { ingredientId: "pasta", qty: 220, unit: "g", role: "core" },
      { ingredientId: "canned-tomatoes", qty: 400, unit: "g", role: "core" },
      { ingredientId: "garlic", qty: 3, unit: "clove", role: "flavor" },
      { ingredientId: "onion", qty: 0.5, unit: "whole", role: "flavor" },
      { ingredientId: "olive-oil", qty: 2, unit: "tbsp", role: "staple" },
      { ingredientId: "oregano", qty: 1, unit: "tsp", role: "flavor" },
      { ingredientId: "salt", qty: null, unit: "to taste", role: "staple" },
      { ingredientId: "parmesan", qty: 30, unit: "g", role: "optional" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Simmer Everything",
        text: "Add pasta, canned tomatoes, garlic, onion, olive oil, and 2 cups water into pot. Boil for 9 minutes.",
        timer: { label: "Boil & Reduce", seconds: 540, cue: "sauce thickens" }
      },
      {
        id: "step-2",
        title: "Finish",
        text: "Fold in parmesan and enjoy!",
        timer: null
      }
    ]
  },
  {
    id: "lemon-butter-salmon-green-beans",
    title: "12-Minute Lemon Butter Salmon & Crisp Beans",
    subtitle: "Pan-seared salmon with a sizzling garlic-lemon pan sauce and tender green beans.",
    moods: ["15-minute", "one-pot", "high-protein"],
    totalTimeMinutes: 12,
    activeTimeMinutes: 12,
    baseServings: 2,
    equipment: ["Large skillet"],
    ingredients: [
      { ingredientId: "salmon", qty: 2, unit: "whole", role: "core" },
      { ingredientId: "lemon", qty: 0.5, unit: "whole", role: "core" },
      { ingredientId: "butter", qty: 2, unit: "tbsp", role: "core" },
      { ingredientId: "green-beans", qty: 200, unit: "g", role: "core" },
      { ingredientId: "garlic", qty: 2, unit: "clove", role: "flavor" },
      { ingredientId: "olive-oil", qty: 1, unit: "tbsp", role: "staple" },
      { ingredientId: "salt", qty: null, unit: "to taste", role: "staple" },
      { ingredientId: "black-pepper", qty: null, unit: "to taste", role: "staple" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Sear Salmon & Beans",
        text: "Sear salmon and green beans in skillet with oil for 4 minutes.",
        timer: { label: "Sear", seconds: 240, cue: "crispy skin" }
      },
      {
        id: "step-2",
        title: "Butter Lemon Glaze",
        text: "Flip salmon, drop in butter, garlic, and fresh lemon juice. Spoon foaming sauce over fish for 2 minutes.",
        timer: { label: "Baste", seconds: 120, cue: "glossy glaze" }
      }
    ]
  },
  {
    id: "korean-beef-bowls",
    title: "12-Minute Sweet & Spicy Korean Beef Bowls",
    subtitle: "Caramelized savory ground beef in garlic, soy sauce, and honey served over hot rice.",
    moods: ["15-minute", "one-pot", "high-protein", "budget"],
    totalTimeMinutes: 12,
    activeTimeMinutes: 12,
    baseServings: 2,
    equipment: ["Skillet"],
    ingredients: [
      { ingredientId: "ground-beef", qty: 350, unit: "g", role: "core" },
      { ingredientId: "soy-sauce", qty: 2.5, unit: "tbsp", role: "core" },
      { ingredientId: "honey", qty: 1.5, unit: "tbsp", role: "core", note: "or brown sugar" },
      { ingredientId: "garlic", qty: 3, unit: "clove", role: "core" },
      { ingredientId: "rice", qty: 300, unit: "g", role: "flavor", note: "for serving" },
      { ingredientId: "red-pepper-flakes", qty: 0.5, unit: "tsp", role: "flavor" },
      { ingredientId: "neutral-oil", qty: 1, unit: "tbsp", role: "staple" },
      { ingredientId: "scallions", qty: 2, unit: "whole", role: "optional" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Caramelize Beef",
        text: "Brown ground beef in skillet over high heat with oil for 4 minutes until deeply caramelized.",
        timer: { label: "Brown Beef", seconds: 240, cue: "caramelized bits" }
      },
      {
        id: "step-2",
        title: "Glaze",
        text: "Add minced garlic, soy sauce, honey, and chili flakes. Simmer for 1 minute until sauce glazes the beef.",
        timer: { label: "Glaze", seconds: 60, cue: "rich & glossy" }
      },
      {
        id: "step-3",
        title: "Serve",
        text: "Spoon over hot rice and enjoy!",
        timer: null
      }
    ]
  },
  {
    id: "salsa-chicken-soup",
    title: "Three-Ingredient 15-Minute Salsa Chicken Soup",
    subtitle: "Hearty warming soup made by simmering chicken and chunky salsa in savory broth.",
    moods: ["15-minute", "one-pot", "high-protein", "budget"],
    totalTimeMinutes: 15,
    activeTimeMinutes: 5,
    baseServings: 2,
    equipment: ["Medium saucepan"],
    ingredients: [
      { ingredientId: "chicken-breast", qty: 300, unit: "g", role: "core", note: "diced small" },
      { ingredientId: "salsa", qty: 200, unit: "g", role: "core" },
      { ingredientId: "chicken-broth", qty: 400, unit: "ml", role: "core" },
      { ingredientId: "black-beans", qty: 150, unit: "g", role: "optional" },
      { ingredientId: "cheese", qty: 30, unit: "g", role: "optional" },
      { ingredientId: "salt", qty: null, unit: "to taste", role: "staple" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Simmer Soup",
        text: "Bring broth, salsa, and diced chicken to a boil in a saucepan. Reduce heat and simmer for 8 minutes until chicken is tender.",
        timer: { label: "Simmer Soup", seconds: 480, cue: "chicken tender" }
      },
      {
        id: "step-2",
        title: "Serve",
        text: "Ladle into bowls and top with cheese or crushed tortilla chips.",
        timer: null
      }
    ]
  },
  {
    id: "garlic-butter-shrimp-rice",
    title: "10-Minute Garlic Butter Shrimp & Rice",
    subtitle: "Succulent pan-seared shrimp in golden garlic butter and lemon over fluffy rice.",
    moods: ["15-minute", "one-pot", "high-protein"],
    totalTimeMinutes: 10,
    activeTimeMinutes: 10,
    baseServings: 2,
    equipment: ["Skillet"],
    ingredients: [
      { ingredientId: "shrimp", qty: 300, unit: "g", role: "core" },
      { ingredientId: "rice", qty: 300, unit: "g", role: "core" },
      { ingredientId: "butter", qty: 2.5, unit: "tbsp", role: "core" },
      { ingredientId: "garlic", qty: 4, unit: "clove", role: "core" },
      { ingredientId: "lemon", qty: 0.5, unit: "whole", role: "flavor" },
      { ingredientId: "olive-oil", qty: 1, unit: "tbsp", role: "staple" },
      { ingredientId: "salt", qty: null, unit: "to taste", role: "staple" },
      { ingredientId: "black-pepper", qty: null, unit: "to taste", role: "staple" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Sizzle Shrimp",
        text: "Heat oil in skillet over high heat. Add shrimp and sear for 2 minutes.",
        timer: { label: "Sear Shrimp", seconds: 120, cue: "pink & plump" }
      },
      {
        id: "step-2",
        title: "Garlic Butter Finish",
        text: "Add butter, garlic, and squeeze of lemon. Sizzle for 60 seconds until fragrant.",
        timer: { label: "Garlic Butter", seconds: 60, cue: "fragrant foam" }
      },
      {
        id: "step-3",
        title: "Serve with Rice",
        text: "Spoon shrimp and garlic butter sauce over warm rice.",
        timer: null
      }
    ]
  },
  {
    id: "bbq-chicken-rice-bowl",
    title: "12-Minute Smoky BBQ Chicken Bowl",
    subtitle: "Pan-seared chicken glazed in sweet smoky BBQ sauce over rice with melted cheese.",
    moods: ["15-minute", "one-pot", "high-protein", "budget"],
    totalTimeMinutes: 12,
    activeTimeMinutes: 12,
    baseServings: 2,
    equipment: ["Skillet"],
    ingredients: [
      { ingredientId: "chicken-thighs", qty: 350, unit: "g", role: "core" },
      { ingredientId: "bbq-sauce", qty: 4, unit: "tbsp", role: "core" },
      { ingredientId: "rice", qty: 300, unit: "g", role: "core" },
      { ingredientId: "cheese", qty: 40, unit: "g", role: "flavor" },
      { ingredientId: "neutral-oil", qty: 1, unit: "tbsp", role: "staple" },
      { ingredientId: "salt", qty: null, unit: "to taste", role: "staple" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Sear Chicken",
        text: "Sear chicken pieces in oil over high heat for 4 minutes until browned.",
        timer: { label: "Sear Chicken", seconds: 240, cue: "browned" }
      },
      {
        id: "step-2",
        title: "Glaze BBQ Sauce",
        text: "Pour BBQ sauce over chicken and toss for 1 minute until caramelized.",
        timer: { label: "Glaze", seconds: 60, cue: "sticky glaze" }
      },
      {
        id: "step-3",
        title: "Bowl Assembly",
        text: "Serve over rice and top with cheese to melt.",
        timer: null
      }
    ]
  }
  ,
  {
    id: "clean-the-fridge-veggie-curry",
    title: "15-Minute Clean-the-Fridge Veggie Curry",
    subtitle: "A quick aromatic curry for any mixed vegetables, simmered in warm spices and rich tomato sauce.",
    moods: ["one-pot", "budget", "clean-fridge", "15-minute"],
    totalTimeMinutes: 15,
    activeTimeMinutes: 15,
    baseServings: 2,
    equipment: ["Saucepan"],
    ingredients: [
      { ingredientId: "canned-tomatoes", qty: 300, unit: "g", role: "core" },
      { ingredientId: "curry-powder", qty: 1.5, unit: "tbsp", role: "core" },
      { ingredientId: "frozen-peas", qty: 100, unit: "g", role: "core" },
      { ingredientId: "carrot", qty: 1, unit: "whole", role: "core", note: "diced" },
      { ingredientId: "onion", qty: 1, unit: "whole", role: "flavor" },
      { ingredientId: "garlic", qty: 2, unit: "clove", role: "flavor" },
      { ingredientId: "neutral-oil", qty: 1, unit: "tbsp", role: "staple" },
      { ingredientId: "salt", qty: null, unit: "to taste", role: "staple" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Sizzle Aromatics",
        text: "Sauté onion, garlic, and curry powder in oil for 2 minutes.",
        timer: { label: "Sizzle", seconds: 120, cue: "fragrant" }
      },
      {
        id: "step-2",
        title: "Simmer Veggies",
        text: "Add tomatoes, diced carrots, peas, and 1/2 cup water. Simmer for 7 minutes until carrots are tender.",
        timer: { label: "Simmer", seconds: 420, cue: "tender vegetables" }
      }
    ]
  },
  {
    id: "mediterranean-tuna-rice-bowl",
    title: "10-Minute Mediterranean Tuna & Tomato Rice Bowl",
    subtitle: "Fluffy rice tossed with canned tuna, sweet tomatoes, olive oil, and herbs.",
    moods: ["15-minute", "budget", "high-protein"],
    totalTimeMinutes: 10,
    activeTimeMinutes: 10,
    baseServings: 2,
    equipment: ["Bowl"],
    ingredients: [
      { ingredientId: "canned-tuna", qty: 1, unit: "can", role: "core", note: "drained" },
      { ingredientId: "rice", qty: 300, unit: "g", role: "core", note: "warm cooked rice" },
      { ingredientId: "tomatoes", qty: 1, unit: "whole", role: "core", note: "or cherry tomatoes diced" },
      { ingredientId: "olive-oil", qty: 1.5, unit: "tbsp", role: "flavor" },
      { ingredientId: "oregano", qty: 1, unit: "tsp", role: "flavor" },
      { ingredientId: "feta", qty: 30, unit: "g", role: "optional", note: "crumbled" },
      { ingredientId: "salt", qty: null, unit: "to taste", role: "staple" },
      { ingredientId: "black-pepper", qty: null, unit: "to taste", role: "staple" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Toss Bowl",
        text: "In a bowl, gently fold drained tuna, diced fresh tomatoes, olive oil, oregano, and salt into warm cooked rice. Top with feta cheese!",
        timer: null
      }
    ]
  },
  {
    id: "creamy-tomato-penne",
    title: "12-Minute Creamy Tomato Pink Penne",
    subtitle: "Silky penne coated in a velvety blush sauce of crushed tomatoes and cream.",
    moods: ["15-minute", "one-pot", "budget"],
    totalTimeMinutes: 12,
    activeTimeMinutes: 12,
    baseServings: 2,
    equipment: ["Pot"],
    ingredients: [
      { ingredientId: "penne", qty: 220, unit: "g", role: "core" },
      { ingredientId: "tomato-paste", qty: 3, unit: "tbsp", role: "core", note: "or canned tomatoes" },
      { ingredientId: "heavy-cream", qty: 80, unit: "ml", role: "core", note: "or milk+butter swap" },
      { ingredientId: "garlic", qty: 2, unit: "clove", role: "flavor" },
      { ingredientId: "butter", qty: 1, unit: "tbsp", role: "staple" },
      { ingredientId: "parmesan", qty: 25, unit: "g", role: "flavor" },
      { ingredientId: "salt", qty: null, unit: "to taste", role: "staple" }
    ],
    steps: [
      {
        id: "step-1",
        title: "Boil Penne",
        text: "Boil penne until al dente. Reserve 1/4 cup pasta water and drain.",
        timer: { label: "Boil", seconds: 540, cue: "al dente" }
      },
      {
        id: "step-2",
        title: "Whisk Pink Sauce",
        text: "In the warm pot, melt butter with garlic and tomato paste for 1 minute. Whisk in cream until velvety.",
        timer: { label: "Simmer Sauce", seconds: 60, cue: "smooth & pink" }
      },
      {
        id: "step-3",
        title: "Fold Pasta",
        text: "Toss penne and parmesan into the pink sauce and serve.",
        timer: null
      }
    ]
  }
];
