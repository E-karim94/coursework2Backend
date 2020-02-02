if('serviceWorker'in navigator)
{navigator.serviceWorker.register('/coursework2Backend/coursework2/sw.js');
};


var button = document.getElementById("notifications");
button.addEventListener('click',function(e){
Notification.requestPermission().then(function(result){
    if(result==='granted'){randomNotification();
    }}
    );
});

var courses = [ { 'slug':'image','topic': 'math', 'provider':'mike', 'location': 'hendon', 'price': 100 },
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


function randomNotification(){
    var randomItem = Math.floor(Math.random()*courses.length);
    var notifTitle = courses[randomItem].topic;
    var notifBody='Created by '+courses[randomItem].provider+'.';
    var notifImg='data/img/'+courses[randomItem].slug+'.jpg';
    var options = {body:notifBody,
        icon:notifImg
    }
    var notif = new Notification(notifTitle,options);
    setTimeout(randomNotification,300000000);
}




       
     