import SettingComponent from './SettingsContainer.vue'
import { componentsTags, defineComponentMeta, mountVueCompontent } from '@/core'

export const component = defineComponentMeta({
  name: 'setting',
  displayName: '设置',
  description: '设置面板',
  tags: [componentsTags.general],
  urlInclude: ['*://*.bilibili.com/*', '*://www.erp321.com/epaas'],
  entry() {
    mountVueCompontent(SettingComponent)
  },
})
