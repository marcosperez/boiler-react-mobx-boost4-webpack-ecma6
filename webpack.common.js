const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry: {
    app: './src/index.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },

  module: {
    // loaders: [
    //   {
    //     test: /(\.js|.jsx)$/,
    //     loaders: ['babel', 'eslint']
    //   },
    // ],
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    }
    , 
    {
      test: /(\.js|.jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
      include: path.join(__dirname, 'src')
    }
  ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Development'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({ 
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
        Tether: 'tether'
    })
  ]
};