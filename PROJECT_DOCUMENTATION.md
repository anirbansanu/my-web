# My Web — Comprehensive Project Documentation

> **Purpose:** This document is a structured, AI-consumable reference for the "My Web" personal portfolio website. It is designed so that any AI coding assistant (GitHub Copilot, Claude, ChatGPT, etc.) can read it and produce code that is perfectly consistent with the existing project in terms of design, architecture, naming conventions, and code style — without needing any additional context.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technology Stack & Dependencies](#2-technology-stack--dependencies)
3. [Project Structure](#3-project-structure)
4. [Architecture & Component Structure](#4-architecture--component-structure)
5. [Routing](#5-routing)
6. [Design System & Visual Identity](#6-design-system--visual-identity)
7. [Typography System](#7-typography-system)
8. [Spacing & Layout System](#8-spacing--layout-system)
9. [Component Design Patterns](#9-component-design-patterns)
10. [Animations & Interactions](#10-animations--interactions)
11. [Responsive Design & Breakpoints](#11-responsive-design--breakpoints)
12. [Content Structure & Data Management](#12-content-structure--data-management)
13. [Naming Conventions & Code Style](#13-naming-conventions--code-style)
14. [Asset Management](#14-asset-management)
15. [Build & Development Commands](#15-build--development-commands)
16. [Guidelines for AI-Assisted Development](#16-guidelines-for-ai-assisted-development)

---

## 1. Project Overview

| Property        | Value                                              |
| --------------- | -------------------------------------------------- |
| **Project Name** | My Web (`my_web`)                                 |
| **Type**         | Personal Portfolio Website                        |
| **Owner**        | Anirban Mukherjee                                 |
| **Version**      | 0.1.0                                             |
| **Base URL Path** | `/my-web` (designed for GitHub Pages deployment) |
| **Theme**        | Dark-themed, developer-focused portfolio          |
| **Primary Font** | IBM Plex Mono / monospace                         |

The website showcases the owner's profile, skills in full-stack web development, project portfolio (categorised into Programming, Scripting, and Web), resume/education history, and a contact form.

---

## 2. Technology Stack & Dependencies

### Core Framework

| Technology           | Version    | Purpose                            |
| -------------------- | ---------- | ---------------------------------- |
| **React**            | ^17.0.2    | UI library (class & functional components) |
| **ReactDOM**         | ^17.0.2    | DOM rendering                      |
| **React Router DOM** | ^5.2.0     | Client-side routing (`BrowserRouter`, `Switch`, `Route`, `Link`) |
| **React Scripts**    | 4.0.3      | Create React App build toolchain (Webpack, Babel, ESLint) |

### CSS Framework & Styling

| Technology           | Version / Source                        | Purpose                              |
| -------------------- | --------------------------------------- | ------------------------------------ |
| **Bootstrap**        | 5.0.1 (CDN in `index.html`)            | Grid system, utility classes, navbar, cards, forms |
| **Bootstrap Icons**  | ^1.5.0 (npm) + 1.3.0 (CDN)            | Icon font for UI icons               |
| **Custom CSS**       | Multiple files (`style.css`, `svg.css`, `App.css`, `index.css`) | Project-specific styles              |

### Animation Libraries

| Technology | Version | Purpose                                         |
| ---------- | ------- | ----------------------------------------------- |
| **AOS**    | ^2.3.4  | Animate On Scroll — scroll-triggered animations |

### Particle Effects

| Technology              | Version | Purpose                              |
| ----------------------- | ------- | ------------------------------------ |
| **react-particles-js**  | ^3.5.3  | Particle background effects (legacy) |
| **react-tsparticles**   | ^1.30.4 | Particle background effects          |
| **tsparticles**         | ^1.30.4 | Core particle engine                 |

### Deployment

| Technology   | Version | Purpose                         |
| ------------ | ------- | ------------------------------- |
| **gh-pages** | ^3.2.3  | GitHub Pages deployment utility |

### Testing

| Technology                     | Version  | Purpose             |
| ------------------------------ | -------- | ------------------- |
| **@testing-library/jest-dom**  | ^5.14.1  | Jest DOM matchers   |
| **@testing-library/react**     | ^11.2.7  | React testing utils |
| **@testing-library/user-event**| ^12.8.3  | User event simulation |
| **web-vitals**                 | ^1.1.2   | Performance metrics |

### External CDN Resources (loaded in `public/index.html`)

| Resource             | URL                                                                                      |
| -------------------- | ---------------------------------------------------------------------------------------- |
| Bootstrap 5.0.1 CSS  | `https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css`                |
| Bootstrap Icons 1.3  | `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css`            |
| Bootstrap 5.0.1 JS   | `https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js`           |
| IBM Plex Mono Font   | `https://fonts.googleapis.com/css?family=IBM Plex Mono`                                  |

### Package Manager

- **npm** (inferred from `package.json` structure; no `yarn.lock` present)

---

## 3. Project Structure

```
my-web/
├── package.json                    # Project metadata, dependencies, scripts
├── README.md                       # Project readme
│
├── public/                         # Static public assets (served as-is)
│   ├── index.html                  # HTML entry point (loads Bootstrap CDN, Google Fonts)
│   ├── manifest.json               # PWA manifest
│   ├── robots.txt                  # Search engine crawling rules
│   ├── style.css                   # Public-level global styles (IBM Plex Mono, dark theme base)
│   └── images/                     # Project showcase images (referenced by URL in ProjectData.js)
│       ├── allinone.png            # HTML/CSS/JS stack image
│       ├── arduino.gif             # Arduino project image
│       ├── cpp.gif                 # C++ project image
│       ├── esp8266.gif             # ESP8266 project image
│       ├── ExLink24.png            # External link icon
│       ├── github.png              # GitHub icon
│       ├── hacking.gif             # Hacking/security project image
│       ├── htmlcssjsphp.png        # Full-stack project image
│       └── reactProject.png        # React project image
│
└── src/                            # Source code root
    ├── index.js                    # React entry point (renders <App /> into #root)
    ├── index.css                   # Base body/code font styles
    ├── App.js                      # Root component (Router, routes, layout)
    ├── App.css                     # CRA default styles (mostly unused)
    ├── App.test.js                 # Default CRA test
    ├── style.css                   # Primary custom stylesheet (colours, nav, resume, contact, responsive)
    ├── svg.css                     # SVG stroke-animation styles for section headers
    ├── reportWebVitals.js          # Performance reporting (CRA default)
    ├── setupTests.js               # Test setup (CRA default)
    │
    ├── assets/                     # Static assets imported into components
    │   ├── font/                   # Local font files
    │   │   ├── Merriweather-Regular.ttf
    │   │   ├── Merriweather-Bold.ttf
    │   │   ├── Merriweather-BoldItalic.ttf
    │   │   ├── Merriweather-Black.ttf
    │   │   ├── Merriweather-BlackItalic.ttf
    │   │   ├── Merriweather-Italic.ttf
    │   │   ├── Merriweather-Light.ttf
    │   │   ├── Merriweather-LightItalic.ttf
    │   │   └── OFL.txt             # Open Font License
    │   ├── iconImgs/               # Small UI icons and tech-stack images
    │   │   ├── ExLink24.png        # External link icon (24px)
    │   │   ├── github.png          # GitHub icon
    │   │   ├── 8266.gif            # ESP8266 icon
    │   │   ├── arduino.gif         # Arduino icon
    │   │   ├── cppdatabase.gif     # C++ database icon
    │   │   ├── hacking.gif         # Hacking icon
    │   │   ├── htmlcssjavascript.png
    │   │   ├── htmlcssjsphpmdb.png
    │   │   └── reactproject.png
    │   └── Imgs/                   # Hero and section images
    │       ├── 1.jpg               # Carousel image
    │       ├── dev-per.png         # Developer person illustration (hero)
    │       ├── dev-pe.png          # Alternate developer illustration
    │       ├── dev-per (2).png     # Another variant
    │       ├── p.png               # Misc image
    │       ├── s.png               # Misc image
    │       └── web.png             # Web development illustration
    │
    ├── Components/                 # All React components
    │   ├── Header/
    │   │   └── Header.js           # Navigation bar component
    │   ├── Footer/
    │   │   └── Footer.js           # Footer component
    │   └── Body/                   # All page section/body components
    │       ├── ContainerOne.js     # Hero section (greeting, name, taglines)
    │       ├── ContainerTwo.js     # "What I Do" section (web development description)
    │       ├── ContainerThree.js   # Projects section (tabbed project gallery with sub-router)
    │       ├── ContactContainer.js # Contact form section
    │       ├── ResumeContainer.js  # Resume/CV section (profile, education, projects)
    │       ├── About.js            # About card (placeholder/unused)
    │       ├── Carousel.js         # Image carousel (placeholder/unused)
    │       ├── AllProjects.js      # All projects tab (class component)
    │       ├── ProgrammingTab.js   # Programming projects filter tab (class component)
    │       ├── ScriptingTab.js     # Scripting projects filter tab (class component)
    │       ├── WebTab.js           # Web projects filter tab (functional component)
    │       ├── ProjectCardItem.js  # Reusable project card component
    │       ├── StrokeItem.js       # SVG animated section headers (ResumeSvg, ProjectSvg)
    │       └── Projectsvg.js       # Alternate ProjectSvg export (duplicate)
    │
    └── services/                   # Data layer / business logic
        └── ProjectData.js          # Project portfolio data array + CRUD helpers
```

---

## 4. Architecture & Component Structure

### Application Architecture

The project follows a **single-page application (SPA)** architecture using React Router v5 with `BrowserRouter`. The component hierarchy is:

```
<App>                                   // Root component — defines routes
├── <Header />                          // Persistent navbar (all pages)
├── <Switch>                            // Route matching
│   ├── Route: /my-web                  // Home page
│   │   ├── <ContainerOne />            // Hero section
│   │   ├── <ContainerTwo />            // "What I Do" section
│   │   ├── <Resume />                  // Resume section
│   │   └── <ContainerThree />          // Projects section (has its own nested Router)
│   │       └── <Router>                // Nested BrowserRouter for project tabs
│   │           ├── <AllProjects />     // Renders all ProjectCardItems
│   │           ├── <ProgrammingTab />  // Filters by type "program"
│   │           ├── <ScriptingTab />    // Filters by type "script"
│   │           └── <WebTab />          // Filters by type "web"
│   ├── Route: /my-web/contact
│   │   ├── <ContainerOne />
│   │   └── <Contact />                // Contact form
│   ├── Route: /my-web/allprojects
│   │   └── <ContainerThree />         // Projects only
│   ├── Route: /my-web/resume
│   │   └── <Resume />                 // Resume only
│   └── Route: fallback (default)
│       ├── <ContainerOne />
│       ├── <ContainerTwo />
│       └── <ContainerThree />
└── <Footer />                          // Persistent footer (all pages)
```

### Component Types Used

| Type                   | Components                                                                 |
| ---------------------- | -------------------------------------------------------------------------- |
| **Functional (arrow)** | Header, Footer, ContainerOne, ContainerTwo, Contact, Resume, About, Carousel, ProjectCardItem, WebTab, StrokeItem (ResumeSvg, ProjectSvg), Projectsvg |
| **Class (extends React.Component)** | AllProjects, ProgrammingTab, ScriptingTab |

### Component Prop Interfaces

#### `<Header />`
| Prop        | Type     | Default               | Description            |
| ----------- | -------- | --------------------- | ---------------------- |
| `tittle`    | `string` | `"Your Tittle Here"`  | Brand/title text       |
| `searchBar` | `bool`   | `true` (required)     | Show/hide search bar   |

#### `<ProjectCardItem />`
| Prop          | Type       | Required | Description                      |
| ------------- | ---------- | -------- | -------------------------------- |
| `imgUrl`      | `string`   | Yes      | Project thumbnail image URL      |
| `tittle`      | `string`   | Yes      | Project title                    |
| `badges`      | `string[]` | Yes      | Technology badge labels          |
| `projectLink` | `string`   | Yes      | Live project URL (falsy = no link) |
| `githubLink`  | `string`   | Yes      | GitHub repository URL            |
| `desc`        | `string`   | Yes      | Project description              |

#### `<Resume />`
| Prop     | Type     | Required | Description                              |
| -------- | -------- | -------- | ---------------------------------------- |
| `tittle` | `string` | No       | Passed from App.js route (e.g. "Project", "Resume1") |

#### `<ContainerThree />`
| Prop     | Type     | Required | Description                 |
| -------- | -------- | -------- | --------------------------- |
| `tittle` | `string` | No       | Passed but not used in component |

---

## 5. Routing

### Route Configuration (React Router v5)

| Path                     | Components Rendered                                    | Description          |
| ------------------------ | ------------------------------------------------------ | -------------------- |
| `/my-web`                | ContainerOne, ContainerTwo, Resume, ContainerThree     | Home page            |
| `/my-web/contact`        | ContainerOne, Contact                                  | Contact page         |
| `/my-web/allprojects`    | ContainerThree                                         | All projects page    |
| `/my-web/resume`         | Resume                                                 | Resume page          |
| `*` (fallback)           | ContainerOne, ContainerTwo, ContainerThree             | Default fallback     |

### Nested Routes (inside ContainerThree's own `<Router>`)

| Path                       | Component       | Description                        |
| -------------------------- | --------------- | ---------------------------------- |
| `/my-web`                  | AllProjects     | All projects (default)             |
| `/my-web/allprojects`      | AllProjects     | All projects                       |
| `/my-web/programmingtab`   | ProgrammingTab  | Filtered: type includes "program"  |
| `/my-web/scripting`        | ScriptingTab    | Filtered: type includes "script"   |
| `/my-web/webtab`           | WebTab          | Filtered: type includes "web"      |
| `/`                        | AllProjects     | Fallback                           |

### Navigation Links (Header)

| Label      | Target Path             |
| ---------- | ----------------------- |
| Home       | `/my-web`               |
| Projects   | `/my-web/allprojects`   |
| Resume     | `/my-web/resume`        |
| Contact    | `/my-web/contact`       |

---

## 6. Design System & Visual Identity

### Overall Theme

The website uses a **dark theme** with a pure black background and high-contrast coloured accents. The visual identity is geared towards a developer/programmer aesthetic with monospace fonts, neon-like accent colours, and animated SVG stroke effects.

### Colour Palette

#### Background Colours

| Name / Usage              | CSS Value                        | Hex Equivalent | Usage Context                      |
| ------------------------- | -------------------------------- | -------------- | ---------------------------------- |
| **Primary Background**    | `rgb(0, 0, 0)`                   | `#000000`      | `body`, `.d-cl` — main page background |
| **Transparent**           | `bg-transparent`                 | —              | Cards, header, footer              |

#### Text Colours

| Name / Usage              | CSS Value                        | Hex Equivalent | Usage Context                      |
| ------------------------- | -------------------------------- | -------------- | ---------------------------------- |
| **Primary Text**          | `text-white` / `rgb(255,255,255)` | `#FFFFFF`      | All body text, card text           |
| **Warning/Brand Text**    | `rgb(240, 229, 75)`             | `#F0E54B`      | `.nav-warning` — nav brand title   |
| **Violet Accent Text**    | `rgb(202, 140, 253)`            | `#CA8CFD`      | `.text-vio` — resume item headings |
| **Hover Warning Text**    | `rgb(248, 218, 135)`            | `#F8DA87`      | `.nav-warning:hover`               |
| **Active Warning Text**   | `rgb(255, 255, 255)`            | `#FFFFFF`      | `.nav-warning:active`              |
| **Nav Link Default**      | `rgb(255, 255, 255)`            | `#FFFFFF`      | `.nav-link`                        |
| **Nav Link Hover**        | `#ff765f`                        | `#FF765F`      | `.nav-link:hover` — coral/orange   |

#### Accent / Brand Colours

| Name / Usage                   | CSS Value                          | Hex Equivalent | Usage Context                      |
| ------------------------------ | ---------------------------------- | -------------- | ---------------------------------- |
| **Warning Yellow**             | `rgb(240, 229, 75)`               | `#F0E54B`      | Primary brand accent (nav, headings) |
| **Section Divider Yellow**     | `#f0de41`                          | `#F0DE41`      | `.section-title .h2::after`, resume timeline |
| **Resume Title Yellow**        | `#f9fc59`                          | `#F9FC59`      | `.resume .resume-title`            |
| **Contact Icon Yellow**        | `#ffee00`                          | `#FFEE00`      | `.contact .info i`                 |
| **Contact Icon Hover**         | `#3afce2`                          | `#3AFCE2`      | `.contact .info i:hover` — cyan    |
| **Violet Background**          | `rgb(100, 8, 175)`                | `#6408AF`      | `.bg-vio`                          |
| **Pink Background**            | `rgb(228, 51, 213)`               | `#E433D5`      | `.bg-pink`                         |
| **Light Info Background**      | `rgb(106, 206, 252)`              | `#6ACEFC`      | `.bg-light-info`                   |
| **Light Danger Background**    | `rgb(238, 93, 93)`                | `#EE5D5D`      | `.bg-light-danger`                 |
| **Hero Greeting**              | `text-warning` (Bootstrap)        | `#FFC107`      | "Namaste!" heading                 |

#### Semi-Transparent Badge Backgrounds

| Name / Usage              | CSS Value                            | Usage Context                      |
| ------------------------- | ------------------------------------ | ---------------------------------- |
| **Transparent Success**   | `rgba(54, 231, 38, 0.151)`          | `.bg-t-success` — hero badge bg   |
| **Transparent Warning**   | `rgba(212, 231, 38, 0.151)`         | `.bg-t-warning` — hero badge bg   |
| **Transparent Pink**      | `rgba(231, 38, 231, 0.151)`         | `.bg-t-pink` — hero badge bg      |

#### SVG Stroke Animation Colours (Cycle)

| Phase  | Colour                  | Hex Equivalent |
| ------ | ----------------------- | -------------- |
| Start  | `rgb(2, 255, 44)`       | `#02FF2C`      |
| 25%    | `darkorange`            | `#FF8C00`      |
| 50%    | `rgb(239, 255, 17)`     | `#EFFF11`      |
| 75%    | `rgb(73, 33, 253)`      | `#4921FD`      |
| 100%   | `rgb(213, 22, 252)`     | `#D516FC`      |

#### SVG Text Fill

| Usage              | CSS Value                     |
| ------------------ | ----------------------------- |
| SVG text fill      | `rgba(182, 182, 182, 0.2)`   |

#### ProjectCardItem Badge Colour Pool

These CSS classes are randomly assigned to project technology badges:

| Class                       | Background Colour         |
| --------------------------- | ------------------------- |
| `badge bg-primary`          | Bootstrap primary (blue)  |
| `badge bg-danger`           | Bootstrap danger (red)    |
| `badge bg-light-info`       | `rgb(106, 206, 252)`     |
| `badge bg-light-danger`     | `rgb(238, 93, 93)`       |
| `badge bg-success`          | Bootstrap success (green) |
| `badge bg-pink`             | `rgb(228, 51, 213)`      |
| `badge bg-warning text-dark`| Bootstrap warning (yellow) |
| `badge bg-info text-dark`   | Bootstrap info (cyan)     |

#### Box Shadow Colours

| Element              | Shadow Value                                      |
| -------------------- | ------------------------------------------------- |
| `.nav-warning:hover` | `0 3px rgb(235, 220, 137)` — golden underline     |
| `.nav-warning:active`| `0 3px rgb(204, 204, 202)` — neutral underline    |
| `.nav-green:hover`   | `inset 0 0 10px rgb(38, 231, 135)` — green glow   |

---

## 7. Typography System

### Font Families

| Font Family         | Source                  | CSS Declaration                        | Usage                                    |
| ------------------- | ----------------------- | -------------------------------------- | ---------------------------------------- |
| **IBM Plex Mono**   | Google Fonts (CDN)      | `font-family: 'IBM Plex Mono'`        | `body` in `public/style.css` — primary site font |
| **monospace**        | System fallback         | `font-family: monospace`              | `.font-style`, `.nav-warning`, SVG stroke text |
| **Merriweather**     | Local TTF files         | Not actively applied in CSS            | Available in `assets/font/` (8 variants) |
| **System UI stack**  | System                  | `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', ...` | `body` in `index.css` (overridden by `public/style.css`) |
| **source-code-pro**  | System                  | `source-code-pro, Menlo, Monaco, Consolas, 'Courier New'` | `<code>` elements via `index.css`       |

### Font Sizes

| Element / Class               | Font Size       | Context                           |
| ----------------------------- | --------------- | --------------------------------- |
| `.nav-link`                   | `medium`        | Navigation links                  |
| `.nav-warning`                | `x-large`       | Navigation brand/title (desktop)  |
| `.nav-warning` (≤767px)       | `large`         | Navigation brand/title (mobile)   |
| `.svg-txt text`               | `5.6rem`        | SVG section headers (desktop)     |
| `.svg-txt text` (≤575px)      | `3.6rem`        | SVG section headers (mobile)      |
| `.section-title .h2`          | `32px`          | Section titles                    |
| `.resume .resume-title`       | `26px`          | Resume section headings           |
| `.contact .info i`            | `20px`          | Contact info icons                |
| `display-1`                   | Bootstrap default (~5rem) | Hero "Namaste!" and "I'm"  |
| `display-4`                   | Bootstrap default (~3.5rem) | Hero name badge          |
| `h1`                          | Browser/Bootstrap default | Section titles            |
| `h3`                          | Browser/Bootstrap default | Hero taglines             |
| `h5`                          | Browser/Bootstrap default | Card content, list items  |

### Font Weights

| Element / Class               | Weight  | Context                           |
| ----------------------------- | ------- | --------------------------------- |
| `.nav-link`                   | `400`   | Navigation links                  |
| `.nav-warning`                | `400`   | Navigation brand                  |
| `.svg-font`                   | `800`   | SVG stroke text                   |
| `.section-title .h2`          | `bold`  | Section titles                    |
| `.resume .resume-title`       | `400`   | Resume headings                   |
| Hero `<strong>`               | `bold`  | "I'm" text                        |
| Hero `<b>`                    | `bold`  | "Namaste!" text                   |
| Footer `<b>`                  | `bold`  | Footer credit text                |

---

## 8. Spacing & Layout System

### Layout Strategy

The project relies on **Bootstrap 5's grid system** for all layout:

- **Container:** `container-fluid` (full-width) for main sections; `container` for inner content
- **Grid:** `row` + `col-md-6`, `col-lg-4`, `col-lg-6`, `col-12` for responsive grids
- **Flexbox:** Bootstrap utilities (`d-flex`, `align-items-center`, `justify-content-center`)

### Common Spacing Patterns

| Pattern               | Bootstrap Classes Used       | Context                          |
| --------------------- | ---------------------------- | -------------------------------- |
| No padding on columns | `p-0`                        | Image columns in hero/about      |
| Section padding       | `p-2`, `p-4`                 | Inner content areas              |
| Section margin-top    | `mt-4`, `mt-5`               | Between sections                 |
| Badge spacing         | `mx-1`                       | Between technology badges        |
| List item padding     | `p-2`, `my-2`                | List groups                      |
| Card margin           | `m-4`, `mb-3`, `mb-5`        | Card components                  |
| Form group spacing    | `mt-3`                       | Between form fields              |
| Section title padding | `padding-bottom: 30px`       | `.section-title`                 |

### Viewport Height Helpers

| Class    | Desktop (≥992px) | Tablet (≤991px) | Mobile (≤767px) |
| -------- | ---------------- | --------------- | --------------- |
| `.vh-85` | `min-height: 85vh` | `min-height: 60vh` | `min-height: 55vh` |
| `.vh-90` | `min-height: 90vh` | `min-height: 65vh` | `min-height: 60vh` |

### Footer Positioning

The footer uses inline styles with `position: relative` and `top: 30vh` to push it below content, with `width: 100%`.

---

## 9. Component Design Patterns

### Card Pattern

Cards throughout the project follow this pattern:

```jsx
<div className="card bg-transparent text-white">
    <div className="card-header">...</div>
    <div className="card-body">
        <h5 className="card-title">...</h5>
        <p className="card-text">...</p>
    </div>
</div>
```

**Key conventions:**
- Cards always use `bg-transparent` (never a solid card background)
- Card text is always `text-white`
- Cards use Bootstrap card classes (`card`, `card-header`, `card-body`, `card-title`, `card-text`)

### Project Card Pattern (ProjectCardItem)

```jsx
<div className="card bg-transparent text-white h-100">
    <img src={imgUrl} className="card-img-top h-50" alt="NoImage" />
    <div className="card-body">
        <h5 className="card-title"><b>{tittle}</b>
            {/* External link + GitHub link icons */}
        </h5>
        {/* Technology badges with random colour assignments */}
        <p className="card-text">{desc}</p>
    </div>
</div>
```

**Badge colour assignment:** Randomly selected from a predefined array of 8 Bootstrap/custom colour classes using `Math.floor(Math.random()*colors.length)`.

### Navigation Pattern

Bootstrap 5 navbar with:
- `navbar-expand-md` (collapses on mobile)
- `navbar-dark bg-transparent`
- React Router `<Link>` components (not `<a>` tags)
- `nav-link` class for items
- `nav-warning` class for brand/title styling

### Section Header Pattern (SVG Stroke)

Section headers use SVG text with animated colour-cycling strokes:

```jsx
<h2>
    <svg className="svg-txt">
        <symbol id="uniqueId">
            <text textAnchor="middle" x="50%" y="50%">SECTION NAME</text>
        </symbol>
        <use xlinkHref="#uniqueId"></use>
    </svg>
</h2>
```

Each SVG header needs a **unique `id`** for the `<symbol>` element (e.g., `text` for RESUME, `text1` for PROJECTS).

### Hero Section Pattern (ContainerOne)

- Two-column layout: `col-md-6` text left, `col-md-6` image right
- Text uses Bootstrap `display-*` classes for large headings
- Name presented as nested `badge` elements with border colours
- Taglines use semantically-tagged `badge` elements with translucent backgrounds

### Resume Timeline Pattern

```html
<div className="resume-item">           <!-- Left border line -->
    <h4 className="text-vio">Title</h4> <!-- Violet heading -->
    <h5>Date Range</h5>
    <p><em>Institution</em></p>
    <p>Description</p>
</div>
```

Uses CSS pseudo-elements (`.resume-item::before`) to create timeline dots.

### Contact Form Pattern

- Bootstrap form controls with `border border-warning` for yellow borders
- Submit button: `btn btn-outline-warning`
- Form fields: `form-control` with warning border
- Contact info icons: Bootstrap Icons (`bi bi-geo-alt`, `bi bi-envelope`, `bi bi-phone`) in circular containers

---

## 10. Animations & Interactions

### AOS (Animate On Scroll)

AOS is initialised globally in `App.js` with these settings:

```javascript
AOS.init({
    offset: 200,       // Trigger point offset from element (px)
    duration: 800,      // Animation duration (ms)
    easing: 'ease-in-sine',
    delay: 100,         // Delay before animation starts (ms)
});
```

#### AOS Animations Used

| Component       | Attribute                 | Animation          | Additional Config                    |
| --------------- | ------------------------- | ------------------ | ------------------------------------ |
| ContainerOne    | `data-aos="fade-right"`   | Fade in from right | Hero text                            |
| ContainerOne    | `data-aos="fade-left"`    | Fade in from left  | Hero image                           |
| ContainerTwo    | `data-aos="fade-right"`   | Fade in from right | Image, with `data-aos-anchor-placement="top-bottom"`, `data-aos-easing="ease-in-back"`, `data-aos-delay="100"` |
| ContainerTwo    | `data-aos="fade-left"`    | Fade in from left  | Card, with same placement/easing/delay |
| ContainerThree  | `data-aos="fade-up"`      | Fade in from below | Entire projects section              |
| Resume          | `data-aos="fade-up"`      | Fade in from below | Entire resume section                |
| Contact         | `data-aos="fade-up"`      | Fade in from below | Contact section container            |

### SVG Stroke Animation

Defined in `svg.css`, applies to `.svg-txt text`:

```css
stroke-dasharray: 80;
animation: ani 1s linear infinite;
```

The `ani` keyframes cycle through 5 colours: green → darkorange → yellow → blue → purple, with `stroke-dashoffset: 160` at 100%.

### CSS Transitions

| Element              | Transition Property | Duration | Context              |
| -------------------- | ------------------- | -------- | -------------------- |
| `.nav-warning`       | `transition`        | `0.25s`  | Nav title hover      |

### Hover Effects

| Element                | Effect                                                |
| ---------------------- | ----------------------------------------------------- |
| `.nav-link:hover`      | Colour change to `#ff765f` (coral)                    |
| `.nav-warning:hover`   | Colour change + golden box-shadow underline           |
| `.nav-warning:active`  | Colour change to white + neutral box-shadow           |
| `.nav-green:hover`     | Inset green glow box-shadow                           |
| `.contact .info i:hover` | Icon colour change to `#3afce2` (cyan)              |

### Carousel Animation

The `Carousel.js` component uses Bootstrap's built-in carousel with `data-bs-ride="carousel"` and `data-bs-interval="200"` (200ms slide interval). Currently configured with a single slide.

---

## 11. Responsive Design & Breakpoints

### Approach

The project follows **Bootstrap 5's breakpoint system**. Media queries are defined for both `min-width` (mobile-first) and `max-width` (desktop-first) in `style.css` and `public/style.css`. The actual responsive adjustments primarily use `max-width` queries (desktop-first approach).

### Breakpoints Reference

| Breakpoint Name | Min-Width | Max-Width   | Bootstrap Prefix |
| --------------- | --------- | ----------- | ---------------- |
| X-Small         | 0         | 575.98px    | (default)        |
| Small           | 576px     | 767.98px    | `sm`             |
| Medium          | 768px     | 991.98px    | `md`             |
| Large           | 992px     | 1199.98px   | `lg`             |
| X-Large         | 1200px    | 1399.98px   | `xl`             |
| XX-Large        | 1400px    | —           | `xxl`            |

### Active Responsive Adjustments

#### At ≤ 767.98px (Small / Mobile)

| Element          | Change                                               |
| ---------------- | ---------------------------------------------------- |
| `.vh-85`         | `min-height: 55vh` (down from 85vh)                  |
| `.vh-90`         | `min-height: 60vh` (down from 90vh)                  |
| `.nav-warning`   | `font-size: large` (down from `x-large`)             |

#### At ≤ 991.98px (Medium / Tablet)

| Element          | Change                                               |
| ---------------- | ---------------------------------------------------- |
| `.vh-85`         | `min-height: 60vh` (down from 85vh)                  |
| `.vh-90`         | `min-height: 65vh` (down from 90vh)                  |

#### At ≤ 575.98px (X-Small / Portrait Phone)

| Element          | Change                                               |
| ---------------- | ---------------------------------------------------- |
| `.svg-txt text`  | `font-size: 3.6rem` (down from 5.6rem)               |

### Bootstrap Grid Responsive Behaviour

| Component         | Desktop (≥992px)        | Tablet (≥768px)          | Mobile (<768px)         |
| ----------------- | ----------------------- | ------------------------ | ----------------------- |
| Hero section      | Two columns (`col-md-6`)| Two columns (`col-md-6`) | Single column (stacked) |
| "What I Do"       | Two columns (`col-md-6`)| Two columns (`col-md-6`) | Single column (stacked) |
| Project cards     | 3 per row (`col-lg-4`)  | 2 per row (`col-md-6`)   | 1 per row (full-width)  |
| Resume columns    | Two columns (`col-lg-6`)| Single column (stacked)  | Single column (stacked) |
| Contact layout    | Side-by-side (`col-lg-4` + `col-lg-8`) | Stacked | Stacked           |
| Navbar            | Horizontal (`navbar-expand-md`) | Horizontal       | Hamburger menu (collapsed) |

---

## 12. Content Structure & Data Management

### Project Data (`services/ProjectData.js`)

All project portfolio data is stored in a single JavaScript file as an exported array named `data`. Each project object has this structure:

```javascript
{
    type: string[],         // Category tags: "web", "script", "program"
    imgPath: string,        // Full URL to project image (GitHub raw content URL)
    tittle: string,         // Project title (note: "tittle" spelling is used consistently)
    badges: string[],       // Technology/tool names displayed as badges
    projectLink: string,    // Live project URL (empty string = no link)
    githubLink: string,     // GitHub repository URL (empty string = no link)
    desc: string            // Short project description
}
```

#### Project Image URLs Pattern

Project images are referenced via full GitHub raw content URLs:
```
https://raw.githubusercontent.com/anirbansanu/my-web/main/public/images/{filename}
```

#### Data Access Functions

| Function              | Signature                        | Description                        |
| --------------------- | -------------------------------- | ---------------------------------- |
| `getAllData()`         | `() => data[]`                   | Returns full project data array    |
| `getData(id)`         | `(id) => data \| undefined`      | Find project by `_id`             |
| `saveMovie(movie)`    | `(movie) => object`              | Save/update data entry (legacy)    |
| `deleteData(id)`      | `(id) => object`                 | Delete data entry by `_id`         |

> **Note:** `saveMovie`, `deleteData`, and `getData` are legacy/template functions from a tutorial. They reference `_id` which is not present in the current data objects.

### Content Locations

| Content Type                 | Location                                  | Format            |
| ---------------------------- | ----------------------------------------- | ----------------- |
| Project portfolio data       | `src/services/ProjectData.js`             | JS export array   |
| Resume/profile content       | `src/Components/Body/ResumeContainer.js`  | Hardcoded JSX     |
| Hero section content         | `src/Components/Body/ContainerOne.js`     | Hardcoded JSX     |
| "What I Do" content          | `src/Components/Body/ContainerTwo.js`     | Hardcoded JSX     |
| Contact information          | `src/Components/Body/ContactContainer.js` | Hardcoded JSX     |
| Footer content               | `src/Components/Footer/Footer.js`         | Hardcoded JSX     |
| Navigation links             | `src/Components/Header/Header.js`         | Hardcoded JSX     |

### Current Projects in Data

| Title           | Type(s)          | Technologies                            |
| --------------- | ---------------- | --------------------------------------- |
| C19 Tracker     | web, script      | ReactJS, SETU API's                     |
| Card Library    | web, script      | html, css, javascript, React            |
| ToDo            | web, script      | html, css, javascript, React            |
| Backdoor        | script           | python, pycharm                         |
| Btn-Eff         | web              | css                                     |
| LMail           | web, script      | html, css, javascript, php, mariaDB     |
| Automation      | program          | ESP8266, Arduino, java, firebase        |
| DBLite          | program          | c++, vscode                             |
| Home Automation | program          | Arduino, java, Android                  |
| Heart           | web, script      | html, css, javascript                   |

---

## 13. Naming Conventions & Code Style

### File & Folder Naming

| Element               | Convention              | Examples                                     |
| --------------------- | ----------------------- | -------------------------------------------- |
| Component files       | **PascalCase** `.js`    | `ContainerOne.js`, `ProjectCardItem.js`, `Header.js` |
| Component folders     | **PascalCase**          | `Header/`, `Footer/`, `Body/`                |
| Service files         | **PascalCase** `.js`    | `ProjectData.js`                             |
| CSS files             | **lowercase** `.css`    | `style.css`, `svg.css`, `index.css`          |
| Asset folders         | **PascalCase** or **camelCase** | `Imgs/`, `iconImgs/`                  |
| Image files           | **camelCase** or **lowercase** | `dev-per.png`, `ExLink24.png`, `reactproject.png` |

### Component Naming

| Convention                     | Example                                          |
| ------------------------------ | ------------------------------------------------ |
| Functional components          | `export const ComponentName = (props) => { ... }` |
| Class components               | `export class ComponentName extends React.Component { ... }` |
| Named exports (not default)    | `export const Header`, `export class AllProjects` |
| Only `App` uses default export | `export default App`                             |

### CSS Class Naming

| Convention                     | Pattern              | Examples                                |
| ------------------------------ | -------------------- | --------------------------------------- |
| Custom utility classes         | Hyphenated lowercase | `text-vio`, `bg-vio`, `bg-t-success`, `d-cl`, `vh-85` |
| Bootstrap classes              | Standard Bootstrap   | `text-white`, `bg-transparent`, `container-fluid` |
| BEM-like selectors             | Dot-separated        | `.contact .info i`, `.resume .resume-item` |
| Font utility class             | Descriptive          | `.font-style` → monospace              |
| SVG-specific classes           | Prefix `svg-`        | `.svg-font`, `.svg-txt`                |

### Prop Naming

- Props use **camelCase**: `tittle`, `searchBar`, `imgUrl`, `projectLink`, `githubLink`
- **Note:** The spelling `tittle` (instead of `title`) is used consistently throughout the entire project. Maintain this spelling for consistency.

### JavaScript Code Style

| Convention                          | Pattern                                           |
| ----------------------------------- | ------------------------------------------------- |
| Imports                             | Named imports in curly braces: `import { Header } from "..."` |
| String delimiters                   | Double quotes `"` for JSX attributes and imports  |
| Semicolons                          | Inconsistent (some files use, some don't)         |
| Arrow functions for components      | `const Name = (props) => { return(...) }`         |
| Arrow functions for class methods   | `getAll = () => { ... }`                          |
| JSX className                       | String concatenation: `"mx-1 " + colors[...]`    |
| Event handlers                      | Arrow functions inline or as class methods        |
| Data flow                           | Import data functions from services, call in `componentDidMount` or direct import |
| Key prop in lists                   | Array index: `key={i}`                            |

### Indentation

- **4 spaces** for JSX and JavaScript
- **4 spaces** for CSS

### Import Order Convention

1. React / library imports
2. Router imports
3. Component imports
4. Asset/image imports
5. Service/data imports
6. CSS imports (at top or after library imports)

---

## 14. Asset Management

### Image Assets

| Location                        | Purpose                        | Referenced By                    |
| ------------------------------- | ------------------------------ | -------------------------------- |
| `src/assets/Imgs/`             | Hero images, section images    | Direct `import` in components    |
| `src/assets/iconImgs/`         | Small UI icons, tech icons     | Direct `import` in components    |
| `public/images/`               | Project showcase images        | Full GitHub raw URLs in `ProjectData.js` |

### Image Reference Patterns

**Component-level images** (hero, sections):
```javascript
import WebDevPerson from "../../assets/Imgs/dev-per.png";
// Used as: <img src={WebDevPerson} ... />
```

**Icon images** (project cards):
```javascript
import ExLink24 from "../../assets/iconImgs/ExLink24.png";
import github from "../../assets/iconImgs/github.png";
// Used as: <img src={ExLink24} ... />
```

**Project data images** (remote URLs):
```javascript
imgPath: "https://raw.githubusercontent.com/anirbansanu/my-web/main/public/images/reactProject.png"
// Used as: <img src={props.imgUrl} ... />
```

### Font Assets

| Font             | Location                     | Variants Available                                    |
| ---------------- | ---------------------------- | ----------------------------------------------------- |
| Merriweather     | `src/assets/font/`           | Regular, Bold, BoldItalic, Black, BlackItalic, Italic, Light, LightItalic |
| IBM Plex Mono    | Google Fonts CDN             | Default weight                                        |

### Icon System

- **Bootstrap Icons** (CDN + npm): Used for contact info icons (`bi bi-geo-alt`, `bi bi-envelope`, `bi bi-phone`)
- **Custom PNG icons**: `ExLink24.png` (external link), `github.png` (GitHub logo) — used in project cards
- **Emoji characters**: `⚡` used inline in "What I Do" list items

---

## 15. Build & Development Commands

| Command           | Script                 | Purpose                       |
| ----------------- | ---------------------- | ----------------------------- |
| `npm start`       | `react-scripts start`  | Start development server      |
| `npm run build`   | `react-scripts build`  | Create production build       |
| `npm test`        | `react-scripts test`   | Run test suite                |
| `npm run eject`   | `react-scripts eject`  | Eject from CRA (irreversible) |

### ESLint Config

```json
{
  "extends": ["react-app", "react-app/jest"]
}
```

### Browser Targets

- **Production:** `>0.2%`, `not dead`, `not op_mini all`
- **Development:** Last 1 version of Chrome, Firefox, Safari

---

## 16. Guidelines for AI-Assisted Development

### When Adding a New Section

1. Create the component in `src/Components/Body/` using **PascalCase** filename
2. Use a **functional component** with arrow function syntax and **named export**
3. Apply `bg-transparent` and `text-white` as base card/container classes
4. Add `data-aos="fade-up"` (or appropriate direction) for scroll animation
5. Use Bootstrap 5 grid classes (`container-fluid`, `row`, `col-md-*`) for layout
6. Import the component in `App.js` and add it to the appropriate `<Route>`
7. If a navigation link is needed, add a `<Link>` in `Header.js`

### When Adding a New Project

1. Add a new object to the `data` array in `src/services/ProjectData.js`
2. Follow the exact object shape: `{ type, imgPath, tittle, badges, projectLink, githubLink, desc }`
3. Use `tittle` (not `title`) for the property name
4. Place project images in `public/images/` and reference via GitHub raw URL or use a direct URL
5. Assign one or more type tags: `"web"`, `"script"`, `"program"`

### When Modifying Styles

1. Add custom styles to `src/style.css` (primary custom stylesheet)
2. Prefix custom utility classes with descriptive names (e.g., `bg-t-*`, `text-*`, `vh-*`)
3. Keep the dark theme: black background, white text, coloured accents
4. Follow the existing responsive pattern: define base styles, then `@media (max-width: ...)` overrides
5. Use the established colour palette — primary accent is yellow (`#F0E54B`), secondary is violet (`#CA8CFD`)

### When Creating SVG Section Headers

1. Add the SVG component in `src/Components/Body/StrokeItem.js`
2. Import `../../svg.css`
3. Use a **unique `id`** for the `<symbol>` element (avoid conflicts with `text`, `text1`)
4. Follow the exact SVG structure pattern shown in [Section 9](#9-component-design-patterns)

### Code Consistency Checklist

- [ ] Use `className` (not `class`) for JSX
- [ ] Use `tittle` spelling consistently for the title prop
- [ ] Use named exports (`export const` / `export class`)
- [ ] Use Bootstrap 5 classes for layout and utilities
- [ ] Use `bg-transparent text-white` for card/section containers
- [ ] Use React Router v5 `<Link>` for navigation (not `<a>`)
- [ ] Use `data-aos` attributes for scroll animations
- [ ] Use 4-space indentation
- [ ] Use double quotes for JSX attributes and imports
- [ ] Use arrow functions for functional components and class methods

---

*This documentation was generated by analysing the complete source code of the My Web portfolio project. Last updated: March 2026.*
