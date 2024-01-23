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


if ($('.caseStudyBoxes, .blogslistinnerBoxes').length) {
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




if ($('.shareSec').length) {
  $('.shareBlogs').click(function () {
    $('.sharePopup').addClass('sharePopupnew');
  });
  $('.closePopupshare').click(function () {
    $('.sharePopup').removeClass('sharePopupnew');
  });
}




// sticky book page cta js ends

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



// Function to resize the canvas
function resizeCanvas() {
    var canvas = document.getElementById("myCanvas");
    if (canvas) {
        canvas.width = window.innerWidth;
    }
}

// Call the resizeCanvas function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    resizeCanvas(); // Initial resize

    // Assuming you may need to call resizeCanvas() whenever the window is resized
    window.addEventListener("resize", resizeCanvas);
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
	  
	   let total_ipcounting = parseInt($('#totalip_counting').val());
	    let myip_counting = parseInt($('#myip_counting').val());
	 
	   total_ipcounting = total_ipcounting + myip_counting;
	
	  let mymsg = "";
	  //console.log({myip_counting});
	  if(myip_counting === 0)
		  {
			total_ipcounting += 1 ;  
			 mymsg=`${total_ipcounting}+ creative minds and counting ` ;
          }
	   else{
		   mymsg = `Clicking again? <br> Seems like you are a big fan!`;
	   }  
		
		
	 
	  $('.counterText span').html(mymsg);
	  setTimeout(function () {
       $('.counterText').removeClass('newcounterText');
		 
       }, 9000);
	  if(myip_counting === 0 ){
       $.getJSON('https://ipinfo.io', function (data) {
          var userIpAddress = data.ip;
		  console.log(userIpAddress);

          /* data save code */
          $.ajax({
            type: 'POST',
            url: 'https://theminimalist.in/beta/wp-admin/admin-ajax.php',
            dataType: 'json',
            data: {
              action: 'formated_Value',
              formattedValue: 1 ,
              userIpAddress: userIpAddress
            },
            success: function (res) {
				let total_ipcounting_no= parseInt($('#totalip_counting').val());
	            let myip_counting_no = parseInt($('#myip_counting').val());
				
			   	$('#totalip_counting').val(total_ipcounting_no+1);
	             $('#myip_counting').val(myip_counting_no+1);
            },
            error: function (err) {
              console.error(err);
            }
          });
    });
  }
  });
});


// in viewport text animation js starts
window.onerror = function (message, source, lineno, colno, error) {
  return true;
};

const inViewport = (className) => {
  let allElements = document.getElementsByClassName(className);

  if (allElements.length === 0) {
    console.warn(`No elements found with class name: ${className}`);
    return;
  }

  let windowHeight = window.innerHeight;

  const elems = () => {
    for (let i = 0; i < allElements.length; i++) {
      let viewportOffset = allElements[i].getBoundingClientRect();
      let top = viewportOffset.top;
      if (top < windowHeight) {
        allElements[i].classList.add('newClass');
      } else {
        allElements[i].classList.remove('newClass');
      }
    }
  };

  elems();
  window.addEventListener('scroll', elems);
}


inViewport('imgZoomin');

// in viewport text animation js ends

//---------------------------------------------------------Shamal's Js Code Starts ---------------------------------------------------------------//
//Service page sticky property starts
// if ($('.serviceSec').length) {
//   jQuery(document).ready(function () {
//     for (let i = 1; i <= 9; i++) {
//       var $this = $('#service-info' + i);
//       if ($this.find('div').length >= 3) {
//         $('#servicesec-heading' + i).css({ 'position': 'sticky', 'top': '122px', 'height': '50%' });
//         const mediaQuerys = window.matchMedia('(max-width: 1600px)');
//         if (mediaQuerys.matches) {
//           $('#servicesec-heading' + i).css('top', '100px');
//         }
//         const mediaQueryTabs = window.matchMedia('(max-width: 1024px)');
//         if (mediaQueryTabs.matches) {
//           $('#servicesec-heading' + i).css('top', '84px');
//         }
//         const mediaQuery = window.matchMedia('(max-width: 768px)');
//         if (mediaQuery.matches) {
//           $('#servicesec-heading' + i).css({ 'position': 'static', 'height': 'auto' });
//         }
//       }
//     }
//   });
// }
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

