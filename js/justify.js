const swiper = new Swiper('.swiper', { 
  
    //슬라이드 갯수
    slidesPerView: 1,
    
    //슬라이드 간 간격
    spaceBetween: 10, 
    
    //슬라이드 효과
    effect: "creative",
    
    //반복여부
    loop: true,
    loopAdditionalSlides: 1,
    
    //무한으로
    infinite: true,
    
    //슬라이딩 속도
    speed: 900,
    
    //자동 슬라이드
    autoplay: {
      delay: 7000, //딜레이 
    },
  
    //페이지네이션
    pagination: {
      el: ".swiper01 .bullets",
      type: "bullets",
      //'bullets' | 'fraction' | 'progressbar' | 'custom'
    },
  
    //네비게이션
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    
    //반응형
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
    
  
  });