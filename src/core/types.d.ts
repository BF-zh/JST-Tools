type ArrayAble<T> = T | T[]

export interface ComponentMate {
  match?: ArrayAble<string | RegExp>
  description: string
  author?: ArrayAble<Author>
  version?: string
}
export interface Author {
  name: string
  link: string
}
