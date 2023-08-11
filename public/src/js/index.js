const loginSection = document.querySelector(".login-section");
const registrationSection = document.querySelector(".registration-section");
const signupButton = document.getElementById("signupButton")
const signinButton = document.getElementById("signinButton")

function showRegistrationArea() {
  registrationSection.style.display = "block";
  loginSection.style.display = "none";
  signupButton.classList.add("active");
  signinButton.classList.remove("active");
}

function showLoginInArea() {
  registrationSection.style.display = "none";
  loginSection.style.display = "block";
  signupButton.classList.remove("active");
  signinButton.classList.add("active");
}