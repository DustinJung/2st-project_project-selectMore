

$(document).ready(function(){
    let spinner = $('.pre-loader');
    function spit() {
        spinner.css({'rotate' : '+=30deg'});
    }
    spit();
    let gang = setInterval(spit, 500);
    setTimeout(removeLoader, 1000);
    function removeLoader() {
        $('.pre-loader').hide();
        $('.custom-loader-wrapper').fadeOut(500);
        $('body').addClass('loaded')
        clearInterval(gang);
    }

    /*$(window).resize(function(){document.location.reload();})
    // 리사이즈 끝나고 0.4초마다 리셋
    var delay = 400;
    var timer = null; 
    let lastWidth = window.innerWidth;
    $(window).on('resize', function(){
        if(window.innerWidth != lastWidth){
            clearTimeout(timer);
            timer = setTimeout(function(){
            document.location.reload();
            }, delay);
        };
        lastWidth = window.innerWidth;
    });*/

    var cachedWidth = $(window).width();
    $(window).resize(function(){
        var newWidth = $(window).width();
        if(newWidth !== cachedWidth){
        //새로고침 코드================
        var delay = 300;//resize 종료 후 0.3초마다 새로 고침
        var re_timer = null;
        $(window).on('resize', function(){
            clearTimeout(re_timer);
            re_timer = setTimeout(function(){
            document.location.reload();
            }, delay);
        });
				//===================
            cachedWidth = newWidth;
        }
    });



    var numb1 = "1"
    var numb2 = "1"
    var numb3 = "1"
    var numb4 = "1"


    $('.p_btn1').click(function(){
        numb1++;
        if(numb1>10){numb1=0;}
        update1();
    });
    $('.m_btn1').click(function(){
        numb1--;
        if(numb1<1){numb1=10;}
        update1();
    })
    function update1(){
        $('#quantity_1').val(numb1);
    }

    $('.p_btn2').click(function(){
        numb2++;
        if(numb2>10){numb2=0;}
        update2();
    });
    $('.m_btn2').click(function(){
        numb2--;
        if(numb2<1){numb2=10;}
        update2();
    })
    function update2(){
        $('#quantity_2').val(numb2);
    }

    $('.p_btn3').click(function(){
        numb3++;
        if(numb3>10){numb3=0;}
        update3();
    });
    $('.m_btn3').click(function(){
        numb3--;
        if(numb3<1){numb3=10;}
        update3();
    })
    function update3(){
        $('#quantity_3').val(numb3);
    }

    $('.p_btn4').click(function(){
        numb4++;
        if(numb4>10){numb4=0;}
        update4();
    });
    $('.m_btn4').click(function(){
        numb4--;
        if(numb4<1){numb4=10;}
        update4();
    })
    function update4(){
        $('#quantity_4').val(numb4);
    }
    //메인페이지의 뉴 어라이벌 상품 판매 스크립트

    // 검색창 스크롤 비활성화 사전 작업
    $('.search_modal').hide();
    let modalHide=$('.search_modal').show()
    let modalHide2=$('.search_modal').hide()
    function scrollDisable(){ // body 스크롤 비활성화
        $('body').addClass('scroll-disable').on('scroll touchmove mousewheel');
    };
    function scrollAble(){ // body 스크롤 활성화
        $('body').removeClass('scroll-disable').off('scroll touchmove mousewheel');
    };
    // 검색창 스크롤 비활성화 사전 작업 완료

        //상단 네비게이션의 서치 버튼을 클릭하면 모달창이 나오게 하는 스크립트  
        $('.sticky_search_btn').stop().click(function(){
            $('.search_modal').fadeIn(300).addClass('on');
            $('#modal_search').focus();
            if(modalHide){
                scrollDisable();
                $('#sticky_header').css({"background":"white"})
            }else{
                scrollAble();
                $('#sticky_header').css({"background":"#f8f1f4"})
            };
            //모달창 안의 input에 autofocus를 맞추게 하는 스크립트
            //위에서 정의한 스크롤을 막는 스크립트를 실행한 것. 서치모달이 쇼 상태면 스크롤을 막고, css를 실행, 아니라면 헤제
        });

        $('.modal_xbtn').stop().click(function(){
            scrollAble();
            $('.search_modal').fadeOut().removeClass('on');   
            if(modalHide2){
                scrollAble();
            }else{
                scrollDisable();
            };
        });
    

    //네비게이션에 마우스 허버하면 모달 뜨게하는 스크립트
        $('.mega_menu').hide();
        $('.sub_nav li').mouseover(function(){
        $(this).children('.mega_menu').stop().fadeIn(0);
        });
        $('.sub_nav li').mouseleave(function(){
        $(this).children('.mega_menu').stop().fadeOut(0);
        });
    //네비게이션에 마우스 허버하면 모달 뜨게하는 스크립트 종료
    
    
    


    navHeight = $('#sticky_header').innerHeight();
    mobile_a = $('.mobile_header_a').innerHeight();
    $(window).stop().scroll(function(){
        if(window.innerWidth > 542){
            var rollIn = $(this).scrollTop() >= navHeight;
            

            if(rollIn){
                
                if(window.innerWidth > 1000){
                    $('#sticky_header').css({"background":"rgb(248 241 244 / 80%)"}); /*원래 트랜스페어*/
                } else{
                    $('#sticky_header').css({"background":"rgb(248 241 244 / 80%)"}); //여기 white였음
                }
                
                $('.gnb>li>a>span').hide();
                $('#sticky_header').mouseenter(function(){
                    if(window.innerWidth > 1000){
                        $(this).addClass("hover_color");
                    }
                    
                })
                $('#sticky_header').mouseleave(function(){
                    if(window.innerWidth > 1000){
                        $(this).removeClass("hover_color")
                    }
                    
                }) 
                
            }else{
                /*if($bodyWidth < $limitSize)return false;*/
                if(window.innerWidth > 1119){
                    $('.gnb>li>a>span').show();
                }
                if(window.innerWidth < 1001){
                    $('#sticky_header').css({"background":"transparent"});
                } 
                
               
            }
        } else{
            var rollIng = $(this).scrollTop() >= mobile_a

            if(rollIng){
                $('#real_mobile_header').addClass("mobile_header_add_class")
            } else{
                $('#real_mobile_header').removeClass("mobile_header_add_class")
            }
        }
            
    });


    $('.clothes_contents').hide();
    $('.main_btn_wrapper2').hide();

        $('.tab_btn2').stop().click(function(){
            $('.clothes_contents').fadeIn(400);
            $('.main_btn_wrapper2').show();
            $('.cosmetic_contents').hide();
            $('.cosmetic_hide').hide();
            $('.main_btn_wrapper1').hide();
            $(this).css("background","#fce9db");
            $(this).css("color","#ce0e2d");
            $('.tab_btn1').css("background","#ce0e2d")
            $('.tab_btn1').css("color","#fce9db")
            
            
            
        });

    $('.tab_btn1').stop().click(function(){
        $('.tab_btn1').css({"background" : "#fce9db;"});
        $('.cosmetic_contents').fadeIn(400);
        $('.main_btn_wrapper1').show();
        $('.clothes_contents').hide();
        $('.clothes_contents').hide();
        $('.main_btn_wrapper2').hide();
        $('.clothes_hide').hide();
        $(this).css("background","#fce9db");
        $(this).css("color","#ce0e2d");
        $('.tab_btn2').css("background","#ce0e2d")
        $('.tab_btn2').css("color","#fce9db")
    });

    




    $('.cosmetic_hide').hide();
    $('.clothes_hide').hide();

    $('.main_btn_wrapper1').stop().click(function(){
        $('.cosmetic_hide').fadeIn('1000');
        $('.main_btn_wrapper1').hide();
    });

    $('.main_btn_wrapper2').stop().click(function(){
        $('.clothes_hide').fadeIn('1000');
        $('.main_btn_wrapper2').hide();
    });
 


    //var $bannNum=0; // 배너 개수
     // 배너 width

/*
    $('.banner_btn_next').click(function slide(){   
        if($bannNum >= 4)return false;
        $bannNum++;
        real_banner=$('.real_banner').width();
        $('.real_banner_500').animate({'left' : -real_banner*$bannNum},400);
});

    $('.banner_btn_prev').click(function slide(){
        if($bannNum <= 0)return false; 
        $bannNum--;   
        real_banner=$('.real_banner').width();
        $('.real_banner_500').animate({'left' : -real_banner*$bannNum},400);
    });
*/



    //var $bannNum1=0; // 배너 개수
    // 배너 width


/*
   $('.new_btn_next').stop().click(function slide(){   
       if($bannNum1 >= 3)return false;
       $bannNum1++;
       real_banner=$('.new_arrival_100').width();
       $('.new_arrival_400').animate({'left' : -real_banner*$bannNum1},300);
       console.log($bannNum1);
       console.log(-real_banner*$bannNum1);   
});

   $('.new_btn_prev').stop().click(function slide(){
       if($bannNum1 <= 0)return false; 
       $bannNum1--;   
       real_banner=$('.new_arrival_100').width();
       $('.new_arrival_400').animate({'left' : -real_banner*$bannNum1},300);
       console.log($bannNum1);
       console.log(-real_banner*$bannNum1);   
   });
*/

   if(window.innerWidth > 1561){
   let $bannNum2=0;
   $('.modal_btn_next').stop().click(function slide(){
    if($bannNum2 >= 9)return false;
    $bannNum2++;
    bann_1000=$('.height300').width();
    $('.under_real_2000').animate({'left' : -bann_1000*$bannNum2},150);
   });

   $('.modal_btn_prev').stop().click(function slide(){
    if($bannNum2 <= 0)return false;
    $bannNum2--;
    bann_1000=$('.height300').width();
    $('.under_real_2000').animate({'left' : -bann_1000*$bannNum2},150);
   });
    } else if(window.innerWidth < 1562 && window.innerWidth > 1119){
        let $bannNum2=0;
        $('.modal_btn_next').stop().click(function slide(){
         if($bannNum2 >= 9)return false;
         $bannNum2++;
         bann_1000=200;
         $('.under_real_2000').animate({'left' : -bann_1000*$bannNum2},150);
        });
     
        $('.modal_btn_prev').stop().click(function slide(){
         if($bannNum2 <= 0)return false;
         $bannNum2--;
         bann_1000=200;
         $('.under_real_2000').animate({'left' : -bann_1000*$bannNum2},150);
        });
    } else if(window.innerWidth < 1200 && window.innerWidth > 542){
        let $bannNum2=0;
        $('.modal_btn_next').stop().click(function slide(){
         if($bannNum2 >= 9)return false;
         $bannNum2++;
         bann_1000=220
         $('.under_real_2000').animate({'left' : -bann_1000*$bannNum2},150);
        });
     
        $('.modal_btn_prev').stop().click(function slide(){
         if($bannNum2 <= 0)return false;
         $bannNum2--;
         bann_1000=220
         $('.under_real_2000').animate({'left' : -bann_1000*$bannNum2},150);
        });
    } else {
        let $bannNum2=0;
        $('.modal_btn_next').stop().click(function slide(){
         if($bannNum2 >= 9)return false;
         $bannNum2++;
         bann_1000= 180;
         $('.under_real_2000').animate({'left' : -bann_1000*$bannNum2},150);
        });
     
        $('.modal_btn_prev').stop().click(function slide(){
         if($bannNum2 <= 0)return false;
         $bannNum2--;
         bann_1000= 180;
         $('.under_real_2000').animate({'left' : -bann_1000*$bannNum2},150);
        });
         }


$('.product_animate').hide();
$(".product_click").click(function(e){
    e.preventDefault();
    $(this).next('.product_animate').stop().toggle(100 , function(){
        $(this).animate({left : "0"}, 100);
    })
});
$(".product_back").click(function(){
    $(this).parent('.product_animate').stop().animate({left:"100%"}, 200 ,function(){
        $(this).toggle(10)
    })
});






$(document).ready(function() {
    // 클래스가 "scroll_on"인 모든 요소를 선택합니다.
    const $counters = $(".scroll_on");
    
    // 노출 비율(%)과 애니메이션 반복 여부(true/false)를 설정합니다.
    const exposurePercentage = 40; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
    const loop = false; // 애니메이션 반복 여부를 설정합니다. (true로 설정할 경우, 요소가 화면에서 사라질 때 다시 숨겨집니다.)

    // 윈도우의 스크롤 이벤트를 모니터링합니다.
    $(window).on('scroll', function() {
        // 각 "scroll_on" 클래스를 가진 요소에 대해 반복합니다.
        $counters.each(function() {
            const $el = $(this);
    
            // 요소의 위치 정보를 가져옵니다.
            const rect = $el[0].getBoundingClientRect();
            const winHeight = window.innerHeight; // 현재 브라우저 창의 높이
            const contentHeight = rect.bottom - rect.top; // 요소의 높이
            
            // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
            if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
                $el.addClass('active');
            }
            // 요소가 화면에서 완전히 사라졌을 때 처리합니다.
            if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
                $el.removeClass('active');
            }
        });
    }).scroll();
});



