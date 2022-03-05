//スライドショー
function sliderSetting(){
      $('.slider').slick({
          mobileFirst: true,
          infinite: true, //スライドのループ
          autoplay:true, //自動再生
          autoplaySpeed: 4000,
          fade: true,
          dots: true,
          //矢印を変更するためにアイコンとクラス名を追加
          prevArrow: '<div class="slick-prev"><i class="fas fa-chevron-left slider-arrow"></i></div>', 
          nextArrow: '<div class="slick-next"><i class="fas fa-chevron-right slider-arrow"></i></div>'
      });
}
sliderSetting();

//スマホメニューボタン
$(function(){
  $('.menu_btn').on('click', function(){
    $('.menu_box').toggleClass('is-active');
    $('.menu_btn').toggleClass('is-close');

  });
});