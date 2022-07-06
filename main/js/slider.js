$(document).ready(function () {
  $(".slider").owlCarousel({
      items:1,
      loop:true,
      nav:true,
      navText:["<img src='./main/images/left-arrow.png' alt=''>","<img src='./main/images/right-arrow.png' alt=''>"],
      dots:false,
      autoplay:true,
      autoplaySpeed:1000,
      smartSpeed:1500,
      autoplayHoverPause:true
  });
});

  $(document).ready(function () {
    $('#slide_1').owlCarousel({
      items: 2.8,
      margin:38,
      nav: false,
      dots: false,
      loop: true,
      mouseDrag: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsiveClass:true,
      responsive:{
        300:{
          margin: 38,
          items:1,
        },
        768:{
          items:2.8
        }
      }
    });
  });
                  