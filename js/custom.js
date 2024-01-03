// header menu code starts
$('#toggle').click(function () {
  $(this).toggleClass('active');
  $('header').toggleClass('hiddenspace');
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
    $('header').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $('header').removeClass('nav-up').addClass('nav-down');
    }
  }

  lastScrollTop = st;
}


document.addEventListener("DOMContentLoaded", function () {
  updateButtonClass(); // Initial update

  // Assuming you are adding or removing boxes dynamically
  // You may want to call updateButtonClass() whenever the number of boxes changes.

  function updateButtonClass() {
    var button = document.getElementById("myButton");
    var boxes = document.querySelectorAll(".caseStudyBoxes, .blogslistinnerBoxes");

    if (boxes.length % 2 === 0) {
      // Even number of boxes
      button.classList.add("even-based");
      button.classList.remove("odd-based");
    } else {
      // Odd number of boxes
      button.classList.remove("even-based");
      button.classList.add("odd-based");
    }
  }
});


$('.shareBlogs').click(function () {
  $('.sharePopup').addClass('sharePopupnew');
  $('.single-post').addClass('bodyOverflow');
});
$('.closePopupshare').click(function () {
  $('.sharePopup').removeClass('sharePopupnew');
  $('.single-post').removeClass('bodyOverflow');
});

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};
// sticky book page cta js starts
$(window).on('resize scroll', function () {
  if ($('footer').length) {
      if ($('footer').isInViewport()) {
        setTimeout(() => {
          $(".prizeDiv").css("display","none")
        }, 500);
      }
      else {
        setTimeout(() => {
          $(".prizeDiv").css("display","flex")
        }, 500);
      }
  }
});

// sticky book page cta js ends


//---------------------------------------------------------Shamal's Js Code Starts ---------------------------------------------------------------//
// const el = document.querySelector(".service-container")
// const observer = new IntersectionObserver(
//   ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
//   { threshold: [1] }
// );
// observer.observe(el);
//Service page sticky property starts
jQuery(document).ready(function () {
  for (let i = 1; i <= 9; i++) {
    var $this = $('#service-info' + i);
    if ($this.find('div').length >= 3) {
      $('#servicesec-heading' + i).css({ 'position': 'sticky', 'top': '122px', 'height': '50%' });
      const mediaQuerys = window.matchMedia('(max-width: 1600px)');
      if (mediaQuerys.matches) {
        $('#servicesec-heading' + i).css('top', '100px');
      }
      const mediaQueryTabs = window.matchMedia('(max-width: 1024px)');
      if (mediaQueryTabs.matches) {
        $('#servicesec-heading' + i).css('top', '84px');
      }
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      if (mediaQuery.matches) {
        $('#servicesec-heading' + i).css({ 'position': 'static', 'height': 'auto' });
      }
    }
  }
});
//Service page sticky property ends

//Service page read more and Read less code starts
jQuery(document).ready(function () {
  for (let i = 1; i <= 10; i++) {
    var $this = $('#service-info' + i);
    if ($this.find('div').length > 4) {
      $('#servicesec-content' + i).append('<div><a href="javascript:void(0)" class="showMore"></a></div>');
      $('#servicesec-content' + i).append('<div><a href="javascript:void(0)" class="showLess"></a></div>');
    }
    // If more than 2 Education items, hide the remaining
    $('#service-info' + i + ' .list-wrapper').slice(0, 3).addClass('shown');
    $('#service-info' + i + ' .list-wrapper').not('.shown').hide();

    $('#servicesec-content' + i + ' .showMore').on('click', function () {
      $('#service-info' + i + ' .list-wrapper').not('.shown').show();
      $('.showMore').hide();
      $('.showLess').css('display', 'block');
    });

    $('#servicesec-content' + i + ' .showLess').on('click', function () {
      $('#service-info' + i + ' .list-wrapper').not('.shown').hide();
      $('.showLess').hide();
      $('.showMore').show();
      $('html, body').animate({ scrollTop: $('.servicesecs-wrapper' + i).offset().top - 60 }, 'slow');
    });
  }
});
//Service page read more and Read less code ends

