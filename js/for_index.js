document.addEventListener("DOMContentLoaded", function () {
    const tocContainer = document.querySelector(".sticky_ul_1");
    const tocContainer2 = document.querySelector(".sticky_ul_2");
    const tocContainer3 = document.querySelector(".sticky_ul_3");
    const tocContainer4 = document.querySelector(".sticky_ul_4");
    const headers = document.querySelectorAll(".main_1 h2, .main_1 h3, .main_1 h4");
    const headers2 = document.querySelectorAll(".main_2 h2, .main_2 h3, .main_2 h4");
    const headers3 = document.querySelectorAll(".main_3 h2, .main_3 h3, .main_3 h4");
    const headers4 = document.querySelectorAll(".main_4 h2, .main_4 h3, .main_4 h4");
    const tocList1 = document.createElement("ul");
    const tocList2 = document.createElement("ul");
    const tocList3 = document.createElement("ul");
    const tocList4 = document.createElement("ul");
    let headerCnt = 0; // 고유 ID를 위한 카운터


    //sticky_ul_1
    headers.forEach((header) => {
      // 헤더 정보를 담을 li
      const tocItem = document.createElement("li");
  
      // 헤더에 고유한 ID를 만들어 추가
      const id = `header-${headerCnt++}`;
      header.id = id;
  
      // 링크를 만들어 li에 추가
      const anchor = document.createElement("a");
      anchor.href = `#${id}`;
      anchor.textContent = header.textContent;
      tocItem.appendChild(anchor);
  
      // 헤더 레벨에 맞게 클래스 추가
      tocItem.classList.add(`toc-${header.tagName.toLowerCase()}`);
      tocList1.appendChild(tocItem);
    });
    tocContainer.appendChild(tocList1);

    //sticky_ul_2
    headers2.forEach((header) => {
        // 헤더 정보를 담을 li
        const tocItem = document.createElement("li");
    
        // 헤더에 고유한 ID를 만들어 추가
        const id = `header-${headerCnt++}`;
        header.id = id;
    
        // 링크를 만들어 li에 추가
        const anchor = document.createElement("a");
        anchor.href = `#${id}`;
        anchor.textContent = header.textContent;
        tocItem.appendChild(anchor);
    
        // 헤더 레벨에 맞게 클래스 추가
        tocItem.classList.add(`toc-${header.tagName.toLowerCase()}`);
        tocList2.appendChild(tocItem);
    });
    tocContainer2.appendChild(tocList2);

    //sticky_ul_3
    headers3.forEach((header) => {
        // 헤더 정보를 담을 li
        const tocItem = document.createElement("li");
    
        // 헤더에 고유한 ID를 만들어 추가
        const id = `header-${headerCnt++}`;
        header.id = id;
    
        // 링크를 만들어 li에 추가
        const anchor = document.createElement("a");
        anchor.href = `#${id}`;
        anchor.textContent = header.textContent;
        tocItem.appendChild(anchor);
    
        // 헤더 레벨에 맞게 클래스 추가
        tocItem.classList.add(`toc-${header.tagName.toLowerCase()}`);
        tocList3.appendChild(tocItem);
    });
    tocContainer3.appendChild(tocList3);

    //sticky_ul_4
    headers4.forEach((header) => {
        // 헤더 정보를 담을 li
        const tocItem = document.createElement("li");
    
        // 헤더에 고유한 ID를 만들어 추가
        const id = `header-${headerCnt++}`;
        header.id = id;
    
        // 링크를 만들어 li에 추가
        const anchor = document.createElement("a");
        anchor.href = `#${id}`;
        anchor.textContent = header.textContent;
        tocItem.appendChild(anchor);
    
        // 헤더 레벨에 맞게 클래스 추가
        tocItem.classList.add(`toc-${header.tagName.toLowerCase()}`);
        tocList4.appendChild(tocItem);
    });
    tocContainer4.appendChild(tocList4);


        //함수
        const updateCurrentToc = () => {
            let fromTop = window.scrollY; // 현재 스크롤 위치
        
            // headers 배열에 포함된 각 헤더 요소에 대해 처리
            //headers1
            headers.forEach((header) => {
              // 해당 헤더 상단이 페이지 맨 위에서 얼마나 떨어져 있는지 확인
                const headerOffsetTop = document.getElementById(header.id).offsetTop;
        
              // 헤더 상단이 화면에 보이는 범위 안에 들어오면
                if (headerOffsetTop <= fromTop + 100) {
                // 현재 강조된 항목 제거
                const currentActive = tocList1.querySelector(".current-header");
                if (currentActive) {
                    currentActive.classList.remove("current-header");
                }
        
                // 현재 스크롤 위치에 해당하는 항목 강조
                const currentLink = tocList1.querySelector(`[href="#${header.id}"]`);
                if (currentLink) {
                    currentLink.classList.add("current-header");
                }
                }
            });

            //headers2
            headers2.forEach((header) => {
              // 해당 헤더 상단이 페이지 맨 위에서 얼마나 떨어져 있는지 확인
                const headerOffsetTop = document.getElementById(header.id).offsetTop;
        
              // 헤더 상단이 화면에 보이는 범위 안에 들어오면
                if (headerOffsetTop <= fromTop + 100) {
                // 현재 강조된 항목 제거
                const currentActive = tocList2.querySelector(".current-header");
                if (currentActive) {
                    currentActive.classList.remove("current-header");
                }
        
                // 현재 스크롤 위치에 해당하는 항목 강조
                const currentLink = tocList2.querySelector(`[href="#${header.id}"]`);
                if (currentLink) {
                    currentLink.classList.add("current-header");
                }
                }
            });

            //header3
            headers3.forEach((header) => {
              // 해당 헤더 상단이 페이지 맨 위에서 얼마나 떨어져 있는지 확인
                const headerOffsetTop = document.getElementById(header.id).offsetTop;
        
              // 헤더 상단이 화면에 보이는 범위 안에 들어오면
                if (headerOffsetTop <= fromTop + 100) {
                // 현재 강조된 항목 제거
                const currentActive = tocList3.querySelector(".current-header");
                if (currentActive) {
                    currentActive.classList.remove("current-header");
                }
        
                // 현재 스크롤 위치에 해당하는 항목 강조
                const currentLink = tocList3.querySelector(`[href="#${header.id}"]`);
                if (currentLink) {
                    currentLink.classList.add("current-header");
                }
                }
            });

            //header4
            headers4.forEach((header) => {
              // 해당 헤더 상단이 페이지 맨 위에서 얼마나 떨어져 있는지 확인
                const headerOffsetTop = document.getElementById(header.id).offsetTop;
        
              // 헤더 상단이 화면에 보이는 범위 안에 들어오면
                if (headerOffsetTop <= fromTop + 100) {
                // 현재 강조된 항목 제거
                const currentActive = tocList4.querySelector(".current-header");
                if (currentActive) {
                    currentActive.classList.remove("current-header");
                }
        
                // 현재 스크롤 위치에 해당하는 항목 강조
                const currentLink = tocList4.querySelector(`[href="#${header.id}"]`);
                if (currentLink) {
                    currentLink.classList.add("current-header");
                }
                }
            });
        };

        //윈도우 스크롤
        window.addEventListener("scroll", updateCurrentToc);
    
});

