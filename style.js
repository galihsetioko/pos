console.log('sf')
window.addEventListener('scroll', () => {
  console.log(window.scrollY);
  navbar = document.querySelector('.navbar');
  text_nav = document.querySelector('.text-nav');
  logo_nav = document.querySelector('.navbar-brand')
  if (window.scrollY >= 403) {
    console.log('d');
    navbar.classList.add('scrolled-nav-bg');
    text_nav.classList.remove('text-white')
    text_nav.classList.add('text-dark')
    logo_nav.classList.remove('text-white')
    logo_nav.classList.add('text-dark')
  } else {
    console.log("lß")
    navbar.classList.remove('scrolled-nav-bg');
    text_nav.classList.add('text-white')
    logo_nav.classList.add('text-white')
  }
});

