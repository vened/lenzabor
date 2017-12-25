"use strict";

$(function() {

  $(".custom-select__drop-button").click(function(){
    let dropBlock = $(this)
        .parents(".custom-select")
        .find(".custom-select__drop-list");

    if ( dropBlock.is(":hidden") ) {
      dropBlock.slideDown();

      $(this).addClass("custom-select__drop-button_active");

      dropBlock.find("li").click(function() {
        dropBlock
            .find(".custom-select__drop-item_selected")
            .removeClass("custom-select__drop-item_selected");

        $(this).addClass("custom-select__drop-item_selected");

        let selectResult = $(this).find("a").text(),
            selectValue = $(this).find("a").attr("href");

        $(this)
            .parents(".custom-select")
            .find(".custom-select__drop-hidden-input")
            .val(selectValue);

        $(this)
            .parents(".custom-select")
            .find(".custom-select__drop-button")
            .removeClass("custom-select__drop-button_active")
            .html(selectResult);

        dropBlock.slideUp();

        return false;
      });
    } else {
      $(this).removeClass("custom-select__drop-button_active");

      dropBlock.slideUp();
    }

    return false;
  });

  $(document).click(function(event) {
    if ( $(event.target).closest(".custom-select__drop-list").length ) return;

    $(".custom-select__drop-list").slideUp("slow");

    $(".custom-select__drop-button")
        .removeClass("custom-select__drop-button_active");

    event.stopPropagation();
  });

});
