import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import {viteMockServe} from "vite-plugin-mock";

export default defineConfig({
    plugins: [
        vue(),
        viteMockServe({
            supportTs: true
        })
    ],
});