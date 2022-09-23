/// <reference types="vitest" />

import { resolve } from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import UnoCSS from 'unocss/vite';
import Inspect from 'vite-plugin-inspect';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { EurusUIReslove } from './autoImport';

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      reactivityTransform: true
    }),
    vueJsx(),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        'vue-router',
        '@vueuse/core',
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),

    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        EurusUIReslove()
      ],
      dts: true,
    }),

    Inspect(),
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    UnoCSS()
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },

});
