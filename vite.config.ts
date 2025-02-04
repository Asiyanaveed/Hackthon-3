import { defineConfig } from 'vite';

export default defineConfig({
  // Other Vite config settings...
  resolve: {
    alias: {
      "swr/infinite": "swr/dist/infinite"
    }
  }
});
