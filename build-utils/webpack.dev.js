const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development'),
    })
  ],
  devtool: 'eval-source-map',
  performance: { hints: false }
};

// const { DefinePlugin } = require('webpack'); //added
// module.exports = {
//     mode: 'development',
//     plugins: [
//       new DefinePlugin({
//         'process.env': {
//           'NODE_ENV': JSON.stringify('development'),
//         }
//       }),
//     ],
//     devtool: 'eval-source-map',
//   };

  //Sometimes you may want to know in your source code whether you are 
  // in development or production mode. For these cases you can specify dynamic 
  // environment variables via Webpack. Since you have a Webpack configuration 
  // file for each environment (dev, prod), you can define dedicated environment 
  // variables for them. In your build-utils/webpack.dev.js, define a environment 
  // variable by adding:
        // plugins: [
        //   new DefinePlugin({
        //     'process.env': {
        //       'NODE_ENV': JSON.stringify('development'),
        //     }
        //   }),
        // ],

