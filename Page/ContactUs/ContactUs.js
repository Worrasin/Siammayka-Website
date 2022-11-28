const SiammaykaLogo = document.querySelector(".nav-link__logo");

SiammaykaLogo.addEventListener("click", () => {
  window.location.href = "/Siammayka-Website/";
});
const addLineAccount = document.querySelector(".Contact-line");

addLineAccount.addEventListener("click", () => {
  // window.location.href = "https://line.me/ti/p/0DjFAYa46d";
  window.open("https://line.me/ti/p/0DjFAYa46d", "_blank").focus();
});
