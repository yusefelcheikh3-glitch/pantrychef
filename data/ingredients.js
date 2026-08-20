/**
 * PantryChef Comprehensive Ingredients Database (v1.1)
 */
window.PANTRY_INGREDIENTS = [
  // --- PROTEINS ---
  {
    id: "chicken",
    label: "Chicken (Any)",
    category: "proteins",
    subcategory: "poultry",
    isGeneric: true,
    aliases: ["poultry", "bird", "chicken meat"]
  },
  {
    id: "chicken-breast",
    label: "Chicken Breast",
    category: "proteins",
    subcategory: "poultry",
    matchGroups: ["chicken"],
    aliases: ["boneless chicken", "chicken breasts", "breast", "skinless chicken"]
  },
  {
    id: "chicken-thighs",
    label: "Chicken Thighs",
    category: "proteins",
    subcategory: "poultry",
    matchGroups: ["chicken"],
    aliases: ["thighs", "boneless chicken thighs", "chicken thigh"]
  },
  {
    id: "ground-beef",
    label: "Ground Beef",
    category: "proteins",
    subcategory: "meat",
    matchGroups: ["beef", "ground-meat"],
    aliases: ["mince", "beef mince", "minced beef", "hamburger meat"]
  },
  {
    id: "ground-turkey",
    label: "Ground Turkey",
    category: "proteins",
    subcategory: "poultry",
    matchGroups: ["turkey", "ground-meat"],
    aliases: ["turkey mince", "minced turkey"]
  },
  {
    id: "pork-chops",
    label: "Pork Chops",
    category: "proteins",
    subcategory: "meat",
    matchGroups: ["pork"],
    aliases: ["pork loin", "pork steak", "pork"]
  },
  {
    id: "bacon",
    label: "Bacon",
    category: "proteins",
    subcategory: "meat",
    matchGroups: ["pork"],
    aliases: ["bacon strips", "streaky bacon", "pancetta"]
  },
  {
    id: "sausage",
    label: "Sausage",
    category: "proteins",
    subcategory: "meat",
    matchGroups: ["pork", "sausage"],
    aliases: ["italian sausage", "chorizo", "bratwurst", "hot dogs", "sausages", "smoked sausage"]
  },
  {
    id: "salmon",
    label: "Salmon Fillet",
    category: "proteins",
    subcategory: "seafood",
    matchGroups: ["fish", "salmon"],
    aliases: ["salmon", "salmon steak", "fresh salmon", "fish fillet"]
  },
  {
    id: "white-fish",
    label: "White Fish",
    category: "proteins",
    subcategory: "seafood",
    matchGroups: ["fish"],
    aliases: ["cod", "tilapia", "halibut", "snapper", "basa", "haddock"]
  },
  {
    id: "shrimp",
    label: "Shrimp / Prawns",
    category: "proteins",
    subcategory: "seafood",
    matchGroups: ["seafood"],
    aliases: ["prawns", "frozen shrimp", "king prawns"]
  },
  {
    id: "eggs",
    label: "Eggs",
    category: "proteins",
    subcategory: "eggs",
    matchGroups: ["eggs"],
    aliases: ["egg", "fresh eggs", "egg yolks", "egg whites"]
  },
  {
    id: "tofu",
    label: "Tofu",
    category: "proteins",
    subcategory: "plant-protein",
    matchGroups: ["vegan-protein"],
    aliases: ["firm tofu", "extra firm tofu", "bean curd", "silken tofu"]
  },
  {
    id: "canned-tuna",
    label: "Canned Tuna",
    category: "proteins",
    subcategory: "seafood",
    matchGroups: ["fish", "canned-fish"],
    aliases: ["tuna", "tuna tin", "tuna in oil", "tuna in water"]
  },
  {
    id: "chickpeas",
    label: "Chickpeas (Garbanzo)",
    category: "proteins",
    subcategory: "legumes",
    matchGroups: ["legumes", "beans"],
    aliases: ["garbanzo beans", "chick peas", "canned chickpeas", "canned garbanzo"]
  },
  {
    id: "black-beans",
    label: "Black Beans",
    category: "proteins",
    subcategory: "legumes",
    matchGroups: ["legumes", "beans"],
    aliases: ["canned black beans", "frijoles negros"]
  },
  {
    id: "lentils",
    label: "Lentils",
    category: "proteins",
    subcategory: "legumes",
    matchGroups: ["legumes"],
    aliases: ["brown lentils", "red lentils", "green lentils", "dal"]
  },

  // --- VEGGIES ---
  {
    id: "onion",
    label: "Onion",
    category: "veggies",
    subcategory: "alliums",
    matchGroups: ["alliums"],
    aliases: ["yellow onion", "white onion", "red onion", "onions", "brown onion"]
  },
  {
    id: "garlic",
    label: "Garlic",
    category: "veggies",
    subcategory: "alliums",
    matchGroups: ["alliums"],
    aliases: ["garlic clove", "garlic cloves", "fresh garlic", "minced garlic"]
  },
  {
    id: "shallot",
    label: "Shallot",
    category: "veggies",
    subcategory: "alliums",
    matchGroups: ["alliums", "onion"],
    aliases: ["shallots", "french shallot", "eschalot"]
  },
  {
    id: "scallions",
    label: "Scallions / Green Onions",
    category: "veggies",
    subcategory: "alliums",
    matchGroups: ["alliums"],
    aliases: ["green onion", "spring onions", "spring onion", "green onions", "chives"]
  },
  {
    id: "ginger",
    label: "Fresh Ginger",
    category: "veggies",
    subcategory: "root",
    aliases: ["ginger root", "minced ginger", "fresh ginger"]
  },
  {
    id: "bell-pepper",
    label: "Bell Pepper / Capsicum",
    category: "veggies",
    subcategory: "fresh",
    aliases: ["capsicum", "red pepper", "green pepper", "sweet pepper", "peppers"]
  },
  {
    id: "carrot",
    label: "Carrots",
    category: "veggies",
    subcategory: "root",
    aliases: ["carrot", "baby carrots", "diced carrots"]
  },
  {
    id: "celery",
    label: "Celery",
    category: "veggies",
    subcategory: "fresh",
    aliases: ["celery stalks", "celery stick"]
  },
  {
    id: "broccoli",
    label: "Broccoli",
    category: "veggies",
    subcategory: "cruciferous",
    aliases: ["broccoli florets", "broccolini", "frozen broccoli"]
  },
  {
    id: "cauliflower",
    label: "Cauliflower",
    category: "veggies",
    subcategory: "cruciferous",
    aliases: ["cauliflower florets", "cauli"]
  },
  {
    id: "spinach",
    label: "Spinach",
    category: "veggies",
    subcategory: "leafy",
    aliases: ["baby spinach", "frozen spinach", "leafy greens", "spinach leaves"]
  },
  {
    id: "kale",
    label: "Kale",
    category: "veggies",
    subcategory: "leafy",
    aliases: ["curly kale", "tuscan kale", "lacinato kale"]
  },
  {
    id: "zucchini",
    label: "Zucchini / Courgette",
    category: "veggies",
    subcategory: "squash",
    aliases: ["courgette", "green zucchini", "summer squash"]
  },
  {
    id: "mushrooms",
    label: "Mushrooms",
    category: "veggies",
    subcategory: "fresh",
    aliases: ["cremini", "button mushrooms", "portobello", "brown mushrooms", "champignons"]
  },
  {
    id: "tomatoes",
    label: "Fresh Tomatoes",
    category: "veggies",
    subcategory: "tomatoes",
    matchGroups: ["tomatoes"],
    aliases: ["tomato", "vine tomatoes", "roma tomatoes", "beefsteak tomatoes"]
  },
  {
    id: "cherry-tomatoes",
    label: "Cherry Tomatoes",
    category: "veggies",
    subcategory: "tomatoes",
    matchGroups: ["tomatoes"],
    aliases: ["grape tomatoes", "mini tomatoes", "sweet tomatoes"]
  },
  {
    id: "canned-tomatoes",
    label: "Canned Tomatoes",
    category: "veggies",
    subcategory: "tomatoes",
    matchGroups: ["tomatoes"],
    aliases: ["diced tomatoes", "crushed tomatoes", "canned plum tomatoes", "tinned tomatoes", "chopped tomatoes", "passata"]
  },
  {
    id: "frozen-peas",
    label: "Frozen Peas",
    category: "veggies",
    subcategory: "frozen",
    aliases: ["peas", "green peas", "sweet peas"]
  },
  {
    id: "corn",
    label: "Corn (Canned/Frozen)",
    category: "veggies",
    subcategory: "frozen",
    aliases: ["sweetcorn", "canned corn", "frozen corn", "corn kernels"]
  },
  {
    id: "green-beans",
    label: "Green Beans",
    category: "veggies",
    subcategory: "fresh",
    aliases: ["string beans", "french beans", "snap beans"]
  },
  {
    id: "cabbage",
    label: "Cabbage",
    category: "veggies",
    subcategory: "cruciferous",
    aliases: ["green cabbage", "red cabbage", "savoy cabbage", "slaw"]
  },
  {
    id: "jalapeno",
    label: "Jalapeño / Chili",
    category: "veggies",
    subcategory: "fresh",
    aliases: ["chili", "hot pepper", "green chili", "red chili", "serrano"]
  },
  {
    id: "lemon",
    label: "Lemon / Fresh Juice",
    category: "veggies",
    subcategory: "fresh",
    aliases: ["lemons", "lemon juice", "fresh lemon"]
  },

  // --- CARBS ---
  {
    id: "rice",
    label: "Rice (White / Quick / Jasmine)",
    category: "carbs",
    subcategory: "grains",
    matchGroups: ["rice"],
    aliases: ["white rice", "cooked rice", "leftover rice", "jasmine rice", "basmati rice", "quick rice", "long grain rice"]
  },
  {
    id: "pasta",
    label: "Pasta (Any Shape)",
    category: "carbs",
    subcategory: "pasta",
    matchGroups: ["pasta"],
    aliases: ["dry pasta", "pasta noodles", "spaghetti", "penne", "rigatoni", "fettuccine", "linguine", "fusilli", "elbow macaroni", "tortellini", "gnocchi"]
  },
  {
    id: "spaghetti",
    label: "Spaghetti",
    category: "carbs",
    subcategory: "pasta",
    matchGroups: ["pasta"],
    aliases: ["spag", "long pasta", "noodles"]
  },
  {
    id: "penne",
    label: "Penne Pasta",
    category: "carbs",
    subcategory: "pasta",
    matchGroups: ["pasta"],
    aliases: ["short pasta", "tubular pasta"]
  },
  {
    id: "noodles",
    label: "Asian Noodles / Ramen",
    category: "carbs",
    subcategory: "pasta",
    matchGroups: ["pasta"],
    aliases: ["ramen noodles", "egg noodles", "rice noodles", "udon", "soba"]
  },
  {
    id: "bread",
    label: "Bread / Slices",
    category: "carbs",
    subcategory: "bread",
    aliases: ["sliced bread", "sourdough", "toast", "baguette", "sandwich bread", "ciabatta"]
  },
  {
    id: "tortillas",
    label: "Tortillas / Flatbread",
    category: "carbs",
    subcategory: "bread",
    aliases: ["flour tortillas", "corn tortillas", "wraps", "flatbread", "pita", "naan"]
  },
  {
    id: "potatoes",
    label: "Potatoes",
    category: "carbs",
    subcategory: "potatoes",
    aliases: ["russet potato", "gold potato", "baby potatoes", "red potatoes", "spuds"]
  },
  {
    id: "sweet-potatoes",
    label: "Sweet Potatoes",
    category: "carbs",
    subcategory: "potatoes",
    aliases: ["yams", "sweet potato", "kumara"]
  },
  {
    id: "quinoa",
    label: "Quinoa",
    category: "carbs",
    subcategory: "grains",
    aliases: ["white quinoa", "tri-color quinoa"]
  },
  {
    id: "couscous",
    label: "Couscous",
    category: "carbs",
    subcategory: "grains",
    aliases: ["moroccan couscous", "pearl couscous"]
  },
  {
    id: "oats",
    label: "Rolled Oats",
    category: "carbs",
    subcategory: "grains",
    aliases: ["oatmeal", "quick oats", "porridge oats"]
  },
  {
    id: "breadcrumbs",
    label: "Breadcrumbs / Panko",
    category: "carbs",
    subcategory: "bread",
    aliases: ["panko", "golden breadcrumbs", "dry breadcrumbs"]
  },

  // --- SAUCES ---
  {
    id: "salsa",
    label: "Salsa / Picante",
    category: "sauces",
    subcategory: "condiments",
    aliases: ["picante", "chunky salsa", "pico de gallo", "jar salsa"]
  },
  {
    id: "pesto",
    label: "Basil Pesto",
    category: "sauces",
    subcategory: "dressings",
    aliases: ["green pesto", "pesto alla genovese", "jar pesto"]
  },
  {
    id: "peanut-butter",
    label: "Peanut Butter",
    category: "sauces",
    subcategory: "condiments",
    aliases: ["creamy peanut butter", "crunchy peanut butter", "pb"]
  },
  {
    id: "honey",
    label: "Honey / Maple Syrup",
    category: "staples",
    subcategory: "sweeteners",
    aliases: ["maple syrup", "pure honey", "agave", "honey"]
  },
  {
    id: "soy-sauce",
    label: "Soy Sauce",
    category: "sauces",
    subcategory: "asian",
    aliases: ["soy", "tamari", "light soy sauce", "dark soy sauce", "shoyu"]
  },
  {
    id: "tomato-paste",
    label: "Tomato Paste / Puree",
    category: "sauces",
    subcategory: "tomato",
    aliases: ["tomato concentrate", "tomato puree"]
  },
  {
    id: "tomato-sauce",
    label: "Tomato Sauce / Passata",
    category: "sauces",
    subcategory: "tomato",
    matchGroups: ["tomatoes"],
    aliases: ["passata", "canned sauce", "crushed tomato sauce"]
  },
  {
    id: "marinara",
    label: "Marinara / Pasta Sauce",
    category: "sauces",
    subcategory: "tomato",
    matchGroups: ["tomatoes"],
    aliases: ["jar pasta sauce", "spaghetti sauce", "bolognese sauce"]
  },
  {
    id: "ketchup",
    label: "Ketchup",
    category: "sauces",
    subcategory: "condiments",
    aliases: ["catsup", "tomato ketchup"]
  },
  {
    id: "mustard",
    label: "Mustard (Dijon / Yellow)",
    category: "sauces",
    subcategory: "condiments",
    aliases: ["dijon mustard", "yellow mustard", "wholegrain mustard"]
  },
  {
    id: "mayonnaise",
    label: "Mayonnaise",
    category: "sauces",
    subcategory: "condiments",
    aliases: ["mayo", "kewpie mayo"]
  },
  {
    id: "hot-sauce",
    label: "Hot Sauce / Chili Sauce",
    category: "sauces",
    subcategory: "condiments",
    aliases: ["tobasco", "cholula", "franks red hot", "chili sauce"]
  },
  {
    id: "sriracha",
    label: "Sriracha",
    category: "sauces",
    subcategory: "asian",
    aliases: ["rooster sauce", "thai hot sauce"]
  },
  {
    id: "bbq-sauce",
    label: "BBQ Sauce",
    category: "sauces",
    subcategory: "condiments",
    aliases: ["barbecue sauce", "smoky bbq"]
  },

  // --- STAPLES ---
  {
    id: "olive-oil",
    label: "Olive Oil",
    category: "staples",
    subcategory: "fats",
    matchGroups: ["cooking-oil", "oil"],
    aliases: ["extra virgin olive oil", "evoo", "cooking oil"]
  },
  {
    id: "neutral-oil",
    label: "Vegetable / Canola Oil",
    category: "staples",
    subcategory: "fats",
    matchGroups: ["cooking-oil", "oil"],
    aliases: ["canola oil", "vegetable oil", "sunflower oil", "avocado oil", "cooking oil"]
  },
  {
    id: "butter",
    label: "Butter",
    category: "staples",
    subcategory: "dairy",
    aliases: ["salted butter", "unsalted butter", "ghee"]
  },
  {
    id: "milk",
    label: "Milk (Any Dairy / Plant)",
    category: "staples",
    subcategory: "dairy",
    aliases: ["whole milk", "skim milk", "cow milk", "oat milk", "soy milk", "almond milk"]
  },
  {
    id: "heavy-cream",
    label: "Heavy Cream / Whipping Cream",
    category: "staples",
    subcategory: "dairy",
    aliases: ["cream", "whipping cream", "heavy whipping cream", "double cream"]
  },
  {
    id: "sour-cream",
    label: "Sour Cream",
    category: "staples",
    subcategory: "dairy",
    aliases: ["creme fraiche", "sour cream"]
  },
  {
    id: "greek-yogurt",
    label: "Greek Yogurt / Plain Yogurt",
    category: "staples",
    subcategory: "dairy",
    aliases: ["plain yogurt", "natural yogurt", "greek style yogurt", "yogurt"]
  },
  {
    id: "cheese",
    label: "Cheese (Cheddar / Jack)",
    category: "staples",
    subcategory: "dairy",
    matchGroups: ["cheese"],
    aliases: ["cheddar", "monterey jack", "shredded cheese", "grated cheese", "tasty cheese", "gouda"]
  },
  {
    id: "parmesan",
    label: "Parmesan / Hard Cheese",
    category: "staples",
    subcategory: "dairy",
    matchGroups: ["cheese"],
    aliases: ["parmigiano reggiano", "grated parmesan", "pecorino", "parm"]
  },
  {
    id: "mozzarella",
    label: "Mozzarella",
    category: "staples",
    subcategory: "dairy",
    matchGroups: ["cheese"],
    aliases: ["fresh mozzarella", "pizza cheese", "shredded mozzarella"]
  },
  {
    id: "feta",
    label: "Feta Cheese",
    category: "staples",
    subcategory: "dairy",
    matchGroups: ["cheese"],
    aliases: ["crumbled feta", "greek feta", "goat cheese"]
  },
  {
    id: "flour",
    label: "All-Purpose Flour",
    category: "staples",
    subcategory: "baking",
    aliases: ["plain flour", "white flour", "wheat flour"]
  },
  {
    id: "cornstarch",
    label: "Cornstarch / Cornflour",
    category: "staples",
    subcategory: "baking",
    aliases: ["cornflour", "maize starch"]
  },
  {
    id: "sugar",
    label: "Granulated Sugar",
    category: "staples",
    subcategory: "sweeteners",
    aliases: ["white sugar", "table sugar"]
  },
  {
    id: "brown-sugar",
    label: "Brown Sugar",
    category: "staples",
    subcategory: "sweeteners",
    aliases: ["dark brown sugar", "light brown sugar"]
  },
  {
    id: "white-vinegar",
    label: "White Vinegar",
    category: "staples",
    subcategory: "acids",
    matchGroups: ["vinegar"],
    aliases: ["distilled vinegar", "spirit vinegar"]
  },
  {
    id: "apple-cider-vinegar",
    label: "Apple Cider Vinegar",
    category: "staples",
    subcategory: "acids",
    matchGroups: ["vinegar"],
    aliases: ["acv", "cider vinegar"]
  },
  {
    id: "chicken-broth",
    label: "Chicken Broth / Stock",
    category: "staples",
    subcategory: "broths",
    matchGroups: ["broth"],
    aliases: ["chicken stock", "bouillon", "chicken bouillon cube"]
  },
  {
    id: "beef-broth",
    label: "Beef Broth / Stock",
    category: "staples",
    subcategory: "broths",
    matchGroups: ["broth"],
    aliases: ["beef stock", "beef bouillon", "bone broth"]
  },
  {
    id: "salt",
    label: "Salt",
    category: "staples",
    subcategory: "spices",
    matchGroups: ["assumed-staple"],
    aliases: ["table salt", "sea salt", "kosher salt", "fine salt"]
  },
  {
    id: "black-pepper",
    label: "Black Pepper",
    category: "staples",
    subcategory: "spices",
    matchGroups: ["assumed-staple"],
    aliases: ["ground black pepper", "cracked pepper", "black peppercorn", "pepper"]
  },
  {
    id: "paprika",
    label: "Paprika / Sweet Paprika",
    category: "staples",
    subcategory: "spices",
    aliases: ["sweet paprika", "ground paprika"]
  },
  {
    id: "smoked-paprika",
    label: "Smoked Paprika",
    category: "staples",
    subcategory: "spices",
    aliases: ["spanish paprika", "pimenton"]
  },
  {
    id: "cumin",
    label: "Ground Cumin",
    category: "staples",
    subcategory: "spices",
    aliases: ["cumin powder", "jeera"]
  },
  {
    id: "chili-powder",
    label: "Chili Powder",
    category: "staples",
    subcategory: "spices",
    aliases: ["cayenne pepper", "ground chili", "chilli powder"]
  },
  {
    id: "oregano",
    label: "Dried Oregano",
    category: "staples",
    subcategory: "spices",
    aliases: ["oregano flakes", "mexican oregano", "italian herbs"]
  },
  {
    id: "curry-powder",
    label: "Curry Powder",
    category: "staples",
    subcategory: "spices",
    aliases: ["madras curry powder", "yellow curry powder", "garam masala"]
  },
  {
    id: "red-pepper-flakes",
    label: "Red Pepper Flakes",
    category: "staples",
    subcategory: "spices",
    aliases: ["crushed red pepper", "chilli flakes", "pepper flakes"]
  }
];
