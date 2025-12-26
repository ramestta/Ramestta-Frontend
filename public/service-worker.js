const CACHE_NAME = 'ramestta-v2';
const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

// Only cache static assets, not API responses
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Domains that are allowed for fetch requests
const ALLOWED_ORIGINS = [
  self.location.origin,
  'https://ramestta.com',
  'https://newapi.ramestta.com',
  'https://blockchain.ramestta.com',
  'https://blockchain2.ramestta.com',
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com'
];

// Check if URL is from an allowed origin
const isAllowedOrigin = (url) => {
  try {
    const parsed = new URL(url);
    return ALLOWED_ORIGINS.some(origin => {
      if (origin === self.location.origin) return parsed.origin === origin;
      return parsed.href.startsWith(origin);
    });
  } catch {
    return false;
  }
};

// Check if request is for an API (should not be cached)
const isApiRequest = (url) => {
  return url.includes('/api/') || 
         url.includes('newapi.ramestta.com') ||
         url.includes('blockchain.ramestta.com');
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const requestUrl = event.request.url;
  
  // Security: Only handle requests from allowed origins
  if (!isAllowedOrigin(requestUrl)) {
    return;
  }
  
  // Don't cache API requests or POST/PUT/DELETE requests
  if (isApiRequest(requestUrl) || event.request.method !== 'GET') {
    event.respondWith(fetch(event.request));
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          // Return cached response but also update cache in background
          event.waitUntil(
            fetch(event.request)
              .then(networkResponse => {
                if (networkResponse && networkResponse.status === 200) {
                  caches.open(CACHE_NAME)
                    .then(cache => cache.put(event.request, networkResponse));
                }
              })
              .catch(() => {})
          );
          return response;
        }

        return fetch(event.request).then((response) => {
          // Only cache successful responses from same origin
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(() => {
          // Return cached index.html for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
          return new Response('Offline', { status: 503 });
        });
      })
  );
});

self.addEventListener('activate', (event) => {
  // Clean up old caches
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

  return self.clients.claim();
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  // Allow manual cache clearing
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.delete(CACHE_NAME);
  }
});
