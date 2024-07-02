const burger = document.querySelector(".hamburger");
const aside = document.querySelector(".asideMenU");

burger.addEventListener("click", () => {
  aside.classList.toggle("activeAside");
  burger.classList.toggle("activeBurger");
});
