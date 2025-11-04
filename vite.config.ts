import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName =
  process.env.GITHUB_REPOSITORY?.split('/')?.[1] ?? 'websiteiinia';
const isGitHubPages = Boolean(process.env.GITHUB_REPOSITORY);

export default defineConfig(() => ({
  base: isGitHubPages ? `/${repoName}/` : '/',
  plugins: [react()],
  server: {
    host: true
  }
}));
