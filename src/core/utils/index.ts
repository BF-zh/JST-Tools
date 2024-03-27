import UrlMatch from '@fczbkk/url-match'

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
    return new UrlMatch([pattern]).test(str)
  return pattern.test(str)
}
/** 以`document.URL`作为被测字符串, 移除URL查询参数并调用`matchPattern` */
export function matchUrlPattern(patterns?: string[]) {
  if (!Array.isArray(patterns)) {
    console.warn('matchUrlPattern: patterns is Array')
    return false
  }
  return new UrlMatch(patterns).test(document.URL)
}

/**
 * 返回一个空函数, 该函数不做任何事情
 */
export function none() {}
