self.addEventListener('install', event => {
  event.waitUntil(caches.open('brian-may-ipad-rig-v1').then(cache => cache.addAll([
    '../brian-may-ipad-rig.html',
    './manifest.webmanifest'
  ])));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request)));
});