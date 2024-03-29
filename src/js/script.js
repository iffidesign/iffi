window.$ = require('jquery');
import 'slick-carousel/slick/slick';
const arrowLeft = $('.red-arrow-left').attr('src');
const arrowRight = $('.red-arrow-right').attr('src');

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
      prevArrow: `<span class="slick__button slick--prev"><img src=${arrowLeft}></span>`,
      nextArrow: `<span class="slick__button slick--next"><img src=${arrowRight}></span>`,
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
