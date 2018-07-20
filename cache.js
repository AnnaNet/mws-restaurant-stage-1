let rCache = 'cache-only-v1';
let sourceCache = [
  '/',
  '/css/styles.css',
  '/css/responsive.css',
  'index.html',
  'restaurant.html',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/js/dbhelper.js',
];

for (let i = 1; i < 11; i++) {
  sourceCache.push(`/img/${i}.jpg`);
};


//TODO: add files for cache
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(rCache)
    .then(function(cache) {
      return cache.addAll(sourceCache);
    })
  );
});


//TODO: fetch response
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) return response;
      return fetch(event.request);
    })
  );
});
