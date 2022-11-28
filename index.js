"use strict";
const plan = document.querySelector(".nav-link__item");

const SiammaykaLogo = document.querySelector(".nav-link__logo");

SiammaykaLogo.addEventListener("click", () => {
  window.location.href = "/Siammayka-Website/";
});

const details = document.querySelectorAll(".detail");
const callBack = (entries) => {
  const [entry] = entries;
  console.log("enter");
  if (entry.isIntersecting) {
    entry.target.classList.remove("hidden");
    entry.target.classList.add("show");
    return observer.unobserve(entry.target);
  }
};

const option = { threshold: window.outerWidth > 480 ? 0 : 1 };
const observer = new IntersectionObserver(callBack, option);
details.forEach((detail) => {
  observer.observe(detail);
  detail.classList.add("hidden");
});
