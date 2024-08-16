import path from 'path'
import react from '@vitejs/plugin-react'
import { telefunc } from 'telefunc/vite'
import UnoCSS from 'unocss/vite'
import vike from 'vike/plugin'
import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.VITE_BASE, // remove for using root
  plugins: [
    react(),
    telefunc(),
    vike({
      prerender: true,
      trailingSlash: false,
    }),
    UnoCSS(),
  ],
  optimizeDeps: {
    include: ['react/jsx-runtime', 'react', 'react-dom'],
  },
  build: {
    minify: true,
  },
  server: {
    port: 5247,
  },
  preview: {
    port: 4248,
  },
  resolve: {
    alias: {
      '#utils': path.resolve(__dirname, './lib/utils/'),
      '#hooks': path.resolve(__dirname, './lib/hooks/'),
      '#types': path.resolve(__dirname, './lib/types/'),
      '#server': path.resolve(__dirname, './server/'),
      '#zustand': path.resolve(__dirname, './lib/zustand/'),
      '#map': path.resolve(__dirname, './lib/map/'),
      '#api': path.resolve(__dirname, './lib/api/'),
      '#lib': path.resolve(__dirname, './lib/'),
      '#layouts': path.resolve(__dirname, './layouts/'),
      '#pages': path.resolve(__dirname, './pages/'),
      '#components': path.resolve(__dirname, './components/'),
      '#root': __dirname,
      'mapbox-gl': 'maplibre-gl', // will deprecate in vite 6
    },
  },
})
