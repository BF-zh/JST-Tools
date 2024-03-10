import { component as settingComponent } from './settings-panel'
import type { ComponentMeta } from '@/core'

/** 获取所有组件 */
export function getBuiltInComponents() {
  return [
    settingComponent,
  ]
}
