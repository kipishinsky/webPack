const path = require('path');
const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

//экспортируем объект
module.exports = {
    entry: './src/index.js', // входная точка
    output: { // складываем результат работы вебпака
        filename: 'bundle.js', // создаем файл, в который все сложится вебпаком
        path: path.resolve(__dirname, 'dist') // путь в папку dist, для файла bundle
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin ({}),
            new TerserPlugin ()
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname,'dist'),
        port: 4200
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin ({
            filename: 'style.css'
        })
    ],
    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                    ]
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }

        ]
    }

}