const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/MyPortfolio_Karim/' : '',
  basePath: isProd ? '/MyPortfolio_Karim' : '',
};
