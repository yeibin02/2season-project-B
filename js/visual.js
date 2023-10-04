$(document).ready(function () {
  // var swiper = new Swiper(".mySwiper", {
  //   spaceBetween: 30,
  //   effect: "fade",
  //   navigation: {
  //     nextEl: ".mySwiper .swiper-button-next",
  //     prevEl: ".mySwiper.swiper-button-prev",
  //   },
  //   speed: 1000,
  //   pagination: {
  //     el: ".mySwiper .swiper-pagination",
  //     clickable: true,
  //   },
  //   autoplay: {
  //     // 자동 슬라이드 설정 , 비 활성화 시 false
  //     delay: 2500, // 시간 설정
  //     disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  //   },
  // });
});

window.addEventListener("load", function () {
  const mySwiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    centeredSlides: true,
    speed: 3000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
