
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('radio-cache').then(function(cache) {
      return cache.addAll([
        'index_radio_pasion_pwa.html',
        'manifest.json'
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
