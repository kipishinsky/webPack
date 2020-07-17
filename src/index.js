import {config} from './modules/config.js'
import AppService from './modules/app.service'
import './modules/header.component.js'

console.log('config key:', config.key)

const service = new AppService('Hello world')
service.log()