
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 10){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu ').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});


var typed = new Typed(".typing", {
    strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-2", {
    strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});