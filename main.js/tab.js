$(document).ready(function() {        
    // 키보드 tab 처리//
                $('.main_gnb>li .depth1').bind('focus', function () {        
                        $('.sub_gnb').slideDown('normal');
                        $('.gnb_box').slideDown('fast');
                });
                $('.main_gnb>li:last li:last').find('a').bind('blur', function () {        
                        $('.sub_gnb').slideUp('fast');
                        $('.gnb_box').slideUp('normal');
                });
    });