//Service page & Casestudy page active menu navbar code starts
$(document).ready(function () {
  let caseStudyMenuScrollTimer = null;
  let filterMenuScrollTimer = null;
  $(".casestudyfilter-wrapper a").click(function (e) {
    e.preventDefault();
    if (caseStudyMenuScrollTimer === null) {
      $('.casestudyfilter-wrapper a.current').removeClass('current');
      $(this).addClass('current');
      let target = $(this).attr('href');
      $('html, body').animate({ scrollTop: $(target).offset().top - 250 }, 1050);
      caseStudyMenuScrollTimer = setTimeout(function () {
        clearTimeout(caseStudyMenuScrollTimer);
        caseStudyMenuScrollTimer = null;
      }, 1050);
    }
  });
  function manageCaseStudyMenu(indexcasenumber) {
    $('.casestudyfilter-wrapper a').each(function (index, event) {
      if (index < indexcasenumber)
        $(this).hide();
      else
        $(this).show();
    });
  }
  $(".filter-wrapper a").click(function (e) {
    e.preventDefault();
    if (filterMenuScrollTimer === null) {
      $('.filter-wrapper a.active').removeClass('active');
      $(this).addClass('active');
      let target = $(this).attr('href');
      $('html, body').animate({ scrollTop: $(target).offset().top - 250 }, 1050);
      filterMenuScrollTimer = setTimeout(function () {
        clearTimeout(filterMenuScrollTimer);
        filterMenuScrollTimer = null;
      }, 1050);
    }
  });
  function manageFilterMenu(indexnumber) {
    $('.filter-wrapper a').each(function (index, event) {
      if (index < indexnumber)
        $(this).hide();
      else
        $(this).show();
    });
  }
  $(window).scroll(function (e) {
    if (caseStudyMenuScrollTimer === null && filterMenuScrollTimer === null) {
      let windowTop = $(this).scrollTop();
      // Case Study Section
      $('.casestudyfilter-wrapper a').each(function (index) {
        var topcasevalue = $($(this).attr('href')).offset().top - 250;
        if (windowTop >= topcasevalue) {
          manageCaseStudyMenu(index);
          $('.casestudyfilter-wrapper .current').removeClass('current');
          $(this).addClass('current');
        }
      });
      // Filter Section
      $('.filter-wrapper a').each(function (index) {
        var topvalue = $($(this).attr('href')).offset().top - 250;
        if (windowTop >= topvalue) {
          manageFilterMenu(index);
          $('.filter-wrapper .active').removeClass('active');
          // $(".service-container").css("z-index", "25");
          $(this).addClass('active');
        }
      });
      // Collaborate Section
      var collaborateSectionTop = $('.collaborate-section').offset().top - 250;
      if (windowTop >= collaborateSectionTop) {
        $('.filterSec').hide();
      } else {
        $('.filterSec').show();
      }
    }
  });
});
//Service page Casestudy page active menu navbar code ends

//Off set code starts
jQuery(function ($) {
  $('a[href*="#"]:not([href="#"])').click(function () {
    var target = $(this.hash);
    $('html,body').stop().animate({
      scrollTop: target.offset().top - 110
    }, 'linear');
  });
  if (location.hash) {
    var id = $(location.hash);
  }
  $(window).on('load', function () {
    if (location.hash) {
      $('html,body').animate({ scrollTop: id.offset().top - 110 }, 'linear')

    };
  });
});
//Offset code ends

//Casestudy page casestudies footer animation code starts
// if ($(window).width() > 1024) {
//   $(document).ready(function () {
//     $(".relatedBox").on('mouseover', function () {
//       $(".relatedBox").removeClass("active");
//       if ($(this).hasClass("active")) {
//         $(this).removeClass("active");
//         $(this).siblings().removeClass("deactive");
//       } else {
//         $(this).addClass("active");
//         $(this).siblings().addClass("deactive");
//       }
//       return false;
//     });
//   });
//   $('.relatedBox').on('mouseleave', function () {
//     $('.relatedBox').removeClass('active');
//     $('.relatedBox').removeClass("deactive");
//   });
// }
// $(window).on('resize scroll', function () {
//   if ($('.casestudySec').length) {
//     if ($('.casestudySec').isInViewport()) {
//       setTimeout(() => {
//         $('.moreCasestudy').addClass('circleAnimShow');
//       }, 1500);
//     } else {
//       $('.moreCasestudy').removeClass('circleAnimShow');
//     }
//   }
// });

