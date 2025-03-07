
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



// pc gnb 

$(function () {
  $(".pc-gnb-text li").hover(
      function () {  
          $(this).css({
              "font-weight": "500",
              "color":"var(--Black)"
          });
      },
      function () {  
          $(this).css({
              "font-weight": "400",
              "color":"var(--Gray-90)"
          });
      }
  );
});


$(function () {
  $(".pc-gnb-text li").hover(
      function () {  
          $(this).css({
              "font-size": "2.4rem",
          });
      },
      function () {  
          $(this).css({
              "font-size": "2.3rem",
          });
      }
  );
});


// aos

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
    prevArrow: $(".custom-prev"), // 기존 버튼을 그대로 사용
    nextArrow: $(".custom-next"),
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
  var playBtn = $(".playbtn img"); // 플레이 버튼 이미지
  var isPlaying = true; // 초기 상태: 자동 재생 중

  $(".playbtn").on("click", function () {
    if (isPlaying) {
      slider.slick("slickPause"); // 슬라이드 멈춤
      playBtn.attr("src", "./img/play_icon.svg"); // 아이콘 변경 (재생)
    } else {
      slider.slick("slickPlay"); // 슬라이드 재생
      playBtn.attr("src", "./img/stop_icon.svg"); // 아이콘 변경 (멈춤)
    }
    isPlaying = !isPlaying; // 상태 변경
  });
});
// --------------------------------------------------------

$(function () {
  $(".wh-like-icon").click(function () {
    let img = $(this).find("img");
    img.attr(
      "src",
      img.attr("src") === "./img/좋아요비활성_wh_icon.svg"
        ? "./img/좋아요_wh_icon.svg"
        : "./img/좋아요비활성_wh_icon.svg"
    );
  });
});

$(function () {
  $(".like-icon").click(function () {
    let img = $(this).find("img");
    img.attr(
      "src",
      img.attr("src") === "./img/좋아요비활성_color_icon.svg"
        ? "./img/좋아요_color_icon.svg"
        : "./img/좋아요비활성_color_icon.svg"
    );
  });
});

$(function () {
    $(".gift-bt").hover(
        function () { 
            $(".gift-bt").css("background-color", "var(--Crystal-Teal)")
                         .css("color", "var(--White)");
        },
        function () { 
            $(".gift-bt").css("background-color", "")
                         .css("color", "");
        }
    );
});


// -----------------------------------------트렌딩 배너 플러그인

$(document).ready(function () {
    $(".trending-slide").slick({
      dots: false,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
      speed: 800,
      prevArrow: $(".custom-prev"), // 기존 버튼을 그대로 사용
      nextArrow: $(".custom-next"),
    });})

    // --------------------------------------------------------
