
//self.addEventListener('install', (event) => {
    //console.log('Установлен');
//});

//self.addEventListener('activate', (event) => {
    //console.log('Активирован');
//});

//self.addEventListener('fetch', (event) => {
    //console.log('Происходит запрос на сервер');
/*});*/
/*}*/
//$(document).ready(function() {

  // TODO: register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/js/cache.js').then(function(registration) {
      console.log('on', registration);
    }).catch(function(error) {
      console.log('off', error);
    });
  }

const restaurantCache = 'cache-only';

self.addEventListener('install', function(event) {
  console.log ('I am here!');
  event.waitUntil(
    caches.open(restaurantCache)
    .then(function(cache) {
      console.log ('open cacheRest-t');
      return cache.addAll([
        '../css/styles.css',
        'main.js',
        'restaurant_info.js'
      ]);
    })
  );

});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
