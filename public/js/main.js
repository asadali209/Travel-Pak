const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const nav = document.querySelector('nav');

menuOpen.addEventListener('click', () =>{
  nav.classList.add('active');
})

menuClose.addEventListener('click', () =>{
  nav.classList.remove('active');
})