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


if ($('.casestudylistingBoxes', 'bloglistingBoxes').length) {
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
}


if ($('.shareSec').length) {
  $('.shareBlogs').click(function () {
    $('.sharePopup').addClass('sharePopupnew');
  });
  $('.closePopupshare').click(function () {
    $('.sharePopup').removeClass('sharePopupnew');
  });
}


$(window).on('resize scroll', function () {
  if ($('footer').length) {
    if ($('footer').isInViewport()) {
      setTimeout(() => {
        $('.prizeDiv').addClass('prizeDivnew')
      }, 500);
    }
    else {
      setTimeout(() => {
        $('.prizeDiv').removeClass('prizeDivnew')
      }, 500);
    }
  }
});

// sticky book page cta js ends


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
            url: 'https://ixdtm.com/projects/TM-V2-wp/wp-admin/admin-ajax.php',
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

// our partner slider starts
if ($('.logoSlider').length) {
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
}

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

if ($('.thankyouGame').length) {
  function resizeCanvas() {
    var canvs = document.getElementById("myCanvas");
    canvs.width = window.innerWidth;
  }

}


// in viewport text animation js starts
const inViewport = (elem) => {
  let allElements = document.getElementsByClassName('imgZoomin');
  let windowHeight = window.innerHeight;
  const elems = () => {
    for (let i = 0; i < allElements.length; i++) {  //  loop through the sections
      let viewportOffset = allElements[i].getBoundingClientRect();  //  returns the size of an element and its position relative to the viewport
      let top = viewportOffset.top;  //  get the offset top
      if (top < windowHeight) {  //  if the top offset is less than the window height
        allElements[i].classList.add('newClass');  //  add the class
      } else {
        allElements[i].classList.remove('newClass');  //  remove the class
      }
    }
  }
  elems();
  window.addEventListener('scroll', elems);
}

inViewport('imgZoomin');  //  run the function on all section elements


// in viewport text animation js ends

//---------------------------------------------------------Shamal's Js Code Starts ---------------------------------------------------------------//
//Service page sticky property starts
if ($('.serviceSec').length) {
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
}
//Service page sticky property ends

//Service page read more and Read less code starts
if ($('.serviceSec').length) {
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
}
//Service page read more and Read less code ends

//Service page & Casestudy page active menu navbar code starts
if ($('.serviceSec').length) {
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
}
//Service page Casestudy page active menu navbar code ends

//Off set code starts
if ($('.serviceSec').length) {
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
}
//Offset code ends

//About us slider starts
if ($(".aboutus-researchSec .researchsec-wrapper .img-div").length) {
  $('.aboutus-researchSec .researchsec-wrapper .img-div').slick({
    dots: true,
    autoplay: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });
}
//About us slider ends

//Video player js starts for casestudy
if ($(".casedetailsmainSec .video-stats-sec").length) {
  const video = document.getElementById("video");
  const circlePlayButton = document.getElementById("circle-play-b");

  function togglePlay() {
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  }

  circlePlayButton.addEventListener("click", togglePlay);
  video.addEventListener("playing", function () {
    circlePlayButton.style.opacity = 0;
  });
  video.addEventListener("pause", function () {
    circlePlayButton.style.opacity = 1;
  });
}
//Video player js ends for casestudy

// Form active tab for career page starts
if ($(".careerFormSec").length) {
  $("#enable1").change(function () {
    $("#first").css("background", "#000")
    $("#first").css("color", "#fff")
    $("#second").css("background", "#fff")
    $("#second").css("color", "#000")
    $("#third").css("background", "#fff")
    $("#third").css("color", "#000")
  });

  $("#enable2").change(function () {
    $("#second").css("background", "#000")
    $("#second").css("color", "#fff")
    $("#first").css("background", "#fff")
    $("#first").css("color", "#000")
    $("#third").css("background", "#fff")
    $("#third").css("color", "#000")
  });

  $("#enable3").change(function () {
    $("#third").css("background", "#000")
    $("#third").css("color", "#fff")
    $("#first").css("background", "#fff")
    $("#first").css("color", "#000")
    $("#second").css("background", "#fff")
    $("#second").css("color", "#000")
  });
}
//Form active tab for career page ends
//------------------------------------------------------- Shamal's JS Code ends --------------------------------------------------//

document.addEventListener('DOMContentLoaded', () => {
  const smoothScroll = new SmoothScroll(0.02);
});

if ($(window).width() > 1025) {
  new WOW().init();
}

//==========================================Json Animations=======================================//
if ($('.collaborate-section').length) {
  var panAnime = bodymovin.loadAnimation({
    container: document.getElementById('panAnime'),
    path: 'https://ixdtm.com/projects/tm-v2/js/json/panAnime.json', // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: true,
    autoplay: true,
  });
}
//----------------------------Desktop Animations----------------------//
if ($('.first-fold').length) {
  var firstfoldfAnime = bodymovin.loadAnimation({
    container: document.getElementById('first-fold-anime'),
    path: 'https://ixdtm.com/projects/tm-v2/js/json/first-fold.json', // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: false,
    autoplay: false,
  });
}

