window.onload = function () {
  //Navbar & Menu -----------------------------
  const responsiveNav = document.querySelector(".responsive-nav__list");
  const header = document.querySelector(".header");
  console.log(responsiveNav);
  const burger = document.querySelectorAll(".burger");
  const burgerIcon = document.querySelectorAll(".burger > i");

  if (window.scrollY > 0) {
    header.classList.add("z-20");
  }
  burger.forEach((item, index) => {
    item.addEventListener("click", () => {
      if (burgerIcon[index].classList.contains("bx-menu")) {
        responsiveNav.classList.add("left-0");
        responsiveNav.classList.remove("-left-full");
        header.classList.add("z-20");
        burgerIcon[index].classList.remove("bx-menu");
        burgerIcon[index].classList.add("bx-x");
      } else {
        responsiveNav.classList.remove("left-0");
        responsiveNav.classList.add("-left-full");
        header.classList.add("z-20");
        burgerIcon[index].classList.add("bx-menu");
        burgerIcon[index].classList.remove("bx-x");
      }
    });
  });

  // Modal Window -----------------------------
  const modalWindow = document.querySelector(".modal-window"),
    modalContent = document.querySelector(".modal-content"),
    registerBtn = document.querySelectorAll(".register-btn"),
    closeBtn = document.querySelector(".close-btn");

  registerBtn.forEach((item) => {
    item.addEventListener("click", () => {
      modalWindow.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    modalWindow.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-window")) {
      // modalContent.classList.toggle("shaker");
      modalWindow.classList.add("hidden");
    }
  });

  // Customer slider -----------------------------
  const owl1 = $(".customer-slider");
  owl1.owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
};
