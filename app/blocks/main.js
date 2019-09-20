$('.slider_services').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true
});

$('a[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.slider_services').slick('slickGoTo', slideno - 1);
});

$('[data=menu]').click(function() {
  $(this).toggleClass('active').next().slideToggle();
})

// Parallax
// function parallax() {
//   var top = $(this).scrollTop();
//   $('[data=parallax]').css({
//     'transform' : 'translate(0%, '+ -top /50 +'%'
//   })
// }
// parallax()