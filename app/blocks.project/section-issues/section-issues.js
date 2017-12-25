"use strict";

$(function() {

  $(".section-issues__item_desktop .section-issues__block").click(function(e) {
    e.preventDefault();

    if ( $(this).hasClass("section-issues__block_open") ) {
      $(this).removeClass("section-issues__block_open");
      $(this)
          .parents(".section-issues__item")
          .find(".section-issues__questions")
          .slideUp();
    } else {
      $(this).addClass("section-issues__block_open");
      $(this)
          .parents(".section-issues__item")
          .find(".section-issues__questions")
          .slideDown();

      $(".section-issues__item")
          .find(".section-issues__block")
          .not( $(this) )
          .removeClass("section-issues__block_open")
          .parents(".section-issues__item")
          .find(".section-issues__questions")
          .slideUp();

      /*// Открываем первый пункт с контентом у открытого аккордеона
      $(".section-issues__block")
          .not( $(this) )
          .parents(".section-issues__item")
          .find(".section-issues__question")
          .removeClass("section-issues__question_active");

      $(this)
          .parents(".section-issues__item")
          .find(".section-issues__question")
          .first()
          .click();*/
    }
  });

  function regulationsForMq(mq) {
    if (!mq.matches) {
      $(".section-issues__item_mobile .section-issues__question").unbind("click");

      $(".section-issues__item_desktop .section-issues__question").click(function(e) {
        e.preventDefault();

        let tab = $(this).attr("href"),
            content = $(tab).html();

        // Предотвращаем повторное копирование контента
        // при повторном клике на активный пункт
        if ( !($(this).hasClass("section-issues__question_active")) ) {
          $(".section-issues__for-content").html(content);
        }

        // Удаляем активный пункт у всех кнопок
        $(".section-issues .section-issues__question")
            .removeClass("section-issues__question_active");

        // Добавляем активный пункт кнопке по
        // которой кликнули в данный момент
        $(this).addClass("section-issues__question_active");
      });

      // Находим активный пукнт и показываем его контент при загрузке
      let tab = $(".section-issues__question_active").attr("href"),
          content = $(tab).html();

      $(".section-issues__for-content").html(content);
    } else {
      $(".section-issues__item_desktop .section-issues__question").unbind("click");

      $(".section-issues__item_mobile .section-issues__question").click(function(e) {
        e.preventDefault();

        $(".section-issues .section-issues__question").removeClass("section-issues__question_active");

        $(this).addClass("section-issues__question_active");

        var tab = $(this).attr('href');

        $(".section-issues__content")
            .not(tab)
            .css({'display':'none'});

        $(tab).fadeIn(500);
      });

      // Находим активный пукнт и показываем его контент при загрузке
      let tab = $(".section-issues__question_active").attr("href")

      $(tab).css("display", "block");
    }
  }

  let mq = window.matchMedia("screen and (max-width: 767px)");

  mq.addListener(regulationsForMq);

  regulationsForMq(mq);

  // Открываем вкладку аккордеона с активным пунктом при загрузке
  $(".section-issues__question_active")
      .parents(".section-issues__item")
      .find(".section-issues__block")
      .click();

});
