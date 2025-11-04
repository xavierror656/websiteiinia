import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'websiteiinia';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  base: isGitHubPages ? `/${repoName}/` : '/',
  plugins: [react()],
  server: {
    host: true
  }
});
