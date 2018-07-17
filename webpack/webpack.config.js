/**
 * Created by september on 2018/5/27.
 */

const path = require('path');
const webpack = require('webpack');
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

module.exports = {
  resolve: { // 指定第三方库目录，减少webpack寻找时间
    modules: [path.resolve(__dirname, '../node_modules')],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader', // 加载器
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
              options: {
                  limit: 25000
              }
          },
        ],
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'less-loader',
          options: {
            sourceMap: true,
          },
        }],
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
        {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        name:'[path][name].[ext]',
                        limit: 25000
                    }
                }
            ]
        }
    ],
  },

  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
      minChunks: Infinity
    },
  },
};
