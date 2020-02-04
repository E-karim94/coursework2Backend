 
 if ('serviceWorker'in navigator)
{navigator.serviceWorker.register('/coursework2Backend/sw.js');
};


var button = document.getElementById("notifications");
button.addEventListener('click',function(e){
Notification.requestPermission().then(function(result){
    if(result==='granted'
    ){
        randomNotification();
    }}
    );
});

var courses =  [ { 'slug':'lego','topic': 'Lego', 'provider':'mike laley', 'location': 'hendon', 'price': 100 },
{ 'slug':'image2','topic': 'Dancing', 'provider':'micheal promt', 'location': 'Greater London', 'price': 140 },
{'slug':'image3', 'topic': 'Sitch','provider':'Mary Bow',  'location': 'Colindale', 'price': 80 },
{'slug':'image4', 'topic': 'Sport of under 4','provider':'Lehla Megan',  'location': 'Brent Cross', 'price': 90 },
{'slug':'image5', 'topic': 'Skateboarding','provider':'Brian Sama',  'location': 'Hackney', 'price': 200 },
{'slug':'image6', 'topic': 'Robots for kids','provider':'Priti Patel',  'location': 'Downing Street', 'price': 190 },
{'slug':'image7', 'topic': 'Feel at Home','provider':'Nana Kwami',  'location': 'Ilford ', 'price': 299 },
{'slug':'image8', 'topic': 'Bounce','provider':'Kean Lee',  'location': 'Tottenham', 'price': 179 },
{'slug':'image9', 'topic': 'Multi Sport','provider':'Sata Rahmani',  'location': 'Seven sisters', 'price': 90 },
{'slug':'image10', 'topic': 'Coaching','provider':'Garry Williams',  'location': 'Bruce Grove', 'price': 245 },
]


function randomNotification(){
    var randomItem = Math.floor(Math.random()*courses.length);
    var notifTitle = courses[randomItem].topic;
    var notifBody='Created by '+courses[randomItem].provider+'.';
    var notifImg='data/images/'+courses[randomItem].slug+'.jpg';
    var options = {body:notifBody,
        icon:notifImg
    }
    var notif = new Notification(notifTitle,options);
    setTimeout(randomNotification,300000000);
}

let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
    image.setAttribute('src' , image.getAttribute('data-src'));
    image.onload =() => {
        image.removeAttribute('data-src');
    };
};

imagesToLoad.forEach((img) => { 
    loadImages(img);
});




       
     