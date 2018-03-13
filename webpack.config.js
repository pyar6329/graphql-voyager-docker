const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const root = require('./helpers').root;

module.exports = {
  devtool: 'cheap-source-map',

  performance: {
    hints: false
  },
  devServer: {
    watchContentBase: true,
    host: '0.0.0.0',
    port: 9090,
    stats: 'errors-only',
    disableHostCheck: true
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },
  entry: ['./index.jsx'],
  output: {
    path: root('dist'),
    filename: 'main.js',
    sourceMapFilename: '[file].map'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new CopyWebpackPlugin([
      { from: './node_modules/graphql-voyager/dist/voyager.worker.js' }
    ]),
    new webpack.DefinePlugin({
      'process.env.GRAPHQL_SCHEMA_URL': JSON.stringify(process.env.GRAPHQL_SCHEMA_URL)
    })
  ]
}
