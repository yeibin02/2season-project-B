$(document).ready(function () {
  // 숫자만 입력
  $("html").on("keydown", "#tel, .numberOnly", function (e) {
    // 숫자 입력 시 메시지를 부드럽게 사라지게 함
    $("#message").fadeOut();

    if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 105)
    ) {
      // 숫자 입력 시 메시지를 지움
      $("#message").text("");
    } else if (e.keyCode == 8) {
      return;
    } else {
      e.stopPropagation();
      e.preventDefault();

      // 숫자 이외의 입력 시 메시지를 부드럽게 나타나게 함
      $("#message").text("숫자만 입력해주세요!").fadeIn();
    }
  });

  // 전화번호 입력박스
  function inputPhoneNumber(obj) {
    var number = obj.value.replace(/[^0-9]/g, "");
    var phone = "";
    if (number.length < 4) {
      return number;
    } else if (number.length < 7) {
      phone += number.substr(0, 3);
      phone += "-";
      phone += number.substr(3);
    } else if (number.length < 11) {
      phone += number.substr(0, 3);
      phone += "-";
      phone += number.substr(3, 3);
      phone += "-";
      phone += number.substr(6);
    } else {
      phone += number.substr(0, 3);
      phone += "-";
      phone += number.substr(3, 4);
      phone += "-";
      phone += number.substr(7);
    }
    obj.value = phone;
  }

  function validateInput() {
    const nameInput = $("#name").val();
    const telInput = $("#tel").val();
    const dateInput = $("#date").val();
    const pkInput = $("#pk").val();
    const agreement = $("#mand1:checked").length;

    if (!nameInput) {
      alert("이름을 입력해주세요.");
      return false;
    }
    if (!telInput) {
      alert("연락처를 입력해주세요.");
      return false;
    }
    if (!dateInput) {
      alert("원하시는 상담 날짜를 입력해주세요.");
      return false;
    }
    if (!pkInput) {
      alert("문의하고 싶은 상품을 입력해주세요.");
      return false;
    }
    if (!agreement) {
      alert("약관에 동의하셔야 문의하실 수 있습니다.");
      return false;
    }

    // 입력한 정보를 확인할 문자열 생성
    var joinInfo =
      "이름 : " +
      nameInput +
      "\n" +
      "연락처 : " +
      telInput +
      "\n" +
      "상담날짜 : " +
      dateInput +
      "\n" +
      "문의하고 싶은 상품 : " +
      pkInput +
      "\n";

    // 확인 다이얼로그 표시
    var con = confirm(joinInfo + "입력하신 정보가 맞습니까?");
    if (con) {
      alert("정상적으로 문의되었습니다.");
      // 문의가 완료되면 index.html로 이동
      window.location.href = "index.html";
    }
    return true;
  }

  // .co-submit을 눌렀을 때 validateInput 함수 호출
  $(".co-submit").on("click", function (e) {
    e.preventDefault();
    if (validateInput()) {
    }
  });
});