$('.mobile_header_menu').click(function(){
    
    $('.mobile_menu_modal').stop().toggleClass('active')
    $('.mobile_menu_modal_bonche').stop().toggleClass('activeh , point');
    $('.mobile_header_menu_svg').stop().toggleClass('clicked')
    var isOpen = $('.mobile_menu_modal').hasClass('active');
    if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
});

/*$('.shop_menu_btn').each(function(){
    $(this).click(function(){
        $('.shop_menu_product_list_wrapper').stop().toggleClass('activex')
    })
}) */


$('.shop_menu_btn').click(function(e){
    e.preventDefault();
    $(this).next('.shop_menu_product_list_wrapper').stop().toggleClass('activex')
    $(this).children('.mobile_shop_caret_down').stop().toggleClass('clicked')
});


if(window.innerWidth < 1200){
    var lastScrollTop = 0,
    delta = 15;

    $(window).scroll(function (event) {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop && lastScrollTop > 0) {
        $("#mobile_bottom_fix , #real_mobile_header").addClass("scrollhide");
    } else {
        $("#mobile_bottom_fix , #real_mobile_header").removeClass("scrollhide");
    }

    lastScrollTop = st;
    });
};


if(window.innerWidth < 1200){
    $('.sort').click(function(e){
        e.preventDefault();
        $(this).parents('.sort_grid').next().next().addClass('active')
        $(this).parents('.sort_grid').next().next().children().children('.sort_modal_trans').addClass('active')
    })
    $('.sort_modal').click(function(e){
        e.preventDefault();
        $(this).parent().removeClass('active')
        $(this).children().removeClass('active')
    })
} else{
    $('.sort').click(function(e){
        e.preventDefault();
        $(this).parents('.product_sort').next().addClass('active')
        $(this).parents('.product_sort').next().children().children('.sort_modal_trans').addClass('active')
    })

    /*$('html').click(function(e){
        e.preventDefault();
        $(this).find('.sort_modal_wrapper').removeClass('active')
        $(this).find('.sort_modal_trans').removeClass('active')
    }) */

    $('html').mouseup(function (e) {
		var movewrap = $(".sort_modal_wrapper");
        var movewrap2 = $(".sort_modal_trans");
		if (!movewrap.is(e.target)&&movewrap.has(e.target).length === 0) {
			movewrap.removeClass('active');
            movewrap2.removeClass('active')

		}
	});
}

