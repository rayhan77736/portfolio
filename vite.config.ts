import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		allowedHosts: [
			'dev3-code.datumotion.com',
			'dev3-web.datumotion.com'
		],
		host: true,
		hmr: {
			clientPort: 443,
			protocol: 'wss'
		},
		strictPort: false,
		watch: {
			usePolling: false
		},
		proxy: {
			'/hocuspocus': {
				target: 'ws://localhost:1234',
				ws: true,
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/hocuspocus/, '')
			}
		}
	},
	ssr: {
		external: ['@prisma/client', '.prisma/client']
	}
});
