// 動画用モーダル
$('.custom-movie__main').modaal({
  type: 'video',
  background: '#000',
  overlay_opacity: '0.8',
  width: '100%',
});

// スライダー
$(function () {
  $(".custom-slider__list")
  .on('init', function(event, slick) {
    $('.current').text(slick.currentSlide + 1);
    $('.total').text(slick.slideCount);
  })
  .slick({
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 760,
    cssEase: 'ease-in-out',
    dots: true,
    arrows: true,
    appendArrows: $('.custom-slider__arrow')
  })
  .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.current').text(nextSlide + 1);
  });
});

// faq用アコーディオン
$(function() {
  $('.faq__question').click(function() {
    $(this).next('.faq__answer').slideToggle(500);
    $(this).toggleClass('is_active');
  });
});