"use strict";

$(function() {

  function changeFence() {
    let fenceArr = [];

    $(".visualizer-control__drop-button").each(function() {
      fenceArr.push($(this).attr("href"));
    });

    let fenceImg = "url(\"img/visualizer/" +
                   $(".visualizer__controls").attr("data-folder") +
                   "/" +
                   fenceArr.join("") +
                   $(".visualizer__color_active").attr("href") +
                   ".png\") center no-repeat";

    $(".visualizer__fence").css("background", fenceImg);
  }
  /*function changeFence() {
    $(".visualizer__controls").each(function() {
      let fenceArr = [];

      $(this).find(".visualizer-control__drop-button").each(function() {
        fenceArr.push($(this).attr("href"));
      });

      let fenceImg = "url(\"img/visualizer/" +
                     $(this).attr("data-folder") +
                     "/" +
                     fenceArr.join("") +
                     ".png\") center no-repeat";

      $(this)
          .parent(".visualizer")
          .find(".visualizer__fence")
          .css("background", fenceImg);
    });
  }*/

  changeFence();



  $(".visualizer-control__drop-button").click(function() {
    $(".visualizer-control__drop-list").slideUp("slow");

    $(".visualizer-control__drop-button")
        .removeClass("visualizer-control__drop-button_active");

    let dropBlock = $(this)
        .parents(".visualizer-control")
        .find(".visualizer-control__drop-list");

    if ( dropBlock.is(":hidden") ) {
      dropBlock.slideDown();

      $(this).addClass("visualizer-control__drop-button_active");

      dropBlock.find("li").click(function() {
        dropBlock
            .find(".visualizer-control__drop-item_selected")
            .removeClass("visualizer-control__drop-item_selected");

        $(this).addClass("visualizer-control__drop-item_selected");

        let selectResult = $(this).find("a").text(),
            selectValue = $(this).find("a").attr("href");

        $(this)
            .parents(".visualizer-control")
            .find(".visualizer-control__drop-button")
            .removeClass("visualizer-control__drop-button_active")
            .attr("href", selectValue)
            .html(selectResult);

        dropBlock.slideUp();

        if ( $(this).find("a").attr("href") == "r1" ) {
          $(".visualizer__box")
              .removeClass("visualizer__box_back")
              .addClass("visualizer__box_front");
        } else if ($(this).find("a").attr("href")=="r2") {
          $(".visualizer__box")
              .removeClass("visualizer__box_front")
              .addClass("visualizer__box_back");
        };

        if ( $(this).find("a").attr("href") == "s2" ) {
          $(".visualizer")
              .removeClass("visualizer__box_s4")
              .addClass("visualizer__box_s2");
        } else if ($(this).find("a").attr("href")=="s4") {
          $(".visualizer")
              .removeClass("visualizer__box_s2")
              .addClass("visualizer__box_s4");
        };

        changeFence();

        return false;
      });
    } else {
      $(this).removeClass("visualizer-control__drop-button_active");

      dropBlock.slideUp();
    }

    return false;
  });



  $(document).click(function(event) {
    if ( $(event.target).closest(".visualizer-control__drop-list").length ) return;

    $(".visualizer-control__drop-list").slideUp("slow");

    $(".visualizer-control__drop-button")
        .removeClass("visualizer-control__drop-button_active");

    event.stopPropagation();
  });



  $(".visualizer__color").click(function() {
    let _this = $(this);

    _this.addClass("visualizer__color_click");

    setTimeout(function() {
      _this.removeClass("visualizer__color_click");
    }, 300);

    $(".visualizer__buttons")
        .find(".visualizer__color")
        .removeClass("visualizer__color_active");

    _this.addClass("visualizer__color_active");

    changeFence();

    return false;
  });
  $(".visualizer__color:first").click();


  $(".visualizer__ios-switch .ios-switch__input").change(function() {
    if ($(this).prop("checked")) {
      $(".visualizer__box").removeClass("visualizer__box_interactive-off");

      $(".visualizer__ios-switch-ischecked").html("включен");
    } else {
      $(".visualizer__box").addClass("visualizer__box_interactive-off");

      $(".visualizer__ios-switch-ischecked").html("выключен");
    }
  });


  // Tooltip START
  $(function() {

    let targets = $(".visualizer__circle_tooltip"),
        target  = false,
        tooltip = false,
        title   = false,
        tip;

    targets.bind("mouseenter", function() {
      target  = $(this);
      tip     = target.find(".visualizer__circle-content").html();
      tooltip = $("<div class=\"visualizer__tooltip\"></div>");

      if ( !tip || tip == "" ) {
        return false;
      }

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
      };

      target.bind("mouseleave", remove_tooltip);
      tooltip.bind("click", remove_tooltip);
    });

  });
  // Tooltip END


});
