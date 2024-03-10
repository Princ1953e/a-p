$(document).ready(function (){
    $(".dropdown").click(function(){
        $(this).next(".dropdown-menu").slideToggle("fast");
        $(this).next(".sub-dropdown").slideToggle("fast");
        $(this).addClass("active");

        $(this).parent("li").siblings('li').children(".dropdown-menu").slideUp("fast");
        $(this).parent("li").siblings('li').children(".sub-dropdown").slideUp("fast");
        $(this).parent("li").siblings('li').children(".dropdown").removeClass("active");
    })
    $(".search").click(function(){
        $(this).addClass("border-pink");
    })
    $(".hamburger-menu").click(function(){
        $(".slidebar").toggleClass("close");
        $(".main-iteam").toggleClass("close");
        $(".sidenav ul li a span").toggleClass("close");
        $(".slidebar-logo a span").toggleClass("close");
        $(".sidenav a").toggleClass("dropdown");
    })
})
