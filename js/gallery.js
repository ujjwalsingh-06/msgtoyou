const images = [

"assets/images/img1.jpg",
"assets/images/img2.jpg",
"assets/images/img3.jpg",
"assets/images/img4.jpg",
"assets/images/img5.jpg",
"assets/images/img6.jpg",
"assets/images/img7.jpg",
"assets/images/img8.jpg",
"assets/images/img9.jpg",
"assets/images/img10.jpg"

];

const captions=[

"The day I met my happiness ❤️",

"My favorite smile in the whole world",

"Every moment with you is priceless",

"You make ordinary days magical",

"My peace. My comfort. My home.",

"Still falling for you everyday",

"I'll never get tired of this smile",

"My forever favorite person",

"Thank you for existing",

"I Love You Forever ❤️"

];

const image=document.getElementById("storyImage");

const bg=document.getElementById("storyBackground");

const caption=document.getElementById("storyCaption");

let current=0;

function nextSlide(){

current++;

if(current>=images.length){

current=0;

}

image.style.opacity=0;

bg.style.opacity=.4;

caption.style.opacity=0;

setTimeout(()=>{

image.src=images[current];

bg.src=images[current];

caption.innerHTML=captions[current];

image.style.opacity=1;

bg.style.opacity=1;

caption.style.opacity=1;

},700);

}

setInterval(nextSlide,5000);
