window.$ = require('jquery');
import 'slick-carousel/slick/slick';

{
  $('.js--open-menu').on('click', function(){
    $('.navigation__menu').addClass('active');
    $('body').addClass('disable-scroll');
  });
  $('.js--close-menu').on('click', function(){
    $('.navigation__menu').removeClass('active');
    $('body').removeClass('disable-scroll');
  });

  function openPopup(target) {
    let $target = $(target);
    $target.addClass('show');
    $('body').addClass('show-popup');

    $target.find('.js--slick-slider').slick({
      centerMode: true,
      centerPadding: '90px',
      slidesToShow: 1,
      arrows: true,
      prevArrow: `<span class="slick__button slick--prev"><img src=${require("../images/red-arrow-left.png")}/></span>`,
      nextArrow: `<span class="slick__button slick--next"><img src=${require("../images/red-arrow-right.png")}/></span>`,
      // prevArrow: '<span class="carousel-control-prev-icon slick__button slick--prev" aria-hidden="true"></span>',
      // nextArrow: '<span class="carousel-control-next-icon slick__button slick--next" aria-hidden="true"></span>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            centerPadding: '30px',
            arrows: false
          }
        }
      ]
    });
  }

  $('[data-toggle="popup"]').on('click', function(){
    let target = $(this).attr('data-target');
    openPopup(target)
  });

  $('.js--close-popup').on('click', function(){
    let $popup = $(this).closest('.popup')

    $('body').removeClass('show-popup');
    $popup.removeClass('show');
    $popup.find('.js--slick-slider').slick('unslick');
  });
}
