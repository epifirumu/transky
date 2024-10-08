import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://transkt.mtf.wiki',
        // uncomment the following line to use local server
        // target: 'http://localhost:8787',
        changeOrigin: true,
        autoRewrite: true,
      },
    },
  },
  ssr: { noExternal: true },
})
