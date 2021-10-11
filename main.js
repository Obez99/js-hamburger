const hamburgerBtn = document.querySelector(".fa-bars");
const hamburgerClose = document.querySelector(".close");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerBtn.addEventListener('click',

function(){
 // hamburgerMenu.style.display = "block";
 hamburgerMenu.classList.add("active");
})

hamburgerClose.addEventListener('click',

function(){
  //hamburgerMenu.style.display = "none";
  hamburgerMenu.classList.remove("active");
})