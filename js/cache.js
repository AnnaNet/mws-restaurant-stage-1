const restaurantCache = 'cache-only';


//TODO: register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/js/cache.js').then(function(registration) {
    console.log('on', registration);
  }).catch(function(error) {
    console.log('off', error);
  });
}


//TODO: add files for cache
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


/*self.addEventListener('fetch', function(event) {*/
  //event.respondWith(
    //caches.match(event.request).then(function(response) {
      //if (response) return response;
      //return fetch(event.request);
    //})
  //);

  //// TODO: respond with an entry from the cache if there is one.
  //// If there isn't, fetch from the network.
/*});*/
/*self.addEventListener('fetch', function(event) {*/
  //event.respondWith(
    //caches.match(event.request)
      //.then(function(response) {
        //if (response) {
          //return response;
        //}
        //return fetch(event.request);
      //}
    //)
  //);
/*});*/
/*self.addEventListener('fetch', function(event) {*/
  //event.respondWith(
    //caches.match(event.request)
    //.then(function(response) {
      //if (response) {
        //return response;
      //}
      //var fetchRequest = event.request.clone();
      //return fetch(fetchRequest).then(
        //function(response) {
          //// Check if we received a valid response
          //if(!response || response.status !== 200 || response.type !== 'basic') {
            //return response;
          //}
          //var responseToCache = response.clone();
          //caches.open(restaurantCache)
            //.then(function(cache) {
              //cache.put(event.request, responseToCache);
            //});

          //return response;
        //}
      //);
      //})
    //);
/*});*/
