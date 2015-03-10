var webpack = require('webpack');  
module.exports = {  
  entry: [
    "./www/js/app.js"
  ],
  output: {
    path: __dirname + '/www/js',
    filename: "bundle.js",
    publicPath: "/js"
  },
  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]

};
