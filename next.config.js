const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/MyPortfolio_Karim' : '',
  assetPrefix: isProd ? '/MyPortfolio_Karim/' : '',
  images: {
    unoptimized: true, 
  },
};
