# Draft’s Developer Portfolio

<!-- 🚀 Project Badges -->
![GitHub Repo stars](https://img.shields.io/github/stars/Draftgamz/Portfolio-V2-Beta?style=social)
![GitHub forks](https://img.shields.io/github/forks/Draftgamz/Portfolio-V2-Beta?style=social)
![GitHub issues](https://img.shields.io/github/issues/Draftgamz/Portfolio-V2-Beta)
![GitHub last commit](https://img.shields.io/github/last-commit/Draftgamz/Portfolio-V2-Beta)
![Visitors](https://visitor-badge.laobi.icu/badge?page_id=Draftgamz.Portfolio-V2-Beta)
![Maintenance](https://img.shields.io/maintenance/yes/2025)
![Built With Love](https://img.shields.io/badge/Built%20with-%E2%9D%A4-red)
![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-ff69b4)

<!-- 🛠️ Tech & Tools -->
![Editor](https://img.shields.io/badge/Editor-VSCode-blue?logo=visualstudiocode)
![OS](https://img.shields.io/badge/Developed%20on-Windows%20%7C%20Linux-blue?logo=windows)
![Glassmorphism](https://img.shields.io/badge/Style-Glassmorphism-blueviolet)

<!-- 🔐 DevOps & CI -->
![Security](https://img.shields.io/badge/Security-Enabled-brightgreen?logo=github)

<!-- 😀 Miscellaneous -->
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![ESLint](https://img.shields.io/badge/Code%20Style-ESLint-purple?logo=eslint)
![Prettier](https://img.shields.io/badge/Formatter-Prettier-F7B93E?logo=prettier)

> A sleek, responsive, dark-themed personal portfolio website for Draft—a passionate 16-year-old developer enthusiastic about coding and exploring new technologies. This site highlights projects, skills, and contact information in a modern, engaging layout.

---

## 📌 Table of Contents

1. [Demo](#demo)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Screenshots](#screenshots)
5. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running in Development](#running-in-development)
   - [Building for Production](#building-for-production)
6. [Project Structure](#project-structure)
7. [Scripts & Commands](#scripts--commands)
8. [Deployment](#deployment)
9. [Contributing](#contributing)
10. [Contact](#contact)
11. [License](#license)

---

## 🚀 Demo

🔗 Live Site: [https://your-deployment-link.com](https://your-deployment-link.com)  
*Replace the above link with your actual deployment URL once live.*

---

## ✨ Features

* **Hero Section**  
  A compelling introduction with a brief bio, name, and a call-to-action button linking to work or contact.

* **About Section**  
  A concise overview of Draft's background, interests, and coding journey.

* **Projects Section**  
  Showcases completed projects with live demos, GitHub links, descriptions, technology badges, and screenshots.

* **Skills Section**  
  Categorized list of technical skills (languages, frameworks, tools) with proficiency indicators.

* **Contact Section**  
  A contact form with email integration and social media icons for GitHub, LinkedIn, and Twitter.

* **Responsive Design**  
  Mobile-first approach ensuring seamless adaptation across desktop, tablet, and mobile devices.

* **Dark Theme (Default)**  
  A clean dark mode aesthetic featuring high-contrast text and subtle color accents for a polished appearance.

* **Light/Dark Toggle (Optional)**  
  Option to switch between dark and light themes (if implemented).

* **Smooth Scrolling & Animations**  
  Subtle fade-ins, hover effects, and scroll-triggered animations for a modern user experience.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (v15.2.4)  
* **Language:** [TypeScript](https://www.typescriptlang.org/)  
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)  
* **UI Components:** [Radix UI](https://www.radix-ui.com/) & [shadcn/ui](https://github.com/shadcn/ui)  
* **Linting:** ESLint with Next.js configuration (`next lint`)  
* **Icons:** [Lucide Icons](https://lucide.dev/) (if used)  
* **Form Handling:** [React Hook Form](https://react-hook-form.com/) (if contact form is present)  

---

## 🖼️ Screenshots

> *Replace the placeholder images below with actual screenshots or GIFs of your live site.*

|                          Hero Section                          |                            Projects Section                            |                           Mobile View                           |
| :------------------------------------------------------------: | :--------------------------------------------------------------------: | :-------------------------------------------------------------: |
| ![Hero](https://via.placeholder.com/600x400?text=Hero+Section) | ![Projects](https://via.placeholder.com/600x400?text=Projects+Section) | ![Mobile](https://via.placeholder.com/300x600?text=Mobile+View) |

---

## 🧰 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

* **Node.js** ≥ v18 (LTS recommended)  
* **pnpm** ≥ v7 (or use npm/yarn)

Verify installation:

```bash
node -v
pnpm -v
```

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Draftgamz/Portfolio-V2-Beta.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd Portfolio-V2-Beta
   ```

3. **Install Dependencies**

   ```bash
   pnpm install
   ```

   *Alternatively, use `npm install` or `yarn install`.*

### Running in Development

Start the development server with hot-reloading:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page will auto-refresh when you edit source files.

### Building for Production

Compile and optimize the app for production deployment:

```bash
pnpm build
```

Run the production build locally:

```bash
pnpm start
```

Your site will be available at [http://localhost:3000](http://localhost:3000).

---

## 🗂️ Project Structure

```plaintext
├── app/
│   ├── layout.tsx         # Main layout component (header, footer, theme context)
│   ├── page.tsx           # Homepage / landing page
│   ├── globals.css        # Global CSS (imports Tailwind, custom styles)
│   └── ...                # Other route files (e.g., about/page.tsx, projects/page.tsx)
├── components/
│   ├── ui/                # shadcn/ui-style components (Button, Card, etc.)
│   ├── navigation.tsx     # Floating navbar component
│   ├── hero-section.tsx   # Hero section component
│   ├── about-section.tsx  # About section component
│   ├── project-card.tsx   # Component to render each project item
│   ├── skills-grid.tsx    # Skills listing component
│   ├── contact-form.tsx   # Contact form component
│   └── footer.tsx         # Footer component
├── public/
│   ├── favicon.ico        # Favicon
│   ├── logo.png           # Logo image
│   ├── hero-bg.jpg        # Background image
│   └── ...                # Other static assets (fonts, images)
├── lib/
│   ├── api.ts             # Utility functions for API calls (e.g., form submission)
│   └── utils.ts           # General helper functions
├── hooks/
│   └── useDarkMode.ts     # Custom hook to toggle light/dark theme (optional)
├── tailwind.config.ts     # Tailwind CSS configuration
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project metadata & scripts
└── README.md              # This README file
```

---

## 📜 Scripts & Commands

Inside the project directory, you can run:

| Command       | Description                                   |
| ------------- | --------------------------------------------- |
| `pnpm dev`    | Runs the development server (localhost:3000). |
| `pnpm build`  | Builds the app for production.                |
| `pnpm start`  | Starts the production server (after `build`). |
| `pnpm lint`   | Runs ESLint to check for code style issues.   |
| `pnpm format` | Formats code with Prettier (if configured).   |

*Adjust commands if using npm (`npm run dev`, etc.) or yarn (`yarn dev`).*

---

## 🚀 Deployment

This project can be deployed to platforms like Vercel, Netlify, or any static-hosting service that supports Next.js.

---

## 🤝 Contributing

Contributions are welcome and appreciated! If you have suggestions or find issues, please open an issue or submit a pull request.

---

## 📬 Contact

Made with ❤️ by **Draft**   
🔗 GitHub: [@Draftgamz](https://github.com/Draftgamz)

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for more information.
