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

    // 버튼의 왼쪽 아래와 오른쪽 아래 모서리를 직각으로 만듭니다.
    if (menuVisible) {
      $(this).css("border-radius", "10px 10px 0 0");
      $(".pk-menu-bar-box").css("display", "block"); // 메뉴바를 보이게 합니다.
    } else {
      $(this).css("border-radius", "10px");
      $(".pk-menu-bar-box").css("display", "none"); // 메뉴바를 숨깁니다.
    }
  });

  var totleBuy = document.querySelector(".pk-totle-buy-btn");

  totleBuy.addEventListener("click", function(){
    
  })
});
