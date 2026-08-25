console.log('sf')
window.addEventListener('scroll', () => {
  console.log(window.scrollY);
  navbar = document.querySelector('.navbar');
  text_nav = document.querySelectorAll('ul li a');
  logo_nav = document.querySelector('.navbar-brand')
  color_logo = document.querySelectorAll('.st0')
  if (window.scrollY >= 403) {
    console.log('d');
    // navbar.classList.add('scrolled-nav-bg');
    navbar.style.backgroundColor = "white"
    
    color_logo[0].style.fill='black';
    color_logo[1].style.fill='black';
    text_nav.forEach(link => {
      link.classList.remove('text-white');
      link.style.color = "black"
    })
    
    logo_nav.classList.remove('text-white')
    logo_nav.classList.add('text-black')
    
  } else {
    console.log("lß")
    navbar.style.backgroundColor = "transparent"
    // navbar.classList.remove('scrolled-nav-bg');
    // text_nav.classList.add('text-white')
    // text_nav.forEach(link => {
    //     link.classList.remove('text-black')
    //     link.classList.add('text-white')
    // });
    // for (let i = 0; i < text_nav.length; i++) {
    //   text_nav[i].style.color = 'white'
      
    // }
    text_nav.forEach(link => {
      link.classList.add('text-white');
      // link.style.color = "black"
    })
    color_logo[0].style.fill='white';
    color_logo[1].style.fill='white';
    
  }
});


