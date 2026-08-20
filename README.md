# 🍳 PantryChef (v0.5)
> **Pick what you have. Get dinner solved.**

PantryChef is a 100% client-side kitchen copilot that turns what is in your fridge into realistic weeknight dinners with smart substitutions, automated ingredient matching, hands-free cooking timers, and an AI-powered custom dinner generator.

---

## 🌟 Features

- **🧠 Core vs Staple Weighted Matcher**: Prioritizes key proteins and carbs so basic seasonings and cooking oil do not penalize your match score.
- **⚡ "Assume Basics" Switch**: Assumes salt, black pepper, cooking oil, and tap water are on hand by default.
- **✨ AI Chef (Gemini 3.7 Flash & 3.6 Fallback)**: Invent custom, tailored weeknight meals based on your exact pantry items and flavor cravings.
- **🛡️ AI Schema Sanitizer & Fuzzy Resolver**: Guarantees AI recipes never crash the client by resolving hallucinated ingredient names into valid taxonomy entries.
- **👨‍🍳 Hands-Free Chef Mode**: Fullscreen, high-contrast step-by-step cooking mode with Web Audio completion chimes and Screen Wake Lock API.
- **💾 Recipe Backup & Export**: 1-click JSON backup and restore for your custom AI recipes.
- **🛒 Smart Shopping List**: Instant clipboard copy organized by grocery aisle.

---

## 🔒 API Security & HTTP Referrer Lock

To protect your Gemini API key from unauthorized usage or bot scrapers, apply an **HTTP Referrer Restriction** in the Google Cloud / AI Studio Console:

1. Go to the **[Google Cloud Console Credentials Page](https://console.cloud.google.com/apis/credentials)**.
2. Click on your API Key to edit its settings.
3. Under **Application restrictions**, select **Websites (HTTP referrers)**.
4. Add your website URL pattern:
   ```text
   https://yusefelcheikh3-glitch.github.io/pantrychef/*
   ```
5. Click **Save**. The key is now locked exclusively to your live website domain.

---

## 🚀 Local Development

No build tools, bundlers, or servers required:
```bash
# Simply open index.html in any browser:
open index.html
```

---

## 📄 License
MIT License. Built for zero-maintenance serverless distribution.