// $(document).ready(function () {
//   let menuScrollTimer = null;
//   $(".filter-wrapper a").click(function (e) {
//     e.preventDefault();
//     if (menuScrollTimer === null) {
//       $('.filter-wrapper a.active').removeClass('active');
//       $(this).addClass('active');
//       let target = $(this).attr('href');
//       $('html, body').animate({ scrollTop: $(target).offset().top - 250 }, 1050);
//       menuScrollTimer = setTimeout(function () {
//         clearTimeout(menuScrollTimer);
//         menuScrollTimer = null;
//       }, 1050);
//     }
//   });
//   function managemenu(indexnumber) {
//     $('.filter-wrapper a').each(function (index, event) {
//       if (index < indexnumber)
//         $(this).hide();
//       else
//         $(this).show();
//     })
//   }
//   $(window).scroll(function (e) {
//     if (menuScrollTimer === null) {
//       let windowTop = $(this).scrollTop();
//       $('.filter-wrapper a').each(function (index, event) {
//         var topvalue = $($(this).attr('href')).offset().top - 250;
//         if (windowTop >= $($(this).attr('href')).offset().top - 250) {
//           managemenu(index);
//           $('.filter-wrapper .active').removeClass('active');
//           $(".service-container").css("z-index", "25");
//           $(this).addClass('active');
//         }
//       });
//       var collaborateSectionTop = $('.collaborate-section').offset().top - 250;
//       if (windowTop >= collaborateSectionTop) {
//         $('.filterSec').hide();
//       } else {
//         $('.filterSec').show();
//       }
//     }
//   });
// });//Service page Casestudy page active menu navbar code ends

