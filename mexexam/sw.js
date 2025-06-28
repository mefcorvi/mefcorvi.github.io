// service-worker.js

const CACHE_NAME = 'all-requests-cache-v3';

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
  const isJSOrCSS =
    urlWithoutHash.endsWith('.js') || urlWithoutHash.endsWith('.css');

  // Create new request without hash fragment
  const requestWithoutHash = new Request(urlWithoutHash, {
    method: request.method,
    headers: request.headers,
    body: request.body,
    mode: request.mode,
    credentials: request.credentials,
    cache: request.cache,
    redirect: request.redirect,
    referrer: request.referrer,
    integrity: request.integrity
  });

  if (isJSOrCSS) {
    // Cache-first strategy for JS and CSS files
    event.respondWith(
      caches.match(requestWithoutHash).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(requestWithoutHash).then((networkResponse) => {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(requestWithoutHash, responseClone);
          });
          return networkResponse;
        });
      })
    );
  } else {
    // Network-first strategy for other paths
    event.respondWith(
      fetch(requestWithoutHash)
        .then((networkResponse) => {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(requestWithoutHash, responseClone);
          });
          return networkResponse;
        })
        .catch(() => {
          return caches.match(requestWithoutHash).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            return new Response('Offline', { status: 503 });
          });
        })
    );
  }
});
