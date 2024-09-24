import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'This is src/index.js';

console.log(`Active execution environment is = ${process.env.NODE_ENV}`); //added to find out what environment we are in

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();

// use these two line of code to test Webpack Source Maps Section
// import sum from './sum.js';
// console.log(sum(2, 5));
