"use strict";

$(function() {

  function regulationsForMq(mq) {
    if (mq.matches) {
      $(".vertical-menu_toggle .vertical-menu__title").click(function() {
        $(this)
            .toggleClass("vertical-menu__title_open")
            .parents(".vertical-menu_toggle")
            .find(".vertical-menu__list")
            .slideToggle();
      });

      $(".vertical-menu_toggle")
          .find(".vertical-menu__list")
          .css("display", "none");
    } else {
      $(".vertical-menu_toggle .vertical-menu__title")
          .unbind("click")
          .removeClass("vertical-menu__title_open")
          .parents(".vertical-menu_toggle")
          .find(".vertical-menu__list")
          .css("display", "block");
    }
  }

  let mq = window.matchMedia("screen and (max-width: 767px)");

  mq.addListener(regulationsForMq);

  regulationsForMq(mq);

});
