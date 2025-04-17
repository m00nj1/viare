

// ----------------------------------------- 스크롤시 탭 고정



$(function () {
  const tabTop = $(".detail-tab").offset().top;

  $(window).scroll(function () {
    if ($(this).scrollTop() >= tabTop) {
      $(".detail-tab").addClass("fixed-tab");
    } else {
      $(".detail-tab").removeClass("fixed-tab");
    }
  });
});



$(document).ready(function(){
  $('.detail-slide').slick({
    dots: true, 
    arrows: true, 
    prevArrow: '<button class="custom-prev-tr"><img src="./img/배너_왼_icon.svg" alt="이전"></button>',
    nextArrow: '<button class="custom-next-tr"><img src="./img/배너_오_icon.svg" alt="다음"></button>',
  });
});


// ----------------------------------------- 숫자 조절

let count = 1;
const number = document.getElementById("number");

function increase() {
  count++;
  number.innerText = count;
}

function decrease() {
  if (count > 1) {
    count--;
    number.innerText = count;
  }
}

// ----------------------------------------- 피씨 오른쪽 고정



$(function () {
  const $right = $(".pc-right");
  const top = $right.offset().top;
  const h = $right.outerHeight();
  const w = $right.outerWidth();
  const $footer = $("footer");

  $(window).on("scroll", function () {
    const s = $(this).scrollTop();
    const f = $footer.offset().top;

    if (s >= top && s + h < f) {
      $right.css({ position: "sticky", top: 0, right: 0, width: w });
    } else if (s + h >= f) {
      $right.css({ position: "absolute", top: f - h, right: 0, width: w });
    } else {
      $right.css({ position: "", top: "", right: "", width: "" });
    }
  });
});

