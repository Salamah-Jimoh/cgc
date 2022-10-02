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
for(var i=0; i<menuItems.length; i++){
    let menu = menuItems[i];
    menu.addEventListener('click', ()=>{
        showMenu.style.display='none';
        openMenu.style.display='block';
        closeMenu.style.display='none'  
    })
}
// Typewriter
const TypeWriter =function(txtElement, words, wait =3000){
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
}