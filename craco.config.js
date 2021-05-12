const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
                '@primary-color': '#F7585B',
                '@border-radius-base':'7px',
                '@border-color-base':'transparent',
                '@disabled-color': '#2c2c2c88'
         },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};