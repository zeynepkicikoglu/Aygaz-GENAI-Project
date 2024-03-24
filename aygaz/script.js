// scripts.js

document.addEventListener("DOMContentLoaded", function () {
  const likeBtns = document.querySelectorAll(".like-btn");

  likeBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      btn.querySelector(".heart").classList.toggle("red");
    });
  });
});
