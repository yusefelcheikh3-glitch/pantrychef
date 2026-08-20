# PantryChef

PantryChef is a 100% client-side kitchen copilot that helps users solve dinner using ingredients they already have.

It provides:
- Pantry ingredient selection
- 80%+ recipe matching
- Smart ingredient substitutions
- Dinner mood filters
- Chef Mode with timers and serving scaling
- One-click shopping list export

No backend.
No database.
No accounts.
No build step required.

Run locally:
Open index.html directly in a browser.

Or serve the folder locally:

```bash
python3 -m http.server
```

Then open:
http://localhost:8000

Project structure:
- `index.html` - main app shell
- `styles.css` - visual design system
- `app.js` - application logic
- `data/taxonomy.js` - pantry category taxonomy
- `data/ingredients.js` - ingredient database
- `data/substitutions.js` - ingredient substitution hacks
- `data/recipes.js` - recipe database

How to maintain:
- To add or edit recipes, edit `data/recipes.js`.
- To add or edit ingredients, edit `data/ingredients.js`.
- To add or edit substitutions, edit `data/substitutions.js`.
- To edit categories or aliases, edit `data/taxonomy.js`.

No server maintenance required.
