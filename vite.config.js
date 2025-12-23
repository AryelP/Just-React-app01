import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/Just-React-app01/",
  plugins: [react(),
  tailwindcss(),
  ],
  server: {
    port: 3000,
  },
});
