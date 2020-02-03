self.importScripts(data/courses.js);
var cacheName ='coursework2Backend-v1'; 

var appShellFiles = [
    '/coursework2Backend/',
    '/coursework2Backend/index.html',
    '/coursework2Backend/app.js',
    '/coursework2Backend/home.css',
    '/coursework2Backend/data/images/image1.jpg ',
    '/coursework2Backend/data/images/image2.jpg ',
    '/coursework2Backend/data/images/image3.jpg ',
    '/coursework2Backend/data/images/image4.jpg ',
    '/coursework2Backend/data/images/image5.jpg ',
    '/coursework2Backend/data/images/image6.jpg ',
    '/coursework2Backend/data/images/image7.jpg ',
    '/coursework2Backend/data/images/image8.jpg ',
    '/coursework2Backend/data/images/image9.jpg ',
    '/coursework2Backend/data/images/image10.jpg ',
   
  
];


var contentToCache = appShellFiles

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