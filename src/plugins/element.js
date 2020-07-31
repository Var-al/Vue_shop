import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { message,MessageBox } from 'element-ui'
import Timeline from './timeline/index'
import TimelineItem from './timeline-item/index'

Vue.use(Element)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.prototype.$message = message
Vue.prototype.$confirm = MessageBox.confirm