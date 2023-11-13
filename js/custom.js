// header menu code starts
$('#toggle').click(function () {
  $(this).toggleClass('active');
  $('header').toggleClass('hiddenspace');
  $('#overlay').toggleClass('open');
  $('body').toggleClass('opentwo');
});
// header menu code ends

//---------------------------------------------------------------------- Shamal's Js Code Starts ---------------------------------------------------------------//

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
      $('.showLess').css('display','block');
    });

    $('#servicesec-content' + i + ' .showLess').on('click', function () {
      $('#service-info' + i + ' .list-wrapper').not('.shown').hide();
      $('.showLess').hide();
      $('.showMore').show();
      $('html, body').scrollTop($(".servicesecs-wrapper" + i).offset().top-60);
    });
  }
});

//Service page read more and Read less code ends

//Service page active menu navbar starts
$(document).ready(function () {
  let menuScrollTimer = null;
  $(".filter-wrapper a").click(function (e) {
    // Prevent default behaviour ( scroll to element )
    e.preventDefault();
    if (menuScrollTimer === null) {
      // Highlight the clicked item
      $('.filter-wrapper a.active').removeClass('active');
      $(this).addClass('active');
      // Smooth scroll to the target section
      let target = $(this).attr('href');
      $('html, body').animate({ scrollTop: $(target).offset().top - 250 }, 1050);
      // Set `menuScrollTimer` timer
      // This will prevents multiple clicks on menu items whule the smooth scroll is taking effect
      // This will also prevent the scroll logic from running
      menuScrollTimer = setTimeout(function () {
        clearTimeout(menuScrollTimer);
        menuScrollTimer = null;
      }, 1050);
    }
  });

  $(window).scroll(function (e) {
    // Avoid triggering the logic if the scroll event is triggerd from clicking one of the items
    if (menuScrollTimer === null) {
      let windowTop = $(this).scrollTop();

      $('.filter-wrapper a').each(function (event) {
        if (windowTop >= $($(this).attr('href')).offset().top - 250) {
          $('.filter-wrapper .active').removeClass('active');
          $(this).addClass('active');
        }
      });
    }
  });
});
//Service page active menu navbar ends

//Off set code starts
jQuery(function ($) {
  $('a[href*="#"]:not([href="#"])').click(function () {
    var target = $(this.hash);
    $('html,body').stop().animate({
      scrollTop: target.offset().top - 150
    }, 'linear');
  });
  if (location.hash) {
    var id = $(location.hash);
  }
  $(window).on('load', function () {
    if (location.hash) {
      $('html,body').animate({ scrollTop: id.offset().top - 150 }, 'linear')
    };
  });
});
//Offset code ends

//------------------------------------------------------------------- Shamal's Js Code ends ---------------------------------------------------------------------//


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
    slidesToScroll: 4,
    autoplay: true,
    infinite: true,
    pauseOnHover:false,
    pauseOnFocus: false,
    speed:3000, 
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

//case study listing slider
if ($(window).width() < 1025) {
  if ($(".casestudylistingBoxes").length) {
    $(".casestudylistingBoxes").slick({
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
// case study listing slider ends 

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

if ($(window).width() > 1025) {
  new WOW().init();
}



$(document).ready(function(){
  $('.middleCircle').on('click', function(){
    $('#box').addClass('boxTwo');
    $('#box svg').addClass('rotate');
    $('.lines').addClass('linesNew');
    $('.middleCircle').addClass('middleCirclenew');
    $('.counterText').addClass('newcounterText');
    setTimeout(function() {
      $('#box').removeClass('boxTwo');
      $('#box svg').removeClass('rotate');
      $('.lines').removeClass('linesNew');
      $('.middleCircle').removeClass('middleCirclenew');
		}, 6000);
    setTimeout(function() {
      $('.counterText span a').html(function(i, val) { return val*1+1 });
		},6000);
  });
});


 


