import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This is the line that connects the dots for Vite
      "@": path.resolve(__dirname, "./src"),
    },
  },
})