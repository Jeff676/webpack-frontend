const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    noInfo: false,
    port: 3000,
    watchContentBase: true,
    open: 'google-chrome'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*','.js','.vue','.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Alfamedica Venezuela',
    }),
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin()
   ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_mdules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
         test: /\.css$/i,
         use: [
           'vue-style-loader',
           'css-loader',
           // invbestigar que significa
           // options: {
           //      import: true,
           //   },
         ]
      },
      {
       test: /\.(sass|scss)$/,
       use: [
         'style-loader', // creates style nodes from JS strings
         'css-loader', // translates CSS into CommonJS
         'sass-loader', // compiles Sass to CSS, using Node Sass by default
       ],
     },
     {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
     },
     {
       test: /\.(png|svg|jpg|gif|jpeg)$/,
       use: [
         'file-loader',
       ]
     }
    ]
  }
}
