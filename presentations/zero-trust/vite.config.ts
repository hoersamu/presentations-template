import { defineConfig } from 'vite'

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  base: `/presentations/${JSON.stringify(require('./package.json').name)}/`,
})
