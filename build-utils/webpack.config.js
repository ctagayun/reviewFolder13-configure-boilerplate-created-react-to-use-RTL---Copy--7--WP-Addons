const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

const getAddons = (addonsArgs) => {
  const addons = Array.isArray(addonsArgs)
    ? addonsArgs
    : [addonsArgs];

  return addons
    .filter(Boolean)
    .map((name) => require(`./addons/webpack.${name}.js`));
};

//module.exports = ({ env }) => {
 module.exports = ({ env, addon }) => {
  const envConfig = require(`./webpack.${env}.js`);

  //return merge(commonConfig, envConfig);
  return merge(commonConfig, envConfig, ...getAddons(addon));
};

//Add ons stuff
//Now, not only the common and environment specific Webpack configuration get merged, 
//but also the optional addons which we will put into a dedicated 
//build-utils/addons folder.

//You can see that the function receives our env environment flag from the npm script. 
//That way, we can dynamically require a environment specific Webpack configuration 
//file with JavaScript template literals and merge it with a common Webpack configuration. 
//In order to merge it, let's install a little helper library: