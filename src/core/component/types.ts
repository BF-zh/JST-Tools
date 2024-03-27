import type { Executable, I18nDescription, TestPattern } from '@/core/types'

export type UnknownOptions = Record<string, unknown>
export type EmptyOptions = Record<string, never>
type ComponentOptionValidator<T> = (value: T, oldValue: T) => T | undefined | null

/** 单个选项的信息 */
export interface OptionMetadata<V = unknown> {
  /** 默认值 */
  defaultValue: V
  /** 显示名称 */
  displayName?: string
  /** 如果希望这个选项显示为一个下拉框, 可以用相应的 `enum` 提供下拉框的选值, 或者也可以传入 `string[]` */
  dropdownEnum?: unknown
  /** 是否不显示在设置面板中(不自动生成选项UI) */
  hidden?: boolean
  /** 设为 `true` 时, 将用颜色选取器替代文本框 */
  color?: boolean
  /** 设置范围, 可以显示为一个滑动条 */
  slider?: {
    min?: number
    max?: number
    step?: number
  }
  /** `number`, `string`或`Range`类型的选项, 可以添加验证函数来阻止非法输入 */
  validator?:
    // | ComponentOptionValidator<Range<string>>
    | ComponentOptionValidator<string>
    | ComponentOptionValidator<number>
}

/** 组件基本配置 */
export interface ComponentBaseMeta {
  /** 描述 (支持 markdown), 可以设置为对象提供多语言的描述 (`key: 语言代码`) */
  description?: I18nDescription
  /** 作者信息 */
  author?: Author | Author[]

}

/** 作者信息 */
export interface Author {
  name: string
  link: string
}

/** 组件入口函数 */
export type ComponentEntry<C extends UnknownOptions = UnknownOptions, T = unknown> = (
  context: ComponentEntryContext<C>,
) => T | Promise<T>
/** 组件入口函数的参数 */
export interface ComponentEntryContext<C extends UnknownOptions = UnknownOptions> {
  /** 当前组件的设置 */
  // settings: ComponentSettings<C>
  /** 当前组件的信息 */
  meta: ComponentMeta<C>
  /** 核心 API */
  // coreApis: CoreApis
}

/** 函数组件meta */
export interface FunctionalComponentMeta<C extends UnknownOptions> {
  /** 主入口, 重新开启时不会再运行 */
  entry: ComponentEntry<C>
  /** 首屏样式, 会尽快注入 (before DCL) */
  instantStyles?: {
    /** 样式ID */
    name: string
    /** 样式内容, 可以是一个导入样式的函数 */
    style: string | (() => Promise<{ default: string }>)
    /** 设为`true`则注入到`document.body`末尾, 否则注入到`document.head`末尾 */
    important?: boolean
  }[]

  /** 重新开启时执行 */
  reload?: Executable
  /** 关闭时执行 */
  unload?: Executable
  /** 设置匹配的URL, 不匹配则不运行此组件 */
  urlInclude?: string[]
  /** 设置不匹配的URL, 不匹配则不运行此组件, 优先级高于`urlInclude` */
  urlExclude?: string[]
}

/** 组件的信息 */
export interface ComponentMeta<C extends UnknownOptions = UnknownOptions> extends ComponentBaseMeta, FunctionalComponentMeta<C> {
/** 组件名称 */
  name: string
  /** 显示名称 */
  displayName: string
  /** 是否默认开启, 省略时为 true */
  enabledByDefault?: boolean
  /** 是否可更改, 不可更改时启用状态固定为 `enabledByDefault` 的值 */
  configurable?: boolean
  /**  是否在设置界面中隐藏 (代码仍可操作) */
  hidden?: boolean
  /** 组件子选项 */
  options?: OptionMetadata<C>
  /** 标签 */
  tags: ComponentTag[]
/** 是否支持热重载 */
// allowHotReload?: boolean
}
/** 组件标签 */
export interface ComponentTag {
  /** 标签的名称 */
  name: string
  /** 标签的显示名称 */
  displayName: string
  /** 标签的颜色 */
  color: string
  /** 标签对应图标(传入`<VIcon>`的`icon`中) */
  icon: string
  /** 设置面板中的呈现顺序 */
  order: number
}
