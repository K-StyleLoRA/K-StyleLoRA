window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    // Options for single slide carousels (Visual Effects and Results)
    var singleSlideOptions = {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
    }

    // Options for multi-slide carousels
    var multiSlideOptions = {
      slidesToScroll: 1,
      slidesToShow: 3,
      loop: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
    }

    // Initialize Visual Effects carousel with single slide options
    try {
      bulmaCarousel.attach('#visual-effects-carousel', singleSlideOptions);
    } catch(e) {
      console.log('Visual Effects carousel initialization error:', e);
    }

    // Initialize Results carousel-2 with single slide options
    try {
      bulmaCarousel.attach('#results-carousel-2', singleSlideOptions);
    } catch(e) {
      console.log('Results carousel-2 initialization error:', e);
    }

    // Initialize remaining carousels with multi-slide options
    try {
      var allCarousels = document.querySelectorAll('.carousel');
      for (var i = 0; i < allCarousels.length; i++) {
        var carousel = allCarousels[i];
        if (carousel.id !== 'visual-effects-carousel' && carousel.id !== 'results-carousel-2') {
          bulmaCarousel.attach(carousel, multiSlideOptions);
        }
      }
    } catch(e) {
      console.log('Other carousels initialization error:', e);
    }

    bulmaSlider.attach();
});
