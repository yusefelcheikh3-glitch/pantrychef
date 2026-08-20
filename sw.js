const CACHE_NAME = "pantrychef-v0.5.7";
const urlsToCache = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./data/taxonomy.js",
  "./data/ingredients.js",
  "./data/substitutions.js",
  "./data/recipes.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./assets/screenshots/app_view1.png",
  "./assets/screenshots/app_view2.png",
  "./assets/screenshots/app_view3.png"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Network-First Strategy: Fetch fresh code from network, update cache, fallback to cache if offline
self.addEventListener("fetch", event => {
  // Ignore non-GET requests or chrome-extension URLs
  if (event.request.method !== "GET" || !event.request.url.startsWith("http")) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Fallback to cache when offline
        return caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          if (event.request.mode === "navigate") {
            return caches.match("./index.html");
          }
        });
      })
  );
});
