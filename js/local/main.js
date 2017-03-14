$(document).ready(function() {
    "use strict";

    $('.list-item-1').mouseenter(function() {
        $('.descr').addClass('active');
    }).mouseleave(function() {
        $('.descr').removeClass('active');
    });

    $('.descr').mouseenter(function() {
        $('.descr').addClass('active');
    });



    $('.photo-gallery').slick({
        //dots: true,
        //infinite: true,
        speed: 500,
        fade: true,
        initialSlide: 2,
        autoplay: true,
        autoplaySpeed: 800,
        arrows: false,
        cssEase: 'linear'
    });


});

