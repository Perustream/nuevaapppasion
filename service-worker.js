
self.addEventListener('install', (e) => {
  console.log('Service Worker instalado');
  e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker activado');
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