$('.sort_list li a').click(function(e){
    e.preventDefault();
    $('.sort_list li a').removeClass('on')
    $('.sort').removeClass('on')
    $(this).addClass('on')
    var sort1 = $('.sort_list_1').hasClass('on');
    var sort2 = $('.sort_list_2').hasClass('on');
    var sort3 = $('.sort_list_3').hasClass('on');
    var sort4 = $('.sort_list_4').hasClass('on');
    if (sort1){
        $('.sort').removeClass('on')
        $('.sort_1').addClass('on')
        $('.product_selling_list').removeClass('on')
        $('.selling_list_1').addClass('on')
    } else if(sort2){
        $('.sort').removeClass('on')
        $('.sort_2').addClass('on')
        $('.product_selling_list').removeClass('on')
        $('.selling_list_2').addClass('on')
    } else if(sort3){
        $('.sort').removeClass('on')
        $('.sort_3').addClass('on')
        $('.product_selling_list').removeClass('on')
        $('.selling_list_3').addClass('on')
    } else if(sort4){
        $('.sort').removeClass('on')
        $('.sort_4').addClass('on')
        $('.product_selling_list').removeClass('on')
        $('.selling_list_4').addClass('on')
    }
    $('.sort_modal_trans').removeClass('active')
});

$('.brand_gwan h3').click(function(e){
    e.preventDefault();
    $('.brand_gwan h3').removeClass('on');
    $('.brand_gwan_swiper').removeClass('on');
    $(this).addClass('on');
    let h3_1 = $('.h3_1').hasClass('on');
    let h3_2 = $('.h3_2').hasClass('on');
    if(h3_1){
        $('.gwan_swiper_1').addClass('on')
    }else if(h3_2){
        $('.gwan_swiper_2').addClass('on')
    }
    
})

