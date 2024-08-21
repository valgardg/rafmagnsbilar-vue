import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
      global: {},
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
	optimizeDeps: {
		exclude: ['.git']
	},
	build: {
		rollupOptions: {
			input: {
				main: 'src/main.ts'
			},
			external: []
		},
		commonjsOptions: {
			include: /node_modules/,
		}
	},
	server: {
		watch: {
			ignored: ['**/.git/**'],
		}
	}
});
