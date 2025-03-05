
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




// aos

AOS.init();

// -----------------------------------------메인 배너 플러그인

$(document).ready(function () {
  $(".banner-slider").slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    speed: 800,
    prevArrow: $(".custom-prev"), // 기존 버튼을 그대로 사용
    nextArrow: $(".custom-next"),
  });

  // 슬라이드 변경 시 현재 슬라이드 번호 업데이트
  $(".banner-slider").on(
    "init reInit afterChange",
    function (event, slick, currentSlide) {
      var current = (currentSlide ? currentSlide : 0) + 1;
      var total = slick.slideCount;
      $(".slick-slide-number").text(current + " / " + total);
    }
  );

  // 초기 슬라이드 번호 설정
  var totalSlides = $(".banner-slider").slick("getSlick").slideCount;
  $(".slick-slide-number").text("1 / " + totalSlides);
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
