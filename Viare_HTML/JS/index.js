$(function () {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $(".gnb-scroll").fadeIn();
            $(".banner").css("margin-top", "60px"); // gnb-scroll 높이만큼 배너 밀어내기
        } else {
            $(".gnb-scroll").fadeOut();
            $(".banner").css("margin-top", "0"); // 원래 위치로 복귀
        }
    });
});