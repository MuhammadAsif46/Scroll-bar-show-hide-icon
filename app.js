document.addEventListener("DOMContentLoaded", function () {
  var scrollIcon = document.getElementById("scrollIcon");

  window.onscroll = function () {
    var scrollPosition =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollPosition > 0) {
      scrollIcon.style.display = "none";
    } else {
      scrollIcon.style.display = "block";
    }
  };

  scrollIcon.addEventListener("click", function () {
    window.scrollTo(0, document.body.scrollHeight);
  });
});
