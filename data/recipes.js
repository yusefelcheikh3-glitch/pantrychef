/**
 * PantryChef Recipe Database
 */
window.PANTRY_RECIPES = [
  {
    "id": "garlic-butter-chicken-rice-skillet",
    "title": "Garlic Butter Chicken Rice Skillet",
    "subtitle": "Golden seared chicken tossed with fragrant garlic butter, tender rice, and wilted greens.",
    "moods": [
      "15-minute",
      "one-pot",
      "high-protein",
      "budget"
    ],
    "totalTimeMinutes": 15,
    "activeTimeMinutes": 15,
    "baseServings": 2,
    "equipment": [
      "Large skillet"
    ],
    "ingredients": [
      {
        "ingredientId": "chicken-thighs",
        "qty": 350,
        "unit": "g",
        "role": "core",
        "note": "cut bite-size"
      },
      {
        "ingredientId": "rice",
        "qty": 300,
        "unit": "g",
        "role": "core",
        "note": "cooked or microwave rice"
      },
      {
        "ingredientId": "butter",
        "qty": 2,
        "unit": "tbsp",
        "role": "flavor"
      },
      {
        "ingredientId": "garlic",
        "qty": 3,
        "unit": "clove",
        "role": "flavor",
        "note": "minced"
      },
      {
        "ingredientId": "chicken-broth",
        "qty": 60,
        "unit": "ml",
        "role": "flavor"
      },
      {
        "ingredientId": "neutral-oil",
        "qty": 1,
        "unit": "tbsp",
        "role": "staple"
      },
      {
        "ingredientId": "paprika",
        "qty": 1,
        "unit": "tsp",
        "role": "flavor"
      },
      {
        "ingredientId": "salt",
        "qty": null,
        "unit": "to taste",
        "role": "staple"
      },
      {
        "ingredientId": "black-pepper",
        "qty": null,
        "unit": "to taste",
        "role": "staple"
      },
      {
        "ingredientId": "spinach",
        "qty": 60,
        "unit": "g",
        "role": "optional"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Sear Chicken",
        "text": "Season chicken with paprika, salt, and pepper. Sear in hot oil for 4 minutes until golden.",
        "timer": {
          "label": "Sear",
          "seconds": 240,
          "cue": "golden crust"
        }
      },
      {
        "id": "step-2",
        "title": "Garlic Butter Sauce",
        "text": "Add garlic, butter, and broth. Let bubble rapidly for 1 minute.",
        "timer": {
          "label": "Sauce",
          "seconds": 60,
          "cue": "glossy butter sauce"
        }
      },
      {
        "id": "step-3",
        "title": "Toss Rice",
        "text": "Fold in cooked rice and spinach. Toss until heated through.",
        "timer": {
          "label": "Warm",
          "seconds": 120,
          "cue": "wilted"
        }
      }
    ]
  },
  {
    "id": "honey-garlic-chicken",
    "title": "Three-Ingredient Honey Garlic Chicken & Rice",
    "subtitle": "Crisp golden chicken bites glazed in a sticky, sweet-and-savory caramelized garlic sauce.",
    "moods": [
      "15-minute",
      "one-pot",
      "high-protein"
    ],
    "totalTimeMinutes": 15,
    "activeTimeMinutes": 15,
    "baseServings": 2,
    "equipment": [
      "Large skillet"
    ],
    "ingredients": [
      {
        "ingredientId": "chicken-thighs",
        "qty": 350,
        "unit": "g",
        "role": "core",
        "note": "cut bite-size"
      },
      {
        "ingredientId": "honey",
        "qty": 3,
        "unit": "tbsp",
        "role": "flavor"
      },
      {
        "ingredientId": "garlic",
        "qty": 4,
        "unit": "clove",
        "role": "core",
        "note": "minced"
      },
      {
        "ingredientId": "rice",
        "qty": 300,
        "unit": "g",
        "role": "core",
        "note": "cooked rice"
      },
      {
        "ingredientId": "soy-sauce",
        "qty": 2,
        "unit": "tbsp",
        "role": "flavor"
      },
      {
        "ingredientId": "neutral-oil",
        "qty": 1,
        "unit": "tbsp",
        "role": "staple"
      },
      {
        "ingredientId": "salt",
        "qty": null,
        "unit": "to taste",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Sear Chicken",
        "text": "Sear seasoned chicken pieces in oil over high heat for 4 minutes until golden.",
        "timer": {
          "label": "Sear",
          "seconds": 240,
          "cue": "golden"
        }
      },
      {
        "id": "step-2",
        "title": "Caramelize Glaze",
        "text": "Add minced garlic, honey, and soy sauce. Toss continuously as honey bubbles into a thick sticky lacquer.",
        "timer": {
          "label": "Glaze",
          "seconds": 120,
          "cue": "thick & sticky"
        }
      },
      {
        "id": "step-3",
        "title": "Serve with Rice",
        "text": "Spoon glazed chicken directly over warm rice.",
        "timer": null
      }
    ]
  },
  {
    "id": "two-ingredient-salsa-chicken",
    "title": "Two-Ingredient Salsa Chicken & Rice",
    "subtitle": "Tender chicken simmered in rich zesty salsa over rice.",
    "moods": [
      "15-minute",
      "one-pot",
      "high-protein",
      "budget"
    ],
    "totalTimeMinutes": 15,
    "activeTimeMinutes": 5,
    "baseServings": 2,
    "equipment": [
      "Skillet with lid"
    ],
    "ingredients": [
      {
        "ingredientId": "chicken-breast",
        "qty": 350,
        "unit": "g",
        "role": "core",
        "note": "cut bite-size"
      },
      {
        "ingredientId": "salsa",
        "qty": 200,
        "unit": "g",
        "role": "flavor"
      },
      {
        "ingredientId": "rice",
        "qty": 250,
        "unit": "g",
        "role": "core",
        "note": "for serving"
      },
      {
        "ingredientId": "neutral-oil",
        "qty": 1,
        "unit": "tbsp",
        "role": "staple"
      },
      {
        "ingredientId": "cheese",
        "qty": 40,
        "unit": "g",
        "role": "optional"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Sear Chicken",
        "text": "Sear chicken in oil for 3 minutes.",
        "timer": {
          "label": "Sear",
          "seconds": 180,
          "cue": "golden"
        }
      },
      {
        "id": "step-2",
        "title": "Simmer in Salsa",
        "text": "Pour salsa over chicken. Cover and simmer 6 minutes until cooked through.",
        "timer": {
          "label": "Simmer",
          "seconds": 360,
          "cue": "tender"
        }
      },
      {
        "id": "step-3",
        "title": "Serve",
        "text": "Serve over rice and top with cheese.",
        "timer": null
      }
    ]
  },
  {
    "id": "bbq-chicken-rice-bowl",
    "title": "12-Minute Smoky BBQ Chicken Rice Bowl",
    "subtitle": "Pan-seared chicken glazed in sweet smoky BBQ sauce over fluffy rice.",
    "moods": [
      "15-minute",
      "one-pot",
      "high-protein",
      "budget"
    ],
    "totalTimeMinutes": 12,
    "activeTimeMinutes": 12,
    "baseServings": 2,
    "equipment": [
      "Skillet"
    ],
    "ingredients": [
      {
        "ingredientId": "chicken-thighs",
        "qty": 350,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "bbq-sauce",
        "qty": 4,
        "unit": "tbsp",
        "role": "flavor"
      },
      {
        "ingredientId": "rice",
        "qty": 300,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "neutral-oil",
        "qty": 1,
        "unit": "tbsp",
        "role": "staple"
      },
      {
        "ingredientId": "salt",
        "qty": null,
        "unit": "to taste",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Sear Chicken",
        "text": "Sear chicken in hot oil for 4 minutes until browned.",
        "timer": {
          "label": "Sear",
          "seconds": 240,
          "cue": "browned"
        }
      },
      {
        "id": "step-2",
        "title": "BBQ Glaze",
        "text": "Pour BBQ sauce over chicken and toss for 1 minute until caramelized.",
        "timer": {
          "label": "Glaze",
          "seconds": 60,
          "cue": "sticky"
        }
      },
      {
        "id": "step-3",
        "title": "Serve",
        "text": "Spoon over hot rice.",
        "timer": null
      }
    ]
  },
  {
    "id": "clean-the-fridge-fried-rice",
    "title": "Clean-the-Fridge Golden Fried Rice",
    "subtitle": "The ultimate 10-minute dinner for leftover rice, scrambled eggs, and savory soy.",
    "moods": [
      "15-minute",
      "one-pot",
      "budget",
      "clean-fridge"
    ],
    "totalTimeMinutes": 10,
    "activeTimeMinutes": 10,
    "baseServings": 2,
    "equipment": [
      "Skillet or wok"
    ],
    "ingredients": [
      {
        "ingredientId": "rice",
        "qty": 350,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "eggs",
        "qty": 3,
        "unit": "whole",
        "role": "core"
      },
      {
        "ingredientId": "soy-sauce",
        "qty": 2,
        "unit": "tbsp",
        "role": "flavor"
      },
      {
        "ingredientId": "garlic",
        "qty": 2,
        "unit": "clove",
        "role": "flavor"
      },
      {
        "ingredientId": "onion",
        "qty": 0.5,
        "unit": "whole",
        "role": "flavor"
      },
      {
        "ingredientId": "neutral-oil",
        "qty": 2,
        "unit": "tbsp",
        "role": "staple"
      },
      {
        "ingredientId": "frozen-peas",
        "qty": 80,
        "unit": "g",
        "role": "optional"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Scramble Eggs",
        "text": "Scramble eggs in oil for 45 seconds until soft. Set aside.",
        "timer": {
          "label": "Scramble",
          "seconds": 45,
          "cue": "soft curds"
        }
      },
      {
        "id": "step-2",
        "title": "Fry Rice",
        "text": "Fry rice in pan with garlic for 2 minutes.",
        "timer": {
          "label": "Fry",
          "seconds": 120,
          "cue": "toasted"
        }
      },
      {
        "id": "step-3",
        "title": "Combine",
        "text": "Drizzle soy sauce and fold eggs back in. Toss for 1 minute.",
        "timer": {
          "label": "Toss",
          "seconds": 60,
          "cue": "golden"
        }
      }
    ]
  },
  {
    "id": "cheesy-chicken-rice-skillet",
    "title": "15-Minute Cheesy Chicken & Rice Skillet",
    "subtitle": "Tender chicken and rice folded with gooey melted cheese and sweet garlic.",
    "moods": [
      "15-minute",
      "one-pot",
      "high-protein",
      "budget"
    ],
    "totalTimeMinutes": 15,
    "activeTimeMinutes": 15,
    "baseServings": 2,
    "equipment": [
      "Skillet with lid"
    ],
    "ingredients": [
      {
        "ingredientId": "chicken-breast",
        "qty": 350,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "rice",
        "qty": 300,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "cheese",
        "qty": 100,
        "unit": "g",
        "role": "core",
        "note": "cheddar or mozzarella"
      },
      {
        "ingredientId": "garlic",
        "qty": 2,
        "unit": "clove",
        "role": "flavor"
      },
      {
        "ingredientId": "neutral-oil",
        "qty": 1,
        "unit": "tbsp",
        "role": "staple"
      },
      {
        "ingredientId": "salt",
        "qty": null,
        "unit": "to taste",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Sear Chicken",
        "text": "Sear chicken in oil for 4 minutes until cooked.",
        "timer": {
          "label": "Sear",
          "seconds": 240,
          "cue": "golden"
        }
      },
      {
        "id": "step-2",
        "title": "Fold Rice & Melt Cheese",
        "text": "Stir in rice and garlic. Top with shredded cheese, cover with lid for 2 minutes to melt.",
        "timer": {
          "label": "Melt Cheese",
          "seconds": 120,
          "cue": "gooey & bubbling"
        }
      }
    ]
  },
  {
    "id": "lemon-pepper-chicken-rice",
    "title": "12-Minute Lemon Pepper Chicken & Rice",
    "subtitle": "Zesty pan-seared chicken with cracked black pepper and fresh lemon juice over fluffy rice.",
    "moods": [
      "15-minute",
      "one-pot",
      "high-protein"
    ],
    "totalTimeMinutes": 12,
    "activeTimeMinutes": 12,
    "baseServings": 2,
    "equipment": [
      "Skillet"
    ],
    "ingredients": [
      {
        "ingredientId": "chicken-breast",
        "qty": 350,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "lemon",
        "qty": 0.5,
        "unit": "whole",
        "role": "flavor"
      },
      {
        "ingredientId": "rice",
        "qty": 300,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "black-pepper",
        "qty": null,
        "unit": "to taste",
        "role": "staple"
      },
      {
        "ingredientId": "neutral-oil",
        "qty": 1,
        "unit": "tbsp",
        "role": "staple"
      },
      {
        "ingredientId": "salt",
        "qty": null,
        "unit": "to taste",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Sear Chicken",
        "text": "Season chicken generously with black pepper and salt. Sear in oil for 4 minutes per side.",
        "timer": {
          "label": "Sear",
          "seconds": 240,
          "cue": "golden"
        }
      },
      {
        "id": "step-2",
        "title": "Lemon Glaze",
        "text": "Squeeze fresh lemon juice into pan to deglaze. Spoon over chicken and serve with rice.",
        "timer": null
      }
    ]
  },
  {
    "id": "mustard-honey-chicken",
    "title": "Crispy Honey Mustard Chicken & Rice",
    "subtitle": "Pan-seared chicken glazed in tangy mustard and sweet honey over warm rice.",
    "moods": [
      "15-minute",
      "high-protein",
      "one-pan"
    ],
    "totalTimeMinutes": 14,
    "activeTimeMinutes": 14,
    "baseServings": 2,
    "equipment": [
      "Skillet"
    ],
    "ingredients": [
      {
        "ingredientId": "chicken-breast",
        "qty": 350,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "mustard",
        "qty": 2,
        "unit": "tbsp",
        "role": "flavor"
      },
      {
        "ingredientId": "honey",
        "qty": 2,
        "unit": "tbsp",
        "role": "flavor"
      },
      {
        "ingredientId": "rice",
        "qty": 300,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "neutral-oil",
        "qty": 1,
        "unit": "tbsp",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Sear",
        "text": "Sear chicken in oil for 4 minutes.",
        "timer": {
          "label": "Sear",
          "seconds": 240,
          "cue": "golden"
        }
      },
      {
        "id": "step-2",
        "title": "Glaze",
        "text": "Add mustard and honey, simmer 2 minutes. Serve over rice.",
        "timer": {
          "label": "Glaze",
          "seconds": 120,
          "cue": "glazed"
        }
      }
    ]
  },
  {
    "id": "teriyaki-chicken-rice",
    "title": "15-Minute Sweet Teriyaki Chicken & Rice",
    "subtitle": "Pan-seared chicken glazed in sweet savory teriyaki soy sauce over fluffy rice.",
    "moods": [
      "15-minute",
      "one-pot",
      "high-protein"
    ],
    "totalTimeMinutes": 15,
    "activeTimeMinutes": 15,
    "baseServings": 2,
    "equipment": [
      "Large skillet"
    ],
    "ingredients": [
      {
        "ingredientId": "chicken-thighs",
        "qty": 350,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "soy-sauce",
        "qty": 3,
        "unit": "tbsp",
        "role": "flavor"
      },
      {
        "ingredientId": "sugar",
        "qty": 1.5,
        "unit": "tbsp",
        "role": "flavor",
        "note": "or honey"
      },
      {
        "ingredientId": "rice",
        "qty": 300,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "garlic",
        "qty": 2,
        "unit": "clove",
        "role": "flavor"
      },
      {
        "ingredientId": "neutral-oil",
        "qty": 1,
        "unit": "tbsp",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Sear Chicken",
        "text": "Sear chicken pieces in oil for 4 minutes until golden.",
        "timer": {
          "label": "Sear",
          "seconds": 240,
          "cue": "golden"
        }
      },
      {
        "id": "step-2",
        "title": "Teriyaki Glaze",
        "text": "Pour in soy sauce, sugar, and garlic. Let bubble for 2 minutes until glossy.",
        "timer": {
          "label": "Glaze",
          "seconds": 120,
          "cue": "glossy"
        }
      },
      {
        "id": "step-3",
        "title": "Serve",
        "text": "Serve chicken and sweet sauce over rice.",
        "timer": null
      }
    ]
  },
  {
    "id": "butter-garlic-noodles",
    "title": "Comforting Garlic Butter Noodles",
    "subtitle": "Silky noodles coated in melted butter, golden toasted garlic, and parmesan.",
    "moods": [
      "15-minute",
      "budget",
      "one-pot"
    ],
    "totalTimeMinutes": 12,
    "activeTimeMinutes": 12,
    "baseServings": 2,
    "equipment": [
      "Pot"
    ],
    "ingredients": [
      {
        "ingredientId": "pasta",
        "qty": 200,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "butter",
        "qty": 3,
        "unit": "tbsp",
        "role": "core"
      },
      {
        "ingredientId": "garlic",
        "qty": 4,
        "unit": "clove",
        "role": "core"
      },
      {
        "ingredientId": "parmesan",
        "qty": 30,
        "unit": "g",
        "role": "flavor"
      },
      {
        "ingredientId": "salt",
        "qty": null,
        "unit": "to taste",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Boil",
        "text": "Boil pasta until al dente. Save 1/3 cup cooking water.",
        "timer": {
          "label": "Boil",
          "seconds": 480,
          "cue": "al dente"
        }
      },
      {
        "id": "step-2",
        "title": "Garlic Butter",
        "text": "Melt butter in pot, sizzle garlic for 1 minute.",
        "timer": {
          "label": "Saut\u00e9",
          "seconds": 60,
          "cue": "fragrant"
        }
      },
      {
        "id": "step-3",
        "title": "Emulsify",
        "text": "Toss pasta and parmesan with pasta water until creamy.",
        "timer": null
      }
    ]
  },
  {
    "id": "pesto-pasta",
    "title": "10-Minute Basil Pesto Pasta",
    "subtitle": "Hot al dente pasta swirled with fragrant basil pesto and creamy parmesan.",
    "moods": [
      "15-minute",
      "budget",
      "one-pot"
    ],
    "totalTimeMinutes": 10,
    "activeTimeMinutes": 10,
    "baseServings": 2,
    "equipment": [
      "Pot"
    ],
    "ingredients": [
      {
        "ingredientId": "pasta",
        "qty": 220,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "pesto",
        "qty": 4,
        "unit": "tbsp",
        "role": "flavor"
      },
      {
        "ingredientId": "parmesan",
        "qty": 25,
        "unit": "g",
        "role": "flavor"
      },
      {
        "ingredientId": "salt",
        "qty": null,
        "unit": "to taste",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Boil Pasta",
        "text": "Boil pasta until al dente. Reserve 1/4 cup pasta water and drain.",
        "timer": {
          "label": "Boil",
          "seconds": 540,
          "cue": "al dente"
        }
      },
      {
        "id": "step-2",
        "title": "Toss Pesto",
        "text": "Stir pesto and 2 tbsp pasta water into hot pasta until glossy.",
        "timer": null
      }
    ]
  },
  {
    "id": "one-pot-tomato-basil-pasta",
    "title": "One-Pot Rich Tomato Basil Pasta",
    "subtitle": "Pasta cooks directly inside a rich tomato-garlic broth with zero colander cleanup.",
    "moods": [
      "one-pot",
      "budget",
      "15-minute"
    ],
    "totalTimeMinutes": 15,
    "activeTimeMinutes": 5,
    "baseServings": 2,
    "equipment": [
      "Pot"
    ],
    "ingredients": [
      {
        "ingredientId": "pasta",
        "qty": 220,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "canned-tomatoes",
        "qty": 400,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "garlic",
        "qty": 3,
        "unit": "clove",
        "role": "flavor"
      },
      {
        "ingredientId": "olive-oil",
        "qty": 2,
        "unit": "tbsp",
        "role": "staple"
      },
      {
        "ingredientId": "salt",
        "qty": null,
        "unit": "to taste",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Boil Together",
        "text": "Add pasta, tomatoes, garlic, oil, and 2 cups water. Boil 9 minutes until sauce thickens.",
        "timer": {
          "label": "Boil",
          "seconds": 540,
          "cue": "al dente"
        }
      }
    ]
  },
  {
    "id": "beef-and-broccoli",
    "title": "15-Minute Savory Beef & Broccoli",
    "subtitle": "Crispy browned beef tossed with tender broccoli florets in a savory garlic-soy pan glaze.",
    "moods": [
      "15-minute",
      "one-pot",
      "high-protein"
    ],
    "totalTimeMinutes": 15,
    "activeTimeMinutes": 15,
    "baseServings": 2,
    "equipment": [
      "Large skillet"
    ],
    "ingredients": [
      {
        "ingredientId": "ground-beef",
        "qty": 350,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "broccoli",
        "qty": 200,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "soy-sauce",
        "qty": 2,
        "unit": "tbsp",
        "role": "flavor"
      },
      {
        "ingredientId": "garlic",
        "qty": 3,
        "unit": "clove",
        "role": "flavor"
      },
      {
        "ingredientId": "neutral-oil",
        "qty": 1,
        "unit": "tbsp",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Brown Beef",
        "text": "Brown beef in skillet for 4 minutes.",
        "timer": {
          "label": "Brown",
          "seconds": 240,
          "cue": "browned"
        }
      },
      {
        "id": "step-2",
        "title": "Steam Broccoli",
        "text": "Add broccoli, garlic, and 2 tbsp water. Cover for 2 minutes.",
        "timer": {
          "label": "Steam",
          "seconds": 120,
          "cue": "bright green"
        }
      },
      {
        "id": "step-3",
        "title": "Glaze",
        "text": "Pour in soy sauce and toss for 1 minute.",
        "timer": {
          "label": "Toss",
          "seconds": 60,
          "cue": "coated"
        }
      }
    ]
  },
  {
    "id": "korean-beef-bowls",
    "title": "12-Minute Sweet & Savory Korean Beef Bowls",
    "subtitle": "Caramelized savory ground beef in garlic, soy sauce, and honey served over hot rice.",
    "moods": [
      "15-minute",
      "one-pot",
      "high-protein",
      "budget"
    ],
    "totalTimeMinutes": 12,
    "activeTimeMinutes": 12,
    "baseServings": 2,
    "equipment": [
      "Skillet"
    ],
    "ingredients": [
      {
        "ingredientId": "ground-beef",
        "qty": 350,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "soy-sauce",
        "qty": 2.5,
        "unit": "tbsp",
        "role": "flavor"
      },
      {
        "ingredientId": "honey",
        "qty": 1.5,
        "unit": "tbsp",
        "role": "flavor"
      },
      {
        "ingredientId": "rice",
        "qty": 300,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "garlic",
        "qty": 3,
        "unit": "clove",
        "role": "flavor"
      },
      {
        "ingredientId": "neutral-oil",
        "qty": 1,
        "unit": "tbsp",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Brown Beef",
        "text": "Brown ground beef in hot oil for 4 minutes.",
        "timer": {
          "label": "Brown",
          "seconds": 240,
          "cue": "crispy"
        }
      },
      {
        "id": "step-2",
        "title": "Glaze",
        "text": "Pour in soy sauce, honey, and garlic. Simmer 1 minute.",
        "timer": {
          "label": "Glaze",
          "seconds": 60,
          "cue": "glossy"
        }
      },
      {
        "id": "step-3",
        "title": "Serve",
        "text": "Spoon over hot rice.",
        "timer": null
      }
    ]
  },
  {
    "id": "grilled-cheese-tomato-soup",
    "title": "Classic Golden Grilled Cheese & Tomato Dip",
    "subtitle": "Buttery, golden-toasted sourdough packed with melted cheese and served with warm tomato soup.",
    "moods": [
      "15-minute",
      "budget",
      "one-pot"
    ],
    "totalTimeMinutes": 10,
    "activeTimeMinutes": 10,
    "baseServings": 2,
    "equipment": [
      "Skillet"
    ],
    "ingredients": [
      {
        "ingredientId": "bread",
        "qty": 4,
        "unit": "slice",
        "role": "core"
      },
      {
        "ingredientId": "cheese",
        "qty": 100,
        "unit": "g",
        "role": "core",
        "note": "cheddar or mozzarella"
      },
      {
        "ingredientId": "butter",
        "qty": 2,
        "unit": "tbsp",
        "role": "core"
      },
      {
        "ingredientId": "canned-tomatoes",
        "qty": 300,
        "unit": "g",
        "role": "flavor",
        "note": "warmed with pinch salt"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Butter Bread",
        "text": "Butter outside of bread slices generously. Sandwich shredded cheese inside.",
        "timer": null
      },
      {
        "id": "step-2",
        "title": "Pan Toast",
        "text": "Toast in skillet over medium heat for 3 minutes per side until golden brown and cheese is gooey.",
        "timer": {
          "label": "Toast",
          "seconds": 180,
          "cue": "golden crust"
        }
      }
    ]
  },
  {
    "id": "crispy-potato-egg-hash",
    "title": "Crispy Skillet Potato & Fried Egg Hash",
    "subtitle": "Golden pan-crisped potatoes topped with sunny-side up runny fried eggs.",
    "moods": [
      "15-minute",
      "budget",
      "one-pot"
    ],
    "totalTimeMinutes": 15,
    "activeTimeMinutes": 15,
    "baseServings": 2,
    "equipment": [
      "Skillet with lid"
    ],
    "ingredients": [
      {
        "ingredientId": "potatoes",
        "qty": 3,
        "unit": "whole",
        "role": "core",
        "note": "diced small"
      },
      {
        "ingredientId": "eggs",
        "qty": 3,
        "unit": "whole",
        "role": "core"
      },
      {
        "ingredientId": "butter",
        "qty": 2,
        "unit": "tbsp",
        "role": "core"
      },
      {
        "ingredientId": "paprika",
        "qty": 1,
        "unit": "tsp",
        "role": "flavor"
      },
      {
        "ingredientId": "salt",
        "qty": null,
        "unit": "to taste",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Crisp Potatoes",
        "text": "Melt butter in skillet. Add diced potatoes and paprika. Cover and cook 7 minutes until fork tender and crisp.",
        "timer": {
          "label": "Crisp Potatoes",
          "seconds": 420,
          "cue": "golden crust"
        }
      },
      {
        "id": "step-2",
        "title": "Fry Eggs",
        "text": "Make spaces in potatoes and crack eggs into pan. Cook 3 minutes until whites are set.",
        "timer": {
          "label": "Fry Eggs",
          "seconds": 180,
          "cue": "sunny side"
        }
      }
    ]
  },
  {
    "id": "three-ingredient-teriyaki-salmon",
    "title": "Three-Ingredient Sweet Teriyaki Salmon",
    "subtitle": "Pan-seared tender salmon fillets glazed with sweet caramelized soy sauce.",
    "moods": [
      "15-minute",
      "one-pot",
      "high-protein"
    ],
    "totalTimeMinutes": 12,
    "activeTimeMinutes": 12,
    "baseServings": 2,
    "equipment": [
      "Skillet"
    ],
    "ingredients": [
      {
        "ingredientId": "salmon",
        "qty": 2,
        "unit": "whole",
        "role": "core"
      },
      {
        "ingredientId": "soy-sauce",
        "qty": 2,
        "unit": "tbsp",
        "role": "flavor"
      },
      {
        "ingredientId": "honey",
        "qty": 1.5,
        "unit": "tbsp",
        "role": "flavor"
      },
      {
        "ingredientId": "neutral-oil",
        "qty": 1,
        "unit": "tbsp",
        "role": "staple"
      },
      {
        "ingredientId": "rice",
        "qty": 250,
        "unit": "g",
        "role": "optional"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Sear Salmon",
        "text": "Sear salmon in oil for 4 minutes.",
        "timer": {
          "label": "Sear",
          "seconds": 240,
          "cue": "crispy"
        }
      },
      {
        "id": "step-2",
        "title": "Glaze",
        "text": "Add soy sauce and honey. Baste salmon for 2 minutes.",
        "timer": {
          "label": "Glaze",
          "seconds": 120,
          "cue": "glazed"
        }
      }
    ]
  },
  {
    "id": "lemon-butter-salmon-green-beans",
    "title": "12-Minute Lemon Butter Salmon & Crisp Beans",
    "subtitle": "Pan-seared salmon with a sizzling garlic-lemon pan sauce and tender green beans.",
    "moods": [
      "15-minute",
      "one-pot",
      "high-protein"
    ],
    "totalTimeMinutes": 12,
    "activeTimeMinutes": 12,
    "baseServings": 2,
    "equipment": [
      "Skillet"
    ],
    "ingredients": [
      {
        "ingredientId": "salmon",
        "qty": 2,
        "unit": "whole",
        "role": "core"
      },
      {
        "ingredientId": "lemon",
        "qty": 0.5,
        "unit": "whole",
        "role": "flavor"
      },
      {
        "ingredientId": "butter",
        "qty": 2,
        "unit": "tbsp",
        "role": "core"
      },
      {
        "ingredientId": "green-beans",
        "qty": 200,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "neutral-oil",
        "qty": 1,
        "unit": "tbsp",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Sear Salmon & Beans",
        "text": "Sear in skillet with oil for 4 minutes.",
        "timer": {
          "label": "Sear",
          "seconds": 240,
          "cue": "crispy"
        }
      },
      {
        "id": "step-2",
        "title": "Butter Lemon",
        "text": "Drop in butter and lemon juice. Baste for 2 minutes.",
        "timer": {
          "label": "Baste",
          "seconds": 120,
          "cue": "glossy"
        }
      }
    ]
  },
  {
    "id": "garlic-butter-shrimp-rice",
    "title": "10-Minute Garlic Butter Shrimp & Rice",
    "subtitle": "Pan-seared shrimp in golden garlic butter and lemon over fluffy rice.",
    "moods": [
      "15-minute",
      "one-pot",
      "high-protein"
    ],
    "totalTimeMinutes": 10,
    "activeTimeMinutes": 10,
    "baseServings": 2,
    "equipment": [
      "Skillet"
    ],
    "ingredients": [
      {
        "ingredientId": "shrimp",
        "qty": 300,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "rice",
        "qty": 300,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "butter",
        "qty": 2.5,
        "unit": "tbsp",
        "role": "core"
      },
      {
        "ingredientId": "garlic",
        "qty": 4,
        "unit": "clove",
        "role": "core"
      },
      {
        "ingredientId": "neutral-oil",
        "qty": 1,
        "unit": "tbsp",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Sear Shrimp",
        "text": "Sear shrimp in oil for 2 minutes.",
        "timer": {
          "label": "Sear",
          "seconds": 120,
          "cue": "pink"
        }
      },
      {
        "id": "step-2",
        "title": "Garlic Butter",
        "text": "Add butter and garlic. Sizzle for 60 seconds.",
        "timer": {
          "label": "Saut\u00e9",
          "seconds": 60,
          "cue": "fragrant"
        }
      },
      {
        "id": "step-3",
        "title": "Serve",
        "text": "Spoon over warm rice.",
        "timer": null
      }
    ]
  },
  {
    "id": "crispy-black-bean-quesadillas",
    "title": "Crispy Black Bean & Cheddar Melts",
    "subtitle": "Toasted golden tortillas packed with seasoned black beans and melted cheese.",
    "moods": [
      "15-minute",
      "budget",
      "one-pot",
      "clean-fridge"
    ],
    "totalTimeMinutes": 10,
    "activeTimeMinutes": 10,
    "baseServings": 2,
    "equipment": [
      "Skillet"
    ],
    "ingredients": [
      {
        "ingredientId": "tortillas",
        "qty": 4,
        "unit": "whole",
        "role": "core"
      },
      {
        "ingredientId": "black-beans",
        "qty": 240,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "cheese",
        "qty": 120,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "butter",
        "qty": 1,
        "unit": "tbsp",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Assemble",
        "text": "Spread mashed black beans and cheese over tortillas. Fold in half.",
        "timer": null
      },
      {
        "id": "step-2",
        "title": "Pan Crisp",
        "text": "Melt butter in pan. Crisp 2.5 minutes per side until golden.",
        "timer": {
          "label": "Crisp",
          "seconds": 150,
          "cue": "melted & crunchy"
        }
      }
    ]
  },
  {
    "id": "tuna-quesadillas",
    "title": "10-Minute Crispy Tuna & Cheddar Melts",
    "subtitle": "Savory canned tuna paired with gooey melted cheese inside a crispy toasted tortilla.",
    "moods": [
      "15-minute",
      "budget",
      "one-pot"
    ],
    "totalTimeMinutes": 10,
    "activeTimeMinutes": 10,
    "baseServings": 2,
    "equipment": [
      "Skillet"
    ],
    "ingredients": [
      {
        "ingredientId": "canned-tuna",
        "qty": 1,
        "unit": "can",
        "role": "core"
      },
      {
        "ingredientId": "tortillas",
        "qty": 2,
        "unit": "whole",
        "role": "core"
      },
      {
        "ingredientId": "cheese",
        "qty": 80,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "butter",
        "qty": 1,
        "unit": "tbsp",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Crisp",
        "text": "Place tuna and cheese in tortilla, crisp in butter for 2.5 minutes per side.",
        "timer": {
          "label": "Crisp",
          "seconds": 150,
          "cue": "melted"
        }
      }
    ]
  },
  {
    "id": "peanut-noodles",
    "title": "10-Minute Creamy Peanut Noodles",
    "subtitle": "Hot noodles tossed in a rich, savory peanut butter and soy sauce dressing.",
    "moods": [
      "15-minute",
      "budget",
      "one-pot"
    ],
    "totalTimeMinutes": 10,
    "activeTimeMinutes": 10,
    "baseServings": 2,
    "equipment": [
      "Pot"
    ],
    "ingredients": [
      {
        "ingredientId": "noodles",
        "qty": 200,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "peanut-butter",
        "qty": 3,
        "unit": "tbsp",
        "role": "core"
      },
      {
        "ingredientId": "soy-sauce",
        "qty": 2,
        "unit": "tbsp",
        "role": "flavor"
      },
      {
        "ingredientId": "honey",
        "qty": 1,
        "unit": "tbsp",
        "role": "flavor"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Boil",
        "text": "Boil noodles. Whisk peanut butter, soy sauce, and 3 tbsp warm noodle water.",
        "timer": {
          "label": "Boil",
          "seconds": 300,
          "cue": "tender"
        }
      },
      {
        "id": "step-2",
        "title": "Toss",
        "text": "Toss hot noodles in the peanut sauce and serve.",
        "timer": null
      }
    ]
  },
  {
    "id": "creamy-tomato-chickpea-curry",
    "title": "15-Minute Creamy Chickpea Curry",
    "subtitle": "Hearty pantry chickpeas simmered in a spiced tomato sauce finished with cream or yogurt.",
    "moods": [
      "one-pot",
      "budget",
      "high-protein",
      "clean-fridge",
      "15-minute"
    ],
    "totalTimeMinutes": 15,
    "activeTimeMinutes": 15,
    "baseServings": 2,
    "equipment": [
      "Saucepan"
    ],
    "ingredients": [
      {
        "ingredientId": "chickpeas",
        "qty": 400,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "canned-tomatoes",
        "qty": 300,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "curry-powder",
        "qty": 1.5,
        "unit": "tbsp",
        "role": "flavor"
      },
      {
        "ingredientId": "neutral-oil",
        "qty": 1,
        "unit": "tbsp",
        "role": "staple"
      },
      {
        "ingredientId": "salt",
        "qty": null,
        "unit": "to taste",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Simmer",
        "text": "Simmer chickpeas and curry powder in tomatoes for 6 minutes.",
        "timer": {
          "label": "Simmer",
          "seconds": 360,
          "cue": "bubbling curry"
        }
      }
    ]
  },
  {
    "id": "sausage-rice-skillet",
    "title": "One-Pan Smoky Sausage Rice Skillet",
    "subtitle": "Browned sausage tossed with tender rice, garlic, and sweet caramelized onions.",
    "moods": [
      "one-pot",
      "budget",
      "high-protein",
      "15-minute"
    ],
    "totalTimeMinutes": 14,
    "activeTimeMinutes": 14,
    "baseServings": 2,
    "equipment": [
      "Large skillet"
    ],
    "ingredients": [
      {
        "ingredientId": "sausage",
        "qty": 300,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "rice",
        "qty": 300,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "onion",
        "qty": 0.5,
        "unit": "whole",
        "role": "flavor"
      },
      {
        "ingredientId": "garlic",
        "qty": 2,
        "unit": "clove",
        "role": "flavor"
      },
      {
        "ingredientId": "neutral-oil",
        "qty": 1,
        "unit": "tbsp",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Brown Sausage",
        "text": "Sizzle sausage and onion in oil for 4 minutes.",
        "timer": {
          "label": "Brown",
          "seconds": 240,
          "cue": "browned"
        }
      },
      {
        "id": "step-2",
        "title": "Toss Rice",
        "text": "Toss in cooked rice and garlic for 2 minutes.",
        "timer": {
          "label": "Toss",
          "seconds": 120,
          "cue": "warm"
        }
      }
    ]
  },
  {
    "id": "sheet-pan-sausage-peppers",
    "title": "Sheet-Pan Smoky Sausage & Peppers",
    "subtitle": "Sliced sausage and sweet bell peppers roasted to caramelized perfection.",
    "moods": [
      "one-pot",
      "clean-fridge",
      "high-protein"
    ],
    "totalTimeMinutes": 20,
    "activeTimeMinutes": 5,
    "baseServings": 2,
    "equipment": [
      "Baking sheet or skillet"
    ],
    "ingredients": [
      {
        "ingredientId": "sausage",
        "qty": 300,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "bell-pepper",
        "qty": 2,
        "unit": "whole",
        "role": "core"
      },
      {
        "ingredientId": "onion",
        "qty": 1,
        "unit": "whole",
        "role": "core"
      },
      {
        "ingredientId": "olive-oil",
        "qty": 1,
        "unit": "tbsp",
        "role": "staple"
      },
      {
        "ingredientId": "paprika",
        "qty": 1,
        "unit": "tsp",
        "role": "flavor"
      },
      {
        "ingredientId": "salt",
        "qty": null,
        "unit": "to taste",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Toss & Roast",
        "text": "Toss sausage and peppers with oil and paprika. Roast in 200C oven or skillet for 12 minutes.",
        "timer": {
          "label": "Roast",
          "seconds": 720,
          "cue": "caramelized"
        }
      }
    ]
  },
  {
    "id": "shakshuka",
    "title": "Classic Shakshuka (Eggs in Tomato Sauce)",
    "subtitle": "Gently poached eggs in a rich, bubbling garlic-tomato sauce spiced with smoked paprika.",
    "moods": [
      "one-pot",
      "budget",
      "high-protein"
    ],
    "totalTimeMinutes": 15,
    "activeTimeMinutes": 5,
    "baseServings": 2,
    "equipment": [
      "Skillet with lid"
    ],
    "ingredients": [
      {
        "ingredientId": "eggs",
        "qty": 4,
        "unit": "whole",
        "role": "core"
      },
      {
        "ingredientId": "canned-tomatoes",
        "qty": 400,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "paprika",
        "qty": 1.5,
        "unit": "tsp",
        "role": "flavor"
      },
      {
        "ingredientId": "garlic",
        "qty": 2,
        "unit": "clove",
        "role": "flavor"
      },
      {
        "ingredientId": "olive-oil",
        "qty": 1,
        "unit": "tbsp",
        "role": "staple"
      },
      {
        "ingredientId": "salt",
        "qty": null,
        "unit": "to taste",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Simmer Sauce",
        "text": "Saut\u00e9 garlic, pour tomatoes and paprika. Simmer 4 minutes.",
        "timer": {
          "label": "Simmer",
          "seconds": 240,
          "cue": "thick sauce"
        }
      },
      {
        "id": "step-2",
        "title": "Poach Eggs",
        "text": "Crack eggs into wells in the sauce. Cover and cook 5 minutes until whites set.",
        "timer": {
          "label": "Poach",
          "seconds": 300,
          "cue": "runny yolks"
        }
      }
    ]
  },
  {
    "id": "salsa-chicken-soup",
    "title": "Three-Ingredient Salsa Chicken Soup",
    "subtitle": "Hearty warming soup made by simmering chicken and chunky salsa in savory broth.",
    "moods": [
      "15-minute",
      "one-pot",
      "high-protein",
      "budget"
    ],
    "totalTimeMinutes": 15,
    "activeTimeMinutes": 5,
    "baseServings": 2,
    "equipment": [
      "Saucepan"
    ],
    "ingredients": [
      {
        "ingredientId": "chicken-breast",
        "qty": 300,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "salsa",
        "qty": 200,
        "unit": "g",
        "role": "flavor"
      },
      {
        "ingredientId": "chicken-broth",
        "qty": 400,
        "unit": "ml",
        "role": "core"
      },
      {
        "ingredientId": "salt",
        "qty": null,
        "unit": "to taste",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Simmer",
        "text": "Simmer chicken, salsa, and broth in saucepan for 8 minutes.",
        "timer": {
          "label": "Simmer",
          "seconds": 480,
          "cue": "tender"
        }
      }
    ]
  },
  {
    "id": "creamy-tomato-penne",
    "title": "12-Minute Creamy Tomato Pink Penne",
    "subtitle": "Silky penne coated in a velvety blush sauce of crushed tomatoes and cream.",
    "moods": [
      "15-minute",
      "one-pot",
      "budget"
    ],
    "totalTimeMinutes": 12,
    "activeTimeMinutes": 12,
    "baseServings": 2,
    "equipment": [
      "Pot"
    ],
    "ingredients": [
      {
        "ingredientId": "penne",
        "qty": 220,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "tomato-paste",
        "qty": 3,
        "unit": "tbsp",
        "role": "core"
      },
      {
        "ingredientId": "heavy-cream",
        "qty": 80,
        "unit": "ml",
        "role": "core"
      },
      {
        "ingredientId": "butter",
        "qty": 1,
        "unit": "tbsp",
        "role": "staple"
      },
      {
        "ingredientId": "salt",
        "qty": null,
        "unit": "to taste",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Boil & Sauce",
        "text": "Boil penne. Whisk tomato paste and cream into warm butter, then toss with pasta.",
        "timer": {
          "label": "Boil",
          "seconds": 540,
          "cue": "al dente"
        }
      }
    ]
  },
  {
    "id": "tuscan-chicken",
    "title": "Creamy Tuscan Garlic Chicken",
    "subtitle": "Golden chicken simmered with tomatoes and spinach in a velvety garlic cream sauce.",
    "moods": [
      "15-minute",
      "one-pot",
      "high-protein"
    ],
    "totalTimeMinutes": 16,
    "activeTimeMinutes": 16,
    "baseServings": 2,
    "equipment": [
      "Skillet"
    ],
    "ingredients": [
      {
        "ingredientId": "chicken-breast",
        "qty": 350,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "canned-tomatoes",
        "qty": 200,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "spinach",
        "qty": 60,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "heavy-cream",
        "qty": 80,
        "unit": "ml",
        "role": "core"
      },
      {
        "ingredientId": "garlic",
        "qty": 3,
        "unit": "clove",
        "role": "flavor"
      },
      {
        "ingredientId": "olive-oil",
        "qty": 1,
        "unit": "tbsp",
        "role": "staple"
      },
      {
        "ingredientId": "salt",
        "qty": null,
        "unit": "to taste",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Sear Chicken",
        "text": "Sear chicken in oil for 4 minutes per side.",
        "timer": {
          "label": "Sear",
          "seconds": 360,
          "cue": "golden"
        }
      },
      {
        "id": "step-2",
        "title": "Cream Sauce",
        "text": "Simmer garlic, tomatoes, and cream for 2 minutes.",
        "timer": {
          "label": "Simmer",
          "seconds": 120,
          "cue": "bubbling"
        }
      },
      {
        "id": "step-3",
        "title": "Fold Spinach",
        "text": "Fold in spinach and return chicken to coat.",
        "timer": null
      }
    ]
  },
  {
    "id": "mediterranean-tuna-rice-bowl",
    "title": "10-Minute Mediterranean Tuna & Rice Bowl",
    "subtitle": "Fluffy rice tossed with canned tuna, sweet tomatoes, and olive oil.",
    "moods": [
      "15-minute",
      "budget",
      "high-protein"
    ],
    "totalTimeMinutes": 10,
    "activeTimeMinutes": 10,
    "baseServings": 2,
    "equipment": [
      "Bowl"
    ],
    "ingredients": [
      {
        "ingredientId": "canned-tuna",
        "qty": 1,
        "unit": "can",
        "role": "core"
      },
      {
        "ingredientId": "rice",
        "qty": 300,
        "unit": "g",
        "role": "core"
      },
      {
        "ingredientId": "tomatoes",
        "qty": 1,
        "unit": "whole",
        "role": "core"
      },
      {
        "ingredientId": "olive-oil",
        "qty": 1.5,
        "unit": "tbsp",
        "role": "flavor"
      },
      {
        "ingredientId": "salt",
        "qty": null,
        "unit": "to taste",
        "role": "staple"
      }
    ],
    "steps": [
      {
        "id": "step-1",
        "title": "Toss & Serve",
        "text": "Fold tuna, fresh diced tomatoes, and olive oil into warm rice.",
        "timer": null
      }
    ]
  }
];
