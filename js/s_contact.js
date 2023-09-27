// window.addEventListener("load", function () {
//   // 숫자만 입력
//   $("html").on("keydown", ".tel, .numberOnly", function (e) {
//     console.log(e.keyCode);
//     if (
//       (e.keyCode >= 48 && e.keyCode <= 57) ||
//       (e.keyCode >= 96 && e.keyCode <= 105)
//     ) {
//       return;
//     } else if (e.keyCode == 8) {
//       return;
//     } else {
//       e.stopPropagation();
//       e.preventDefault();
//     }
//   });

//   // 전화번호 입력박스
//   function inputPhoneNumber(obj) {
//     var number = obj.value.replace(/[^0-9]/g, "");
//     var phone = "";
//     if (number.length < 4) {
//       return number;
//     } else if (number.length < 7) {
//       phone += number.substr(0, 3);
//       phone += "-";
//       phone += number.substr(3);
//     } else if (number.length < 11) {
//       phone += number.substr(0, 3);
//       phone += "-";
//       phone += number.substr(3, 3);
//       phone += "-";
//       phone += number.substr(6);
//     } else {
//       phone += number.substr(0, 3);
//       phone += "-";
//       phone += number.substr(3, 4);
//       phone += "-";
//       phone += number.substr(7);
//     }
//     obj.value = phone;
//   }
//   inputPhoneNumber()
//   function validateInput() {
//     const nameInput = document.getElementById("name").value;
//     const telInput = document.getElementById("tel").value;
//     const dateInput = document.getElementById("date").value;
//     const pkInput = document.getElementById("pk").value;

//     if (!nameInput) {
//       alert("이름을 입력해주세요.");
//       return false;
//     }
//     if (!telInput) {
//       alert("연락처를 입력해주세요.");
//       return false;
//     }
//     if (!dateInput) {
//       alert("원하시는 상담 날짜를 입력해주세요.");
//       return false;
//     }
//     if (!pkInput) {
//       alert("문의하고 싶은 상품을 입력해주세요.");
//       return false;
//     }
//     const complete = document.querySelector(".co-submit");
//     complete.addEventListener("click", function (e) {
//       e.preventDefault();
//       if (validateInput) {
//         alert("참여해주셔서 감사합니다!");
//         offClick();
//       }
//     });
//     return true;
//   }
//   validateInput();
// });
$(document).ready(function () {
  // 숫자만 입력
  $("html").on("keydown", ".tel, .numberOnly", function (e) {
    console.log(e.keyCode);
    if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 105)
    ) {
      return;
    } else if (e.keyCode == 8) {
      return;
    } else {
      e.stopPropagation();
      e.preventDefault();
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

    return true;
  }

  $(".co-submit").on("click", function (e) {
    e.preventDefault();
    if (validateInput()) {
      alert("참여해주셔서 감사합니다!");

      // offClick(); // offClick 함수가 어디에 정의되어 있는지 확인 필요
    }
  });
});
