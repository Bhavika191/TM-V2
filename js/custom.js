// header menu code starts
$('#toggle').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
    $('body').toggleClass('opentwo');
});


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);


// header sticky on scroll up js
function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

// header menu code ends


// our partner slider starts
$('.logoSlider').slick({
    dots: false,
    arrows: false,
    slidesToShow: 4,
    autoplay: true,
    infinite: true,
    cssEase: 'linear',
    rtl: false,
    pauseOnHover:false,
    speed:3000,
    autoplaySpeed: 0,  
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  });
// our partner slider ends

// case study slider js
if ($(window).width() < 1025) {
    if ($(".casestudyBoxes").length) {
      $(".casestudyBoxes").slick({
        dots: false,
        arrows: true,
        slidesToShow: 2,
        infinite: true,
        responsive: [
          {
            breakpoint: 680,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  }


  // customer review slider
  if ($(window).width() < 1025) {
    if ($(".customerBoxes").length) {
      $(".customerBoxes").slick({
        dots: false,
        arrows: true,
        slidesToShow: 2,
        infinite: true,
        responsive: [
          {
            breakpoint: 680,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  }

  // Blogs slider
  if ($(window).width() < 1025) {
    if ($(".blogsBoxes").length) {
      $(".blogsBoxes").slick({
        dots: false,
        arrows: true,
        slidesToShow: 2,
        infinite: true,
        responsive: [
          {
            breakpoint: 680,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  }


   // service slider
   if ($(window).width() < 1025) {
    if ($(".serviceBoxes").length) {
      $(".serviceBoxes").slick({
        dots: false,
        arrows: true,
        slidesToShow: 2,
        infinite: true,
        responsive: [
          {
            breakpoint: 680,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  }

document.addEventListener('DOMContentLoaded', () => {
    const smoothScroll = new SmoothScroll(0.02);
});


new WOW().init();

// new AnimationScroll({
//     selector: ".caseStudyinnerBoxes",
//     trigger: 0.,
//     transform: "-10yvw",
//     easing: "ease-in-out",
//     duration: 2,
//     onLoad: false,
//     scrollSpeed: 0.7,
//     pauseOnScroll: true
// });

// new AnimationScroll({
//     selector: ".servicesinnerBox",
//     trigger: 0.,
//     transform: "-10yvw",
//     easing: "ease-in-out",
//     duration: 2,
//     onLoad: false,
//     scrollSpeed: 0.7,
//     pauseOnScroll: true
// });

