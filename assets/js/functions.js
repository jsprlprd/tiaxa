// $num = $('.card').length;
// $even = $num / 2;
// $odd = ($num + 1) / 2;

// if ($num % 2 == 0) {
//   $('.card:nth-child(' + $even + ')').addClass('active');
//   $('.card:nth-child(' + $even + ')').prev().addClass('prev');
//   $('.card:nth-child(' + $even + ')').next().addClass('next');
//   } else {
//     $('.card:nth-child(' + $odd + ')').addClass('active');
//     $('.card:nth-child(' + $odd + ')').prev().addClass('prev');
//     $('.card:nth-child(' + $odd + ')').next().addClass('next');
// }

// $('.card').click(function() {
// $slide = $('.active').width();
// console.log($('.active').position().left);

// if ($(this).hasClass('next')) {
//   $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
//   } else if ($(this).hasClass('prev')) {
//     $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
//   }
  
//   $(this).removeClass('prev next');
//   $(this).siblings().removeClass('prev active next');
  
//   $(this).addClass('active');
//   $(this).prev().addClass('prev');
//   $(this).next().addClass('next');
// });


// // Keyboard nav
// $('html body').keydown(function(e) {
// if (e.keyCode == 37) { // left
//   $('.active').prev().trigger('click');
//   } else if (e.keyCode == 39) { // right
//     $('.active').next().trigger('click');
//   }
// });