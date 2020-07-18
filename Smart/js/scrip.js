$(document).ready(function(){
  $(".menu-hambg").on('click',function(){
    $(this).toggleClass("active");
    $(this).find(".hambergerIcon").toggleClass("open");
    $(".menu-list").toggleClass("active");
  });
  $(".menu-list").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
});
})