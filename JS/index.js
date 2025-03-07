
$(document).ready(function () {

// -----------------------------------------gnb 스크롤시 고정


$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".gnb-scroll").fadeIn();
      $(".banner").css("margin-top", "60px"); // gnb-scroll 높이만큼 배너 밀어내기
    } else {
      $(".gnb-scroll").fadeOut();
      $(".banner").css("margin-top", "0"); // 원래 위치로 복귀
    }
  });
});


// ----------------------------------------aos

AOS.init();

// -----------------------------------------메인 배너 플러그인



$(document).ready(function () {
  var slider = $(".banner-slider");

  // ✅ 슬라이더 초기화 (화살표 버튼 문제 해결)
  slider.slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 800,
    prevArrow: '<button class="custom-prev"><img src="./img/배너_왼_icon.svg" alt="이전"></button>',
    nextArrow: '<button class="custom-next"><img src="./img/배너_오_icon.svg" alt="다음"></button>',

  });

  // ✅ 슬라이드 변경 시 현재 슬라이드 번호 업데이트
  slider.on("init reInit afterChange", function (event, slick, currentSlide) {
    var current = (currentSlide ? currentSlide : 0) + 1;
    var total = slick.slideCount;
    $(".slick-slide-number").text(current + " / " + total);
  });

  // ✅ 슬라이드 로드 후 현재 슬라이드 번호 초기화
  slider.on("init", function (event, slick) {
    var totalSlides = slick.slideCount;
    $(".slick-slide-number").text("1 / " + totalSlides);
  });

  // ✅ [화살표 버튼 문제 해결] 슬라이더 로드 후 버튼이 정상 작동하도록 설정
  setTimeout(function () {
    slider.slick("setPosition");
  }, 100);



  // ✅ [재생/멈춤 기능 추가]

  let playBtn = $(".playbtn img");
  let isPlaying = true;

  $(".playbtn").click(function () {
    isPlaying = !isPlaying;
    slider.slick(isPlaying ? "slickPlay" : "slickPause");
    playBtn.attr("src", isPlaying ? "./img/stop_icon.svg" : "./img/play_icon.svg");
  });

});
// -----------------------------------------------------좋아요 버튼


$(".wh-like-icon, .like-icon").click(function () {
  let img = $(this).find("img");
  let srcMap = {
    "./img/좋아요비활성_wh_icon.svg": "./img/좋아요_wh_icon.svg",
    "./img/좋아요_wh_icon.svg": "./img/좋아요비활성_wh_icon.svg",
    "./img/좋아요비활성_color_icon.svg": "./img/좋아요_color_icon.svg",
    "./img/좋아요_color_icon.svg": "./img/좋아요비활성_color_icon.svg",
  };
  img.attr("src", srcMap[img.attr("src")] || img.attr("src"));
});


// -----------------------------------------트렌딩 배너 플러그인


var slider = $(".trending-slide");

  // ✅ 슬라이더 초기화 (도트 활성화)
  slider.slick({
    dots: true, // 도트 추가
    arrows: true, // 화살표 활성화
    autoplay: true,
    autoplaySpeed: 1500,
    fade: true,
    speed: 800,
    prevArrow: '<button class="custom-prev-tr"><img src="./img/배너_왼_icon.svg" alt="이전"></button>',
    nextArrow: '<button class="custom-next-tr"><img src="./img/배너_오_icon.svg" alt="다음"></button>',
  });
    // ✅ 도트와 멈춤 버튼을 감쌀 부모 컨테이너 생성
    $(".slick-dots").wrap('<div class="dots-container"></div>');

  // ✅ 멈춤 버튼을 도트 옆에 추가 (이미지 사용)
  $(".slick-dots").after('<button class="playbtn-tr"><img src="./img/stop_icon.svg" alt="멈춤"></button>');

  // ✅ 멈춤 버튼 기능 추가 (이미지 변경)
  let isPlaying = true;
  $(document).on("click", ".playbtn-tr", function () {
    isPlaying = !isPlaying;
    slider.slick(isPlaying ? "slickPlay" : "slickPause");

    // 버튼 이미지 변경 (멈춤 → 재생)
    $(this).html(isPlaying ? '<img src="./img/stop_icon.svg" alt="멈춤">' : '<img src="./img/play_icon.svg" alt="재생">');
  });
    // --------------------------------------------------------
  });