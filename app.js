//Navbar functions
const menu = document.querySelector('.menu-btn');
const menuBurger = document.querySelector('.menu-btn__burger');
const slide = document.querySelector('.nav__menu');

let showMenu = false;

menuBurger.addEventListener('click', function() {
  if (!showMenu) {
    menu.classList.add('open');
    menuBurger.classList.add('open');
    slide.classList.add('open');
    showMenu = true;
  } else {
    menu.classList.remove('open');
    menuBurger.classList.remove('open');
    slide.classList.remove('open');
    showMenu = false;
  }
});

/////////////////////////////////////////////////////////////////////////////////
//sticky navbar

let nav = document.querySelector('#nav');
let num = 15;
let logo = document.querySelector('.nav__logo');

window.addEventListener('scroll', function(e) {
  e.preventDefault();
  if (window.pageYOffset >= num) {
    nav.classList.add('sticky');
    menuBurger.classList.add('sticky');
    logo.style.color = '#333';
  } else {
    nav.classList.remove('sticky');
    menuBurger.classList.remove('sticky');
    logo.style.color = '#fff';
  }
});

/////////////////////////////////////////////////////////////////////////////////
//footer
const footer = document.querySelector('#footer');
const date = new Date();
const year = date.getFullYear();

footer.innerHTML = `<p class = "footer__text">Copyright &COPY; ${year}</p>`;
