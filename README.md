# Grace's Portfolio

Welcome to my personal portfolio website!  
This project showcases my skills, projects, and experience as a full-stack developer.

## 🚀 Features

- **Modern UI**: Built with React and Tailwind CSS for a clean, responsive design.
- **Project Gallery**: Highlights featured projects with links to GitHub and live demos.
- **Contact Form**: Send me a message directly via EmailJS.
- **Mobile Friendly**: Fully responsive and works on all devices.
- **Deployed on GitHub Pages**: [View Live Site](https://gracec-339.github.io/grace-portfolio)

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)
- [GitHub Pages](https://pages.github.com/)

## 📂 Project Structure

Main folders and files used in this portfolio:

- src/components/sections: Home, About, Projects, and Contact sections
- src/components: Navbar, MobileMenu, RevealOnScroll, and LoadingScreen
- src/App.jsx: Main page layout and section flow
- src/main.jsx: React entry point

## ⚙️ Getting Started

To run this project locally:

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

Production files are generated in the dist folder.

## 📌 Available Scripts

- npm run dev: Runs the app in development mode.
- npm run build: Builds the app for production.
- npm run preview: Previews the production build locally.
- npm run lint: Runs ESLint checks.

## 🚢 Deployment

This project deploys to GitHub Pages.

- Automatic deploy: GitHub Actions runs on push to the main branch.
- Manual deploy option: npm run deploy publishes the dist folder using gh-pages.

If the repository name changes, update the base path in vite.config.js and homepage in package.json.
