import babel from 'vite-plugin-babel';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { reactRouter } from "@react-router/dev/vite";

const ReactCompilerConfig = { /* ... */ };


// https://vite.dev/config/

export default defineConfig({
  plugins: [
    reactRouter(),
    react(),
      babel({
        fliter: /\.[jt]sx?$/,
        babelConfig: {
          presets: ["@babel/preset-typescript"],
        plugins: [
        ["babel-plugin-react-compiler", ReactCompilerConfig],
       ],
      },
    }),
  ],
});

