"use strict";

$(function() {

  let disableButton = () => {
    setTimeout(function() {
      if ( $(".section-services__item:last").is(':visible') ) {
        $(".section-services__button").addClass("button_disabled");
      }
    }, 500)
  };

  disableButton();

  $(".section-services__button").click(function() {
    disableButton();

    $(".section-services__item:hidden")
        .slice(0, 4)
        .slideDown();

    return false;
  });

});
