$(document).ready(function () {
  //   리뷰 클릭 시 모달창 띄우기
  $(".pk-review-click-btn").click(function () {
    // 모달 이미지 열기
    $("#modalImage").attr("src", "../images/package_review1-1.png");
    $("#modalImage1").attr("src", "../images/pk_review_main4.jpg");
    $("#PackagemyModal").css("display", "block").css("position", "fixed");
    $(".header").css("display", "none");
    //백그라운드 어둡게 하기
    $(".modal-overlay").css("display", "block");
  });

  // 모달 닫기 버튼
  $(".package-close").click(function () {
    $("#PackagemyModal").css("display", "none");
    $(".modal-overlay").css("display", "none");
    $(".header").css("display", "block");
  });
});