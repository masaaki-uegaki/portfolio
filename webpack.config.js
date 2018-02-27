const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development', // development or production
  entry: `./src/app/index.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 2
            },
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/*.html', to: './[name].[ext]' },
    ])
  ]
};  