"use strict";

$(function() {

  let pricesSlider = $(".section-prices__list").slick({
    infinite: true,
    fade: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 300,
    slidesToShow: 3,
    swipeToSlide: true,
    dots: false,
    adaptiveHeight: false,
    arrows: false,
    appendDots: $(".section-prices__navigation"),
    appendArrows: $(".section-prices__navigation"),
    prevArrow: "<span class=\"section-prices__prev\"></span>",
    nextArrow: "<span class=\"section-prices__next\"></span>",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
          dots: true
        }
      }
    ]
  });

});
