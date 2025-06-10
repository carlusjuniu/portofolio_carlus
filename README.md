# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Environment Variables

1. Copy `.env.example` to `.env` in the project root.
2. Fill in the required values:

   - `VITE_APP_SPOTIFY_CLIENT_ID` – Spotify API client ID
   - `VITE_APP_SPOTIFY_CLIENT_SECRET` – Spotify API client secret
   - `VITE_APP_SPOTIFY_REFRESH_TOKEN` – Spotify refresh token
   - `VITE_MAPBOX_ACCESS_TOKEN` – Mapbox access token

These variables are loaded by Vite during development and build.
