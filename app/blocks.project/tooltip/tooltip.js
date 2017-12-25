"use strict";

$(function() {

  let targets = $(".tooltip"),
      target  = false,
      tooltip = false,
      title   = false,
      tip;

  targets.bind("mouseenter", function() {
    target  = $( this );
    tip     = target.attr("data-tooltip");
    tooltip = $("<div id=\"tooltip\"></div>");

    if ( !tip || tip == "" ) {
      return false;
    }

    target.removeAttr("data-tooltip");

    tooltip
        .css("opacity", 0)
        .html(tip)
        .appendTo("body");

    let init_tooltip = function() {
      if ( $( window ).width() < tooltip.outerWidth() * 1.5 ) {
        tooltip.css("max-width", $( window ).width() / 2);
      } else {
        tooltip.css("max-width", 340);
      }

      let pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( tooltip.outerWidth() / 2 ),
          pos_top  = target.offset().top - tooltip.outerHeight() - 20;

      if ( pos_left < 0 ) {
        pos_left = target.offset().left + target.outerWidth() / 2 - 20;
        tooltip.addClass("left");
      } else {
        tooltip.removeClass("left");
      }

      if ( pos_left + tooltip.outerWidth() > $( window ).width() ) {
        pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
        tooltip.addClass("right");
      } else {
        tooltip.removeClass("right");
      }

      if ( pos_top < 0 ) {
        let pos_top  = target.offset().top + target.outerHeight();
        tooltip.addClass("top");
      } else {
        tooltip.removeClass("top");
      }

      tooltip.css( { left: pos_left, top: pos_top } )
          .animate( { top: "+=10", opacity: 1 }, 150 );
    };

    init_tooltip();

    $( window ).resize(init_tooltip);

    let remove_tooltip = function() {
        tooltip.animate( { top: "-=10", opacity: 0 }, 150, function() {
          $(this).remove();
        });

        target.attr("data-tooltip", tip);
    };

    target.bind("mouseleave", remove_tooltip);
    tooltip.bind("click", remove_tooltip);
  });

});
