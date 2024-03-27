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
    [/^translate-hidden-x-(\d*)/, ([, c]) => `translate-x-[calc(-${c}%*var(--direction))]`],
    [/^translate-hidden-y-(\d*)/, ([, c]) => `translate-y-[calc(-${c}%*var(--direction))]`],
    [/^translate-show-x-(\d*)/, ([, c]) => `translate-x-[calc(${c}%*var(--direction))]`],
    [/^translate-show-y-(\d*)/, ([, c]) => `translate-y-[calc(${c}%*var(--direction))]`],
    [/^a-(v|h)-center/, ([,c]) => c === 'v' ? `absolute top-50% translate-y--50%` : `left-50% translate-x--50%`],
    ['t-icon', 'inline-block cursor-pointer select-none transition duration-200 ease-in-out svg-inline size-[1em] font-size-24px fill-current stroke-current'],
    ['t-icon-spin', 't-icon animate-spin'],
    ['t-icon-pulse', 't-icon animate-pulse'],
    ['t-icon-spin-pulse', 't-icon-spin t-icon-pulse'],
    ['t-icon-rotate', 't-icon rotate-[calc(var(--direction)*360deg)]'],
    [/^flex-center-(\w*)/, ([,c]) => `flex items-center justify-center gap-${c}`],
  ],
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
    // [/^v-center-(\w*)/, ([, c]) => ({
    //   'display': 'flex',
    //   'justify-content': 'center',
    //   'align-items': 'center',
    //   'gap': c,
    // })],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      autoInstall: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      cdn: 'https://esm.sh/',
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: [],
})
