import {config} from './modules/config.js'
import AppService from './modules/app.service'
import './modules/header.component.js'
import './css/index.css'
import './css/sass/header.sass'
import './css/less/index.less'

console.log(css.toString())

console.log('config key:', config.key)

const service = new AppService('Hello world')
service.log()