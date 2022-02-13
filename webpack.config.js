const path = require('path');
const json5 = require('json5');
const HtmlWebpackPlugin =  require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    response: './src/contactServe.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public_html'),
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
     {
       test: /\.(woff|woff2|eot|ttf|otf)$/i,
       type: 'asset/resource',
     },
     {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['main'],
      title: 'Home | NMMC',
      template: 'src/templates/template.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'contact-response.html',
      chunks: ['response'],
      title: 'Thanks! | NMMC',
      template: 'src/templates/template.html'
    }),
  ]
};