//Casestudy page casestudies footer animation code ends

//Blog details page active navbar code starts
// $(document).ready(function () {
//   let menuScrollTimer = null;
//   $(".blogdetailsfilter-wrapper a").click(function (e) {
//     e.preventDefault();
//     if (menuScrollTimer === null) {
//       // Highlight the clicked item
//       $('.blogdetailsfilter-wrapper a.current').removeClass('current');
//       $(this).addClass('current');
//       // Smooth scroll to the target section
//       let target = $(this).attr('href');
//       $('html, body').animate({ scrollTop: $(target).offset().top - 250 }, 1050);
//       // Set `menuScrollTimer` timer
//       // This will prevents multiple clicks on menu items whule the smooth scroll is taking effect
//       // This will also prevent the scroll logic from running
//       menuScrollTimer = setTimeout(function () {
//         clearTimeout(menuScrollTimer);
//         menuScrollTimer = null;
//       }, 1050);
//     }
//   });
//   $(window).scroll(function (e) {
//     // Avoid triggering the logic if the scroll event is triggerd from clicking one of the items
//     if (menuScrollTimer === null) {
//       let windowTop = $(this).scrollTop();
//       $('.blogdetailsfilter-wrapper a').each(function (event) {
//         if (windowTop >= $($(this).attr('href')).offset().top - 250) {
//           $('.blogdetailsfilter-wrapper .current').removeClass('current');
//           $(this).addClass('current');
//         }
//       });
//     }
//   });
// });
//Blog details page active navbar code ends

//About us slider starts

if ($(".aboutus-researchSec .researchsec-wrapper .img-div").length) {
  $('.aboutus-researchSec .researchsec-wrapper .img-div').slick({
    dots: true,
    autoplay: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  });
}

//About us slider ends

//------------------------------------------------------- Shamal's JS Code ends --------------------------------------------------//


