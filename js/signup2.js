window.addEventListener("load", function(){
  const idInput = document.getElementById("signup-username");
  const passwordInput = document.getElementById("signup-password");
  const nameInput = document.getElementById("nameInput");
  const birthInput = document.getElementById("birthInput");
  const phoneNumInput = document.getElementById("phoneNumInput");
  const veriInput = document.getElementById("veriInput");
  const signupForm = document.getElementById("signup-form");

  function validateInput(
      inputElement,
      containerElement,
      successClass,
      errorClass
  ) {
      if (inputElement.value.trim() === "") {
          containerElement.classList.remove(successClass);
          containerElement.classList.add(errorClass);
      } else {
          containerElement.classList.remove(errorClass);    
          containerElement.classList.add(successClass);
      }
  }
  
  function handleFocus(event) {
      event.target.parentNode.classList.add("focus");
  }
  
  function handleBlur(event) {
      validateInput(event.target, event.target.parentNode, "success", "error");
  }
  
  idInput.addEventListener("focus", handleFocus);
  idInput.addEventListener("blur", handleBlur);
  passwordInput.addEventListener("focus", handleFocus);
  passwordInput.addEventListener("blur", handleBlur);
  nameInput.addEventListener("focus", handleFocus);
  nameInput.addEventListener("blur", handleBlur);
  birthInput.addEventListener("focus", handleFocus);
  birthInput.addEventListener("blur", handleBlur);
  phoneNumInput.addEventListener("focus", handleFocus);
  phoneNumInput.addEventListener("blur", handleBlur);
  veriInput.addEventListener("focus", handleFocus);
  veriInput.addEventListener("blur", handleBlur);

  const genderRadioButtons = document.querySelectorAll('input[name="gender"]');
  const genderCheckBoxes = document.querySelectorAll('.gender-check-box');

  genderRadioButtons.forEach((radio, index) => {
      radio.addEventListener('change', function () {
          genderCheckBoxes.forEach((checkBox) => {
              checkBox.style.borderColor = '#dfdfdf';
          });

          genderCheckBoxes[index].style.borderColor = '#887160';

          // 해당 라디오 버튼을 체크하도록 코드 추가
          radio.checked = true;
      });
  });

  genderCheckBoxes.forEach((checkBox, index) => {
      checkBox.addEventListener('click', function () {
          genderRadioButtons.forEach((radio) => {
              radio.checked = false;
          });

          genderCheckBoxes.forEach((checkBox) => {
              checkBox.style.borderColor = '#dfdfdf';
          });

          checkBox.style.borderColor = '#887160';

          // 해당 라디오 버튼을 체크하도록 코드 추가
          genderRadioButtons[index].checked = true;
      });
  });

  // 휴대전화번호 입력시, 인증요청버튼 활성화
  const request = document.getElementById('request');
  const colorRequest = document.getElementById('colorRequest');

  phoneNumInput.addEventListener('input', function (e) {
      const inputValue = e.target.value.replace(/[^0-9]/g, '');

      e.target.value = inputValue;

      const trimmedLength = inputValue.trim().length;

      request.style.display = trimmedLength === 0 ? 'block' : 'none';
      colorRequest.style.display = trimmedLength > 0 ? 'block' : 'none';
  });

  colorRequest.addEventListener('click', function (e) {
      e.preventDefault()
      const verificationBox = document.getElementById('verificationCodeBox');
      const phoneNumBox = document.querySelector('.phoneNum-box');

      verificationBox.style.display = 'flex ';

      phoneNumBox.style.borderRadius = '0';
  });

  const completion = document.getElementById('completion');

  function checkVeriInput() {
      if (veriInput.value.trim() !== "") {
          completion.disabled = false;
      } else {
          completion.disabled = true;
      }
  }

    // veriInput의 입력 이벤트에 대한 이벤트 리스너 추가
  veriInput.addEventListener("input", checkVeriInput);
  const signupInfo = document.querySelector('.signup-info');
  const lastSubmit = document.getElementById('lastSubmit');


  completion.addEventListener('click', function(e){
      e.preventDefault()
      signupInfo.textContent = '인증이 완료되었습니다.'
      signupInfo.style.color = '#f00 ';
      signupInfo.style.padding = '5px';
      colorRequest.style.display = 'none';
      lastSubmit.style.display = 'block';
  })

  function checkGender() {
      const genderRadios = document.getElementsByName("gender");
      let checked = false;

      for (let i = 0; i < genderRadios.length; i++) {
          if (genderRadios[i].checked) {
              checked = true; // 하나 이상의 라디오 버튼이 선택되어 있으면 true로 설정
              break; // 하나만 선택되어도 충분하므로 반복문을 종료합니다.
          }
      }

      return checked;
  }
  


lastSubmit.addEventListener("click", function (e) {
    const isGenderChecked = checkGender();

    e.preventDefault();

    if (idInput.value.trim() === "") alert("아이디를 입력해주세요");
    else if (passwordInput.value.trim() === "")
      alert("비밀번호를 입력해주세요");
    else if (nameInput.value.trim() === "") alert("이름을 입력해주세요");
    else if (birthInput.value.trim() === "") alert("생년월일을 입력해주세요");
    else if (!isGenderChecked) alert("성별을 체크해주세요");
    else if (phoneNumInput.value.trim() === "")
      alert("휴대전화번호를 입력해주세요");
    else if (veriInput.value.trim() === "") alert("인증번호를 입력해주세요");
    else {
      // 사용자 정보를 저장
      const newUser = {
        username: idInput.value.trim(),
        password: passwordInput.value.trim(),
        // 다른 필드도 필요한 경우 여기에 추가
      };

      // 로컬 스토리지에 사용자 정보를 저장합니다.
      // 로컬 스토리지에 저장된 사용자 정보를 가져오기 위해 localStorage.getItem("users")
      // 만약에 사용자 정보가 없다면 빈 배열([])을 기본값으로 사용
      const users = JSON.parse(localStorage.getItem("users")) || [];
      // 새로운 사용자 객체 (newUser)를 이전 사용자 정보 배열(users)에 추가
      users.push(newUser);
      // 사용자 정보 배열을 JSON 형식으로 문자열화하고, 이를 로컬 스토리지에 "users"라는 키로 저장
      localStorage.setItem("users", JSON.stringify(users));

      alert("가입이 완료 되었습니다. 로그인 페이지로 이동합니다.");
      window.location.href = "login.html";
    }
  });
})