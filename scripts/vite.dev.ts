import { InlineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

const config: InlineConfig = {
  mode: 'production',

  build: {
    target: 'modules',
    emptyOutDir: false,
    minify: false,
    brotliSize: false,
    watch: {},

    rollupOptions: {
      input: ['src/index.ts'],
      output: [
        {
          format: 'es',
          dir: 'dist/es',
          exports: 'named',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'packages',
        },
      ],
      external: ['vue']
    },
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
  },
  plugins: [ vue(), vueJsx()],
};

export default config;
