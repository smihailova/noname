var path = require('path');
var BundleTracker = require('webpack-bundle-tracker');
var webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ],

    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: '/node_modules/',
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-2', 'react'],
        plugins: ['react-hot-loader/babel']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  },

  entry: [
    'webpack-dev-server/client?http://127.0.0.0:8080/',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.join(__dirname, '../app/static/js/src/app.react.js')
  ],

  devtool: 'inline-source-map',

  output: {
    path: path.join(__dirname, '../app/static/builds/'),
    filename: 'bundle.js',
    publicPath: 'http://0.0.0.0:3000/app/static/builds/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      }
    })
  ],

  devServer: {
    inline: true,
    progress: true,
    hot: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000
  },
};
