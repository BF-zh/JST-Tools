import { basename, join, resolve } from 'node:path'
import { identifier, objectProperty, traverse } from '@babel/types'
import { parse } from '@babel/parser'
import { CodeGenerator } from '@babel/generator'
import type { Plugin } from 'vite'
import { injectCoreInfo } from './core-info'

const injectActions = [injectCoreInfo]
export function injectMeta(): Plugin {
  return {
    name: 'vite-inject-meta',
    transform(code, id) {
      // 在这里进行文件转换
      const isFromRegistry = resolve(id).startsWith(resolve('./registry'))
      const isFromCore = resolve(id).startsWith(resolve('./src/components')) || resolve(id).startsWith(resolve('./src/plugins'))
      const isEntryFile = basename(id) === 'index.ts'
      if (!((isFromRegistry || isFromCore) && isEntryFile))
        return
      const ast = parse(code, {
        sourceType: 'module',
        sourceFilename: id,
        plugins: ['jsx', 'typescript'],
        allowAwaitOutsideFunction: true,
        tokens: true,

      })
      traverse(ast, (node) => {
        if (node.type !== 'VariableDeclaration')
          return
        const { declarations } = node
        for (const declaration of declarations) {
          const { filename } = declaration.loc
          const isNameValid = declaration.id?.type === 'Identifier' && ['component', 'plugin'].includes(declaration.id.name)
          if (!isNameValid)
            continue
          const targetExpression = declaration.init.type === 'CallExpression' ? declaration.init.arguments[0] : declaration.init
          if (targetExpression.type !== 'ObjectExpression')
            continue
          const { properties } = targetExpression
          properties.push(...injectActions.flatMap(action =>
            action({
              expression: targetExpression,
              filename,
            }),
          ))
        }
      })
      const codeGenerator = new CodeGenerator(ast, {}, code)
      const generate = codeGenerator.generate()
      return generate.code
    },

  }
}
