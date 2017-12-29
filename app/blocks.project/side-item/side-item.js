"use strict";

$(function() {

  $(".side-item__popup_magnific").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    mainClass: "mfp-with-zoom"
  });

  $(".side-item_calculator").click(function() {
    $(this)
      .parents(".section-calculator__step")
      .find(".side-item_active")
      .removeClass("side-item_active")

    $(this).addClass("side-item_active");
  });

  $(".side-item__popup_magnific").click(function(event) {
    event.stopPropagation();
  });

});
