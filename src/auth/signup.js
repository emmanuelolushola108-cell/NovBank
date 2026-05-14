const signUpBtns = document.querySelectorAll(".open_acc_btn");
const signUpLink = document.querySelector(".sign_up_link");
const signUpPage = document.querySelector(".signup_flex");
const loginPage = document.querySelector(".login_flex");
signUpBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "auth.html";
  });
});
signUpLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginPage.classList.add("remove_login");
  signUpPage.classList.add("sign_up");
});
