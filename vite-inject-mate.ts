import type { Plugin } from 'vite'

export default function myPlugin(): Plugin {
  return {
    name: 'transform-file',
    transform(code, id, options) {
      console.log(code)
    },
  }
}
