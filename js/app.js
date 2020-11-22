$(document).ready(function(){
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
  });
const typed = new Typed(".typed",{
    strings: ["Fron- End Web Developer", "Back-End Web developer", "Full-Stack Web Developer"],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });
});
