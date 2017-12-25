"use strict";

$(function() {

  $(".hamburger").click(function() {
    $(this)
        .toggleClass("hamburger_open")
        .find(".hamburger__btn")
        .toggleClass("hamburger__btn_on");

    $(".top-menu").fadeToggle();

    $(".page").toggleClass("page_fixed");

    return false;
  });

});
