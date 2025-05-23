import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3001,
  },
  build: {
    outDir: 'dist',
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'hFragment',
    jsxInject: "import { h, hFragment } from '@sarathcani999/mugglekit'"
  }
}); 