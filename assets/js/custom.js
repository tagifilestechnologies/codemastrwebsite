// Header Fixed start Here
$(document).ready(function() {

    var div = $('nav#navbar');
    var start = $(div).offset().top;

    $.event.add(window, "scroll", function() {
        var p = $(window).scrollTop();

        $('nav#navbar').ready(function() {
            if (p > start) {
                $(div).addClass('fixed-header slideInDown');
                $(div).removeClass('position-absolute trans-navigation');
            } else {
                $(div).removeClass('fixed-header bounce slideInDown');
                $(div).addClass('position-absolute trans-navigation');
            }
        });
    });
    afterSlideLoad: function(anchorLink, slide) {
        if (anchorLink == "#section0" && slide == 1) {
            $.fn.fullpage.setAllowScrolling(false, "up");
        }
    }
    onSlideLeave: function(anchorLink, slide) {
        if (anchorLink == "#section0" && slide == 3) {
            $.fn.fullpage.setAllowScrolling(true, "up");
        }
    }
});

// parrax elemtn statement position start here
$(document).ready(function() {

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