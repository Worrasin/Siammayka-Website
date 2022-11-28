const datas = [
  "Dijet",
  "Keiba",
  "Kennametal",
  "Kyocera",
  "Mitutoyo",
  "Nachi",
  "Vertex",
  "Winton",
  "YG",
];
const Brand = document.querySelector(".Brand-rep__detail");
datas.forEach((data) => {
  const node = document.createElement("img");
  Brand.appendChild(node);
  node.setAttribute("src", `/Image/representative/${data}.png`);
  node.setAttribute("loading", `lazy`);
});

// for(let i=0; i<datas.length; i++){const node = document.createElement("img");}

const SiammaykaLogo = document.querySelector(".nav-link__logo");

SiammaykaLogo.addEventListener("click", () => {
  window.location.href = "/";
});

const details = document.querySelectorAll(".detail");
const callBack = (entries) => {
  const [entry] = entries;
  console.log("erter");
  // entry.style.add(animation) = translatePicture + " 2s ease-in";
  if (entry.isIntersecting) {
    entry.target.classList.add("show");
    return observer.unobserve(entry.target);
  }
};

const option = { threshold: 0.2 };
const observer = new IntersectionObserver(callBack, option);
details.forEach((detail) => {
  observer.observe(detail);
  detail.classList.add("hidden");
});
