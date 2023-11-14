import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pluginRewriteAll from 'vite-plugin-rewrite-all';

// Rewrite all para reescribir urls extensas
export default defineConfig({
  plugins: [react(), pluginRewriteAll()],
});
