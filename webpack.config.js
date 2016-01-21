module.exports = {
  entry: './src/app/app.component',
  output: {
    path: __dirname + '/src', publicPath: 'src/', filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [{
      test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/
    }]
  }
};
