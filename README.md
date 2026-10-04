# TIS Homepage Redesign

Animated redesign of the Tulas International School (https://tis.edu.in/) homepage. Copy is taken from the live site.

**Stack:** React 19 · Vite · Tailwind CSS v4 · Framer Motion

**Features:** custom cursor that reacts to hoverable elements · staggered scroll-triggered reveals · animated dark/light toggle (persisted, respects OS preference) · spring-smoothed scroll progress bar · parallax hero · count-up stats · reduced-motion support.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build && npm run preview
```

## Deploy (Vercel)
Push to GitHub, import the repo on vercel.com. Framework preset: Vite (build `npm run build`, output `dist`). Netlify uses the same settings.

## Structure
```
src/
  data.js          copy and content arrays
  hooks/useTheme   theme state + persistence
  components/      one file per section / UI primitive (Reveal is the shared scroll-reveal wrapper)
```
