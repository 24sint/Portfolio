$(document).ready(function(){
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
  });
  var typed = new Typed(".typed",{
    strings: ["Web Developer.", "Computer Support Specialist."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });
   // 
   // $("#navigation li a").click(function(e){
   //   e.preventDefault();
   //   var targetElement = $(this).attr("href");
   //   var targetPosition = $(targetElement).offset().top;
   //   $("html, body").animate({scrollTop: targetPosition - 50}, "slow");
   // });
   //  const nav = $("#navigation");
   //  const navTop = nav.offset().top;
   //  $(window).on("scroll", stickyNavigation);
   //   function stickyNavigation(){
   //     var body = $("body");
   //     if($(window).scrollTop() >= navTop){
   //        body.css("padding-top", nav.outerHeight() + "px")
   //        body.addClass("fixedNav");
   //     } else{
   //    body.css("padding-top", 0)
   //     body.removeClass("fixedNav");
   //   }
   // }
});
