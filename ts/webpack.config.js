  const path = require('path');

  module.exports = {
    mode: 'development',
    entry: './src/A0020-exercicio/index.ts',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            reportFiles: 'tsconfig.frontend.json'
          }
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
    },
  };
