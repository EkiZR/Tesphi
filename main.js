const nav = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        nav.classList.add('navbar-scrolled');
    } else if (window.scrollY < 56) {
        nav.classList.remove('navbar-scrolled');
    }
});
  

$('.eskul-mobile').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


  setTimeout(function(){
    document.getElementById('gif-page').classList.add('fade-out');
    document.getElementById('#scrollspyHeading1').classList.add('fade-in');
    document.getElementById('#scrollspyHeading1').style.display = 'block';
  }, 5000);