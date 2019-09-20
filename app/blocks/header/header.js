// Header mobile
var header = $(".header");
var heightHeader = header.outerHeight();
var lastScrollTop = 0;

$('body').css('padding-top', heightHeader);
$('.slider_header').css('margin-top', -heightHeader);

header.addClass('transparent');


$(window).scroll(function(event){
  var top = $(this).scrollTop();
  var st = $(this).scrollTop();
  if (st > lastScrollTop && (top > 50)){
    header.addClass('hidden');
    header.removeClass('transparent');
    if($('.header__burger').hasClass('active')) {
      $('.header__burger').removeClass('active').next().slideUp();
    }
  } else {
    header.removeClass('hidden');
  }
  if ( top <= 50 ) {
    header.addClass('transparent');
  }
  lastScrollTop = st;
});

$('.slider_header').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  rows: false,
  arrows: false,
  fade: true
});