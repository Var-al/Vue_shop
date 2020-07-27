import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { message,MessageBox } from 'element-ui'

Vue.use(Element)
Vue.prototype.$message = message
Vue.prototype.$confirm = MessageBox.confirm