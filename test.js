function navToggle() {
  nav = document.getElementById("nav");
  hamburger = document.getElementById("hamburger");
  
  nav.classList.toggle("nav-active");
  hamburger.classList.toggle("active");
  document.body.classList.toggle("overflow-off");

  
}

function navReset() {
  nav = document.getElementById("nav");
  hamburger = document.getElementById("hamburger");
  
  nav.classList.remove("nav-active");
  hamburger.classList.remove("active");
  document.body.classList.remove("overflow-off")
}
