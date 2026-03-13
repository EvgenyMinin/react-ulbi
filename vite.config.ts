import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

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
