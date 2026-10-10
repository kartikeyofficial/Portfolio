# 🚀 Kartikey Rajput - Software Developer Portfolio

A modern, high-performance, responsive portfolio web application built with **Angular 19**, **TypeScript**, and **Vanilla CSS**. Features an **Orange & Black** dark theme, **Orange & White** light theme, dynamic typing animation, categorized technical skills with official symbols, real-time GitHub statistics, interactive certificate and resume viewers, and a direct contact system.

---

## 🎨 Themes & Aesthetics
- **Dark Mode**: Electric Orange (`#FF6B00`) & Deep Obsidian Black (`#090A0F`) with glassmorphism and subtle glowing orbs.
- **Light Mode**: Electric Orange (`#FF6B00`) & Crisp Clean White (`#FFFFFF`, `#F8FAFC`).
- **Theme Switcher**: Instant reactive toggle with `ThemeService` and `localStorage` persistence.

---

## 🌟 Key Features

1. **Sticky Glassmorphic Navigation Bar**:
   - Direct travel links to all sections: **Home**, **About**, **Skills**, **Projects**, **Experience**, **Certifications**, **Education**, **GitHub Stats**, **Resume**, and **Contact**.
   - Dark/Light mode switcher with animated icons.
   - Quick resume download action button.
   - Fully responsive hamburger drawer for mobile devices.

2. **Hero / Introduction Section**:
   - Role status indicator: `🟢 Available for Software Developer Roles & Internships`.
   - Dynamic typewriter effect cycling through developer titles.
   - Interactive developer code terminal card with live stats badges and floating tech chips.
   - Quick CTA buttons and social connect icons.

3. **Grouped Skills with Official Tech Symbols**:
   - Filter tabs: `All Skills`, `Group Skills (Languages)`, `Frameworks & Libs`, `Database & Cloud`, `Developer Tools`, and `Core Concepts`.
   - Every skill has official icons (Devicon & FontAwesome), proficiency badges (`Expert`, `Advanced`, `Proficient`), and detailed descriptions.

4. **Featured Projects Showcase**:
   - Filter tabs: `All Projects`, `Full Stack`, `Frontend`, `Backend & API`.
   - Each project card includes:
     - Name & architecture summary
     - Tech stack badges
     - GitHub Source Code link
     - Live Deployed link with pulse indicator
     - Sleek gradient mockup preview

5. **Work Experience & Internships**:
   - Interactive vertical timeline with company symbols.
   - In-depth bullet points with measurable impact metrics.
   - **View Completion Certificate**: Interactive modal displaying official certificate details with print/save capabilities!

6. **Achievements & Certifications**:
   - Verified certifications (AWS, Meta, HackerRank Gold, LeetCode 500+ Milestone).
   - Certificate modal viewer with official certificate document styling.

7. **Education**:
   - Degree (B.Tech in Computer Science & Engineering).
   - Core technical coursework tags & academic honors (8.5+ CGPA).

8. **Live GitHub Statistics & Graph**:
   - Repository Statistics, Contribution Streak, and Top Languages cards.
   - Interactive username customizer allowing you to enter your GitHub username and live-update the graphs.

9. **Resume Viewer & Download**:
   - ATS-optimized resume preview.
   - "Download Resume (PDF)" and "View Full Interactive Resume" modals with print-ready paper formatting.

10. **Contact Me Section**:
    - Direct email: `rajputkartikey10@gmail.com` with 1-click **Copy Email** button and instant toast notifications.
    - Interactive Contact Form with reactive Angular validation.
    - More contacts info: LinkedIn, GitHub, LeetCode, Twitter/X, Discord, phone placeholder, and location.

---

## 📁 Project Structure

```
Portfolio/
├── public/                     # Static assets & favicon
├── src/
│   ├── index.html              # Google Fonts, Devicon, FontAwesome & SEO meta
│   ├── main.ts                 # Angular bootstrap
│   ├── styles.css              # Vanilla CSS design system & theme variables
│   └── app/
│       ├── app.component.ts    # Main Angular standalone component
│       ├── app.component.html  # Modern Angular template (@if, @for syntax)
│       ├── app.component.css   # Component-specific styles
│       ├── app.config.ts       # Application providers
│       ├── data/
│       │   └── portfolio.data.ts # ALL portfolio content (Skills, Projects, Experience, etc.)
│       ├── models/
│       │   └── portfolio.model.ts# TypeScript interfaces
│       └── services/
│           └── theme.service.ts # Signal-based Dark & Light theme manager
├── angular.json                # Angular CLI configuration
├── package.json                # Dependencies and scripts
└── tsconfig.json               # TypeScript config
```

---

## 🛠️ How to Customize Your Information

All your content is cleanly separated in **`src/app/data/portfolio.data.ts`**:
- **Edit Projects**: Update names, descriptions, GitHub links, and live URLs in `PROJECTS`.
- **Edit Skills**: Add or modify languages, frameworks, cloud tools, or icons in `SKILL_GROUPS`.
- **Edit Experience & Certificates**: Update roles, bullet points, and certificates in `EXPERIENCES`.
- **Edit Certifications**: Add credentials in `ACHIEVEMENTS`.
- **Edit Education**: Update degrees and grades in `EDUCATION_LIST`.
- **Edit Contact Info**: Your email (`rajputkartikey10@gmail.com`) and social profiles are located in `src/app/app.component.html` and `src/app/app.component.ts`.

---

## 🚀 How to Run Locally

1. **Install Dependencies** (already installed):
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/` in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```
   The production-ready static bundle will be generated in `dist/portfolio/browser`.

---

## 🌐 Deployment (Free Hosting)

- **Vercel**: Run `vercel` or link your GitHub repository. Build command: `npm run build`, Output directory: `dist/portfolio/browser`.
- **Netlify**: Drag and drop the `dist/portfolio/browser` folder, or link your GitHub repository with build command `npm run build`.
- **GitHub Pages**: Deploy the `dist/portfolio/browser` folder using `angular-cli-ghpages`.
