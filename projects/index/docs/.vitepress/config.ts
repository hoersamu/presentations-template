import { resolve } from 'path'
import { defineConfig } from 'vitepress'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

export default defineConfig({
  base: `/${dotenv.config({ path: `${resolve(process.cwd(), '../../.env')}` }).parsed?.REPO_PREFIX}/`,
  outDir: '../dist',
})
