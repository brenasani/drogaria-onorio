const CACHE_NAME = 'onorio-commerce-v3';
const STATIC_ASSETS = [
    '/',
    '/comprar',
    '/css/onorio-commerce.css',
    '/assets/onorio-avatar.png',
    '/site.webmanifest'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => Promise.all(
            keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
        ))
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') {
        return;
    }

    const url = new URL(event.request.url);

    if (event.request.mode === 'navigate') {
        event.respondWith(fetch(event.request).catch(() => caches.match('/')));

        return;
    }

    const isStaticAsset = url.origin === self.location.origin
        && (url.pathname.startsWith('/css/')
            || url.pathname.startsWith('/assets/')
            || url.pathname === '/site.webmanifest');

    if (! isStaticAsset) {
        return;
    }

    event.respondWith(
        caches.match(event.request).then((cached) => cached || fetch(event.request))
    );
});
