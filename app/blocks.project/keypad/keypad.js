"use strict";

$(function() {

  $(".keypad").keypad({
    keypadOnly: false,
    closeText: "",
    clearText: "",
    layout: ["789", "456", "123", $.keypad.CLEAR + "0" + $.keypad.CLOSE]
  });

});
