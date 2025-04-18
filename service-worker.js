self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('spesa-cache').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './app.js',
        './icon-192x192.png',
        './icon-512x512.png',
        './manifest.json'
      ]);
    })
  );
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
