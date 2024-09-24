
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.production'),
    })
  ],
  devtool: 'eval-source-map',
  performance: { hints: false }
};

// const { DefinePlugin } = require('webpack'); //added 
// module.exports = {
//     mode: 'production',
//     plugins: [
//       new DefinePlugin({
//         'process.env': {
//           'NODE_ENV': JSON.stringify('production'),
//         }
//       }),
//     ],
//     devtool: 'source-map',
//   };


  //give it the above content. 
  //Add:
  // plugins: [
  //   new DefinePlugin({
  //     'process.env': {
  //       'NODE_ENV': JSON.stringify('production'),
  //     }
  //   }),
  // ],