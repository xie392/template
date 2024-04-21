import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pages from 'vite-plugin-pages'
import { fileURLToPath } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), pages()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
