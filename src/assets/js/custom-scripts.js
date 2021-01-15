(function($) {
    "use strict";

    /*
    |====================
    | Mobile NAv trigger
    |=====================
    */

    var trigger = $('.navbar-toggler'),
        overlay = $('.overlay'),
        navc = $('.navbar-collapse'),
        active = false;


    $('.navbar-toggler, .navbar-nav li a, .overlay').on('click', function() {
        $('.navbar-toggler').toggleClass('active')
            //   $('#js-navbar-menu').toggleClass('active');
            //   $('.navbar-collapse').toggleClass('show');
        overlay.toggleClass('active');
        navc.toggleClass('active');
    });

}(jQuery));