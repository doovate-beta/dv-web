import {sveltekit} from '@sveltejs/kit/vite';
import {defineConfig} from 'vite';

export default defineConfig({
    plugins: [sveltekit()],
    server: {
        host: true,
        allowedHosts: [
            'doovate.com'
        ]
    },
    preview: {
        host: true,
        allowedHosts: [
            'doovate.com'
        ]
    }
});
