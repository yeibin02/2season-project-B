window.addEventListener("load", function () {
  // URL에서 웨딩 홀 ID를 추출합니다.
  const urlParams = new URLSearchParams(window.location.search);
  const hallId = urlParams.get("id");

  // 상품 문의 양식을 제출할 때의 이벤트 핸들러를 설정합니다.
  const hallListInfo = document.getElementById("hall-list-info");

  hallListInfo.addEventListener("submit", function (e) {
    e.preventDefault(); // 기본 제출 동작을 막습니다.

    // 사용자가 입력한 데이터를 가져옵니다.
    const formData = new FormData(hallListInfo);

    // 양식을 초기화합니다.
    hallListInfo.reset();
  });

  // JSON 파일을 불러옵니다.
  fetch("hallInfoData.json")
    .then((response) => response.json())
    .then((data) => {
      // 불러온 데이터를 hallInfoData 배열에 저장합니다.
      const hallInfoData = data;

      // hallId에 해당하는 웨딩 홀 정보를 찾습니다.
      const hallInfo = hallInfoData.find((hall) => hall.id === hallId);

      if (hallInfo) {
        // 웨딩 홀 정보를 페이지에 표시합니다.
        const hallInfoElement = document.getElementById("hall-info");
        hallInfoElement.innerHTML = `
        <div class = "hall-info-imgbox">
        <img src="${hallInfo.imageSrc}" alt="웨딩홀 이미지">
        </div>
        <div class ="hall-info-box1">
                
                <div class ="hall-info-text1"><p>웨딩홀</p>
                <p>ㅣ${hallInfo.location}</p>
                </div>
                <h2>${hallInfo.name}</h2>
                <p class="intro">${hallInfo.introDuction}</p>
                <p><i class="fa-solid fa-hotel" style="color: #0f0f0f;"></i><em>홀 종류:</em> ${hallInfo.hallType}</p>
                <p><i class="fa-solid fa-utensils" style="color: #0f0f0f;"></i><em>메뉴 종류:</em> ${hallInfo.menuType}</p>
                <p><i class="fa-solid fa-receipt" style="color: #0f0f0f;"></i><em>식사 비용:</em> ${hallInfo.mealCost}</p>
                <p><i class="fa-solid fa-people-group" style="color: #0f0f0f;"></i><em>보증 인원:</em> ${hallInfo.capacity}</p>
                <button class="hall-info-wdbtn">예약 하기</button>
                </div>
                
            `;
      } else {
        // hallId에 해당하는 웨딩 홀 정보를 찾지 못한 경우 처리
        const hallInfoElement = document.getElementById("hall-info");
        hallInfoElement.innerHTML =
          "<p>해당 웨딩 홀 정보를 찾을 수 없습니다.</p>";
      }
    })
    .catch((error) => {
      console.error("JSON 파일을 불러오는 중 오류가 발생했습니다.", error);
    });
  //   예약 하기 클릭 시 모달창 띄우기
  $(".hall-calendar-btn").click(function () {
    $(".header").css("display", "none");
    //백그라운드 어둡게 하기
    $(".modal-overlay").css("display", "block");
    $(".hall-info-modal").css("display", "block");
  });
  // 예약하기 X누를 시 모달창 내리기
  $(".hall-close-btn").click(function () {
    $(".header").css("display", "block");
    $(".modal-overlay").css("display", "none");
    $(".hall-info-modal").css("display", "none");
  });

  // 예약하기
  const form = document.getElementById("hall-modal-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // 폼 데이터 가져오기
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;

    // 여기에서 폼 데이터를 처리하고 예약을 완료 여부를 확인합니다.
    // 이 예제에서는 예약이 항상 성공한다고 가정합니다.

    // 예약이 성공적으로 완료되면 알림 창을 띄웁니다.
    alert(
      "이름: " +
        name +
        "\n" +
        "연락처:" +
        contact +
        "\n" +
        "이메일: " +
        email +
        "\n" +
        "날짜: " +
        date +
        "\n" +
        "예약이 완료되었습니다. 감사합니다!"
    );

    window.location.href = "index.html";
  });
});

