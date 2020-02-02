var cacheName ='coursework2-v1'; 
var appShellFiles = [
    '/coursework2Backend/coursework2/',
    '/coursework2Backend/coursework2/index.html',
    '/coursework2Backend/coursework2/app.js',
    '/coursework2Backend/coursework2/home.css',
    '/coursework2Backend/coursework2/data/images/image1.jpg ',
    '/coursework2Backend/coursework2/data/images/image2.jpg ',
    '/coursework2Backend/coursework2/data/images/image3.jpg ',
    '/coursework2Backend/coursework2/data/images/image4.jpg ',
    '/coursework2Backend/coursework2/data/images/image5.jpg ',
    '/coursework2Backend/coursework2/data/images/image6.jpg ',
  
];

self.addEventListener('install',(e)=>{
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache)=>{
             console.log('[Service Worker] Caching all: app shell and content');
             return cache.addAll(contentToCache);
            }));
        }
            );