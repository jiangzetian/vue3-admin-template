import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';

export default defineConfig({
    base: '/vue3-admin-template/',
    plugins: [
        vue(),
        viteMockServe({
            supportTs: true,
            prodEnabled: true,
            injectFile: path.resolve('src/main.ts'),
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});
