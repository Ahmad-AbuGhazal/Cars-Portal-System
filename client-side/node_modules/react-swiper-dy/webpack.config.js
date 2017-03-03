'use strict';

const env = process.env.NODE_ENV || 'development';

const webpack = require('webpack');
const path = require('path');
const webpackUMDExternal = require('webpack-umd-external');

const pluginsList = [];
const outputFileName = env === 'production' ?
  'react-swiper.min.js' :
  'react-swiper.js';

if (env === 'production') {
  pluginsList.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  );
}

const config = {
  entry: path.join(__dirname, 'src/ReactSwiper.js'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: outputFileName,
    library: 'ReactSwiper',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  externals: webpackUMDExternal({
    'react': 'React',
    'swiper': 'Swiper',
  }),

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: pluginsList,

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.css?$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  }
};

module.exports = config;