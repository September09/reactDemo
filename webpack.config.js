/**
 * Created by september on 2018/7/17.
 */

/*eslint-disable no-var */
var path = require('path')
var webpack = require('webpack')
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const postcssConfig = {
  loader: 'postcss-loader',
  options: {
    plugins: () => [
      autoprefixer({browsers: ['> 1%', 'last 4 versions']}),
      pxtorem({
        rootValue: 100,
        propWhiteList: [],
      })
    ]
  }
};
// the warning will be removed
process.noDeprecation = true;
module.exports = {
  entry: require('./webpack.entry'),
  output: {
    path: __dirname + '/__build__',   //输出的文件夹
    filename: '[name].js',            //打包输出的结果文件
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },
  module: {
    rules: [
      // 处理js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: [
            ["import", { libraryName: "antd-mobile", style: "css" }] // `style: true` 会加载 less 文件
          ]
        }
      },
      //图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
      //如下配置，将小于8192byte的图片转成base64码
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        use: 'url-loader?limit=5000000&name=[path][name].[ext]'
      },

      // 处理CSS  不包括 antd样式
      {
        test:/\.css$/,
        use:[
          {
            loader:'style-loader'
          },
          {
            loader:'css-loader',
            // 是否启动模块功能 启动为  import style from 'xxx.css'   不启动为  import 'xxx.css'
            options: {
              modules: true,
              localIdentName:'[name]__[local]___[hash:base64:5]'
            },
            // options: {
            //     importLoaders: 1
            // }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({broswer: 'last 5 versions'}), //处理CSS前缀问题，自动添加前缀
              ]
            }
          }
        ],
        include:[path.resolve(__dirname, "public")],
        // exclude:[path.resolve(__dirname, "public")],
        // exclude:/node_modules/,
      },

      // 处理CSS  只处理antd
      {
        test:/\.css$/,
        use:[
          {
            loader:'style-loader'
          },
          {
            loader:'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({broswer: 'last 5 versions'}), //处理CSS前缀问题，自动添加前缀
              ]
            }
          }
        ],
        include:[path.resolve(__dirname, "node_modules")],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          postcssConfig,
          {
            loader: 'sass-loader',
            options: {
              sassLoader: {
                includePaths: [
                  path.resolve(__dirname, "src/style"),
                  path.resolve(__dirname, "src/components")
                ]
              }
            }
          }
        ],
      },
      // {
      //     test: /\.(css)$/,
      //     // 配置css的抽取器、加载器。'-loader'可以省去
      //     // loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      //     use: 'style-loader!css-loader'
      //
      //     // test: /\.css$/,
      //     // use: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      //
      //
      // },
      {   //html模板加载器，可以处理引用的静态资源，默认配置参数attrs=img:src，处理图片的src引用的资源
        //比如你配置，attrs=img:src img:data-src就可以一并处理data-src引用的资源了，就像下面这样
        test: /\.html$/,
        use: "html?attrs=img:src img:data-src"
      }
    ]
  },

  resolve: {
    extensions: ['.coffee', '.js', '.css']
  },
  plugins: [
    //压缩打包的文件
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    //允许错误不打断程序
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}