$('.brand_list li').click(function(e){
    e.preventDefault();
    $('.product_selling_ul li').addClass('off');
    //$('.product_selling_ul li').addClass('off')
    if($(this).hasClass('brand_espoir')){
        $('.brand_list_span div div.espoir').addClass('on');
    } else if($(this).hasClass('brand_kylie')){
        $('.brand_list_span div div.kylie').addClass('on');
    } else if($(this).hasClass('brand_amuse')){
        $('.brand_list_span div div.amuse').addClass('on');
    } else if($(this).hasClass('brand_3CE')){
        $('.brand_list_span div div.3CE').addClass('on');
    } else if($(this).hasClass('brand_mablin')){
        $('.brand_list_span div div.mablin').addClass('on');
    } else if($(this).hasClass('brand_keep_in_touch')){
        $('.brand_list_span div div.keep_in_touch').addClass('on');
    } else if($(this).hasClass('brand_hera')){
        $('.brand_list_span div div.hera').addClass('on');
    } else if($(this).hasClass('brand_wakemake')){
        $('.brand_list_span div div.wakemake').addClass('on');
    } else if($(this).hasClass('brand_alternative')){
        $('.brand_list_span div div.alternative').addClass('on');
    } else if($(this).hasClass('brand_the_same')){
        $('.brand_list_span div div.the_same').addClass('on');
    } else if($(this).hasClass('brand_lily_by_red')){
        $('.brand_list_span div div.lily_by_red').addClass('on');
    } else if($(this).hasClass('brand_romand')){
        $('.brand_list_span div div.romand').addClass('on');
    } else if($(this).hasClass('brand_dayzik')){
        $('.brand_list_span div div.dayzik').addClass('on');
    } else if($(this).hasClass('brand_aprilskin')){
        $('.brand_list_span div div.aprilskin').addClass('on');
    } else if($(this).hasClass('brand_vanilaco')){
        $('.brand_list_span div div.vanilaco').addClass('on');
    } else if($(this).hasClass('brand_peripera')){
        $('.brand_list_span div div.peripera').addClass('on');
    } else if($(this).hasClass('brand_atid')){
        $('.brand_list_span div div.atid').addClass('on');
    } else if($(this).hasClass('brand_luna')){
        $('.brand_list_span div div.luna').addClass('on');
    } else if($(this).hasClass('brand_yeonjak')){
        $('.brand_list_span div div.yeonjak').addClass('on');
    } else if($(this).hasClass('brand_benefit')){
        $('.brand_list_span div div.benefit').addClass('on');
    } else if($(this).hasClass('brand_2cool4school')){
        $('.brand_list_span div div.2cool4school').addClass('on');
    } else if($(this).hasClass('brand_melano')){
        $('.brand_list_span div div.melano').addClass('on');
    } else if($(this).hasClass('brand_nubody')){
        $('.brand_list_span div div.nubody').addClass('on');
    } else if($(this).hasClass('brand_roundlab')){
        $('.brand_list_span div div.roundlab').addClass('on');
    } else if($(this).hasClass('brand_doctorg')){
        $('.brand_list_span div div.doctorg').addClass('on');
    } else if($(this).hasClass('brand_uriage')){
        $('.brand_list_span div div.uriage').addClass('on');
    } else if($(this).hasClass('brand_maneyo')){
        $('.brand_list_span div div.maneyo').addClass('on');
    } else if($(this).hasClass('brand_aran')){
        $('.brand_list_span div div.aran').addClass('on');
    } else if($(this).hasClass('brand_ggompanyo')){
        $('.brand_list_span div div.ggompanyo').addClass('on');
    } else if($(this).hasClass('brand_lolalola')){
        $('.brand_list_span div div.lolalola').addClass('on');
    } else if($(this).hasClass('brand_mlb')){
        $('.brand_list_span div div.mlb').addClass('on');
    } else if($(this).hasClass('brand_so2r')){
        $('.brand_list_span div div.so2r').addClass('on');
    } else if($(this).hasClass('brand_nonlocal')){
        $('.brand_list_span div div.nonlocal').addClass('on');
    } else if($(this).hasClass('brand_biterselz')){
        $('.brand_list_span div div.nonlocal').addClass('on');
    } else if($(this).hasClass('brand_badblood')){
        $('.brand_list_span div div.badblood').addClass('on');
    } else if($(this).hasClass('brand_nordisk')){
        $('.brand_list_span div div.nordisk').addClass('on');
    } else if($(this).hasClass('brand_ocler')){
        $('.brand_list_span div div.ocler').addClass('on');
    } else if($(this).hasClass('brand_viewlab')){
        $('.brand_list_span div div.viowlab').addClass('on');
    } else if($(this).hasClass('brand_kelvin')){
        $('.brand_list_span div div.kelvin').addClass('on');
    }
    
    
    brand_search();
})

