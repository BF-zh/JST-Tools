export type Executable<ReturnType = void> = () => ReturnType | Promise<ReturnType>
export type ExecutableWithParameter<Parameters extends any[] = never[], ReturnType = void> = (
  ...args: Parameters
) => ReturnType | Promise<ReturnType>
export type ArrayAble<T> = T | Array<T>
export type TestPattern = string[]
export type ArrayContent<T> = T extends Array<infer R> ? R : T
export type DescriptionInput = string | Executable<string>
export type I18nDescription =
  | DescriptionInput
  | { 'zh-CN': DescriptionInput, [key: string]: DescriptionInput }
