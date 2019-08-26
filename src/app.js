import Vue from 'vue'
import router from './routes/router.js'
import App from './app.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// custom styles
import './styles/main.css'

//FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab, fas, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// vuetify pluggin
import vuetify from './plugins/vuetify' // path to vuetify export

Vue.use(vuetify)
Vue.use(VueAxios, axios)

  function component() {
    const element = document.createElement('div');
    element.setAttribute('id', 'app')

    return element;
  }

document.body.appendChild(component());

new Vue({
router,
vuetify,
render: h => h(App),
}).$mount('#app')
