const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Импортируем плагин
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// Импортируем плагин

let mode = 'development'; // По умолчанию режим development
if (process.env.NODE_ENV === 'production') {
  // Режим production, если
  // при запуске вебпака было указано --mode=production
  mode = 'production';
}

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html', // Данный html будет использован как шаблон TODO:поменять
  }),
]; // Создаем массив плагинов

if (process.env.SERVE) {
  // Используем плагин только если запускаем devServer
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  mode: mode,
  plugins: plugins,
  entry: './src/client/App.tsx',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    assetModuleFilename: 'assets/[hash][ext][query]', // Все ассеты будут
    // складываться в dist/assets
    filename: 'bundle.js',
    clean: true,
  },

  devServer: {
    hot: true, // Включает автоматическую перезагрузку страницы при изменениях
  },

  target: 'node',
  // externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  externalsPresets: {
    node: true, // in order to ignore built-in modules like path, fs, etc.
  },

  mode: 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: ['html-loader'],
      }, // Добавляем загрузчик для html
      {
        test: /\.(s[ac]|c)ss$/i,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      }, // Добавляем загрузчики стилей
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        exclude: path.resolve(__dirname, 'node_modules'),
        type: mode === 'production' ? 'asset' : 'asset/resource', // В продакшен режиме
        // изображения размером до 8кб будут инлайнится в код
        // В режиме разработки все изображения будут помещаться в dist/assets
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        exclude: path.resolve(__dirname, 'node_modules'),
        type: 'asset/resource',
      },
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
