# 🌤 Weather Dashboard

A weather dashboard built with React, custom hooks, and Jotai for state management.

🔗 **Live Demo:** https://react-weather-dashboard-hp04ibj9e-mitochondria1.vercel.app/

---

## Concepts Covered

- **Custom Hooks** — `useFetch`, `useDebounce`, `usePrev`, `useIsOnline`
- **Jotai** — global state management for favourite cities
- **Real API** — OpenWeatherMap API for live weather data

## Features

- 🔍 Search any city with debounced input
- 🌡 View current and previous temperature
- ⭐ Save and manage favourite cities
- 🟢 Real-time online/offline status
- 💎 Glassmorphism UI with dark theme

## Custom Hooks

| Hook | Purpose |
|------|---------|
| `useFetch` | Fetches data from any URL with loading/error states |
| `useDebounce` | Delays a value update until user stops typing |
| `usePrev` | Returns the previous value of any state |
| `useIsOnline` | Tracks browser online/offline status |

## Tech Stack

- React + Vite
- Jotai (state management)
- OpenWeatherMap API
- Pure CSS (Glassmorphism)
- Deployed on Vercel

## Run Locally

```bash
git clone https://github.com/YOUR_USERNAME/weather-dashboard.git
cd weather-dashboard
npm install
```

Create a `.env` file:
```
VITE_WEATHER_API_KEY=your_api_key_here
```

```bash
npm run dev
```
