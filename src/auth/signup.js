const signUpBtn = document.querySelector(".open_acc_btn");
signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "auth.html";
});
