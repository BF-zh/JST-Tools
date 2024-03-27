// import { defineComponentMeta } from '@/components'

import { loadAllComponents } from '@/core'
import '../style.scss'
import 'animate.css'
import 'uno.css'

(async () => {
  // console.log(defineComponentMeta, '12333333333333333333333333333')
  await loadAllComponents()
})()
