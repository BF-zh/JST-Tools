/** 针对某种事件进行的代码注入 */
export interface HookProvider {
  /** 事件发生前执行 */
  before?: (...args: any[]) => void | Promise<void>
  /** 事件发生后执行 */
  after?: (...args: any[]) => void | Promise<void>
}
const hookMap = new Map<string, { providers: HookProvider[] }>()

/**
 * 注册事件钩子
 * @param event 事件名称
 * @param provider 钩子提供者
 */
export function registerHook(event: string, provider: HookProvider) {
  if (hookMap.has(event)) {
    const { providers } = hookMap.get(event) ?? {}
    providers?.push(provider)
  }
  else {
    hookMap.set(event, { providers: [provider] })
  }
}

/**
 * 执行事件钩子
 * @param event 事件名称
 * @param fixedArgs 事件参数
 */
export async function invokeHook(event: string, ...fixedArgs: any[]) {
  const { providers } = hookMap.get(event) ?? {}
  if (!providers?.length) {
    return {
      before: async () => Promise.all<void>([]),
      after: async () => Promise.all<void>([]),
    }
  }
  return {
    before: async (...args: any[]) =>
      Promise.all(providers.map(p => p.before?.(...fixedArgs.concat(args)))),
    after: async (...args: any[]) =>
      Promise.all(providers.map(p => p.after?.(...fixedArgs.concat(args)))),
  }
}
