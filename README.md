# 🏡💜 Modern Real Estate & Property Management Solution

[![React](https://img.shields.io/badge/React-18.x-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux)](https://redux-toolkit.js.org/)
[![Performance](https://img.shields.io/badge/Performance-Optimized-success?style=for-the-badge)](#)

A high-performance, fully-featured real estate platform designed to streamline property discovery and management. This application demonstrates advanced frontend architecture, implementing state-of-the-art web technologies to ensure a seamless, scalable, and type-safe user experience.

🔗 **[Live Demo](https://eng-afraa-saleh.github.io/Esty/)**

---

## 🚀 Key Technical Features

* **Dynamic Property Engine:** Advanced filtering and search mechanisms for real-time property discovery.
* **Intelligent Chat System:** An integrated conversational UI (ChatBot) for automated customer engagement.
* **Adaptive Theme Engine:** System-wide Dark/Light mode implementation using Redux-managed state for consistent UI across sessions.
* **Modular Architecture:** Built with a "Component-First" approach, ensuring high reusability and clean separation of concerns.
* **High Performance:** Optimized asset loading and rendering using Vite and React 18 concurrent features.
* **Responsive UX:** Pixel-perfect implementation across all breakpoints, from mobile devices to high-resolution desktops.

---

## 🛠️ Technical Stack

* **Core:** React.js 18 (Functional Components & Hooks)
* **Language:** TypeScript (Strict Type Checking)
* **Build Tool:** Vite (Ultra-fast HMR and bundling)
* **State Management:** Redux Toolkit (Slices & Async Thunks)
* **Styling:** CSS3 / Modern Layout Engines
* **Deployment:** CI/CD via GitHub Actions / GitHub Pages

---

## 📂 System Architecture

The project follows a scalable directory structure designed for enterprise-level maintenance:

```text
src/
├── ChatBot/          # AI-driven chat components & logic
├── components/       # Shared UI library (Atoms, Molecules, Organisms)
├── data/             # Centralized data schemas and mock datasets
├── layouts/          # Persistent layout wrappers (Navigation, Footer)
├── pages/            # View components and route-level logic
├── redux/            # Global state configuration and feature slices
├── sections/         # Feature-specific UI segments (Hero, Features, Pricing)
├── svg/              # Optimized vector assets library
├── types/            # Centralized TypeScript interfaces & declarations
└── main.tsx          # Application entry point
```
## ⚙️ Installation & Development
To set up the project locally, follow these steps:

1. **Prerequisites**
Ensure you have Node.js (v16+ recommended) installed.

2. **Setup**
# Clone the repository
git clone [https://github.com/Eng-Afraa-Saleh/Esty.git](https://github.com/Eng-Afraa-Saleh/Esty.git)

# Navigate to the directory
cd Esty

# Install dependencies
npm install

# Launch development server
npm run dev

## 📦 Build for Production
The application is pre-configured for automated deployment. To generate a production-ready bundle:
```bash
npm run build
```
The output will be optimized for performance, including code splitting and asset minification.
