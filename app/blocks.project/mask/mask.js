"use strict";

$(function() {

  $(".mask_phone").mask("+7(999) 999-99-99");

  $.mask.definitions["H"]="[012]";

  $.mask.definitions["M"]="[012345]";

  $(".mask_time").mask("H9:M9", {
    placeholder: "_",
    completed: function() {
          let val = $(this).val().split(":");

          if ( val[0]*1 > 23 ) val[0] = "23";
          if ( val[1]*1 > 59 ) val[1] = "59";

          $(this).val( val.join(":") );
    }
  });

});
