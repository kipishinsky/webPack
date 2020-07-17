/*
https://webpack.js.org/guides/installation/
npm install --save-dev webpack webpack cli // установка вебпака
webpack // run webpack
webpack --mode development // собрать проект в режиме разраба
npm install --save-dev html-webpack-plugin //плагин для  создания  html
npm install -S jquery // установка джиквери


"dev:watch" : "webpack --mode development --watch" // автосборка проекта
npm run dev:watch //запустить watch режим
ctrl + с = выйти из режима


https://webpack.js.org/loaders/
npm install --save-dev css-loader
npm install sass-loader sass webpack --save-dev
npm install --save-dev style-loader

npm install --save-dev mini-css-extract-plugin // сажаем в 1 css файл
npm install --save-dev optimize-css-assets-webpack-plugin // оптимизируем css файл
npm install terser-webpack-plugin --save-dev // оптимизация bundle


// локальный сервер
https://webpack.js.org/configuration/dev-server/
npm install -D webpack-dev-server
"start" : "webpack-dev-server --mode development --open" // в package.json добавляет в scripts


https://babeljs.io/
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill // можем преобразовать псевдомассивы в массив
{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
npm install -D babel-loader
создаем файл в корне .babelrc // служит для пересов синтаксисов
    {
  "presets" : [
    ["@babel/preset-env", {
      "targets" :[
        "last 5 versions"
      ]
    }]
  ]
}


//подключаем less
npm install less-loader less --save-dev
import './css/less/index.less'
    в конфигурацию вебпака
    {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
    },

*/