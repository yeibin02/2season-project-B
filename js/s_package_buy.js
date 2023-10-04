$(document).ready(function () {
  // 스크롤 이벤트 리스너를 추가합니다.
  $(window).scroll(function () {
      // 스크롤된 거리를 가져옵니다.
      var scrollDistance = $(window).scrollTop();

      // ".pk-buy-box" 요소의 위치를 업데이트합니다.
      $(".pk-buy-box").css("top", scrollDistance + "px");
  });
});