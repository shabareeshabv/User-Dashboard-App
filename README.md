# User Dashboard

A responsive User Management Dashboard built with React, Vite, and Tailwind CSS.  
Manage users, view details, and search/filter users with a modern UI.

# Tech Stack

- Frontend: React, Vite, Tailwind CSS
- Routing: React Router
- State Management: React Context API
- Icons: react-icons
- Deployment: Vercel / Netlify

# Features

- Add new users dynamically
- Search users by name with real-time filtering
- View detailed user information
- Fully responsive layout
- Smooth animations and hover effects
- Modular component structure

# Project Structure
src/
│
├─ components/
│ ├─ UserCard.jsx
│ └─ UserForm.jsx
│
├─ context/
│ └─ UserContext.jsx
│
├─ pages/
│ ├─ Dashboard.jsx
│ └─ UserDetails.jsx
│
└─ App.jsx


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