// our partner slider starts
$('.logoSlider').slick({
  dots: false,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  infinite: true,
  pauseOnHover: false,
  pauseOnFocus: false,
  speed: 3000,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
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
      arrows: false,
      slidesToShow: 2.1,
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
      arrows: false,
      slidesToShow: 2.1,
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

// google review slider
if ($(window).width() < 1025) {
  if ($(".ratingBoxes").length) {
    $(".ratingBoxes").slick({
      dots: false,
      arrows: false,
      slidesToShow: 2.1,
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
      arrows: false,
      slidesToShow: 2.1,
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
      arrows: false,
      slidesToShow: 2.1,
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





$(document).ready(function () {
  $('.middleCircle').on('click', function () {
    $('#box').addClass('boxTwo');
    $('#box svg').addClass('rotate');
    $('.lines').addClass('linesNew');
    $('.middleCircle').addClass('middleCirclenew');
    $('.counterText').addClass('newcounterText');
    $('.middleCircle').addClass('box_Two');
    setTimeout(function () {
      $('#box').removeClass('boxTwo');
      $('#box svg').removeClass('rotate');
      $('.lines').removeClass('linesNew');
      $('.middleCircle').removeClass('middleCirclenew');
      $('.middleCircle').removeClass('box_Two');
    }, 9000);
    setTimeout(function () {
      $('.counterText').removeClass('newcounterText');
    }, 9000);

    setTimeout(function () {
      $('.counterText span a').html(function (i, val) {
        var incrementedValue = val * 1 + 1;
        var formattedValue = formatNumber(incrementedValue);
        localStorage.setItem('formattedValue', formattedValue);
        /* data save code */
        $.ajax({
          type: 'POST',
          url: 'http://ixdtm.com/projects/TM-V2-wp/wp-admin/admin-ajax.php',
          dataType: 'json',
          data: {
            action: 'formated_Value',
            formattedValue: formattedValue,
          },
          success: function (res) {
            return $('#formattedValue').html(res / 10);
          },
          error: function (err) {
            console.error(err);
          }
        });
        /* ends data save code */
        // return formattedValue;
      });
    }, 500);
  });
  function formatNumber(number) {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'K';
    } else {
      return number;
    }
  }
});


if ($(window).width() > 1025) {
  new WOW().init();
}

//==========================================Json Animations=======================================//
var panAnime = bodymovin.loadAnimation({
  container: document.getElementById('panAnime'),
  path: 'https://ixdtm.com/projects/tm-v2/js/json/panAnime.json', // Required
  renderer: 'svg', // or 'canvas', 'html'
  loop: true,
  autoplay: true,
});

var firstfoldfAnime = bodymovin.loadAnimation({
  container: document.getElementById('first-fold-anime'),
  path: 'https://ixdtm.com/projects/tm-v2/js/json/first-fold.json', // Required
  renderer: 'svg', // or 'canvas', 'html'
  loop: true,
  autoplay: false,
});

var secondfoldfAnime = bodymovin.loadAnimation({
  container: document.getElementById('second-fold-anime'),
  path: 'https://ixdtm.com/projects/tm-v2/js/json/second-fold.json', // Required
  renderer: 'svg', // or 'canvas', 'html'
  loop: true,
  autoplay: false,
});

var thirdfoldfAnime = bodymovin.loadAnimation({
  container: document.getElementById('third-fold-anime'),
  path: 'https://ixdtm.com/projects/tm-v2/js/json/third-fold.json', // Required
  renderer: 'svg', // or 'canvas', 'html'
  loop: true,
  autoplay: false,
});

var fourthfoldfAnime = bodymovin.loadAnimation({
  container: document.getElementById('fourth-fold-anime'),
  path: 'https://ixdtm.com/projects/tm-v2/js/json/fourth-fold.json', // Required
  renderer: 'svg', // or 'canvas', 'html'
  loop: true,
  autoplay: false,
});

var lastfoldfAnime = bodymovin.loadAnimation({
  container: document.getElementById('fifth-fold-anime'),
  path: 'https://ixdtm.com/projects/tm-v2/js/json/fifth-fold.json', // Required
  renderer: 'svg', // or 'canvas', 'html'
  loop: true,
  autoplay: false,
});

//Mobile animations
var firstfoldfAnimembl = bodymovin.loadAnimation({
  container: document.getElementById('first-fold-anime-mbl'),
  path: 'https://ixdtm.com/projects/tm-v2/js/json/first-fold-mobile.json', // Required
  renderer: 'svg', // or 'canvas', 'html'
  loop: true,
  autoplay: false,
});

var secondfoldfAnimembl = bodymovin.loadAnimation({
  container: document.getElementById('second-fold-anime-mbl'),
  path: 'https://ixdtm.com/projects/tm-v2/js/json/second-fold-mobile.json', // Required
  renderer: 'svg', // or 'canvas', 'html'
  loop: true,
  autoplay: false,
});

var thirdfoldfAnimembl = bodymovin.loadAnimation({
  container: document.getElementById('third-fold-anime-mbl'),
  path: 'https://ixdtm.com/projects/tm-v2/js/json/third-fold-mobile.json', // Required
  renderer: 'svg', // or 'canvas', 'html'
  loop: true,
  autoplay: false,
});

var fourthfoldfAnimembl = bodymovin.loadAnimation({
  container: document.getElementById('fourth-fold-anime-mbl'),
  path: 'https://ixdtm.com/projects/tm-v2/js/json/fourth-fold-mobile.json', // Required
  renderer: 'svg', // or 'canvas', 'html'
  loop: true,
  autoplay: false,
});

var lastfoldfAnimembl = bodymovin.loadAnimation({
  container: document.getElementById('fifth-fold-anime-mbl'),
  path: 'https://ixdtm.com/projects/tm-v2/js/json/fifth-fold-mobile.json', // Required
  renderer: 'svg', // or 'canvas', 'html'
  loop: true,
  autoplay: false,
});

var homeAnime = bodymovin.loadAnimation({
  container: document.getElementById('homeAnime'),
  path:  site_url + "/wp-content/themes/theminimalist/js/json/hp-animation.json", // Required
  renderer: 'svg', // or 'canvas', 'html'
  loop: true,
  autoplay: true,
});

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};
$(window).on('resize scroll', function () {
  if ($('.first-fold').length) {
    if ($(window).width() > 720) {
      if ($('.first-fold').isInViewport()) {
        setTimeout(() => {
          firstfoldfAnime.play();
        }, 500);
      }
      else {
        setTimeout(() => {
          firstfoldfAnime.stop();
        }, 500);
      }
    }
  }
});
$(window).on('resize scroll', function () {
  if ($('.second-fold').length) {
    if ($(window).width() > 720) {
      if ($('.second-fold').isInViewport()) {
        setTimeout(() => {
          secondfoldfAnime.play();
        }, 500);
      }
      else {
        setTimeout(() => {
          secondfoldfAnime.stop();
        }, 500);
      }
    }
  }
});
$(window).on('resize scroll', function () {
  if ($('.third-fold').length) {
    if ($(window).width() > 720) {
      if ($('.third-fold').isInViewport()) {
        setTimeout(() => {
          thirdfoldfAnime.play();
        }, 500);
      }
      else {
        setTimeout(() => {
          thirdfoldfAnime.stop();
        }, 500);
      }
    }
  }
});
$(window).on('resize scroll', function () {
  if ($('.fourth-fold').length) {
    if ($(window).width() > 720) {
      if ($('.fourth-fold').isInViewport()) {
        setTimeout(() => {
          fourthfoldfAnime.play();
        }, 500);
      }
      else {
        setTimeout(() => {
          fourthfoldfAnime.stop();
        }, 500);
      }
    }
  }
});
$(window).on('resize scroll', function () {
  if ($('.fifth-fold').length) {
    if ($(window).width() > 720) {
      if ($('.fifth-fold').isInViewport()) {
        setTimeout(() => {
          lastfoldfAnime.play();
        }, 500);
      }
      else {
        setTimeout(() => {
          lastfoldfAnime.stop();
        }, 500);
      }
    }
  }
});
$(window).on('resize scroll', function () {
  if ($('.first-fold').length) {
    if ($(window).width() > 720) {
      if ($('.first-fold').isInViewport()) {
        setTimeout(() => {
          firstfoldfAnimembl.play();
        }, 500);
      }
      else {
        setTimeout(() => {
          firstfoldfAnimembl.stop();
        }, 500);
      }
    }
  }
});
$(window).on('resize scroll', function () {
  if ($('.second-fold').length) {
    if ($(window).width() > 720) {
      if ($('.second-fold').isInViewport()) {
        setTimeout(() => {
          secondfoldfAnimembl.play();
        }, 500);
      }
      else {
        setTimeout(() => {
          secondfoldfAnimembl.stop();
        }, 500);
      }
    }
  }
});
$(window).on('resize scroll', function () {
  if ($('.third-fold').length) {
    if ($(window).width() > 720) {
      if ($('.third-fold').isInViewport()) {
        setTimeout(() => {
          thirdfoldfAnimembl.play();
        }, 500);
      }
      else {
        setTimeout(() => {
          thirdfoldfAnimembl.stop();
        }, 500);
      }
    }
  }
});
$(window).on('resize scroll', function () {
  if ($('.fourth-fold').length) {
    if ($(window).width() > 720) {
      if ($('.fourth-fold').isInViewport()) {
        setTimeout(() => {
          fourthfoldfAnimembl.play();
        }, 500);
      }
      else {
        setTimeout(() => {
          fourthfoldfAnimembl.stop();
        }, 500);
      }
    }
  }
});

$(window).on('resize scroll', function () {
  if ($('.fifth-fold').length) {
    if ($(window).width() > 720) {
      if ($('.fifth-fold').isInViewport()) {
        setTimeout(() => {
          lastfoldfAnimembl.play();
        }, 500);
      }
      else {
        setTimeout(() => {
          lastfoldfAnimembl.stop();
        }, 500);
      }
    }
  }
});

// sticky book page cta js starts
$(window).on('resize scroll', function () {
  if ($('footer').length) {
      if ($('footer').isInViewport()) {
        setTimeout(() => {
          $(".prizeDiv").css("display","none")
        }, 500);
      }
      else {
        setTimeout(() => {
          $(".stickyCtas").css("display","flex")
        }, 500);
      }
  }
});

// sticky book page cta js ends


//=============================================Json Animations========================================//

function resizeCanvas() {
  var canvs = document.getElementById("myCanvas");
  canvs.width = window.innerWidth;
}









