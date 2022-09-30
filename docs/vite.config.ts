import { resolve } from 'path';
import UnoCSS from 'unocss/vite';
import { presetAttributify, presetIcons, presetUno, presetWind } from 'unocss';
import ViteRestart from 'vite-plugin-restart';

export default {
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, '../src/packages')}/`,
      'eurus-ui/': `${resolve(__dirname, '../dist/es')}/`,
      'eurus-ui-dist/': `${resolve(__dirname, '../dist')}/`,
    },
  },
  plugins: [
    UnoCSS({
      shortcuts: [
        ['btn', 'px-4 py-1 rounded inline-flex justify-center gap-2 text-white leading-30px children:mya !no-underline cursor-pointer disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
        ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
      ],
      presets: [
        presetUno({
          dark: 'media',
        }),
        presetAttributify(),
        presetWind(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
      ],
    }),
    ViteRestart({
      restart: [
        '../dist/*',
        '../src/packages/**/*.vue'
      ],
    }),
  ],
};

