import type { App, Component } from 'vue'

export function mountVueComponent<T>(component: Component) {
  const app = createApp(component)
  return app as App & T
}
