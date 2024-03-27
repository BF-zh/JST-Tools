import { identifier, objectProperty, stringLiteral } from '@babel/types'
import { runtimeInfo } from '../../compilation-info/runtime'
import { commitHash } from '../../compilation-info/git'
import type { InjectMetaAction } from './types'

export const injectCoreInfo: InjectMetaAction = () => [
  objectProperty(identifier('commitHash'), stringLiteral(commitHash)),
  objectProperty(identifier('coreVersion'), stringLiteral(runtimeInfo.version)),
]
