console.log('sf')
window.addEventListener('scroll', () => {
  console.log(window.scrollY);
  navbar = document.querySelector('.navbar');
  text_nav = document.querySelectorAll('.text-nav');
  logo_nav = document.querySelector('.navbar-brand')
  if (window.scrollY >= 403) {
    console.log('d');
    navbar.classList.add('scrolled-nav-bg');
    navbar.classList.add('shadow-navbar');
    
    // text_nav.classList.remove('text-white')
    // text_nav.classList.add('text-black')
    text_nav.forEach(link => {
        link.classList.remove('text-white')
        link.classList.add('text-black')
    });
    
    logo_nav.classList.remove('text-white')
    logo_nav.classList.add('text-black')
    
  } else {
    console.log("lß")
    navbar.classList.remove('scrolled-nav-bg');
    // text_nav.classList.add('text-white')
    text_nav.forEach(link => {
        link.classList.remove('text-black')
        link.classList.add('text-white')
    });
    logo_nav.classList.add('text-white')
  }
});


