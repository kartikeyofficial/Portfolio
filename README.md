Kumar Kartikey - Software Developer Portfolio

A modern, high-performance, responsive portfolio web application built with **Angular 19**, **TypeScript**, and **Vanilla CSS**. Features an **Orange & Black** dark theme, **Orange & White** light theme, dynamic typing animation, categorized technical skills with official symbols, real-time GitHub statistics, interactive certificate and resume viewers, and a direct contact system.


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
