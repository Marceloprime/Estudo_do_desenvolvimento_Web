const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const modoDev = process.env.NODE_ENV !== 'production'
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    optimization: {
        minimizer: [
          (compiler) => {
            const TerserPlugin = require('terser-webpack-plugin');
            new TerserPlugin({
              /* your config */
            }).apply(compiler);
          },
        ],
    },
    module: {
        rules:[
            {
                test: /\.s?[ac]ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                //'style-loader',//adicionar CSS a DOM injetando a tag <style>
                'css-loader', //interpretar @import, url()...
                'sass-loader', 
                
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: ['file-loader']
            }
    
        ]
    }
}