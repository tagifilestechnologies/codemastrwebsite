// applying background color a fixed navigation menu 

document.getElementById('#fullpage').ready("change", function(e) {
    var dropdown = document.getElementById('mainNav');
    window.location.href = dropdown.options[dropdown.selectedIndex].getAttribute('id') + '.html';
});


// wrap.on("scroll", function(e) {

//     if (this.scrollTop > 2) {
//         wrap.removeClass("trans-navigation")
//         wrap.addClass("position-fixed w-100 bg-white color-black");
//         wrpa.style("z-index:9999;");
//     } else {
//         wrap.removeClass("position-fixed w-100 bg-white color-black");
//     }

// });
// function activateNavDots(name, sectionIndex) {
//     if (options.navigation) {
//         $('#multiscroll-nav').find('.active').removeClass('active');
//         if (name) {
//             $('#multiscroll-nav').find('a[href="#' + name + '"]').addClass('active');
//         } else {
//             $('#multiscroll-nav').find('li').eq(sectionIndex).find('a').addClass('active');
//         }
//     }
// }
// $(document).ready(function() {
//     var $header = $("#navbar"),
//         $clone = $header.before($header.clone().addClass("clone"));

//     $(window).on("scroll", function() {
//         var fromTop = $(window).scrollTop();
//         $("body").scroll("down", (fromTop > 400));
//     });
// });
// $(window).scroll(function() {
//     var sticky = $('#navbar'),
//         scroll = $(window).scrollTop();
//     var count;
//     if (scroll >= 2) sticky.addClass('position-fixed w-100 bg-white text-primary');
//     else sticky.removeClass('position-fixed w-100 bg-white text-primary');
// });
$(document).ready(function() {

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 300) {
            $('nav').addClass('position-fixed');
        } else {
            $('nav').removeClass('position-fixed');
        }
    });

});

$('.carousel-linked-nav > li > a').click(function() {

    // grab href, remove pound sign, convert to number
    var item = Number($(this).attr('href').substring(1));

    // slide to number -1 (account for zero indexing)
    $('#myCarousel').carousel(item - 1);

    // remove current active class
    $('.carousel-linked-nav .active').removeClass('active');

    // add active class to just clicked on item
    $(this).parent().addClass('active');

    // don't follow the link
    return false;
});