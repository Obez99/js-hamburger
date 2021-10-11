const hamburgerBtn = document.querySelector(".fa-bars");
const hamburgerClose = document.querySelector(".close");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerBtn.addEventListener('click',

function(){
  hamburgerMenu.style.display = "block";
})

hamburgerClose.addEventListener('click',

function(){
  hamburgerMenu.style.display = "none";
})