$(document).ready(function(){
    $(".nav__btn").click(function(){
        $(".nav__list").toggle();
        $(".nav__btn__icon").toggleClass("active");
    });
});