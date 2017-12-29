"use strict";

$(function() {

  $(".link-scroll").click(function() {

    let elementClick = $(this).attr("href"),
        destination = $(elementClick).offset().top;

    $("html, body").animate({
      scrollTop: destination
    }, 1100);

    return false;
  });

});
