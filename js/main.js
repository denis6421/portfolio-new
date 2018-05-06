$(document).ready(function() {
  $.getJSON("js/projects.json", function(result) {
    var projects = result;
    var container = document.querySelector("main");
    for (var i = 0; i < projects.length; i++) {

      var results_output =

        '<div class="project_container" >' +
        '<div   data-aos="zoom-in" class="project_images">' + '<a href="' + projects[i].link + '  "target="_blank" >' +
        '<img src  = ' + projects[i].monitor + '>' +
        '<img src = ' + projects[i].phone + '>' + '</a>' + '</div>' +
        '<div  class="project_text"   >' +
        '<p class="project_name" data-aos="flip-up">' + projects[i].name + '</p>' +
        '<p class="project_explain" data-aos="zoom-out-up">' + projects[i].explain + '</p>' +
        '</div>' + '</div>';


      container.innerHTML += results_output;


    };

  });

  var scroll = $(window).scrollTop();

  ///////////////////moving my name to top///////////////
  function show_name() {
    if (scroll <= 100) {
      $(".letters").css('opacity', '1');
      setTimeout(function() {
        $(".letters").animate({
          'top': '10px'

        }, 700);
      }, 1500);

      setTimeout(function() {
        $(".letters1").animate({
          'opacity': '1',
          'top': '70px',
        }, 700);
      }, 1800);

      setTimeout(function() {
        $(".text-wrapper .letters").animate({
          'font-size': '25px'
        }, {
          duration: 300,
          queue: false
        });

        $(".text-wrapper .letters1").animate({
          'font-size': '20px',

        }, {
          duration: 300,
          queue: false
        });
        $(".text-wrapper .letters1").css('font-weight', 'lighter');
      }, 2700);
      setTimeout(function() {
        $(".my_name").animate({
          'height': '60px',
          'width': '250px'
        }, {
          duration: 100
        });
      }, 3800);
      setTimeout(function() {
        $(".text-wrapper .letters").animate({
          'left': '0px',
          'top': '0px'

        }, {
          duration: 100,
          queue: false
        });
        $(".text-wrapper .letters1").animate({
          'left': '0px',
          'top': '30px'
        }, {
          duration: 100,
          queue: false
        });

      }, 3100);
      setTimeout(function() {
        $(".text-wrapper button").animate({
          'opacity': '1'

        }, 400);
      }, 3300);

    }


  }



  //////////////////////////////////////////


  if (window.innerWidth >= 1600) {
    myName = setTimeout(function() {
      $(".my_name").animate({
        'left': '32vh',
        'top': '20px'

      }, {
        duration: 400
      });
    }, 3000);
    $(".my_name").css('position', 'fixed');

  }
  if (window.innerWidth <= 1600) {
    myName = setTimeout(function() {
      $(".my_name").animate({
        'left': '10vh',
        'top': '20px'

      }, {
        duration: 500
      });
      $(".my_name").css('position', 'fixed');
    }, 3000);

  }
  if (window.innerWidth <= 900) {
    myName = setTimeout(function() {
      $(".my_name").animate({
        'left': '4vh',
        'top': '20px'

      }, {
        duration: 100
      }, 3000);
      $(".my_name").css('position', 'fixed');
    }, 3000);


  }
  if (window.innerWidth < 730) {
    $('.letters').animate({
      'font-size': '22px',

    }, 300);
    $(".text-wrapper .letters1").animate({
      'font-size': '17px',
    }, {
      duration: 300,
      queue: false
    });
    myName = setTimeout(function() {
      $(".my_name").animate({
        'left': '2vh',
        'top': '10px'
      }, {
        duration: 100
      });
    }, 3000);
    setTimeout(function() {
      $('.letters').css('color', '#74C7D5')
      $('.letters1').css('color', '#74C7D5')
    }, 3600)

  }
  //////////////////run my nsme on load////////////////////////////////////////////////

  $(document).ready(function() {

    $('.nav_btns').css('opacity', '1');




    if (scroll <= 100) {
      show_name()
    }
    if (scroll > 100) {

      $(".my_name").addClass('scrolled');
      $('.letters').addClass('letters_scrolled');
      $('.letters1').addClass('letters1_scrolled');
      $(".my_name").animate({
        'top': '10px'
      }, {
        duration: 50
      });

      $(".text-wrapper button").animate({
        'opacity': '1'


      }, 200);


    }
    if (scroll > 100 && window.innerWidth < 730) {
      clearTimeout(myName);

      $(".my_name").addClass('scrolled_mobile');
      $('.letters').addClass('letters_scrolled');
      $('.letters1').addClass('letters1_scrolled');
      $('.letters').css('color', '#74C7D5');
      $('.letters1').css('color', '#74C7D5');
      $(".my_name").css({
          'height': '60px',
          'width': '250px',
          'left':'2vh'
        })

      $(".text-wrapper button").animate({
        'opacity': '1'
      }, 200);


    }

  })

  /////////////////////move my name when resize/////////////////////
  $(document).ready(function() {


    window.onresize = function() {
      if (window.innerWidth >= 1600) {
        $('.my_name').css('left', '32vh');
      }
      if (window.innerWidth <= 1600) {
        $('.my_name').css('left', '10vh');
      }
      if (window.innerWidth <= 900) {
        $('.my_name').css('left', '4vh');
      }
      if (window.innerWidth >= 600) {
        setTimeout(function() {

          $('.letters').animate({
            'font-size': '25px',

          }, 100);
          $('.letters1').animate({
            'font-size': '20px',

          }, 100);

        }, 300);

      }
      if (window.innerWidth > 730 && scroll > 100) {
        $('.letters').css('color', '#74C7D5')
        $('.letters1').css('color', '#74C7D5')
        $('.nav_btns button').css('color', '#74C7D5')

      }
      if (window.innerWidth > 730 && scroll < 100) {
        $('nav').css({
          'background': 'transparent',
          'height': '100px'
        });
        $('.letters').css('color', 'white')
        $('.letters1').css('color', 'white')
        $('.nav_btns button').css('color', 'white')
      }

      if (window.innerWidth < 730) {

        $('.letters').css('color', '#74C7D5')
        $('.letters1').css('color', '#74C7D5')
        $('nav').css({
          'background': 'white',
          'height': '75px'
        });
      }

      if (window.innerWidth > 600) {

        $(".text-wrapper button").animate({
          'opacity': '1',

        }, 600);


      }
      if (window.innerWidth < 600) {
        setTimeout(function() {


          $('.letters').animate({
            'font-size': '22px',

          }, 100);
          $('.letters1').animate({
            'font-size': '17px',

          }, 100);

        }, 500);
      }
    }

  })

  /////////////making sticky nav///////////////
  var yourNavigation = $("nav");
  var yourNavigation2 = $(".hidden_box");
  stickyDiv = "sticky";
  stickyDiv2 = "sticky2";
  yourHeader = $('header').height();

  $(window).scroll(function() {
    if ($(this).scrollTop() > yourHeader) {
      yourNavigation.addClass(stickyDiv);
      yourNavigation.addClass(stickyDiv2);
    } else {
      yourNavigation.removeClass(stickyDiv);
      yourNavigation.removeClass(stickyDiv2);
    }
  });
});
AOS.init({
  duration: 1200,
})


