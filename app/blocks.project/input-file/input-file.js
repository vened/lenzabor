"use strict";

$(function() {

  let inputs = document.querySelectorAll(".input-file__input");

  Array.prototype.forEach.call( inputs, function(input) {
    let label = input.nextElementSibling,
        labelVal = label.innerHTML;

    input.addEventListener("change", function(e) {
      let fileName = "";

      if ( this.files && this.files.length > 1 && this.files.length <= 4) {
        fileName = this.files.length + " файла выбрано";
      } else if (this.files && this.files.length > 4) {
        fileName = this.files.length + " файлов выбрано";
      } else {
        fileName = e.target.value.split("\\").pop();
      }

      if (fileName) {
        label.querySelector(".input-file__field").innerHTML = fileName;
      } else {
        label.innerHTML = labelVal;
      }
    });
  });

});
