$(document).ready(function () {
  // .pk-buy-box 요소와 .premium-pk-buy 요소를 가져옵니다.
  var pkBuyBox = document.querySelector(".pk-buy-box");
  var premiumPkBuy = document.querySelector(".premium-pk-buy");

  // 스크롤 이벤트 리스너를 추가합니다.
  window.addEventListener("scroll", function () {
    // .pk-buy-box 요소가 .premium-pk-buy 내에서 움직일 수 있는 최대 거리를 계산합니다.
    var maxDistance = premiumPkBuy.clientHeight - pkBuyBox.clientHeight;

    // 스크롤된 거리를 가져옵니다.
    var scrollDistance = window.scrollY;

    // .pk-buy-box 요소의 위치를 업데이트합니다.
    // 스크롤 위치에 따라 이동하게 됩니다.
    if (scrollDistance >= maxDistance) {
      pkBuyBox.style.transform = "translateY(" + maxDistance + "px)";
    } else if (scrollDistance >= 0) {
      pkBuyBox.style.transform = "translateY(" + scrollDistance + "px)";
    }
  });

  var menuVisible = false; // 메뉴바의 현재 표시 상태를 저장합니다.

  //로그인 안 되었을 때
  // $(".pk-totle-buy-btn").click(function () {
  //   location.href = "login.html";
  // });
  // $(".pk-totle-btn button").click(function () {
  //   location.href = "login.html";
  // });

  //반응형
  $(".pk-totle-buy-btn2").click(function () {
    $(".pk-buy-box2").addClass("modal-open");
  });

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
  //
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
