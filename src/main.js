import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import en from './langs/en'
import km from './langs/km'

const i18n = createI18n({
    legacy: false,
    locale: 'km',
    fallbackLocale: 'en',
    messages: {
        en: en.message,
        km: km.message
    }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
