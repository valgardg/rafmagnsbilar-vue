import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),svgLoader()],
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
