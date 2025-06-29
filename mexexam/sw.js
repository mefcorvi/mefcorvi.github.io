// service-worker.js

const CACHE_NAME = 'all-requests-cache-v4';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name))
        )
      )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  // Remove hash fragment from URL
  const urlWithoutHash = url.origin + url.pathname + url.search;
  const isStaticResource =
    urlWithoutHash.endsWith('.js') ||
    urlWithoutHash.endsWith('.css') ||
    urlWithoutHash.endsWith('.png') ||
    urlWithoutHash.endsWith('.jpg') ||
    urlWithoutHash.endsWith('.jpeg') ||
    urlWithoutHash.endsWith('.gif') ||
    urlWithoutHash.endsWith('.svg') ||
    urlWithoutHash.endsWith('.ico');

  if (isStaticResource) {
    // Cache-first strategy for JS and CSS files
    event.respondWith(
      caches.match(urlWithoutHash).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request).then((networkResponse) => {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(urlWithoutHash, responseClone);
          });
          return networkResponse;
        });
      })
    );
  } else {
    // Network-first strategy for other paths
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(urlWithoutHash, responseClone);
          });
          return networkResponse;
        })
        .catch(() => {
          return caches.match(urlWithoutHash).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            return new Response('Offline', { status: 503 });
          });
        })
    );
  }
});
