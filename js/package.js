$(document).ready(function () {
  $("#packageMoreBtn").click(function () {
    location.href = "s_package.html";
  });
  //파동효과
  function clickEffect(e) {
    var d = document.createElement("div");
    d.className = "clickEffect";
    d.style.top = e.clientY + "px";
    d.style.left = e.clientX + "px";
    document.body.appendChild(d);
    d.addEventListener(
      "animationend",
      function () {
        d.parentElement.removeChild(d);
      }.bind(this)
    );
  }
  document.addEventListener("click", clickEffect);
});
