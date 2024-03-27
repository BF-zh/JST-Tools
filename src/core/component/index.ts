import { render } from 'vue'
import { matchUrlPattern } from '../utils'
import type { ComponentMeta } from './types'
import { loadComponent } from './helpers'
import { getBuiltInComponents } from '@/components'

export * from './helpers'
export type * from './types'

export const isBuiltInComponent = (name: string) => getBuiltInComponents().some(c => c.name === name)
/** 可根据组件名称检索对应的`ComponentMetadata` */
export const componentsMap = new Map<string, ComponentMeta>()
/** 获取所有组件 */
export function getAllComponents() {
  const component = getBuiltInComponents()
  component.forEach(c => componentsMap.set(c.name, c))
  return component
}

/** 加载所有组件 */
export async function loadAllComponents() {
  const components = getAllComponents()
  const loadComponents = Promise.all(components.map(c => loadComponent(c)))
}
