import { createApp } from 'vue'
import './style.css'
import 'uno.css'
import App from './App.vue'

createApp(App).mount(
  (() => {
    console.log(monkeyWindow.location.href, 'URL')
    console.log(monkeyWindow.location.search, 'Search')
    const app = document.createElement('div')
    document.body.append(app)
    return app
  })(),
)
