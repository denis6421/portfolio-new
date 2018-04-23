
$(document).ready(function() {
  $.getJSON("projects.json", function(result) {
    var projects = result;
    var container = document.querySelector("main");
    for (var i = 0; i < projects.length; i++) {

var results_output =

    '<div class="project_container" >' +
      '<div  class="project_images" data-aos="zoom-in">' +
      '<img src  = ' + projects[i].monitor + '>' +
        '<img src = ' + projects[i].phone + '>' +'</div>' +
        '<div  class="project_text"   >' +
        '<p class="project_name" data-aos="flip-up">' + projects[i].name + '</p>' +
        '<p class="project_explain" data-aos="zoom-out-up">' + projects[i].explain + '</p>' +
        '<a href="' + projects[i].link + '  "target="_blank" class="live_version" data-aos="fade-up" data-aos-anchor-placement="center-bottom">' +'<p>Live Version</p>' +'</a>'   + '</div>' +'</div>' ;


container.innerHTML += results_output;


    };

  });

function show_name(){
  $(".letters ").css('opacity','1');

  setTimeout(function(){
          $(".letters").css({'top':'10px', 'transition':'0.6s'});

        },2500);
        setTimeout(function(){
              $(".letters1").css('opacity','1');
            },2700);
            setTimeout(function(){
                  $(".letters1").css({'top':'80px', 'transition':'0.6s'});
                },2900);
                setTimeout(function(){
                  $(".text-wrapper button").css('opacity','1');

                },3000);
                    setTimeout(function(){
                      $(".text-wrapper button").css({'top':'140px', 'transition':'0.6s'});

                        },3200);

}
show_name();




    var yourNavigation = $("nav");
    var yourNavigation2 = $(".hidden_box");
        stickyDiv = "sticky";
            stickyDiv2 = "sticky2";
        yourHeader = $('header').height();

    $(window).scroll(function() {
      if( $(this).scrollTop() > yourHeader ) {
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

$('.text-wrapper button').on('click', function(event) {

  $('html, body').animate({
    scrollTop: $("main").offset().top
}, 600);
});

$(' #home').on('click', function(event) {
  $(".hidden_box").slideToggle();
  $('html, body').animate({
    scrollTop: $("header").offset().top
}, 600);
});

$(' #about').on('click', function(event) {
  $(".hidden_box").slideToggle();
  $('html, body').animate({
    scrollTop: $(".about_wrapper").offset().top
}, 600);
});
$(' #portfolio').on('click', function(event) {
  $(".hidden_box").slideToggle();
  $('html, body').animate({
    scrollTop: $("main").offset().top
}, 600);
});
$(".hamburger_mobile").click(function(){
  $(".hidden_box").slideToggle();


})