$(function(){
    let $main_nav = $('#main_nav a');
    let $curtain = $('#curtain');
    let $main_section = $('.main_section');
    let nav_index
    let main_index

    $curtain.addClass('curtain_call')

    function showtime(i) {
        $main_section.removeClass('on');
        $main_section.eq(i).addClass('on');
    }

    $main_nav.click(function(e) {
        e.preventDefault();
        let $this = $(this);
        nav_index = $this.parent('li').index();
        if($this.hasClass('on')){
            return;
        }else{
            $curtain.addClass('curtain_call_reset');
            console.log(nav_index);
            setTimeout(function() {
                $main_nav.removeClass('on');
                $this.addClass('on');
                showtime(nav_index);
                (function(){
                    $curtain.removeClass('curtain_call_reset')
                })();
            }, 1500);
        }
        })
    
    let $small_img = $('.direction-swiper');
    $small_img.each(function() {
        let small_img = $(this);
        let $small_img_a = small_img.find('a');
        for(i = 0; i < $small_img_a.length; i++){
            $small_img_a.eq(i).click(function(e){
                e.preventDefault();
                let ph = $(this).parents('.direction-swiper').prev().find('.mainGalleryImg');
                //let ph = $('.mainPageGallery > img')[0];
                let aTag = $(this).attr('href');
                ph.attr({'src' : aTag});
            })
        }
    })

})