/**
 * 等待一定时间
 * @param time 延迟的毫秒数
 */
export const delay = (time = 0) => new Promise<void>(r => setTimeout(() => r(), time))
/**
 * 测试字符串是否包含子串或匹配正则
 * @param str 字符串
 * @param pattern 子串或正则表达式
 */
export function matchPattern(str: string, pattern: string | RegExp) {
  if (typeof pattern === 'string')
    return str.includes(pattern)

  return pattern.test(str)
}
/** 以`document.URL`作为被测字符串, 移除URL查询参数并调用`matchPattern` */
export function matchUrlPattern(pattern: string | RegExp) {
  return matchPattern(document.URL.replace(window.location.search, ''), pattern)
}
