import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'gyxxzo',
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:5173',
  },
});
