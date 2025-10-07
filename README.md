# 🤖 Bot Battlr (Advanced Version)

**Bot Battlr** is a React-based app where users can browse, enlist, and manage battle bots in their personal army.  
This upgraded version adheres to **React best practices and rubric requirements**, with optimized state management, reusable components, and clean code using normal CSS.

---

##  Features

- 🔹 **View all bots** from the server.
- 🔹 **Enlist/Remove bots** to/from your personal army.
- 🔹 **Prevent duplicates** in the army.
- 🔹 **Release or permanently delete bots.**
- 🔹 **Optimized state handling** — state held by the lowest common parent (`BotsPage`).
- 🔹 **Reusable, functional components** with props and hooks.
- 🔹 **Clean, minimal CSS design.**

---

##  Rubric Achievements

### ✅ Props & State
- State stored efficiently in `BotsPage.jsx` (the lowest common component).
- Props are passed cleanly to `BotCollection`, `YourBotArmy`, and `BotCard`.
- Functions to modify state are passed down as props.
- No unnecessary state duplication or prop drilling.

### ✅ Code Structure / Efficiency
- All components are **functional** and use **React Hooks (useState, useEffect)**.
- Uses **destructuring**, **spread operator**, and **pure functions**.
- Code is **abstracted logically** and **modular**.
- **Fetch request** implemented in the right lifecycle hook (`useEffect`).

### ✅ Rendering
- Renders all required UI and interactions.
- Components are **reusable and abstract**.
- Includes **extra features** like bot deletion and army prevention duplicates.

---

## 🗂️ Folder Structure

.
├── App.css
├── App.jsx
├── BotCard.jsx
├── BotCollection.jsx
├── BotsPage.jsx
├── YourBotArmy.jsx
├── assets
│   └── react.svg
├── components
│   ├── BotCard.jsx
│   ├── BotCollection.jsx
│   └── YourBotArmy.jsx
├── index.css
├── main.jsx
├── pages
│   └── BotsPage.jsx
├── styles
│   └── layout.css
└── utils
    └── api.js

5 directories, 15 files