import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
  server: {
    watch: {
      usePolling: true, // Enables polling mode
      interval: 100,    // Reduce polling interval for faster reloads
    },
  },

  integrations: [react()],
});