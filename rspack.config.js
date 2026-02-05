const path = require('path');
const HtmlRspackPlugin = require('html-rspack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // 项目的入口文件
  entry: './script/main.js',
  output: {
    // 打包后的文件输出到 dist 文件夹
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    // 关键：使用相对路径，这样在 GitHub Pages 上资源才不会 404
    publicPath: './',
    // 每次打包前清空旧的 dist 文件夹
    clean: true
  },
  plugins: [
    // 把根目录的 index.html 复制到 dist 里，并自动引入打包好的 main.js
    new HtmlRspackPlugin({
      template: './index.html'
    }),
    //把静态资源文件夹复制到 dist 里
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: 'img/**/*',
    //       to: 'img/[name][ext]',
    //       noErrorOnMissing: true,
    //       globOptions: {
    //         dot: true
    //       }
    //     },
    //     {
    //       from: 'fonts/**/*',
    //       to: 'fonts/[name][ext]',
    //       noErrorOnMissing: true,
    //       globOptions: {
    //         dot: true
    //       }
    //     },
    //     {
    //       from: 'music/**/*',
    //       to: 'music/[name][ext]',
    //       noErrorOnMissing: true,
    //       globOptions: {
    //         dot: true
    //       }
    //     }
    //   ]
    // })
  ]
};