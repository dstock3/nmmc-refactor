const path = require('path');
const json5 = require('json5');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");

module.exports = {
  mode: 'production',
  context: path.join(__dirname, 'src'),
  entry: {
    main: './index.js',
    response: './contactServe.js',
    //notFound: './notFound.js',
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
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|webp|svg|jpg|jpeg|gif)$/i,
        include: path.resolve(__dirname, 'src'),
        type: 'asset/resource',
      },
     {
       test: /\.(woff|woff2|eot|ttf|otf)$/i,
       include: path.resolve(__dirname, 'src'),
       type: 'asset/resource',
     },
     {
        test: /\.json5$/i,
        include: path.resolve(__dirname, 'src'),
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      }
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    minimizer: [
      new CssMinimizerWebpackPlugin(),
      new TerserPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              [
                "svgo",
                {
                  plugins: extendDefaultPlugins([
                    {
                      name: "removeViewBox",
                      active: false,
                    },
                    {
                      name: "addAttributesToSVGElement",
                      params: {
                        attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
                      },
                    },
                  ]),
                },
              ],
            ],
          }
        }
      })
    ]
  },
  plugins: [
    new CompressionPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['main'],
      title: 'Home | NMMC',
      template: '/templates/template.html',
      cache: true,

    }),
    new HtmlWebpackPlugin({
      filename: 'contact-response.html',
      chunks: ['response'],
      title: 'Thanks! | NMMC',
      template: '/templates/template.html',
      cache: true,
    }),
    /*
    new HtmlWebpackPlugin({
      filename: 'not-found.html',
      chunks: ['notFound'],
      title: '404 Error | NMMC',
      template: '/templates/template.html',
      cache: true,
    }),
    */
  ]
};