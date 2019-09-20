
// madking slider width one page scrolling.
new fullpage("#fullpage", {
  anchors: ["home", "services", "about", "workflow", "expertise", "footer"],
  css3: true,
  scrollingSpeed: 1000,
  slidesNavigation: true,
  responsiveHeight: 330,
  dragAndMove: true,
  dragAndMoveKey: "YWx2YXJvdHJpZ28uY29tX0EyMlpISmhaMEZ1WkUxdmRtVT0wWUc=",
  controlArrows: false,
  scrollBar: true
});
 
// with screen resolution append height auto adjust on sliders inside slider
$(document).ready(function() {
  var carosulDiv = $('div[data-fp-style="fp-section"]');
  if (window.screen.availWidth < 992) {
    $(carosulDiv).addClass("fp-auto-height");
  }
});

document.documentElement.style.overflowX = "hidden";

$(".footer-links, .footer-copyright").on("click", function() {
  if ($(this).attr("data-url") == "NULL") {
    return;
  }
  window.location.href = $(this).attr("data-url");
});



// navbar fixed on scroll event
$(document).ready(function() {
  var div = $("nav#navbar");
  var start = $(div).offset().top;

  $.event.add(window, "scroll", function() {
    var p = $(window).scrollTop();

    if (p > start) {
      $(div).addClass("fixed-header slideInDown");
      $(div).removeClass("position-absolute trans-navigation");
    } else {
      $(div).removeClass("fixed-header bounce slideInDown");
      $(div).addClass("position-absolute trans-navigation");
    }
  });

  function scrollWin(x, y) {
    window.scrollBy(x, y);
  }
});

$("#section0").ready(function() {
  if (window.scrollDown > 2) {
    $("slide").scroll(slow);
    $("slide").scrollWin(0, -150);
  }
});

// expertise content hide and show on device resolution
$(document).ready(function(){
    var expertiseBoxCarousel = $('div[data-ride="expertise-box-carousel"]');
    if (window.screen.availWidth < 991) {
        $(expertiseBoxCarousel).addClass("d-none");
      }
});