// 달력
window.addEventListener("load", function () {
  buildCalendar();
}); // 웹 페이지가 로드되면 buildCalendar 실행

let nowMonth = new Date(); // 현재 달을 페이지를 로드한 날의 달로 초기화
let today = new Date(); // 페이지를 로드한 날짜를 저장
today.setHours(0, 0, 0, 0); // 비교 편의를 위해 today의 시간을 초기화

// 달력 생성 : 해당 달에 맞춰 테이블을 만들고, 날짜를 채워 넣는다.
function buildCalendar() {
  let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1); // 이번달 1일
  let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0); // 이번달 마지막날

  let tbody_Calendar = document.querySelector(".Calendar > tbody");
  document.getElementById("calYear").innerText = nowMonth.getFullYear(); // 연도 숫자 갱신
  document.getElementById("calMonth").innerText = leftPad(
    nowMonth.getMonth() + 1
  ); // 월 숫자 갱신

  while (tbody_Calendar.rows.length > 0) {
    // 이전 출력결과가 남아있는 경우 초기화
    tbody_Calendar.deleteRow(tbody_Calendar.rows.length - 1);
  }

  let nowRow = tbody_Calendar.insertRow(); // 첫번째 행 추가

  for (let j = 0; j < firstDate.getDay(); j++) {
    // 이번달 1일의 요일만큼
    let nowColumn = nowRow.insertCell(); // 열 추가
  }

  for (
    let nowDay = firstDate;
    nowDay <= lastDate;
    nowDay.setDate(nowDay.getDate() + 1)
  ) {
    // day는 날짜를 저장하는 변수, 이번달 마지막날까지 증가시키며 반복

    let nowColumn = nowRow.insertCell(); // 새 열을 추가하고
    nowColumn.innerText = leftPad(nowDay.getDate()); // 추가한 열에 날짜 입력

    if (nowDay.getDay() == 0) {
      // 일요일인 경우 글자색 빨강으로
      nowColumn.style.color = "#DC143C";
    }
    if (nowDay.getDay() == 6) {
      // 토요일인 경우 글자색 파랑으로 하고
      nowColumn.style.color = "#0000CD";
      nowRow = tbody_Calendar.insertRow(); // 새로운 행 추가
    }

    if (nowDay < today) {
      // 지난날인 경우
      nowColumn.className = "pastDay";
    } else if (
      nowDay.getFullYear() == today.getFullYear() &&
      nowDay.getMonth() == today.getMonth() &&
      nowDay.getDate() == today.getDate()
    ) {
      // 오늘인 경우
      nowColumn.className = "today";
      nowColumn.onclick = function () {
        choiceDate(this);
      };
    } else {
      // 미래인 경우
      nowColumn.className = "futureDay";
      nowColumn.onclick = function () {
        choiceDate(this);
      };
    }
  }
}

// 날짜 선택
function choiceDate(nowColumn) {
  if (document.getElementsByClassName("choiceDay")[0]) {
    // 기존에 선택한 날짜가 있으면
    document
      .getElementsByClassName("choiceDay")[0]
      .classList.remove("choiceDay"); // 해당 날짜의 "choiceDay" class 제거
  }
  nowColumn.classList.add("choiceDay"); // 선택된 날짜에 "choiceDay" class 추가
}

// 이전달 버튼 클릭
function prevCalendar() {
  nowMonth = new Date(
    nowMonth.getFullYear(),
    nowMonth.getMonth() - 1,
    nowMonth.getDate()
  ); // 현재 달을 1 감소
  buildCalendar(); // 달력 다시 생성
}
// 다음달 버튼 클릭
function nextCalendar() {
  nowMonth = new Date(
    nowMonth.getFullYear(),
    nowMonth.getMonth() + 1,
    nowMonth.getDate()
  ); // 현재 달을 1 증가
  buildCalendar(); // 달력 다시 생성
}

// input값이 한자리 숫자인 경우 앞에 '0' 붙혀주는 함수
function leftPad(value) {
  if (value < 10) {
    value = "0" + value;
    return value;
  }
  return value;
}
