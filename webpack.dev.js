const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  // devtool: 'inline-source-map',
devServer: {
  proxy: { 
    '/**': {  //catch all requests
      target: '/index.html',  //default target
      secure: false,
      bypass: function(req, res, opt){
        //your custom code to check for any exceptions
        //console.log('bypass check', {req: req, res:res, opt: opt});
        if(req.path.indexOf('/img/') !== -1 || req.path.indexOf('/public/') !== -1){
          return '/'
        }

        if (req.headers.accept.indexOf('html') !== -1) {
          return '/index.html';
        }
      }
    }
  }
},
  //   contentBase: './dist'
  // },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
});
