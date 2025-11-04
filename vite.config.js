var _a, _b, _c;
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
var repoName = (_c = (_b = (_a = process.env.GITHUB_REPOSITORY) === null || _a === void 0 ? void 0 : _a.split('/')) === null || _b === void 0 ? void 0 : _b[1]) !== null && _c !== void 0 ? _c : 'websiteiinia';
var isGitHubPages = Boolean(process.env.GITHUB_REPOSITORY);
export default defineConfig(function () { return ({
    base: isGitHubPages ? "/".concat(repoName, "/") : '/',
    plugins: [react()],
    server: {
        host: true
    }
}); });
