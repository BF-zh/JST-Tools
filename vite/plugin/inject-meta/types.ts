import type { ObjectExpression, ObjectProperty } from '@babel/types'

export interface InjectMetaContext {
  expression: ObjectExpression
  filename: string
}
export type InjectMetaAction = (context: InjectMetaContext) => ObjectProperty[]
