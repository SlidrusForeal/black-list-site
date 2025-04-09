const CACHE_NAME = "sosmark-cache-v1";
const OFFLINE_URL = "/pages/offline.html";
const NOT_FOUND_URL = "/pages/404.html";

const STATIC_FILES = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/checker.js",
  "/js/fullist.js",
  "/pages/fullist.html",
  "/pages/contacts.html",
  "/pages/404.html",
  "/pages/offline.html",
  "/icons/favicon.ico"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_FILES))
      .catch(err => console.error('Cache addAll error:', err))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
});

self.addEventListener("fetch", event => {
  // Обработка навигационных запросов
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(async () => {
          // Пытаемся найти в кэше запрашиваемую страницу
          const cachedResponse = await caches.match(event.request);
          return cachedResponse || caches.match(OFFLINE_URL);
        })
    );
  }
  else {
    // Для остальных ресурсов: Cache Falling Back to Network
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => cachedResponse || fetch(event.request))
        .catch(() => {
          if (event.request.destination === 'document') {
            return caches.match(NOT_FOUND_URL);
          }
          return Response.error();
        })
    );
  }
});