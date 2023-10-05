$(document).ready(function () {
  // 초기 필터값 설정
  var hallFilter = "*"; // 홀 버튼에 대한 필터값
  var locationFilter = "*"; // 지역(시/도) 셀렉트 박스에 대한 필터값
  var guarantorFilter = "*"; // 보증인원 필터값
  var mealRangeFilter = "*"; // 식대 필터값
  var mealMenuFilter = "*"; // 식사메뉴 필터값
  var ceremonyFilter = "*"; // 예식형태 필터값

  // 홀 버튼 클릭 시 필터링
  $(".hall-list button, .hall-list2 button").click(function () {
    $(".hall-list button, .hall-list2 button").removeClass("active");
    $(this).addClass("active");
    var hallSelector = $(this).attr("data-filter");

    // 선택한 홀 종류를 홀 필터에 반영
    hallFilter = hallSelector;

    // 최종 필터값 업데이트
    updateFilter();
  });

  // "지역(시/도)" 셀렉트 박스 변경 이벤트 핸들러
  $("#selcity").change(function () {
    var selectedCity = $(this).val();

    // 선택한 지역(시/도)를 지역(시/도) 필터에 반영
    locationFilter = selectedCity === "all" ? "*" : "." + selectedCity;

    // 최종 필터값 업데이트
    updateFilter();
  });

  // "지역(시군구)" 셀렉트 박스 변경 이벤트 핸들러
  $("#city").change(function () {
    var selectedDistrict = $(this).val();

    // 선택한 지역(시군구)를 지역(시군구) 필터에 반영
    locationFilter = selectedDistrict === "all" ? "*" : "." + selectedDistrict;

    // 최종 필터값 업데이트
    updateFilter();
  });

  // 보증인원 필터링
  $("#guarantors").change(function () {
    var selectedGuarantor = $(this).val(); // 선택된 보증인원 가져오기

    // 선택된 보증인원 값에 따라 필터 적용
    guarantorFilter = "." + selectedGuarantor;

    // 최종 필터값 업데이트
    updateFilter();
  });

  // 식대 필터링
  $("#meals").change(function () {
    var selectedMealRange = $(this).val(); // 선택된 식대 범위 가져오기

    // 선택된 식대 값에 따라 필터 적용
    mealRangeFilter = "." + selectedMealRange;

    // 최종 필터값 업데이트
    updateFilter();
  });

  // "식사메뉴" 필터링
  $("#mealmenu").change(function () {
    var selectedMenu = $(this).val(); // 선택된 식사메뉴 범위 가져오기

    // 선택된 식사메뉴 값에 따라 필터 적용

    mealMenuFilter = "." + selectedMenu;

    // 최종 필터값 업데이트
    updateFilter();
  });

  // 예식형태 필터링
  $("#ceremony").change(function () {
    var selectedCeremony = $(this).val();

    // 선택한 예식 형태를 예식형태 필터에 반영
    ceremonyFilter = "." + selectedCeremony;

    // 최종 필터값 업데이트
    updateFilter();
  });

  // 최종 필터값 업데이트하는 함수
  function updateFilter() {
    // 모든 필터 값을 결합하여 최종 필터값 설정
    var filter =
      hallFilter +
      locationFilter +
      guarantorFilter +
      mealRangeFilter +
      mealMenuFilter +
      ceremonyFilter;

    // 필터링 적용
    filterWeddingHalls(filter);
  }

  // 필터링 함수 정의
  function filterWeddingHalls(filter) {
    $(".mix-wrapper").isotope({
      filter: filter,
    });
  }

  // "지역(시/도)" 셀렉트 박스 변경 이벤트 핸들러
  $("#selcity").change(function () {
    var selectedCity = $(this).val();
    var citySelect = $("#city");

    // "전체"를 선택한 경우, "지역(시/군/구)" 셀렉트 박스 초기화
    if (selectedCity === "all") {
      citySelect.empty();
      citySelect.append('<option value="all">지역을 선택해주세요.</option>');
    } else {
      // 선택한 "시/도"에 따라 해당하는 동 이름 추가
      var cityOptions = getCityOptions(selectedCity);
      citySelect.html(cityOptions);
    }
  });

  // "시/도"에 따라 해당하는 동 이름을 가져오는 함수 (예시)
  function getCityOptions(selectedCity) {
    var cityOptions = "";

    // 선택한 "시/도"에 따라 동적으로 옵션 추가
    switch (selectedCity) {
      case "seoul":
        cityOptions =
          '<option value="seoul" data-filter=".sall" >전체</option>' +
          '<option value="gangnam" data-filter=".gangnam" >강남구</option>' +
          '<option value="seocho" data-filter=".seocho">서초</option>' +
          '<option value="gangseo" data-filter=".gangseo">강서/양천</option>' +
          '<option value="songpa" data-filter=".songpa">송파/잠실</option>' +
          '<option value="sindorim" data-filter=".sindorim">신도림/구로/영등포</option>' +
          '<option value="mapo" data-filter=".mapo">마포/서대문/은평</option>' +
          '<option value="gangdong" data-filter=".gangdong">강동</option>' +
          '<option value="seongdong" data-filter=".seongdong">성동/광진</option>' +
          '<option value="junggu" data-filter=".junggu">중구/용산/종로</option>' +
          '<option value="gwanak" data-filter=".gwanak">관악/동작/금천</option>' +
          '<option value="seongbuk" data-filter=".seongbuk">성북/동대문/중랑</option>' +
          '<option value="gangbuk" data-filter=".gangbuk">강북/노원/도봉</option>';
        break;
      case "gyeonggi":
        cityOptions =
          '<option value="gyeonggi" data-filter=".gall">전체</option>' +
          '<option value="seongnam" data-filter=".seongnam">성남/분당</option>' +
          '<option value="suwon" data-filter=".suwon">수원</option>' +
          '<option value="yongin" data-filter=".yongin">용인</option>' +
          '<option value="anyang" data-filter=".anyang">안양/광명</option>' +
          '<option value="ansan" data-filter=".ansan">안산</option>' +
          '<option value="bucheon" data-filter=".bucheon">부천</option>' +
          '<option value="ilsan" data-filter=".ilsan">일산</option>' +
          '<option value="pyeongtaek" data-filter=".pyeongtaek">평택</option>' +
          '<option value="uijeongbu" data-filter=".uijeongbu">의정부</option>';
        break;
      case "gangwon":
        cityOptions =
          '<option value="gangwon" data-filter=".gwall">전체</option>';
        break;
      case "gyeongnam":
        cityOptions =
          '<option value="gyeongnam" data-filter=".gnall">전체</option>';
        break;
      case "gwangju":
        cityOptions =
          '<option value="gwangju" data-filter=".gjall">전체</option>';
        break;
      case "daejeon":
        cityOptions =
          '<option value="daejeon" data-filter=".djall">전체</option>';
        break;
      case "daegu":
        cityOptions =
          '<option value="daegu" data-filter=".dgall">전체</option>';
        break;
      case "busan":
        cityOptions =
          '<option value="busan" data-filter=".bsall">전체</option>';
        break;
      case "ulsan":
        cityOptions =
          '<option value="ulsan" data-filter=".usall">전체</option>';
        break;
      case "incheon":
        cityOptions =
          '<option value="incheon" data-filter=".icall">전체</option>';
        break;
      case "jeonbuk":
        cityOptions =
          '<option value="jeonbuk" data-filter=".jball">전체</option>';
        break;
      case "chungnam":
        cityOptions =
          '<option value="chungnam" data-filter=".cnall">전체</option>';
        break;
      case "chungbuk":
        cityOptions =
          '<option value="chungbuk" data-filter=".cball">전체</option>';
        break;
      case "jeju":
        cityOptions = '<option value="jeju" data-filter=".jjall">전체</option>';
        break;
    }

    return cityOptions;
  }

  // 상품 문의 버튼과 페이지 URL을 저장할 배열
  const buttonsAndUrls = [];

  // 선택한 메뉴를 동적으로 생성하고 페이지에 추가하는 함수
  function createWeddingHallElements(data) {
    const weddingHallsList = $("#weddingHallsList");

    data.forEach((hall) => {
      const hallContainer = $("<div>").addClass(`mix ${hall.id}`);

      // 이미지 추가
      const image = $("<img>")
        .attr("src", hall.imageSrc)
        .attr("alt", "웨딩홀 이미지");
      hallContainer.append(image);

      const leftContainer = $("<div>").addClass("w-box-left");
      // 위치 정보 추가
      const location = $("<p>").text(hall.location);
      leftContainer.append(location);

      const name = $("<h3>").text(hall.name);
      leftContainer.append(name);

      hallContainer.append(leftContainer);

      const rightContainer = $("<div>").addClass("w-box-right");

      // 홀 종류 추가
      const hallType = $("<p>").html(`<span>홀 종류: </span>${hall.hallType}`);
      rightContainer.append(hallType);

      // 메뉴 종류 추가
      const menuType = $("<p>").html(
        `<span>메뉴 종류: </span>${hall.menuType}`
      );
      rightContainer.append(menuType);

      // 식사 비용 추가
      const mealCost = $("<p>").html(
        `<span>식사 비용: </span>${hall.mealCost}`
      );
      rightContainer.append(mealCost);

      // 보증 인원 추가
      const capacity = $("<p>").html(
        `<span>보증 인원: </span>${hall.capacity}`
      );
      rightContainer.append(capacity);

      hallContainer.append(rightContainer);

      // 상품 문의 버튼을 포함할 <a> 태그를 생성합니다.
      const inquiryLink = $("<a>")
        .addClass("inquiry-link")
        .attr("href", `a.html?id=${hall.id}`) // 웨딩 홀 고유 ID를 포함한 페이지 URL을 지정합니다.
        .text("상품 문의");

      // <a> 태그를 hallContainer에 추가합니다.
      hallContainer.append(inquiryLink);

      // 페이지에 추가
      weddingHallsList.append(hallContainer);
      // 상품 문의 버튼과 페이지 URL을 배열에 추가합니다.
      buttonsAndUrls.push({ button: inquiryLink, url: `a.html?id=${hall.id}` });
    });
  }
  // 상품 문의 버튼을 클릭했을 때의 이벤트 핸들러를 설정합니다.
  $(document).on("click", ".inquiry-link", function (e) {
    e.preventDefault(); // 기본 링크 동작을 막습니다.

    // 클릭된 버튼의 인덱스를 가져옵니다.
    const index = $(".inquiry-link").index(this);

    // 인덱스를 사용하여 해당 페이지로 이동합니다.
    if (index >= 0 && index < buttonsAndUrls.length) {
      const targetUrl = buttonsAndUrls[index].url;
      window.location.href = targetUrl;
    }
  });

  // 데이터 불러오기
  fetch("hallInfoData.json")
    .then((response) => response.json())
    .then((data) => {
      // 웨딩 홀 데이터를 사용하여 페이지 생성
      createWeddingHallElements(data);
    })
    .catch((error) => {
      console.error("JSON 파일을 불러오는 중 오류가 발생했습니다.", error);
    });
});