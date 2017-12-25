"use strict";

$(function() {

  $(".section-works__item").each(function(i) {
    let imgGallery = $(this).find(".section-works__img").attr("src");

    $(this).css({"background":"url(" + imgGallery + ") center no-repeat", "background-size":"cover"});
  });

  $(".section-works__slider").slick({
    infinite: true,
    fade: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    dots: true,
    adaptiveHeight: false,
    arrows: true,
    asNavFor: ".section-works__slider-previews",
    appendDots: $(".section-works__navigation"),
    appendArrows: $(".section-works__navigation"),
    prevArrow: "<span class=\"section-works__prev\"></span>",
    nextArrow: "<span class=\"section-works__next\"></span>"
  });

  $(".section-works__item-previews").each(function(i) {
    let imgGalleryPreviews = $(this).find(".section-works__img-previews").attr("src");

    $(this).css({"background":"url(" + imgGalleryPreviews + ") center no-repeat", "background-size":"cover"});
  });

  $(".section-works__slider-previews").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    asNavFor: ".section-works__slider",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          vertical: false,
          verticalSwiping: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 2,
        }
      }
    ]
  });

});
