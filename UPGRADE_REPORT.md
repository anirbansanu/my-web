# My Web — Dependency Upgrade Report

**Date:** March 29, 2026  
**Target Environment:** Node.js v22.17.0  
**Upgrade Type:** Full dependency modernisation + build tool migration (CRA → Vite)

---

## Executive Summary

The project was upgraded from a Create React App (CRA) v4 setup with React 17 to a modern Vite 6 build toolchain with React 18. All deprecated, outdated, and unmaintained packages were either upgraded or replaced. Three unused deprecated packages were removed entirely. The upgrade required code changes limited strictly to routing API migration (React Router v5 → v6), React 18 render API, and web-vitals v4 API. **No design, layout, styling, or visual changes were made.**

---

## 1. Package Upgrade Details

### Upgraded Packages

| Package | Old Version | New Version | Notes |
|---------|-------------|-------------|-------|
| `react` | ^17.0.2 | ^18.3.1 | Major upgrade. React 18 introduces concurrent features, `createRoot` API. All existing class/functional components remain fully compatible. |
| `react-dom` | ^17.0.2 | ^18.3.1 | Major upgrade. `ReactDOM.render()` replaced with `createRoot().render()`. |
| `react-router-dom` | ^5.2.0 | ^6.28.0 | Major upgrade. `Switch` → `Routes`, `render` prop → `element` prop, `exact` removed (default in v6). |
| `bootstrap-icons` | ^1.5.0 | ^1.11.3 | Minor upgrade. Backwards compatible, adds new icons. |
| `web-vitals` | ^1.1.2 | ^4.2.4 | Major upgrade. `getCLS/getFID/getFCP/getLCP/getTTFB` → `onCLS/onINP/onFCP/onLCP/onTTFB`. `getFID` removed, replaced by `onINP`. |
| `@testing-library/jest-dom` | ^5.14.1 | ^6.6.3 | Major upgrade. Now supports Vitest natively. Moved to devDependencies. |
| `@testing-library/react` | ^11.2.7 | ^14.3.1 | Major upgrade. Compatible with React 18. Moved to devDependencies. |
| `@testing-library/user-event` | ^12.8.3 | ^14.5.2 | Major upgrade. API improvements. Moved to devDependencies. |
| `gh-pages` | ^3.2.3 | ^6.3.0 | Major upgrade. Moved to devDependencies. Deploy output changed from `build/` to `dist/`. |
| `aos` | ^2.3.4 | ^2.3.4 | **No change needed.** Already at latest stable version. Fully compatible. |

### Replaced Packages

| Old Package | New Replacement | Justification |
|-------------|-----------------|---------------|
| `react-scripts` 4.0.3 | `vite` ^6.0.7 + `@vitejs/plugin-react` ^4.3.4 | **CRA is deprecated and unmaintained.** It bundles Webpack 4, an outdated Babel toolchain, and legacy dependencies incompatible with Node.js 22. Vite is the officially recommended replacement by the React team. Vite provides faster builds, native ES module dev server, and full Node.js 22 compatibility. |

### Removed Packages (unused in source code)

| Package | Old Version | Reason for Removal |
|---------|-------------|--------------------|
| `react-particles-js` | ^3.5.3 | **Deprecated.** Superseded by `@tsparticles/react`. Not imported or used anywhere in the project source code. |
| `react-tsparticles` | ^1.30.4 | **Deprecated.** Superseded by `@tsparticles/react`. Not imported or used anywhere in the project source code. |
| `tsparticles` | ^1.30.4 | **Deprecated.** Superseded by `@tsparticles/engine`. Not imported or used anywhere in the project source code. |

### Newly Added Packages

| Package | Version | Reason |
|---------|---------|--------|
| `prop-types` | ^15.8.1 | Was previously a transitive dependency provided by `react-scripts`. Now added explicitly since `Header.jsx` imports it directly. |
| `@vitejs/plugin-react` | ^4.3.4 | Required for Vite to process React JSX/TSX files with Fast Refresh support. |
| `vite` | ^6.0.7 | Replacement build tool for CRA. |
| `vitest` | ^3.0.0 | Vite-native test runner replacing CRA's bundled Jest configuration. |
| `jsdom` | ^25.0.1 | DOM environment for running component tests in Vitest. |

