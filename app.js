    var courses = [];
    var courses2 =[];


    var coursesdis = new Vue({
        el: '#coursesDispaly',
        data: {

            courses :[]

},
methods:{  
    loadCourse: function () { 
fetch('http://localhost:3000/collections/lessons')
.then(function(response)
{
 return response.text()
   }).then(function(text)
   {
       alert(text);
       courses = JSON.parse(text);

       var template = "<article>\n\
<img src='data/images/blur.jpg' data-src='data/images/SLUG.jpg' alt='NAME'width='200' height='200'>\n\
<h3>#POS. NAME</h3>\n\
<ul>\n\
<li><span>Location:</span> <strong>LOCATION</strong></li>\n\
<li><span>Price:</span><strong>PRICE</strong></li> \n\
<li><span>Provider:</span><strong>PROVIDER</strong></li> \n\
</ul>\n\
</article>";
var content = '';
for(var i=0; i<courses.length; i++) {
 
var entry = template.replace(/POS/g,(i+1))
     .replace(/SLUG/g,courses[i].slug)
    .replace(/NAME/g,courses[i].topic)
    .replace(/LOCATION/g,courses[i].location)
    .replace(/PRICE/g,courses[i].price)
    .replace(/PROVIDER/g,courses[i].provider)
    
    
entry = entry.replace('<a href=\'http:///\'></a>','-');
content += entry;
};
document.getElementById('content').innerHTML = content;

let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
    image.setAttribute('src' , image.getAttribute('data-src'));
    image.onload =() => {
        image.removeAttribute('data-src');
    };
};

if('IntersectionObserver' in window) {
	var observer = new IntersectionObserver(function(items, observer) {
		items.forEach(function(item) {
			if(item.isIntersecting) {
				loadImages(item.target);
				observer.unobserve(item.target);
			}
		});
	});
	imagesToLoad.forEach(function(img) {
		observer.observe(img);
	});
}
else {
	imagesToLoad.forEach(function(img) {
		loadImages(img);
	});
}

       
       testing.courses = JSON.parse(text);
   }).catch(function(err){
console.log('Fetch problem: '+err.message);
})
}
}
    }
);

// courses created by a provider

var procourses = new Vue({
    el: '#contentProvider',
    data: {

        courses :[],
        providerName:''

},
methods:{  
findCourse: function () { 
    var provider = this.providerName
fetch(`http://localhost:3000/collections/lessons/providers/couseprovider/${provider}`)
.then(function(response)
{
return response.text()
}).then(function(text)
{
   alert(text);
   courses = JSON.parse(text);

   var template = "<article>\n\
<img src='data/images/blur.jpg' data-src='data/images/SLUG.jpg' alt='NAME'width='200' height='200'>\n\
<h3>#POS. NAME</h3>\n\
<ul>\n\
<li><span>Location:</span> <strong>LOCATION</strong></li>\n\
<li><span>Price:</span><strong>PRICE</strong></li> \n\
<li><span>Provider:</span><strong>PROVIDER</strong></li> \n\
</ul>\n\
</article>";
var content = '';
for(var i=0; i<courses.length; i++) {

var entry = template.replace(/POS/g,(i+1))
 .replace(/SLUG/g,courses[i].slug)
.replace(/NAME/g,courses[i].topic)
.replace(/LOCATION/g,courses[i].location)
.replace(/PRICE/g,courses[i].price)
.replace(/PROVIDER/g,courses[i].provider)


entry = entry.replace('<a href=\'http:///\'></a>','-');
content += entry;
};
document.getElementById('provider').innerHTML = content;

let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
image.setAttribute('src' , image.getAttribute('data-src'));
image.onload =() => {
    image.removeAttribute('data-src');
};
};

if('IntersectionObserver' in window) {
var observer = new IntersectionObserver(function(items, observer) {
    items.forEach(function(item) {
        if(item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
        }
    });
});
imagesToLoad.forEach(function(img) {
    observer.observe(img);
});
}
else {
imagesToLoad.forEach(function(img) {
    loadImages(img);
});
}

   
   testing.courses = JSON.parse(text);
}).catch(function(err){
console.log('Fetch problem: '+err.message);
})
}
}
}
);



//////////////////////////
//create a course

var createcourse = new Vue({
    el: '#createCourses',
    data: {
        topic:'',
        price:'',
        location:'',
        providerName: '',
                     
},
methods:{
    create :function () {
fetch(`http://localhost:3000/collections/lessons/`, {
method: 'POST', // *GET, POST, PUT, DELETE, etc.
headers: {
'Content-Type': 'application/json',
},

body: JSON.stringify({topic: this.topic, price: this.price, location: this.location, provider: this.providerName }) 
}).then(function (response){
return response.json()
}).then(function(data){
console.log('post rest', data)
})
}
}})









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








       
     