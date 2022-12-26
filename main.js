// AOS

//Menu
let openMenu = document.getElementById('icon-menu');
let showMenu = document.getElementById('menu-items');
let closeMenu =document.getElementById('icon-menu-close');
let menuItems =document.getElementsByClassName('menu-item');
// Open Menu OnClick
openMenu.addEventListener('click', ()=>{
    showMenu.style.display='block';
    openMenu.style.display='none';
    closeMenu.style.display='block'
})
// Close Menu OnClick
closeMenu.addEventListener('click', ()=>{
    showMenu.style.display='none';
    openMenu.style.display='block';
    closeMenu.style.display='none'  
})
// Close Menu Onclick Menu Items
/*for(var i=0; i<menuItems.length; i++){
    let menu = menuItems[i];
    menu.addEventListener('click', ()=>{
        showMenu.style.display='none';
        openMenu.style.display='block';
        closeMenu.style.display='none'  
    })
}*/
// Slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
//Text slider
var reviewIndex = 1;
showReview(reviewIndex);

function plusReview(n) {
  showReview(reviewIndex += n);
}

function currentReview(n) {
  showReview(reviewIndex = n);
}

function showReview(n) {
  var i;
  var reviews = document.getElementsByClassName("myReviews");
  var dots = document.getElementsByClassName("dots");
  if (n > reviews.length) {reviewIndex = 1}    
  if (n < 1) {reviewIndex = reviews.length}
  for (i = 0; i < reviews.length; i++) {
      reviews[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  reviews[ reviewIndex-1].style.display = "block";  
  dots[ reviewIndex-1].className += " active";
}

//Expand Text
let moreLink1 = document.getElementById('moreLink1');
let moreText1 = document.getElementById('more1');
moreLink1.addEventListener('click',(e)=>{
e.preventDefault()
moreText1.style.display='inline';
moreLink1.style.display='none';
})
//Shrink Text
let lessLink1 = document.getElementById('lessLink1');
lessLink1.addEventListener('click',(e)=>{
  e.preventDefault()
  moreText1.style.display='none';
  moreLink1.style.display='inline';
  })
  //Expand Text
let moreLink2 = document.getElementById('moreLink2');
let moreText2 = document.getElementById('more2');
moreLink2.addEventListener('click',(e)=>{
e.preventDefault()
moreText2.style.display='inline';
moreLink2.style.display='none';
})
//Shrink Text
let lessLink2 = document.getElementById('lessLink2');
lessLink2.addEventListener('click',(e)=>{
  e.preventDefault()
  moreText2.style.display='none';
  moreLink2.style.display='inline';
  })
    //Expand Text
let moreLink3 = document.getElementById('moreLink3');
let moreText3 = document.getElementById('more3');
moreLink3.addEventListener('click',(e)=>{
e.preventDefault()
moreText3.style.display='inline';
moreLink3.style.display='none';
})
//Shrink Text
let lessLink3 = document.getElementById('lessLink3');
lessLink3.addEventListener('click',(e)=>{
  e.preventDefault()
  moreText3.style.display='none';
  moreLink3.style.display='inline';
  })
// Typewriter
/*const TypeWriter =function(txtElement, words, wait =3000){
    this.txtElement = txtElement;
    this.word = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting =false;
}
TypeWriter.prototype.type = function(){
   // current index of word
    const current = this.wordIndex % this.word.length;
  // get full text of current
  const fullTxt = this.word[current];
  // check delete
  if(this.isDeleting){
    //remove character
    this.txt = fullTxt.substring(0, this.txt.length-1)
  } else{
    //add character
    this.txt = fullTxt.substring(0, this.txt.length+1)
  }
  // insert text into element
  this.txtElement.innerHTML =`<span class="txt">${this.txt}</span>`
       // Typewriter speed
       let typeSpeed =300;
       if(this.isDeleting){
        typeSpeed /= 2;
    }
        //check if word is complete
        if(!this.isDeleting && this.txt === fullTxt){
            typeSpeed= this.wait;
            // set delete to true
            this.isDeleting =true;
        } else if (this.isDeleting && this.txt ===''){
            this.isDeleting =false;
            // move to the next word
            this.wordIndex++;
            // pause before typing
            typeSpeed= 500;
        }
      
  setTimeout(()=> this.type(), typeSpeed)
}
///Initialize on DOM Load
document.addEventListener('DOMContentLoaded', init)
function init(){
    const txtElement= document.getElementById('txt-type');
    const words=  JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init Typewriter
    new TypeWriter(txtElement,words, wait);
}*/
