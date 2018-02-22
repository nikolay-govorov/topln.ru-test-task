const { join } = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');

const { NODE_ENV: env = 'development' } = process.env;

module.exports = {
  context: join(__dirname, 'source', 'client'),

  entry: './index',

  devtool: env === 'production' ? '#source-map' : '#eval-source-map',

  output: {
    path: join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'build.[hash].js',
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
        },
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax',
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: [
              'vue-style-loader',
              'css-loader',
              'sass-loader',
            ],

            sass: [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax',
            ],
          },
        },
      },
    ],
  },

  performance: {
    hints: false,
  },

  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
      },
    }),

    new ManifestPlugin(),

    ...(env === 'production' ? [
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,

        compress: {
          warnings: false,
        },
      }),

      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
    ] : []),
  ],
};