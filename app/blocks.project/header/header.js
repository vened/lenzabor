"use strict";

$(function() {

  let stickyNav = $(".header__top").offset().top + 300;

  let stickyNavFunction = () => {
    let scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNav) {
      $(".header__top").addClass("header__top_sticky");
    } else {
      $(".header__top").removeClass("header__top_sticky");
    }
  };

  stickyNavFunction();

  $(window).scroll(() => stickyNavFunction());

});
