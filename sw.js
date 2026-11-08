
const CACHE_NAME = 'reeferdude-v2.0.0-cache';
const RUNTIME_CACHE = 'reeferdude-runtime-v2.0.0';

const PRECACHE_URLS = [
  '/',
  '/ai-budtender',
  '/studio',
  '/strain-lab',
  '/grow-room',
  '/store',
  '/puff-quest',
  '/brain-library',
  '/vault',
  '/blueprint-engine',
  '/kush-courier',
  '/consultation',
  '/community',
  '/business-hub',
  '/learn/best-seo-prompts',
  '/manifest.webmanifest',
  '/favicon.ico'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  const currentCaches = [CACHE_NAME, RUNTIME_CACHE];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          event.waitUntil(
            fetch(event.request).then(networkResponse => {
              if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                caches.open(RUNTIME_CACHE).then(cache => {
                  cache.put(event.request, networkResponse);
                });
              }
            }).catch(() => {})
          );
          return cachedResponse;
        }

        return fetch(event.request).then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(RUNTIME_CACHE).then(cache => {
            cache.put(event.request, responseToCache);
          });

          return response;
        }).catch(() => {
          if (event.request.headers.get('accept').includes('text/html')) {
            return caches.match('/');
          }
        });
      })
    );
  }
});

self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : { title: 'ReeferDude AI', body: 'New update available in the Universal Socket.' };
  const options = {
    body: data.body,
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      url: data.url || '/'
    }
  };
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
