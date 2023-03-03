import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'

export default ({ mode }) => defineConfig({
  base: `/${loadEnv(mode, resolve(process.cwd(), '../..'), '').REPO_PREFIX}/${import.meta.url.split('/').at(-2)}/`,
})
