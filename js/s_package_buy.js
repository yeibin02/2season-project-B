$(document).ready(function () {
 // 스크롤 이벤트 리스너를 추가합니다.
window.addEventListener("scroll", function () {
  // 스크롤된 거리를 가져옵니다.
  var scrollDistance = window.scrollY;

  // ".pk-buy-box" 요소의 위치를 업데이트합니다.
  var pkBuyBox = document.querySelector(".pk-buy-box");
  pkBuyBox.style.top = scrollDistance + "px";
});

var menuVisible = false; // 메뉴바의 현재 표시 상태를 저장합니다.

document.querySelector(".pk-buy-btn2").addEventListener("click", function () {
  // 메뉴바의 표시 상태를 토글합니다.
  menuVisible = !menuVisible;

  // 표시 상태에 따라 메뉴바를 보이거나 숨깁니다.
  var pkMenuBar = document.querySelector(".pk-menu-bar-box");
  if (menuVisible) {
    pkMenuBar.style.display = "block"; // 메뉴바를 보이게 합니다.
    pkMenuBar.style.borderRadius = "0 0 10px 10px"
    this.style.borderRadius = "10px 10px 0 0";
  } else {
    this.style.borderRadius = "10px";
    pkMenuBar.style.display = "none"; // 메뉴바를 숨깁니다.
  }
});

});
