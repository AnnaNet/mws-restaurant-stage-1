//TODO: register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('cache.js').then(function(registration) {
    console.log('on', registration);
  }).catch(function(error) {
    console.log('off', error);
  });
}
