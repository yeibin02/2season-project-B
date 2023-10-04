$(document).ready(function () {
  // 스크롤 이벤트 리스너를 추가합니다.
  $(window).scroll(function () {
    // 스크롤된 거리를 가져옵니다.
    var scrollDistance = $(window).scrollTop();

    // ".pk-buy-box" 요소의 위치를 업데이트합니다.
    $(".pk-buy-box").css("top", scrollDistance + "px");
  });

  var menuVisible = false; // 메뉴바의 현재 표시 상태를 저장합니다.

  $(".pk-buy-btn2").click(function () {
    // 메뉴바의 표시 상태를 토글합니다.
    menuVisible = !menuVisible;

    // 표시 상태에 따라 메뉴바를 보이거나 숨깁니다.
    if (menuVisible) {
      $(".pk-menu-bar").slideDown(); // 메뉴바를 보이게 합니다.
      $(this).css("border-radius", "10px 10px 0 0");
    } else {
      $(this).css("border-radius", "10px");
      $(".pk-menu-bar").slideUp(); // 메뉴바를 숨깁니다.
    }
  });
});
