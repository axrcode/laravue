require('./bootstrap')

window.Vue = require('vue').default

import App from "./App.vue"
import router from './routes/index'

//Vue.component('example-component', require('./components/ExampleComponent.vue').default)

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router
})
