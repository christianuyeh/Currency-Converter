import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/tailwind.css' // Make sure this path matches the created file
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';


// Font Awesome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown)


// createApp(App).mount('#app')
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')