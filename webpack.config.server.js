const nodeExternals = require('webpack-node-externals')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  name: 'server',
  entry: {
    server: path.resolve(__dirname, 'src/server/main.ts'),
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  externals: [nodeExternals()],
  target: 'node',
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.server.json',
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ context: 'src/server', from: 'views', to: 'views' }],
    }),
  ],
}
