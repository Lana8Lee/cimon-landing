$(document).ready(function(){
    $(".nav__btn").click(function(){
        $(".nav__list").slideToggle("slow");
        $(".nav__btn__icon").toggleClass("active");
    });
});