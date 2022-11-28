const SiammaykaLogo = document.querySelector(".nav-link__logo");
const items = document.querySelector(".items");
const noImageIcon = "no-image-icon.png";
const details = [
  {
    title: "ล้อนำ (Idler)",
    description: "asdasdasdasdasd",
    image: "",
  },
  {
    title: "เฟืองโซ่ / สป๊อกเก็ต (Sprocket)",
    description: "dfgdfg",
    image: "",
  },
  { title: "โรลเลอร์ (Roller)", description: "ebrterb", image: "" },
  { title: "โซ่ (Track chain)", description: "ertert", image: "" },
  { title: "แผ่นแทรก (Track shoe)", description: "asdasdasdasdasd", image: "" },
  {
    title: "เกียร์ทด (Reduction gear)",
    description: "rtyneryn",
    image: "ReductionGear.jpg",
  },
  { title: "(Combine Finger)", description: "q343qbq 34q345bq34", image: "" },
];

SiammaykaLogo.addEventListener("click", () => {
  window.location.href = "/";
});

details.forEach((detail) => {
  const ImgTagCreator = document.createElement("img");
  const TitleTagCreator = document.createElement("h2");
  const TextTagCreator = document.createElement("p");
  const DivTagCreator = document.createElement("div");
  items.appendChild(DivTagCreator);
  // DivTagCreator.setAttribute("class", " lazy");
  DivTagCreator.appendChild(ImgTagCreator);
  items.appendChild(DivTagCreator);
  ImgTagCreator.setAttribute(
    "src",
    `/Siammayka-Website/Image/Products/${detail.image !== "" ? detail.image : noImageIcon}`
  );
  ImgTagCreator.setAttribute("loading", "lazy");
  DivTagCreator.appendChild(TitleTagCreator);
  TitleTagCreator.innerText = `${detail.title}`;
  DivTagCreator.appendChild(TextTagCreator);
  TextTagCreator.innerText = `${detail.description}`;
  DivTagCreator.appendChild(document.createElement("hr"));
});

const information = document.querySelectorAll(".information");
const callBack = (entries) => {
  const [entry] = entries;
  console.log("enter");
  // entry.style.add(animation) = translatePicture + " 2s ease-in";
  if (entry.isIntersecting) {
    entry.target.classList.add("show");
    return observer.unobserve(entry.target);
  }
};

const option = { threshold: 0.01 };
const observer = new IntersectionObserver(callBack, option);
information.forEach((detail) => {
  observer.observe(detail);
  detail.classList.add("hidden");
});
