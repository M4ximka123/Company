$(document).ready(function () {
   $('.services__slider').slick({
      nextArrow: '<button type="button" class="slick-prev">Назад</button>',
      prevArrow: '<button type="button" class="slick-next">След</button>',
      autoplay: true,
      autoplaySpeed: 3100,
      responsive: [{
         breakpoint: 1055,
         settings: {
          slidesToShow: 1  
         },
         breakpoint: 426,
         settings: {
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2300
         }
      }]
   });

   $('.burger-menu').on('click', function () {
      $('.menu').toggleClass('menu--active');
   });

});

new WOW().init();