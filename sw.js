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

 var courses = [ { 'slug':'image1','topic': 'math', 'provider':'mike', 'location': 'hendon', 'price': 100 },
{'slug':'image', 'topic': 'math','provider':'deen',  'location': 'colindale', 'price': 80 },
{'slug':'hhdf', 'topic': 'math','provider':'solo',  'location': 'brent cross', 'price': 90 },
{'slug':'ikjg', 'topic': 'math', 'provider':'gerns', 'location': 'golders green', 'price': 120 },
{ 'slug':'kllggg','topic': 'english','provider':'oil',  'location': 'hendon', 'price': 110 },
{'slug':'gtfd', 'topic': 'english', 'provider':'philips', 'location': 'colindale', 'price': 90 },
{'slug':'olkj', 'topic': 'english', 'provider':'sony', 'location': 'brent cross', 'price': 90 },
{ 'slug':'kjjdfg','topic': 'english', 'provider':'samsung', 'location': 'golders green', 'price': 130 },
{ 'slug':'mgjjdh','topic': 'piano', 'provider':'dell', 'location': 'hendon', 'price': 120 },
{ 'slug':'nhdhkfj','topic': 'piano', 'provider':'apple', 'location': 'golders green', 'price': 140 }
]

var coursesImages = [];
for (var i = 0 ; i <courses.length ; i++){
    gamesImages.push('data/img/'+courses[i].slug+'.jpg');
}var contentToCache = appShellFiles.concat(coursesImages);

self.addEventListener('install',(e)=>{
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache)=>{
             console.log('[Service Worker] Caching all: app shell and content');
             return cache.addAll(contentToCache);
            }));
        }
            );