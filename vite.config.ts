import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr({ svgrOptions: { exportType: 'default' } }), react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  define: {
    IS_DEV: JSON.stringify(true),
    API: JSON.stringify('http://localhost:8000'),
  },
  server: {
    open: '/',
  },
});
