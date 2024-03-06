import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import monkey, { cdn, util } from 'vite-plugin-monkey'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import legacy from '@vitejs/plugin-legacy'
import { AntDesignVueResolver, ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true,
      },
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      dirs: ['src/components'],
      directoryAsNamespace: true,
      extensions: ['vue', 'md'],
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,
        }),
        ElementPlusResolver({}),
      ],
      deep: true,
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: './types/components.d.ts',
    }),
    Unocss(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        'pinia',
        util.unimportPreset,
      ],
      resolvers: [
        ElementPlusResolver(),
      ],
      dts: './types/imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
        'src/api',
        'src/utils',
      ],
      vueTemplate: true,
    }),
    legacy({
      targets: ['defaults', 'ie >= 11', 'chrome >= 52'], // 需要兼容的目标列表，可以设置多个
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      renderLegacyChunks: false,
      polyfills: [
        'es.symbol',
        'es.array.filter',
        'es.promise',
        'es.promise.finally',
        'es/map',
        'es/set',
        'es.array.for-each',
        'es.array.to-stored',
        'es.object.define-properties',
        'es.object.define-property',
        'es.object.get-own-property-descriptor',
        'es.object.get-own-property-descriptors',
        'es.object.keys',
        'es.object.to-string',
        'web.dom-collections.for-each',
        'esnext.global-this',
        'esnext.string.match-all',
        'MutationObserver',
      ],
    }),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        'name': '聚水潭 Tools',
        'description': '聚水潭(erp321.com) 快捷工具 包含快递单号录入 排除等',
        'icon': 'http://q2.qlogo.cn/headimg_dl?dst_uin=2581807417&spec=100',
        'author': 'BF-<2581807417@qq.com>',
        'namespace': 'npm/vite-plugin-monkey',
        'copyright': '北风-JST',
        'version': packageJson.version,
        'match': ['*://*.erp321.com/*'],
        'exclude': ['*://www.erp321.com/login'],
        'run-at': 'document-start',
        'require': ['https://scriptcat.org/lib/637/1.3.3/ajaxHooker.js', util.dataUrl(';window.ajaxHooker=ajaxHooker;')],
      },
      build: {
        externalGlobals: [
          [
            'vue',
            cdn
              .unpkg('Vue', 'dist/vue.global.prod.js')
              .concat(
                cdn.unpkg('', 'lib/index.iife.js')[1]('latest', 'vue-demi'),
              )
              .concat(util.dataUrl(';window.Vue=Vue;')),
          ],
          ['pinia', cdn.unpkg('Pinia', 'dist/pinia.iife.prod.js')],
          [
            'element-plus',
            cdn.unpkg('ElementPlus', 'dist/index.full.min.js'),
          ],
        ],
        externalResource: {
          'element-plus/dist/index.css': cdn.unpkg(),
        },
      },

    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // server: {
  //   hmr: {
  //     overlay: false,
  //   },
  // },
})
