$(document).ready(function(){
    $(".nav__btn").click(function(){
        $(".nav__list").toggle();
        $(".nav__btn__icon").toggleClass("active");
    });
    $(".section__post__btn").on("tap", function(){
        $(this).addClass("btn--touched");
    });
    $(".section__post__btn").on("click", function(){
        $(this).addClass("btn--touched");
    });
    $(".social__link").on("tap", function(){
        $(this).addClass("btn--touched");
    });
    $(".social__link").on("click", function(){
        $(this).addClass("btn--touched");
    });
});