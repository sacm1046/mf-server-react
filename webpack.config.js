const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = () => {
  return {
    entry: './index.js',
    output: {
      filename: 'bundle.js',
      publicPath: "http://localhost:4202/",
      uniqueName: "mfe4"
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',
                outputPath: 'images', // Carpeta de destino para las imágenes en el directorio de salida
              },
            },
          ],
        },
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['@babel/react', '@babel/env']
            }
          },],
        }
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "react",
        library: {
          type: "var",
          name: "react"
        },
        filename: "remoteEntry.js",
        exposes: {
          './ClientsModule': './microfrontends/Clients/index.js',
          './CounterModule': './components/Counter/index.js',
        },
        shared: ["react", "react-dom"]
      }),
      new CopyWebpackPlugin({
        patterns: [{
          from: './*.html'
        }]
      })
    ],
    devServer: {
      port: 4202
    }
  }
}

module.exports = config