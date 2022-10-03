// let count = 0;
// const counter = document.getElementById('.counter');
// document.getElementById('.addtocart').addEventListener('click',event =>{
//   const  c1= counter.classList;
//   const c = ' animated-counte'
//   count++;

//   counter.innerText = count;
//   cl.remove(c, c1.contains (c));
//   setTimeout(()=>
//   count.classList.add('.animated-counter',1)
//   )
// })
var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
SlideShow(slidePosition = n);
}

function SlideShow(n) {
var i;
var slides = document.getElementsByClassName("Containers");
var circles = document.getElementsByClassName("dots");
if (n > slides.length) {slidePosition = 1}
if (n < 1) {slidePosition = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
for (i = 0; i < circles.length; i++) {
circles[i].className = circles[i].className.replace(" enable", "");
}
slides[slidePosition-1].style.display = "block";
circles[slidePosition-1].className += " enable";
} 

var slidePosition = 0;
SlideShow();

function SlideShow() {
var i;
var slides = document.getElementsByClassName("Containers");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slidePosition++;
if (slidePosition > slides.length) {slidePosition = 1}
slides[slidePosition-1].style.display = "block";
setTimeout(SlideShow, 4000); // Change image every 2 seconds
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("msginfo").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("drop-info");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
