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
  '/data/restaurants.json',
  'cache.js',
  'index.js',
  'README.md'
];

let fullPickt = function() {
for (let i = 1; i < 11; i++) {
  sourceCache.push(`/img/${i}.jpg`);
};
}();


//TODO: add files for cache
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(rCache)
    .then(function(cache) {
      return cache.addAll(sourceCache);
    })
  );
});


//TODO: delete old cache, when activate new one
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(rCache) {
      return Promise.all(
        cacheNames.filter(function(rCache) {
        }).map(function(rCache) {
          return caches.delete(rCache);
        })
      );
    })
  );
});


//TODO: fetch response
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});
