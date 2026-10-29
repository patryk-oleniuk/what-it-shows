import path from 'node:path';
import { fileURLToPath } from 'node:url';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

const root = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx'],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.svx'],
      layout: {
        runbook: path.join(root, 'src/lib/layouts/runbook.svelte')
      }
    })
  ],
  kit: {
    adapter: adapter({ strict: true }),
    alias: {
      '#lib': './src/lib'
    },
    prerender: {
      entries: ['*']
    }
  }
};

export default config;
