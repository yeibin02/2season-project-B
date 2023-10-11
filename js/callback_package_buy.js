$(document).ready(function () {
  //로그인 되었을 때
  // pr-pk-buy2-btn 버튼이 클릭되었을 때의 이벤트 핸들러
  $(".pr-pk-buy2-btn").click(function () {
    alert("결제가 완료되었습니다.");
    location.href = "s_package.html";
  });
  $(".pk-totle-buy-btn").click(function () {
    alert("결제가 완료되었습니다.");
    location.href = "s_package.html";
  });
  //반응형
  $(".pk-totle-buy-btn2").click(function () {
    $(".pk-buy-box2").addClass("modal-open");
  });
  
  $(window).scroll(function () {
    // 스크롤된 높이
    var scrollHeight = $(window).scrollTop();

    // pk-totle-btn2가 보이게 하는 조건을 설정 (예시로 100px 스크롤 내린 경우)
    if (scrollHeight > 0) {
      $(".pk-totle-btn2").addClass("visible");
    } else {
      $(".pk-totle-btn2").removeClass("visible");
    }
  });
});