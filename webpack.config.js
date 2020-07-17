const path = require('path');
const HTMLPlugin = require('html-webpack-plugin')

//экспортируем объект
module.exports = {
    entry: './src/index.js', // входная точка
    output: { // складываем результат работы вебпака
        filename: 'bundle.js', // создаем файл, в который все сложится вебпаком
        path: path.resolve(__dirname, 'dist') // путь в папку dist, для файла bundle
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                    ]
            }
        ]
    }

}