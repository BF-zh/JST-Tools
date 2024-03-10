import type { ComponentMeta } from './types'

/**
 * 定义组件配置项
 * @param c 组件的配置像
 * @returns 组件配置项
 */
export const defineComponentMeta = (c: ComponentMeta) => c

/**
 * 挂载组件
 * @param compontent 组件
 * @param target 目标元素
 * @returns App<Element>
 */
export function mountVueCompontent(compontent: Component, target?: string | HTMLElement) {
  const app = createApp(compontent)
  app.mount(
    (() => {
      const div = document.createElement('div')
      const targetEl = (typeof target === 'string' ? document.querySelector(target) : document.body) || document.body
      targetEl.append(div)
      return div
    })(),
  )
  return app
}
export async function loadComponent(component: ComponentMeta) {
  const { entry } = component
  await entry({ meta: component })
}
