import Config from './config'
import FormDesign from './index.vue'

export default {
  install (Vue) {
    Vue.use(Config)
    Vue.component('XY' + FormDesign.name, FormDesign);
  }
}
