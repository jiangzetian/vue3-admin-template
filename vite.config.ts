import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';

export default defineConfig({
    plugins: [
        vue(),
        viteMockServe({
            supportTs: true,
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});
