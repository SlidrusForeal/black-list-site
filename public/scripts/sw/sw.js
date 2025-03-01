const CACHE_NAME = 'sosmark-v1';
const ASSETS = [
  '/public/',
  '/public/index.html',
  '/public/pages/fullist.html',
  '/public/pages/contacts.html',
  '/public/styles/style.css',
  '/public/app/scripts/checker.js',
  '/public/app/scripts/fullist.js'
];

// Событие установки: кешируем указанные ресурсы
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Кеширование ресурсов');
        return cache.addAll(ASSETS);
      })
      .catch(error => {
        console.error('[Service Worker] Ошибка при кешировании:', error);
      })
  );
});

// Событие активации: удаляем устаревшие кеши
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            console.log('[Service Worker] Удаление старого кеша:', name);
            return caches.delete(name);
          }
        })
      );
    })
  );
});

// Событие fetch: сначала пытаемся вернуть кешированную версию, если её нет - делаем запрос в сеть
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Если ресурс найден в кеше, возвращаем его
        if (response) {
          return response;
        }
        // Иначе – запрашиваем из сети
        return fetch(event.request);
      })
      .catch(error => {
        console.error('[Service Worker] Ошибка при fetch:', error);
      })
  );
});
