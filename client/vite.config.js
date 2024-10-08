// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/admin': {
                target: 'http://localhost:5000', // Your backend server
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