if ($('.second-fold').length) {
  var secondfoldfAnime = bodymovin.loadAnimation({
    container: document.getElementById('second-fold-anime'),
    path: 'https://ixdtm.com/projects/tm-v2/js/json/second-fold.json', // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: false,
    autoplay: false,
  });
}

if ($('.third-fold').length) {
  var thirdfoldfAnime = bodymovin.loadAnimation({
    container: document.getElementById('third-fold-anime'),
    path: 'https://ixdtm.com/projects/tm-v2/js/json/third-fold.json', // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: false,
    autoplay: false,
  });
}

if ($('.fourth-fold').length) {
  var fourthfoldfAnime = bodymovin.loadAnimation({
    container: document.getElementById('fourth-fold-anime'),
    path: 'https://ixdtm.com/projects/tm-v2/js/json/fourth-fold.json', // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: false,
    autoplay: false,
  });
}

if ($('.fifth-fold').length) {
  var lastfoldfAnime = bodymovin.loadAnimation({
    container: document.getElementById('fifth-fold-anime'),
    path: 'https://ixdtm.com/projects/tm-v2/js/json/fifth-fold.json', // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: false,
    autoplay: false,
  });
}

//------------------------------Mobile Animations----------------------//
if ($('.first-fold').length) {
  var firstfoldfAnimembl = bodymovin.loadAnimation({
    container: document.getElementById('first-fold-anime-mbl'),
    path: 'https://ixdtm.com/projects/tm-v2/js/json/first-fold-mobile.json', // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: false,
    autoplay: false,
  });
}

if ($('.second-fold').length) {
  var secondfoldfAnimembl = bodymovin.loadAnimation({
    container: document.getElementById('second-fold-anime-mbl'),
    path: 'https://ixdtm.com/projects/tm-v2/js/json/second-fold-mobile.json', // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: false,
    autoplay: false,
  });
}

if ($('.third-fold').length) {
  var thirdfoldfAnimembl = bodymovin.loadAnimation({
    container: document.getElementById('third-fold-anime-mbl'),
    path: 'https://ixdtm.com/projects/tm-v2/js/json/third-fold-mobile.json', // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: false,
    autoplay: false,
  });
}

if ($('.fourth-fold').length) {
  var fourthfoldfAnimembl = bodymovin.loadAnimation({
    container: document.getElementById('fourth-fold-anime-mbl'),
    path: 'https://ixdtm.com/projects/tm-v2/js/json/fourth-fold-mobile.json', // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: false,
    autoplay: false,
  });
}

if ($('.fifth-fold').length) {
  var lastfoldfAnimembl = bodymovin.loadAnimation({
    container: document.getElementById('fifth-fold-anime-mbl'),
    path: 'https://ixdtm.com/projects/tm-v2/js/json/fifth-fold-mobile.json', // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: false,
    autoplay: false,
  });
}
if ($('.storyMaindiv').length) {
  var homeAnime = bodymovin.loadAnimation({
    container: document.getElementById('homeAnime'),
    path: site_url + "/wp-content/themes/theminimalist/js/json/hp-animation.json", // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: true,
    autoplay: true,
  });
}

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};
//------------------------------Mobile Animations----------------------//
$(window).on('resize scroll', function () {
  if ($('.first-fold').length) {
    if ($(window).width() >= 1025) {
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
    if ($(window).width() >= 1025) {
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
    if ($(window).width() >= 1025) {
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
    if ($(window).width() >= 1025) {
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
    if ($(window).width() >= 1025) {
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
//------------------------------Mobile Animations----------------------//
$(window).on('resize scroll', function () {
  if ($('.first-fold').length) {
    if ($(window).width() <= 1024) {
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
    if ($(window).width() <= 1024) {
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
    if ($(window).width() <= 1024) {
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
    if ($(window).width() <= 1024) {
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
    if ($(window).width() <= 1024) {
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

//=============================================Json Animations========================================//

document.addEventListener("DOMContentLoaded", function () {
  // For service container
  const el = document.querySelector(".service-container");
  el.classList.remove("is-pinned");

  const observer = new IntersectionObserver(
    ([e]) => {
      e.target.classList.toggle("is-pinned", e.intersectionRatio < 1);
    },
    { threshold: [1] }
  );
  observer.observe(el);
});






$('.button_container').click(function () {
  $(".service-container").toggleClass("overlay-z-index");
  if ($(".service-container").hasClass("overlay-z-index")) {
    $(".service-container").css("z-index", "5");
  } else {
    $(".service-container").css("z-index", ""); // Reset to default or remove this line if not needed
  }

});




// custom-like-button.js
jQuery(document).ready(function ($) {
  $('.like-button').on('click', function () {
    var post_id = $(this).data('post-id');
    var ajax_url = ajax_likes_params.ajaxurl;

    $.ajax({
      type: 'POST',
      url: ajax_url,
      data: {
        action: 'process_like',
        post_id: post_id
      },
      success: function (response) {
        $('.like-count[data-post-id="' + post_id + '"]').html(response);
      }
    });
  });
});