////////////////////scroll page by click on tabs//////////////////
$('.text-wrapper button').on('click', function(event) {

  $('html, body').animate({
    scrollTop: $("main").offset().top
  }, 600);
});

$(' #home').on('click', function(event) {

  $('html, body').animate({
    scrollTop: $("header").offset().top
  }, 600);

});

$(' #about').on('click', function(event) {

  $('html, body').animate({
    scrollTop: $(".about_wrapper").offset().top
  }, 600);
  if (window.innerWidth < 730) {
  }

});
$(' #portfolio').on('click', function(event) {
  $('html, body').animate({
    scrollTop: $("main").offset().top
  }, 600);
  if (window.innerWidth < 730) {
  }
});
$(' #contact').on('click', function(event) {
  $('html, body').animate({
    scrollTop: $("footer").offset().top
  }, 600);
  if (window.innerWidth < 730) {

  }
});
$('.go_up').on('click', function(event) {
  $('html, body').animate({
    scrollTop: $("header").offset().top
  }, 600);
})
$('.my_name').on('click', function(event) {
  $('html, body').animate({
    scrollTop: $("header").offset().top
  }, 600);
})


var about_section = $('.about_wrapper').offset().top;
var projects_section = $('main').offset().top;
var contact_section = $('footer').offset().top;

////////////toggle hidden menu, change hamburger color/////////////////
$("#nav-icon").click(function() {
  $(".hidden_box").slideToggle();
  $(this).toggleClass('open');
  $(".letters").css('transition', '0s');
  $(".letters1").css('transition', '0s');

})
$('.hidden_box .nav_btns').click(function(){
    $('#nav-icon').removeClass('open');
      $(".hidden_box").slideToggle();
})

//////////////border ynder selected nav btn//////////////
$(window).on('scroll', function() {
  var scroll = $(window).scrollTop();
  if (scroll >= about_section) {
    $('#about').siblings().removeClass('selected_btn')
    $("#about").addClass('selected_btn')
  } else {
    $("#about").removeClass('selected_btn')
  }
  if (scroll >= projects_section - 70) {
    $('#portfolio').siblings().removeClass('selected_btn')
    $("#portfolio").addClass('selected_btn')
  } else {
    $("#portfolio").removeClass('selected_btn')
  }
  if (scroll > contact_section - 400) {
    $('#contact').siblings().removeClass('selected_btn')
    $("#contact").addClass('selected_btn')
  } else {
    $("#contact").removeClass('selected_btn')
  }

  if (scroll >= 50 && window.innerWidth > 730) {
    $('#contact').siblings().css('transition', '0.6s')
    $('nav').css('height', '75px');
    $('nav').css('background', 'white');
    $(".my_name p").css("color", "#74C7D5");
    $('.my_name').css('top', '10px');
    $('.text-wrapper div:first-child').css('top', '10px');
    $(".nav_btns button").css("color", "#74C7D5");
    $(".hamburger_mobile div").css('background', '#74C7D5')
  }

  if (scroll <= 50 && window.innerWidth > 730) {
    $('nav').css('height', '100px');
    $('nav').css('background', 'transparent');
    $(".my_name p").css("color", "white");
    $('.my_name').css('top', '20px');
    $('.text-wrapper div:first-child').css('top', '20px');
    $(".nav_btns button").css("color", "white");
    $(".hamburger_mobile div").css('background', 'white')
  }


});




$('.hidden_box button').click(function(event) {
  $(this).siblings().removeClass('selected_nav_btn')
  $(this).addClass('selected_nav_btn')
})