//Off set code starts
if ($('.serviceSec').length) {
  jQuery(function ($) {
    $('a[href*="#"]:not([href="#"])').click(function () {
      var target = $(this.hash.replace(/&/g, '\\&'));
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

// //About us slider starts
// if ($(".aboutus-researchSec .researchsec-wrapper .img-div").length) {
//   $('.aboutus-researchSec .researchsec-wrapper .img-div').slick({
//     dots: true,
//     autoplay: false,
//     infinite: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//   });
// }
// //About us slider ends


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


if ($(window).width() > 1025) {
  new WOW().init();
}

//==========================================Json Animations=======================================//
if ($('.collaborate-section').length) {
  var panAnime = bodymovin.loadAnimation({
    container: document.getElementById('panAnime'),
	path: site_url+'/wp-content/themes/theminimalist/js/json/panAnime.json', // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: true,
    autoplay: true,
  });
}
//----------------------------Desktop Animations----------------------//
if ($('.first-fold').length) {
  var firstfoldfAnime = bodymovin.loadAnimation({
    container: document.getElementById('first-fold-anime'),
	path: site_url+'/wp-content/themes/theminimalist/js/json/first-fold.json', // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: false,
    autoplay: false,
  });
}

if ($('.second-fold').length) {
  var secondfoldfAnime = bodymovin.loadAnimation({
    container: document.getElementById('second-fold-anime'),
	path: site_url+'/wp-content/themes/theminimalist/js/json/second-fold.json', // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: false,
    autoplay: false,
  });
}

if ($('.third-fold').length) {
  var thirdfoldfAnime = bodymovin.loadAnimation({
    container: document.getElementById('third-fold-anime'),
	path: site_url+'/wp-content/themes/theminimalist/js/json/third-fold.json', // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: false,
    autoplay: false,
  });
}

if ($('.fourth-fold').length) {
  var fourthfoldfAnime = bodymovin.loadAnimation({
    container: document.getElementById('fourth-fold-anime'),
	path: site_url+'/wp-content/themes/theminimalist/js/json/fourth-fold.json', // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: false,
    autoplay: false,
  });
}

if ($('.fifth-fold').length) {
  var lastfoldfAnime = bodymovin.loadAnimation({
    container: document.getElementById('fifth-fold-anime'),
	path: site_url+'/wp-content/themes/theminimalist/js/json/fifth-fold.json', // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: false,
    autoplay: false,
  });
}

//------------------------------Mobile Animations----------------------//
if ($('.first-fold').length) {
  var firstfoldfAnimembl = bodymovin.loadAnimation({
    container: document.getElementById('first-fold-anime-mbl'),
	path: site_url+'/wp-content/themes/theminimalist/js/json/first-fold-mobile.json', // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: false,
    autoplay: false,
  });
}

if ($('.second-fold').length) {
  var secondfoldfAnimembl = bodymovin.loadAnimation({
    container: document.getElementById('second-fold-anime-mbl'),
	path: site_url+'/wp-content/themes/theminimalist/js/json/second-fold-mobile.json', // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: false,
    autoplay: false,
  });
}

if ($('.third-fold').length) {
  var thirdfoldfAnimembl = bodymovin.loadAnimation({
    container: document.getElementById('third-fold-anime-mbl'),
	path: site_url+'/wp-content/themes/theminimalist/js/json/third-fold-mobile.json', // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: false,
    autoplay: false,
  });
}

if ($('.fourth-fold').length) {
  var fourthfoldfAnimembl = bodymovin.loadAnimation({
    container: document.getElementById('fourth-fold-anime-mbl'),
	path: site_url+'/wp-content/themes/theminimalist/js/json/fourth-fold-mobile.json', // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: false,
    autoplay: false,
  });
}

if ($('.fifth-fold').length) {
  var lastfoldfAnimembl = bodymovin.loadAnimation({
    container: document.getElementById('fifth-fold-anime-mbl'),
	path: site_url+'/wp-content/themes/theminimalist/js/json/fifth-fold-mobile.json', // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: false,
    autoplay: false,
  });
}
if ($('.storyMaindiv').length) {
  var homeAnime = bodymovin.loadAnimation({
    container: document.getElementById('homeAnime'),
	path: site_url+'/wp-content/themes/theminimalist/js/json/hp-animation.json', // Required
    renderer: 'svg', // or 'canvas', 'html'
    loop: true,
    autoplay: true,
  });
}




//=============================================Json Animations========================================//

if($('.image-withsound').length){
  const button = document.getElementById("sound-btn-2");
  button.addEventListener("click",function(){
    const video = document.getElementById("casestudy-video");
    if(video.muted){
      video.muted = false;
      $('.sound-enable').show();
      $('.sound-disable').hide();
    }else{
      video.muted = true;
      $('.sound-enable').hide();
      $('.sound-disable').show();
    }
  });
 }


// $('.button_container').click(function () {
//   $(".service-container").toggleClass("overlay-z-index");
//   if ($(".service-container").hasClass("overlay-z-index")) {
//     $(".service-container").css("z-index", "5");
//   } else {
//     $(".service-container").css("z-index", ""); // Reset to default or remove this line if not needed
//   }

// });





getipcounting();




 function getipcounting() {
  $.getJSON('https://ipinfo.io', function (data) {
    let userIpAddress = data.ip;
    $.ajax({
      type: 'POST',
      url: 'https://theminimalist.in/beta/wp-admin/admin-ajax.php',  // Use the WordPress provided ajax_url
      data: {
        action: 'my_getipcounting',  // Action should match the WordPress AJAX action
        ip: userIpAddress
      },
      success: function (response) {
        //console.log("ok",JSON.parse(response).totalcounting);
		  $('#totalip_counting').val(JSON.parse(response).totalcounting);
		  $('#myip_counting').val(JSON.parse(response).mycounting);
      },
      error: function (error) {
        console.log(error);
      }
    });
  });
}

jQuery(document).ready(function ($) {
  $('.like-button').on('click', function () {
    // Save a reference to $(this) to use inside the setTimeout function
    var $this = $(this);

    var postId = ajax_likes_params.post_id;
    var actionType = $this.hasClass('liked') ? 'dislike' : 'like'; // Toggle between like and dislike

    $.getJSON('https://ipinfo.io', function (data) {
      let userIpAddress = data.ip;
      $.ajax({
        type: 'POST',
        url: 'https://theminimalist.in/beta/wp-admin/admin-ajax.php',
        data: {
          action: 'fan_getipcounting',
          post_id: postId,
          fan_ip: userIpAddress,
          action_type: actionType
        },
        dataType: 'json',
        success: function (response) {
          console.log(response);
          if (response.hasOwnProperty('error')) {
            console.log("Error:", response.error);
            return;
          }

          // Format like and dislike counts with 'k' or 'M' suffix
          var formattedLikeCount = formatCount(response.like_count);

          // Update like count and text based on the action type
          $('#totalfan_counting').text(formattedLikeCount);

          // Rotate the image
          $('img').addClass('rotate');

          // Disable click functionality for the clicked button
          $this.css("cursor", "none");
          $this.off('click');

          // Set a timeout to remove the rotation class after 9000 milliseconds (9 seconds)
          setTimeout(function () {
            $('img').removeClass('rotate');
          }, 9000);
        },
        error: function (error) {
          console.log("Error in AJAX request:", error);
        }
      });
    });
  });
});


  // Function to format counts with 'k' or 'M' suffix
  function formatCount(count) {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M' + " likes";
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'k' + " likes";
    } else {
       return count + ' like';
    }
  }

