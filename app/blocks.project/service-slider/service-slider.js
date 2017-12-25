"use strict";

$(function() {

  let serviceSlider = $(".service-slider__list").slick({
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 300,
    slidesToShow: 1,
    swipeToSlide: true,
    dots: false,
    adaptiveHeight: false,
    arrows: false
  });

  $(".service-slider__next").click(function() {
    serviceSlider.slick('slickNext');
  });
  $(".service-slider__prev").click(function() {
    serviceSlider.slick('slickPrev');
  });

  let serviceSliderQuantity = $(".service-slider__list").slick("getSlick").slideCount;

  if (serviceSliderQuantity <= 1) {
    $(".service-slider__list")
        .find('.service-slider__arrows-container')
        .css({"display" : "none"});
  }

});