---

## 2. Configuration File Changes

### New Files Created

#### `index.html` (project root)
**Reason:** Vite requires `index.html` at the project root (not in `public/`). This file replaces `public/index.html` as the application shell.  
**Changes from original:**
- Removed CRA's `%PUBLIC_URL%` template variables (replaced with `/` root paths)
- Added `<script type="module" src="/src/index.jsx">` entry point (Vite requires explicit script tag)
- All CDN links (Bootstrap CSS/JS, Google Fonts, Bootstrap Icons) are preserved identically

#### `vite.config.js`
**Reason:** Vite configuration file replacing CRA's internal Webpack configuration.  
**Contents:** React plugin, base path `/my-web/` for GitHub Pages deployment, Vitest configuration with jsdom environment.

### Modified Files

#### `package.json`
- Added `"type": "module"` for ES module support
- Version bumped to `0.2.0`
- **Scripts updated:**
  - `start` → `vite` (was `react-scripts start`)
  - `build` → `vite build` (was `react-scripts build`)
  - `test` → `vitest` (was `react-scripts test`)
  - Removed `eject` script (not applicable to Vite)
  - Added `dev` → `vite` (Vite convention)
  - Added `preview` → `vite preview` (preview production build)
  - Added `deploy` → `gh-pages -d dist` (was implicit, now explicit; output dir changed from `build/` to `dist/`)
- Removed `eslintConfig` section (referenced CRA-specific `react-app` preset which no longer exists)
- Removed `browserslist` section (CRA-specific; Vite uses esbuild with its own target configuration)
- Testing and deployment packages moved to `devDependencies`

