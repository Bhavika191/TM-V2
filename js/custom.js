// header menu code starts
$('#toggle').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});
// header menu code ends

//----------------------------------------------------Shamal's Js Code Starts---------------------------------------------------------//

//Service page read more and Read less code starts

    jQuery(document).ready(function () {
      for (let i = 1; i <= 8; i++) {
        var $this = $('#servicesec-content' + i);
        if ($this.find('div').length > 3) {
          $('#servicesec-content' + i).append('<div><a href="javascript:void(0)" class="showMore"></a></div>');
        }
        // If more than 2 Education items, hide the remaining
        $('#servicesec-content' + i + ' .list-wrapper').slice(0, 3).addClass('shown');
        $('#servicesec-content' + i + ' .list-wrapper').not('.shown').hide();
        $('#servicesec-content' + i + ' .showMore').on('click', function () {
          $('#servicesec-content' + i + ' .list-wrapper').not('.shown').toggle(200);
          $(this).toggleClass('showLess');
        });
      }//for loop closed
    });

  //Service page read more and Read less code ends
  
  //Services page mobile accordian starts
  // var acc = document.getElementsByClassName("servicesec-heading");
  // var panel = document.getElementsByClassName('servicesec-content');
  // for (var i = 0; i < acc.length; i++) {
  //   acc[i].onclick = function () {
  //     var setClasses = !this.classList.contains('active');
  //     setClass(acc, 'active', 'remove');
  //     setClass(panel, 'show', 'remove');
  //     if (setClasses) {
  //       this.classList.toggle("active");
  //       this.nextElementSibling.classList.toggle("show");
  //     }
  //   }
  // }
  // function setClass(els, className, fnName) {
  //   for (var i = 0; i < els.length; i++) {
  //     els[i].classList[fnName](className);
  //   }
  // }
  //Services page mobile accordian ends
  
  //Service page slider starts
  // if ($(window).width() > 768) {
  //   if ($("#myBtnContainer").length) {
  //     var blogCount = document.querySelectorAll("#myBtnContainer .btn").length;
  //     if (blogCount > 7) {
  //       document.getElementById("myBtnContainer").classList.add("filter-wrapper");
  //       document.getElementById("containerTwo").classList.add("containerSlide");
  //     } else {
  //       document.getElementById("myBtnContainer").classList.remove("filter-wrapper");
  //       document.getElementById("containerTwo").classList.remove("containerSlide");
  //     }
  
  //     $(".filter-wrapper").slick({
  //       dots: false,
  //       arrows: true,
  //       slidesToShow: 6,
  //       slidesToScroll: 1,
  //       infinite: false,
  //       variableWidth: true,
  //       responsive: [
  //         {
  //           breakpoint: 1800,
  //           settings: {
  //             slidesToShow: 5,
  //           },
  //         },
  //         {
  //           breakpoint: 1600,
  //           settings: {
  //             slidesToShow: 5,
  //           },
  //         },
  //         {
  //           breakpoint: 1400,
  //           settings: {
  //             slidesToShow: 4,
  //           },
  //         },
  //         {
  //           breakpoint: 1200,
  //           settings: {
  //             slidesToShow: 3,
  //           },
  //         },
  //       ],
  //     });
  //   }
  // }
  //Service page slider ends
  
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
            $('html, body').animate({ scrollTop: $(target).offset().top - 250}, 1050);
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
  
  //------------------------------------------------------- Shamal's Code ends --------------------------------------------------//