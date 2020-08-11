$(function(){
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        lazyLoad: true,
        loop: true,
        margin: 0,
        responsiveClass: false,
        autoHeight: false,
        autoplayTimeout: 10000,
        smartSpeed: 600,
        nav: false,
        dots: true,
        center: false,
        items: 1,
        autoplayHoverPause: false
        
    });
    $('.owl-carousel-2').owlCarousel({
        autoplay: true,
        lazyLoad: true,
        loop: true,
        margin: 0,
        responsiveClass: false,
        autoHeight: false,
        autoplayTimeout: 10000,
        smartSpeed: 800,
        nav: false,
        dots: true,
        center: false,
        items: 1,
        autoplayHoverPause: false,
    });
    
    AOS.init({
        once: true,
        duration : 800
    });
});