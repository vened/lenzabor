"use strict";

$(function() {

  $(".section-gallery__side-item").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Загрузка изображения #%curr%...",
    mainClass: "section-gallery__mfp",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [1,2],
      tCounter: ""
    },
    image: {
      tError: "Изображение #%curr% не может быть загружено.",
      titleSrc: function(item) {
        return item.el.attr("title");
      }
    }
  });

});