$('.brand_list_span div div').click(function(e){
    e.preventDefault();
    $(this).removeClass('on');
    if($(this).hasClass('espoir')){
        $('.product_selling_ul li.espoir').addClass('off');
    }
    if($(this).hasClass('kylie')){
        $('.product_selling_ul li.kylie').addClass('off');
    }
    if($(this).hasClass('amuse')){
        $('.product_selling_ul li.amuse').addClass('off');
    }
    if($(this).hasClass('3CE')){
        $('.product_selling_ul li.3CE').addClass('off');
    }
    if($(this).hasClass('mablin')){
        $('.product_selling_ul li.mablin').addClass('off');
    } 
    if($(this).hasClass('keep_in_touch')){
        $('.product_selling_ul li.keep_in_touch').addClass('off');
    } 
    if($(this).hasClass('hera')){
        $('.product_selling_ul li.hera').addClass('off');
    } 
    if($(this).hasClass('wakemake')){
        $('.product_selling_ul li.wakemake').addClass('off');
    } 
    if($(this).hasClass('alternative')){
        $('.product_selling_ul li.alternative').addClass('off');
    } 
    if($(this).hasClass('the_same')){
        $('.product_selling_ul li.the_same').addClass('off');
    } 
    if($(this).hasClass('lily_by_red')){
        $('.product_selling_ul li.lily_by_red').addClass('off');
    } 
    if($(this).hasClass('romand')){
        $('.product_selling_ul li.romand').addClass('off');
    } 
    if($(this).hasClass('dayzik')){
        $('.product_selling_ul li.dayzik').addClass('off');
    } 
    if($(this).hasClass('aprilskin')){
        $('.product_selling_ul li.aprilskin').addClass('off');
    } 
    if($(this).hasClass('vanilaco')){
        $('.product_selling_ul li.vanilaco').addClass('off');
    }
    if($(this).hasClass('peripera')){
        $('.product_selling_ul li.peripera').addClass('off');
    }  
    if($(this).hasClass('atid')){
        $('.product_selling_ul li.atid').addClass('off');
    }  
    if($(this).hasClass('luna')){
        $('.product_selling_ul li.luna').addClass('off');
    }  
    if($(this).hasClass('yeonjak')){
        $('.product_selling_ul li.yeonjak').addClass('off');
    }  
    if($(this).hasClass('benefit')){
        $('.product_selling_ul li.benefit').addClass('off');
    }  
    if($(this).hasClass('2cool4school')){
        $('.product_selling_ul li.2cool4school').addClass('off');
    }  
    if($(this).hasClass('melano')){
        $('.product_selling_ul li.melano').addClass('off');
    }  
    if($(this).hasClass('nubody')){
        $('.product_selling_ul li.nubody').addClass('off');
    }  
    if($(this).hasClass('roundlab')){
        $('.product_selling_ul li.roundlab').addClass('off');
    }  
    if($(this).hasClass('doctorg')){
        $('.product_selling_ul li.doctorg').addClass('off');
    }  
    if($(this).hasClass('uriage')){
        $('.product_selling_ul li.uriage').addClass('off');
    }  
    if($(this).hasClass('maneyo')){
        $('.product_selling_ul li.maneyo').addClass('off');
    }  
    if($(this).hasClass('aran')){
        $('.product_selling_ul li.aran').addClass('off');
    }  
    if($(this).hasClass('ggompanyo')){
        $('.product_selling_ul li.ggompanyo').addClass('off');
    }  
    if($(this).hasClass('lolalola')){
        $('.product_selling_ul li.lolalola').addClass('off');
    }  
    if($(this).hasClass('mlb')){
        $('.product_selling_ul li.mlb').addClass('off');
    }  
    if($(this).hasClass('so2r')){
        $('.product_selling_ul li.so2r').addClass('off');
    }  
    if($(this).hasClass('nonlocal')){
        $('.product_selling_ul li.nonlocal').addClass('off');
    }  
    if($(this).hasClass('biterselz')){
        $('.product_selling_ul li.biterselz').addClass('off');
    }  
    if($(this).hasClass('badblood')){
        $('.product_selling_ul li.badblood').addClass('off');
    }  
    if($(this).hasClass('nordisk')){
        $('.product_selling_ul li.nordisk').addClass('off');
    }  
    if($(this).hasClass('ocler')){
        $('.product_selling_ul li.ocler').addClass('off');
    } 
    if($(this).hasClass('viewlab')){
        $('.product_selling_ul li.viewlab').addClass('off');
    } 
    if($(this).hasClass('kelvin')){
        $('.product_selling_ul li.kelvin').addClass('off');
    } 

    brand_search2();
})

