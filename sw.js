var cacheName ='coursework2-v1'; 

var appShellFiles = [
    '/coursework2Backend/coursework2/',
    '/coursework2Backend/coursework2/index.html',
    '/coursework2Backend/coursework2/app.js',
    '/coursework2Backend/coursework2/home.css',
   
  
];

 var courses = [ { 'slug':'image1','topic': 'math', 'provider':'mike', 'location': 'hendon', 'price': 100 },
{'slug':'image2', 'topic': 'math','provider':'deen',  'location': 'colindale', 'price': 80 },
{'slug':'image3', 'topic': 'math','provider':'solo',  'location': 'brent cross', 'price': 90 },
]

var coursesImages = [];
for (var i = 0 ; i <courses.length ; i++){
    coursesImages.push('data/imgages/'+courses[i].slug+'.jpg');
}
var contentToCache = appShellFiles.concat(coursesImages);

self.addEventListener('install',(e)=>{
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache)=>{
             console.log('[Service Worker] Caching all: app shell and content');
             return cache.addAll(contentToCache);
            }));
        }
            );