let plugins = [];
if (process.env.NODE_ENV === 'development') {
  plugins.push('react-refresh/babel');
  plugins.push('@babel/plugin-transform-typescript');
} // React hot reloading необходим только в режиме разработки

module.exports = {
  presets: ['@babel/env', '@babel/react', '@babel/preset-typescript'], // Добавляем в babel
  // пресет для работы с React
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    '@babel/plugin-proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
  // rules: [
  //   {
  //     test: /\.(js|jsx|tsx|ts)$/,
  //     exclude: /node_modules/,
  //     loader: 'babel-loader',
  //   },
  // ],
};
