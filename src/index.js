import React from 'react'
import {render} from 'react-dom'
import {config} from './modules/config.js'
import AppService from './modules/app.service'
import App from './App.js'
import './css/index.css'
import './css/sass/header.sass'
import './css/less/index.less'


console.log('config key:', config.key)

const service = new AppService('Hello world')
service.log()

render (<App />, document.getElementById('app'))