# Weather IoT PWA Dashboard

A minimal, mobile-friendly PWA dashboard for IoT weather sensors, built with React, Vite, TypeScript, and Supabase.

## Features
- Authentication (login/signup via Supabase)
- Dashboard with placeholder sensor data
- Device management (add/remove device)
- Feature flags system
- Clean, minimal UI
- PWA support (manifest + service worker)

## Project Structure
- `src/features/` — Feature modules (auth, dashboard, devices)
- `src/services/` — API and Supabase client
- `src/config/` — Feature flags and config
- `src/components/` — Shared UI components
- `src/hooks/` — Custom React hooks

## Setup
1. Copy `.env` and add your Supabase project URL and anon key.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.

## PWA
- Manifest and service worker are in `public/`.
- To test PWA, build with `npm run build` and serve with a static server.

---

**Replace Supabase credentials in `.env` before deploying.**
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