function brand_search(){
    $('.product_selling_ul li').addClass('off');
    if($('.brand_list_span div div.espoir').hasClass('on')){
        $('.product_selling_ul li.espoir').removeClass('off');
    }
    if($('.brand_list_span div div.kylie').hasClass('on')){
        $('.product_selling_ul li.kylie').removeClass('off');
    }
    if($('.brand_list_span div div.amuse').hasClass('on')){
        $('.product_selling_ul li.amuse').removeClass('off');
    }
    if($('.brand_list_span div div.3CE').hasClass('on')){
        $('.product_selling_ul li.3CE').removeClass('off');
    }
    if($('.brand_list_span div div.mablin').hasClass('on')){
        $('.product_selling_ul li.mablin').removeClass('off');
    }    
    if($('.brand_list_span div div.keep_in_touch').hasClass('on')){
        $('.product_selling_ul li.keep_in_touch').removeClass('off');
    }    
    if($('.brand_list_span div div.hera').hasClass('on')){
        $('.product_selling_ul li.hera').removeClass('off');
    }    
    if($('.brand_list_span div div.wakemake').hasClass('on')){
        $('.product_selling_ul li.wakemake').removeClass('off');
    } 
    if($('.brand_list_span div div.alternative').hasClass('on')){
        $('.product_selling_ul li.alternative').removeClass('off');
    } 
    if($('.brand_list_span div div.the_same').hasClass('on')){
        $('.product_selling_ul li.the_same').removeClass('off');
    } 
    if($('.brand_list_span div div.lily_by_red').hasClass('on')){
        $('.product_selling_ul li.lily_by_red').removeClass('off');
    } 
    if($('.brand_list_span div div.romand').hasClass('on')){
        $('.product_selling_ul li.romand').removeClass('off');
    } 
    if($('.brand_list_span div div.dayzik').hasClass('on')){
        $('.product_selling_ul li.dayzik').removeClass('off');
    } 
    if($('.brand_list_span div div.aprilskin').hasClass('on')){
        $('.product_selling_ul li.aprilskin').removeClass('off');
    } 
    if($('.brand_list_span div div.vanilaco').hasClass('on')){
        $('.product_selling_ul li.vanilaco').removeClass('off');
    } 
    if($('.brand_list_span div div.peripera').hasClass('on')){
        $('.product_selling_ul li.peripera').removeClass('off');
    } 
    if($('.brand_list_span div div.atid').hasClass('on')){
        $('.product_selling_ul li.atid').removeClass('off');
    } 
    if($('.brand_list_span div div.luna').hasClass('on')){
        $('.product_selling_ul li.luna').removeClass('off');
    } 
    if($('.brand_list_span div div.yeonjak').hasClass('on')){
        $('.product_selling_ul li.yeonjak').removeClass('off');
    } 
    if($('.brand_list_span div div.benefit').hasClass('on')){
        $('.product_selling_ul li.benefit').removeClass('off');
    } 
    if($('.brand_list_span div div.2cool4school').hasClass('on')){
        $('.product_selling_ul li.2cool4school').removeClass('off');
    } 
    if($('.brand_list_span div div.melano').hasClass('on')){
        $('.product_selling_ul li.melano').removeClass('off');
    } 
    if($('.brand_list_span div div.nubody').hasClass('on')){
        $('.product_selling_ul li.nubody').removeClass('off');
    } 
    if($('.brand_list_span div div.roundlab').hasClass('on')){
        $('.product_selling_ul li.roundlab').removeClass('off');
    } 
    if($('.brand_list_span div div.doctorg').hasClass('on')){
        $('.product_selling_ul li.doctorg').removeClass('off');
    } 
    if($('.brand_list_span div div.uriage').hasClass('on')){
        $('.product_selling_ul li.uriage').removeClass('off');
    } 
    if($('.brand_list_span div div.maneyo').hasClass('on')){
        $('.product_selling_ul li.maneyo').removeClass('off');
    } 
    if($('.brand_list_span div div.aran').hasClass('on')){
        $('.product_selling_ul li.aran').removeClass('off');
    } 
    if($('.brand_list_span div div.ggompanyo').hasClass('on')){
        $('.product_selling_ul li.ggompanyo').removeClass('off');
    } 
    if($('.brand_list_span div div.lolalola').hasClass('on')){
        $('.product_selling_ul li.lolalola').removeClass('off');
    } 
    if($('.brand_list_span div div.mlb').hasClass('on')){
        $('.product_selling_ul li.mlb').removeClass('off');
    } 
    if($('.brand_list_span div div.so2r').hasClass('on')){
        $('.product_selling_ul li.so2r').removeClass('off');
    } 
    if($('.brand_list_span div div.nonlocal').hasClass('on')){
        $('.product_selling_ul li.nonlocal').removeClass('off');
    } 
    if($('.brand_list_span div div.biterselz').hasClass('on')){
        $('.product_selling_ul li.biterselz').removeClass('off');
    } 
    if($('.brand_list_span div div.badblood').hasClass('on')){
        $('.product_selling_ul li.badblood').removeClass('off');
    } 
    if($('.brand_list_span div div.nordisk').hasClass('on')){
        $('.product_selling_ul li.nordisk').removeClass('off');
    } 
    if($('.brand_list_span div div.ocler').hasClass('on')){
        $('.product_selling_ul li.ocler').removeClass('off');
    } 
    if($('.brand_list_span div div.viewlab').hasClass('on')){
        $('.product_selling_ul li.viewlab').removeClass('off');
    } 
    if($('.brand_list_span div div.kelvin').hasClass('on')){
        $('.product_selling_ul li.kelvin').removeClass('off');
    } 
}

function brand_search2(){
    if(!$('.brand_list_span div div').is(".on")){
        $('.product_selling_ul li').removeClass('off')
    }
    //===false이거 $앞에 ! 붙이는거로 대체 가능
}

let $like = $('.like');

$like.each(function() {
    let $tg = $(this).parent();
    $tg.click(function(e) {
        e.preventDefault();
        let $tg = $(this).find('.like');
        console.log($tg[0]);
        if(!($tg.hasClass('like_on'))){
            $tg
                .stop()
                .addClass('like_on')
                .css({
                    'animation-name' : 'like',
                    'animation-duration' : '.3s'
                })
        }else{
            $tg
                .stop()
                .removeClass('like_on')
                .css({
                    'animation-name' : 'none'
                })
        }
    })
})


});
