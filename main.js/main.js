// gnb 메뉴
$(document).ready(function(){
    $("#gnb").hover(function(){
        $(".sub_gnb").stop().fadeIn('slow');}
        ,
    function(){
        $(".sub_gnb").stop().fadeOut('fast');
    });
});

// // progressbar
// var p = 0;
// var pct = 0;
// function loading(){
// 	var prg = document.getElementById("progress");
// 	if(prg){
// 		p++;
// 		if(p >= 15){p = 0;}
// 		prg.style.backgroundPosition = p + "px 0px";
// 		pct++;
// 		if(pct >= 0){pct = -450;}
// 		prg.style.left = pct + "px";
// 	}
// }
// setInterval(loading,8.3);

// ticket_tab메뉴
$(document).ready(function(){
    $(".ticket_button>a").click(function(){
        let idx = $(this).index();
        console.log(idx);
        $('.ticket_button>a').removeClass("active"); 
        $(this).addClass('active'); 
        $(".ticket_tab").eq(idx).show().siblings(".ticket_tab").hide(); 
    });
});

// info_tab메뉴
$(document).ready(function(){
    $(".info_button>a").click(function(){
        let idx = $(this).index(); 
        console.log(idx);
        $('.info_button>a').removeClass("on");
        $(this).addClass('on');
        $(".tab").eq(idx).show().siblings(".tab").hide();   
    });
});

// award
$(document).ready(function(){

    $('.awards>ul').after($('.awards>ul').clone());
    let position=0;
    let movesize=310;
    let timeonoff; 

    timeonoff=setInterval(function(){
        position -= movesize;
    
        $(".awards").stop().animate({left:position},'fast',function(){
            if(position == -2170){
                $(".awards").css('left',0);
            position = 0;
            }
        });
    },2000);
    $(".btn").click(function(){
        clearInterval(timeonoff);

       let $target = $(event.target);
       if($target.is('.lft')){
           position -= movesize;
           $(".awards").stop().animate({'left':position},'fast',function(){
               if(position == -2170){
                   $(".awards").css('left',0);
                   position = 0;
               }
           });
       } 
       else{
           if(position == 0){
                $('.awards').css('left',-2170);
                position = -2170;
               }
       position += movesize;
       $('.awards').stop().animate({'left':position},'fast');
   }
   });
});

// company위로 올라가는 키위드
$(document).ready(function(){

    $('.korail_ct>img').after($('.korail_ct>img').clone());
    let position=0;
    let movesize=80; 
    let timeonoff;

    timeonoff=setInterval(function(){
        position -= movesize;
        $(".korail_ct").stop().animate({'top':position},'fast',function(){
            if(position == -640){
                $(".korail_ct").css('top',-80);
            position = -80;
            }
        });
    },2000); 
 });