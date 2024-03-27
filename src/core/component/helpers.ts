import { matchUrlPattern } from '../utils'
import type { ComponentMeta, ComponentTag } from './types'
import { componentsMap } from '.'

/**
 * 定义组件配置项
 * @param c 组件的配置像
 * @returns 组件配置项
 */
export const defineComponentMeta = (c: ComponentMeta) => c

/**
 * 挂载组件
 * @param compontent 组件
 * @param target 目标元素 如果不传递 默认挂载到 document.body
 * @returns App<Element>
 */
export function mountVueCompontent(compontent: Component, target?: string | HTMLElement) {
  const app = createApp(compontent)
  app.mount(
    (() => {
      const div = document.createElement('div')
      const targetEl = typeof target === 'string' ? document.querySelector(target) : (target || document.body)
      if (!targetEl)
        throw new Error(`找不到目标元素: ${target}`)
      targetEl.appendChild(div)
      return div
    })(),
  )
  return app
}

/**
 * 判断此组件是否启用, 启用的条件为:
 * - 若定义了排除列表, 当前URL必须不匹配其排除列表中任意一项(`Component.urlExclude`)
 * - 若定义了包含列表, 当前URL必须匹配其包含列表中的任意一项(`Component.urlInclude`)
 * - 组件自身必须已启用(`ComponentSettings.enabled`)
 * - 不可配置的组件(`Component.configurable === false`), 上一条判断将使用组件的默认值(`Component.enabledByDefault`)
 * @param component 组件信息 或者组件名字
 * @returns 是否启用
 */
export function isComponentEnabled(component: ComponentMeta | string) {
  if (typeof component === 'string') {
    const existedComponent = componentsMap.get(component)
    if (!existedComponent)
      return false
    component = existedComponent
  }
  // 若指定了排除URL, 任意URL匹配就不加载
  if (component.urlExclude && matchUrlPattern(component.urlExclude))
    return false
    // 若指定了包含URL, 所有URL都不匹配时不加载
  if (component.urlInclude && !matchUrlPattern(component.urlInclude))
    return false
  if (component.configurable === false)
    return component.enabledByDefault ?? true
  return true
}

/**
 * 加载单个组件
 * @param component 组件信息
 */
export async function loadComponent(component: ComponentMeta) {
  const { entry } = component
  if (isComponentEnabled(component))
    await entry({ meta: component })
  return component
}
/** 组件标签 */
export const componentsTags: Record<string, ComponentTag> = {
  /** 工具 */
  utils: {
    name: 'utils',
    displayName: '工具',
    color: '#A36FFD',
    icon: 'i-carbon:tools',
    order: 1,
  },

  /** 实验性 */
  experimental: {
    name: 'experimental',
    displayName: '实验',
    color: '#FF5722',
    icon: 'i-carbon:audio-console',
    order: 2,
  },
  /** 通用 */
  general: {
    name: 'general',
    displayName: '通用',
    color: '#888',
    icon: 'i-carbon:progress-bar-round',
    order: 3,
  },
}
