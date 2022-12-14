import { createApp } from 'vue'

import { router } from './router.js'


import './assets/styles/main.scss'
import rootCmp from './root-cmp.vue'

const app = createApp(rootCmp)
app.use(router)


app.mount('#app')
