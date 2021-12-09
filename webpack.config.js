const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: ['react-hot-loader/patch','./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.(jsx|js)$/,
                exclude: path.resolve(__dirname, 'node_modules'),           
            },
            {
                use: ["style-loader", "css-loader"],
                test: /\.css$/,
                exclude: path.resolve(__dirname, 'node_modules'), 
            },
            {
              test: /\.(jpg|png|svg|jpeg)$/,
              loader: 'url-loader',
              options: {
                limit: 25000,
              },
          },
          {
              test: /\.(jpg|png|svg|jpeg)$/,
              loader: 'file-loader',
              options: {
                name: '[path][name].[hash].[ext]',
              },
          },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ],
    optimization: {
        splitChunks: {
          cacheGroups: {   
            bundle: {
              test: /[\\/]node_modules[\\/]((react).*)[\\/]/,   
              chunks: "all",
              
              enforce: true,
              priority: 1  
            },
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              chunks: "all",
              name: "common",
              enforce: true,
              priority: 2
            }
          }
        }
      },
      resolve: {
        alias: {
          root: path.resolve(__dirname, 'src'),
        },
        extensions: ['.css', '.js', '.jsx']
      },
       mode: 'development'
};

module.exports = config;


 // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor'
        // }),
         //   {
        // bundle:  './src/index.js',
    //     vendor : VENDOR_LIB
    //   },

    // const webpack = require('webpack');

// const VENDOR_LIB = [
//     "@emotion/react",
//     "@emotion/styled",
//     "@mui/material",
//     "@reduxjs/toolkit",
//     "cra-template-redux",
//     "react",
//     "react-dom",
//     "react-hook-form",
//     "react-redux",
//     "react-scripts"
// ]

 // test: 'VENDOR_LIB',
    // exclude: /node_modules/