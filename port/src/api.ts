// base URL for the backend API
// uses VITE_API_URL in production (set in Vercel), falls back to localhost for local dev
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'