#### `.gitignore`
- Added `/dist` to ignored directories (Vite's build output directory, alongside existing `/build`)

### Renamed Files

#### `public/index.html` → `public/index.html.old`
**Reason:** Vite copies files from `public/` to the build output root. If left as `index.html`, it would overwrite Vite's generated `index.html` during build. Renamed to prevent conflict. Can be safely deleted.

---

## 3. Source Code Changes

All code changes were limited strictly to API compatibility. **No design, layout, styling, colour, typography, or visual code was modified.**

### File Extension Renames (`.js` → `.jsx`)

All React component files in `src/` were renamed from `.js` to `.jsx`. This is required by Vite, which uses file extensions to determine how to process files. Files containing JSX syntax must use the `.jsx` extension.

**Renamed files:**
- `src/index.js` → `src/index.jsx`
- `src/App.js` → `src/App.jsx`
- `src/App.test.js` → `src/App.test.jsx`
- `src/Components/Header/Header.js` → `src/Components/Header/Header.jsx`
- `src/Components/Footer/Footer.js` → `src/Components/Footer/Footer.jsx`
- `src/Components/Body/ContainerOne.js` → `src/Components/Body/ContainerOne.jsx`
- `src/Components/Body/ContainerTwo.js` → `src/Components/Body/ContainerTwo.jsx`
- `src/Components/Body/ContainerThree.js` → `src/Components/Body/ContainerThree.jsx`
- `src/Components/Body/ContactContainer.js` → `src/Components/Body/ContactContainer.jsx`
- `src/Components/Body/ResumeContainer.js` → `src/Components/Body/ResumeContainer.jsx`
- `src/Components/Body/About.js` → `src/Components/Body/About.jsx`
- `src/Components/Body/AllProjects.js` → `src/Components/Body/AllProjects.jsx`
- `src/Components/Body/Carousel.js` → `src/Components/Body/Carousel.jsx`
- `src/Components/Body/ProgrammingTab.js` → `src/Components/Body/ProgrammingTab.jsx`
- `src/Components/Body/ProjectCardItem.js` → `src/Components/Body/ProjectCardItem.jsx`
- `src/Components/Body/Projectsvg.js` → `src/Components/Body/Projectsvg.jsx`
- `src/Components/Body/ScriptingTab.js` → `src/Components/Body/ScriptingTab.jsx`
- `src/Components/Body/StrokeItem.js` → `src/Components/Body/StrokeItem.jsx`
- `src/Components/Body/WebTab.js` → `src/Components/Body/WebTab.jsx`
- `src/services/ProjectData.js` → `src/services/ProjectData.jsx`

**Files NOT renamed** (pure JS, no JSX syntax):
- `src/reportWebVitals.js`
- `src/setupTests.js`

**Note:** No import paths required changes. Vite resolves extensionless imports to `.jsx` files automatically.

### `src/index.jsx` — React 18 Render API

| Aspect | Before (React 17) | After (React 18) |
|--------|--------------------|-------------------|
| Import | `import ReactDOM from 'react-dom'` | `import ReactDOM from 'react-dom/client'` |
| Render | `ReactDOM.render(<App />, document.getElementById('root'))` | `ReactDOM.createRoot(document.getElementById('root')).render(<App />)` |

### `src/App.jsx` — React Router v6 Migration

| Aspect | Before (v5) | After (v6) |
|--------|-------------|------------|
| Import | `Switch, Route` | `Routes, Route` |
| Container | `<Switch>` | `<Routes>` |
| Route definition | `<Route exact path="/..." render={()=> <X/>}/>` | `<Route path="/..." element={<X/>}/>` |
| `exact` prop | Required for exact matching | Removed (exact matching is default in v6) |
| Fallback route | `<Route render={...}/>` (no path) | `<Route path="*" element={...}/>` |

### `src/Components/Body/ContainerThree.jsx` — React Router v6 Migration

| Aspect | Before (v5) | After (v6) |
|--------|-------------|------------|
| Import | `BrowserRouter as Router, Switch, Route, Link` | `Routes, Route, Link` |
| Wrapper | `<Router>` (nested BrowserRouter) | Removed (uses parent Router context from App.jsx) |
| Container | `<Switch>` | `<Routes>` |
| Route definition | `<Route exact path="/..."><Component/></Route>` | `<Route path="/..." element={<Component/>}/>` |

### `src/reportWebVitals.js` — web-vitals v4 API

| Aspect | Before (v1) | After (v4) |
|--------|-------------|------------|
| Function names | `getCLS, getFID, getFCP, getLCP, getTTFB` | `onCLS, onINP, onFCP, onLCP, onTTFB` |
| FID metric | `getFID` | Replaced by `onINP` (Interaction to Next Paint) |

---

## 4. Build Verification

| Check | Result |
|-------|--------|
| `npm install` | ✅ 348 packages, 0 vulnerabilities |
| `npx vite build` | ✅ 63 modules transformed, built in 692ms |
| Dev server (`npx vite`) | ✅ Ready in ~1128ms, serves HTTP 200 at `/my-web/` |
| Deprecated package warnings | ✅ None (only 1 npm warn for transitive dep `whatwg-encoding`) |

### Build Output

```
dist/index.html                     1.45 kB │ gzip:  0.73 kB
dist/assets/web-CT-ZQP9Z.png        9.04 kB
dist/assets/dev-per-DFAGGAF9.png  156.05 kB
dist/assets/index-CuCHI3Er.css     29.01 kB │ gzip:  3.50 kB
dist/assets/index-idGdTGfX.js     202.23 kB │ gzip: 65.35 kB
```

---

## 5. Updated Project Scripts Reference

| Command | Purpose |
|---------|---------|
| `npm run dev` or `npm start` | Start Vite development server (http://127.0.0.1:5173/my-web/) |
| `npm run build` | Create production build in `dist/` |
| `npm run preview` | Preview production build locally |
| `npm test` | Run tests with Vitest |
| `npm run deploy` | Deploy `dist/` to GitHub Pages |

---

## 6. Files Changed Summary

| Action | Files |
|--------|-------|
| **Created** | `index.html` (root), `vite.config.js` |
| **Modified** | `package.json`, `src/index.jsx`, `src/App.jsx`, `src/Components/Body/ContainerThree.jsx`, `src/reportWebVitals.js`, `.gitignore` |
| **Renamed (.js → .jsx)** | 20 source files (see Section 3) |
| **Renamed (conflict prevention)** | `public/index.html` → `public/index.html.old` |
| **NOT modified** | All CSS files, all other component files, all asset files, `services/ProjectData.jsx` |
