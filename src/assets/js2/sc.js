// const navbar = document.querySelector('#nav')

// window.addEventListener('scroll', function(e) {
//   const lastPosition = window.scrollY
//   if (lastPosition > 50 ) {
//     navbar.classList.add('active')
//   } else if (navbar.classList.contains('active')) {
//     navbar.classList.remove('active')
//   } else {
//     navbar.classList.remove('active')
//   }
// })
///////////////////
// $(window).scroll(function(){
//   var scroll = $(window).scrollTop();
//   if(scroll < 300){
//       $('.fixed-top').css('background', 'transparent');
//   } else{
//       $('.fixed-top').css('background', 'rgba(23, 162, 184, 0.9)');
//   }
// });
////////////////
$(window).scroll(function(){
  if($(window).scrollTop()){
    $("nav").addClass("black");
  }
  else{
    $("nav").removeClass("black");
  }
})