import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],

    test: {
        environment: "jsdom", //los test tienen un DOM simulado
        setupFiles: "./src/test/setup.js", //Antes de ejecutar los tests, carga nuestro setup
    },
});