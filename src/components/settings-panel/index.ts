import SettingComponent from './SettingsContainer.vue'
import { defineComponentMeta, mountVueCompontent } from '@/core'

export const component = defineComponentMeta({
  name: 'setting',
  displayName: '设置',
  entry({ meta }) {
    mountVueCompontent(SettingComponent)
    console.log('setting entry 987897777777777777', meta)
  },
})
