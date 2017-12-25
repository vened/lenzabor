"use strict";

$(function() {

  $(".section-reviews__slider").slick({
    infinite: true,
    fade: false,
    autoplay: false,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: false,
    variableWidth: true,
    dots: false,
    adaptiveHeight: true,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    appendArrows: $(".section-reviews__navigation"),
    prevArrow: "<span class=\"section-reviews__prev\">Предыдущий</span>",
    nextArrow: "<span class=\"section-reviews__next\">Следующий</span>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          speed: 500,
          centerMode: false,
          variableWidth: false
        }
      }
    ]
  });

});
