// vite.config.js
import { defineConfig } from 'vite'
import autoModel from './models/auto.glb'
loader.load(autoModel)
loader.load('models/auto.glb') // relativo a /public

export default defineConfig({
  base: 'Juego_Three.js_Emma',
  plugins: [react()],
})
