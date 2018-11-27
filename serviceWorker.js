const logName = '[serviceWorker] ';
const CACHE_NAME = 'w-cache-V2';
const urlsToCache = [
    '/',
    '/index.html',
    '/projects.html',
    '/about/index.html',
    '/blog/index.html',
    '/playground/index.html',
    '/assets/img/w-digital.png',
    '/assets/js/app.js',
    '/assets/js/components/logo.js',
    '/assets/js/components/screenLoader.js',
    '/manifest.json',
    '/assets/icons/android-icon-144x144.png',
    '/css/styles.css'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function (event) {
    console.log(logName, 'event.request:', event.request.url);
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (response) {
                    console.log(logName, 'load from cache', response.url);
                    return response;
                }
                console.log(logName, 'fetch network', event.request.url);
                const fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(function(response) {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME)
                        .then(function(cache) {
                            cache.put(event.request, responseToCache);
                        });
                    return response;
                })
            })
    );
});
