let path = require('path');
let webpack = require('webpack');

module.exports = {
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                'presets': [ 
                [
                    "@babel/preset-env", 
                    { 
                    "targets": {
                        "browsers": ['last 2 versions', "ie >= 11"]
                    }
                }
                ]

                ]
              }
            }
          }
        ]
      }
};