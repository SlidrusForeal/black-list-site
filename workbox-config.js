module.exports = {
    globDirectory: 'public/',
    globPatterns: ['**/*.{html,css,js,json,ico,png}'],
    swDest: 'public/sw.js',
    clientsClaim: true,
    skipWaiting: true,
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images-cache',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 дней
          },
        },
      },
      {
        urlPattern: /\/scripts\/.*\.js$/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'js-cache',
          expiration: {
            maxEntries: 20,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 дней
          },
        },
      },
      {
        urlPattern: /\/styles\/.*\.css$/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'css-cache',
          expiration: {
            maxEntries: 20,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 дней
          },
        },
      },
    ],
  };
  