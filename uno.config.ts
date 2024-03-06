import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    [/^(bg|c|b)-(primary|p)$/, ([, c]) => `${c}-[#1989fa]`],
    [/^(bg|c|b)-(secondary|s)/, ([, c]) => `${c}-gray-300`],
    [/^(bg|c|b)-(secondary|s)-(l|light)/, ([, c]) => `${c}-gray-100`],
  ],
  // include: [
  //   // the default
  //   /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
  //   // include js/ts files
  //   'src/**/*.{js,ts}',
  // ],
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'src/**/*.{js,ts}',
      ],
    },
  },
  rules: [
    [/^w-s-(normal|nowrap|pre|pre-wrap|pre-line|break-spaces|inherit|initial|revert|revert-layer|unset)/, ([, c]) => ({ 'white-space': c })],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose m-auto text-left'.split(' '),
})
