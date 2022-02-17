const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  images: {
    disableStaticImages: true,
  },
});
