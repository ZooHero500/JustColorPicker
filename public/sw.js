const CACHE_NAME = 'justcolorpicker-v1'
const urlsToCache = [
  '/',
  '/manifest.json',
  '/offline.html',
  '/desktop-icon/icon.svg',
  '/desktop-icon/icon-192x192.png',
  '/desktop-icon/icon-512x512.png'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
      })
      .catch(err => {
        console.error('Cache addAll failed:', err)
      })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response
      }
      return fetch(event.request)
    })
  )
})
