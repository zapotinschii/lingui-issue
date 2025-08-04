import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { lingui } from '@lingui/vite-plugin';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(() => {
	return {
		plugins: [
			react({
				plugins: [['@lingui/swc-plugin', {}]],
			}),
			lingui(),
		],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
		},
		server: {
			port: 3000,
			open: true,
		},
		preview: {
			port: 3001,
		},
	};
});
