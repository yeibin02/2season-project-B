window.addEventListener("load", function () {
  // 목표 날짜 및 시간 설정
  var targetDate = new Date("2023-10-13T23:59:59").getTime();

  // 1초마다 업데이트하는 함수
  var countdownInterval = setInterval(function () {
    // 현재 시간 가져오기
    var currentDate = new Date().getTime();

    // 목표 날짜와 현재 시간 사이의 차이 계산
    var timeLeft = targetDate - currentDate;

    // 남은 일, 시간, 분, 초 계산
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    // 시간, 분과 초 계산
    var hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // 시간, 분과 초를 두 자리로 표기
    var formattedHours = hours < 10 ? "0" + hours : hours;
    var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    // 카운트 다운을 표시하는 요소 찾기
    var countdownElement = document.getElementById("countdown");

    // 카운트 다운 업데이트
    countdownElement.innerHTML =
      days +
      "일 " +
      formattedHours +
      "시간 " +
      formattedMinutes +
      "분 " +
      formattedSeconds +
      "초";

    // 목표 시간에 도달하면 카운트 다운 중지
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      countdownElement.innerHTML = "마감되었습니다.";
    }
  }, 1000); // 1초마다 업데이트
});
