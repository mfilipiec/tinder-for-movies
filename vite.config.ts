import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

const viteConfig = defineViteConfig({
  plugins: [react()]
});

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/vitest.setup.ts'],
    css: true,
    testTimeout: 5000,
    reporters: ['verbose']
  }
});

export default mergeConfig(viteConfig, vitestConfig);
