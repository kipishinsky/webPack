import {config} from './modules/config.js'
import AppService from './modules/app.service'
import './modules/header.component.js'
import css from './css/index.css'
import sass from './css/header.sass'

console.log(css.toString())

console.log('config key:', config.key)

const service = new AppService('Hello world')
service.log()