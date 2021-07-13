$(document).ready(function(){
    $("#gnb").hover(
    function(){
        $('.sub_gnb').stop().fadeIn('fast');
        $(".gnb_box").stop().slideDown();
    },
    function(){
        $('.sub_gnb').stop().fadeOut('fast');
        $(".gnb_box").stop().slideUp();
    });

});

$(document).ready(function(){  
    $(".top_btn").click(function(){
        $("html,body").stop().animate({"scrollTop":0},1400);
    });
    $(window).on("scroll",function(){
        let scroll=$(window).scrollTop();
        if(scroll>=400)
        { $(".top_btn").fadeIn('normal')}
        else{ $(".top_btn").fadeOut('normal');
            };
    });
});

// // footer_.familysite(위로올라가는 ver)
$(document).ready(function(){
    $('.select .arrow').toggle(
        function(){
            $('.select .family_site').fadeIn('fast');
            $('.select .arrow').css({'background-image' : "url(common/images/up.svg)"});

        }, function(){
            $('.select .family_site').fadeOut('fast');
            $('.select .arrow').css({'background-image': "url(common/images/down.svg)"});
        });
});
