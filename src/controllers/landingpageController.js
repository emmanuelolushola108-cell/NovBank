"use strict";
const openaccountBtn = document.querySelectorAll(".open_acc_btn");

openaccountBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "auth.html";
  });
});
