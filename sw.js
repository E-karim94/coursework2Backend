
var cacheName ='cacheFiles-v1'; 

var appShellFiles = [
    '/coursework2Backend/cacheFiles/',
    '/coursework2Backend/cacheFiles/index.html',
    '/coursework2Backend/cacheFiles/app.js',
    '/coursework2Backend/cacheFiles/home.css',
    '/coursework2Backend/cacheFiles/data/images/image2.jpg ',
    '/coursework2Backend/cacheFiles/data/images/image3.jpg ',
    '/coursework2Backend/cacheFiles/data/images/image4.jpg ',
    '/coursework2Backend/cacheFiles/data/images/image5.jpg ',
    '/coursework2Backend/cacheFiles/data/images/image6.jpg ',
    '/coursework2Backend/cacheFiles/data/images/image7.jpg ',
    '/coursework2Backend/cacheFiles/data/images/image8.jpg ',
    '/coursework2Backend/cacheFiles/data/images/image9.jpg ',
    '/coursework2Backend/cacheFiles/data/images/image10.jpg ',
   
  
];


var contentToCache = [] = appShellFiles;

self.addEventListener('install',(e)=>{
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
             console.log('[Service Worker] Caching all: app shell and content');
             return cache.addAll(contentToCache);
            })
            );
        }
 );

 /*self.addEventListener('fetch',function(e){
     e.respondWith(
         caches.match(e.request).then(function(r){
             console.log('[Service Worker] Fetching resource: '+e.request.url);
             return r || fetch(e.request).then(function (response) {
                 return caches.open(cacheName).then(function(cache)
                 {
                console.log('[Service Worker] Caching new resource: '+e.request.url);
                cache.put(e.request,response.clone());returnresponse;
            });
        });
    }));
});*/