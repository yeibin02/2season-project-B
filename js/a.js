window.addEventListener("load", function () {
  // URL에서 웨딩 홀 ID를 추출합니다.
  const urlParams = new URLSearchParams(window.location.search);
  const hallId = urlParams.get("id");

  // 상품 문의 양식을 제출할 때의 이벤트 핸들러를 설정합니다.
  const inquiryForm = document.getElementById("inquiry-form");
  const resultElement = document.getElementById("result");

  inquiryForm.addEventListener("submit", function (e) {
    e.preventDefault(); // 기본 제출 동작을 막습니다.

    // 사용자가 입력한 데이터를 가져옵니다.
    const formData = new FormData(inquiryForm);

    // 여기에서 상품 문의를 처리하는 로직을 추가합니다.
    // 예를 들어, 서버로 데이터를 전송하고 처리한 후 결과를 표시할 수 있습니다.

    // 이 예제에서는 간단히 결과를 표시합니다.
    resultElement.innerHTML = "<p>상품 문의가 제출되었습니다. 감사합니다!</p>";

    // 양식을 초기화합니다.
    inquiryForm.reset();
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
                <h2>${hallInfo.name}</h2>
                <img src="${hallInfo.imageSrc}" alt="웨딩홀 이미지">
                <p>위치: ${hallInfo.location}</p>
                <p>홀 종류: ${hallInfo.hallType}</p>
                <p>메뉴 종류: ${hallInfo.menuType}</p>
                <p>식사 비용: ${hallInfo.mealCost}</p>
                <p>보증 인원: ${hallInfo.capacity}</p>
                
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
});
