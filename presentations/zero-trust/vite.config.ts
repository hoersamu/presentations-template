import { defineConfig } from 'vite'

export default defineConfig({
  base: `/${process.env.REPO_PREFIX}/${import.meta.url.split('/').at(-2)}/`,
})
