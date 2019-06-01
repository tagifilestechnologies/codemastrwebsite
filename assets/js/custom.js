$(document).ready(function() {

    var div = $('nav#navbar');
    var start = $(div).offset().top;

    $.event.add(window, "scroll", function() {
        var p = $(window).scrollTop();

        $('nav#navbar').ready(function() {
            if (p > start) {
                $(div).addClass('fixed-header');
                $(div).removeClass('position-absolute trans-navigation');
            } else {
                $(div).removeClass('fixed-header');
                $(div).addClass('position-absolute trans-navigation');
            }
        });
    });

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