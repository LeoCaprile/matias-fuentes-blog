import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

import ViteFonts from 'vite-plugin-fonts'

export default defineConfig({
  plugins: [react(), ViteFonts({
    google: {
      families: ['Source Sans Pro']
    }
  })]
})
