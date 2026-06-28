import { defineConfig } from 'vite-plus';

export default defineConfig({
  run: {
    tasks: {
      build: {
        command: 'vp build',
        // Exclude pnpm/node_modules metadata (e.g. node_modules/.modules.yaml)
        // from auto-tracked inputs; it changes between CI runs and would
        // otherwise bust the cache. Dependency identity is still tracked via
        // the committed lockfile.
        input: [{ auto: true }, '!node_modules/**'],
      },
      greet: {
        command: 'node greet.mjs',
        input: ['greet.mjs', 'data.txt'],
        output: ['out.txt'],
      },
    },
  },
});
