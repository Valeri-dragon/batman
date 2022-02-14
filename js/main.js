const main = () => {
  const swiper = new Swiper(".main-slider", {
    spaceBetween: 30,
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".main-slider__arrow",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    },
  });
  let burger = document.querySelector(".menu-burger");
  let close = document.querySelector(".header__menu-close");
  let menu = document.querySelector(".header__menu-wrap");
  burger.addEventListener("click", () => {
    menu.style.display = "flex";
  });
  close.addEventListener("click", () => {
    menu.style.display = "";
  });
  const modalWindow = document.querySelector(".modal");
  const btnModal = document.querySelector(".main__button-play");
  btnModal.addEventListener("click", () => {
    modalWindow.classList.add("active");
  });
  modalWindow.addEventListener("click", (e) => {
   const isModal = e.target.closest(".modal__inner")

    if (!isModal) {
      modalWindow.classList.remove("active");
     
    }
  });
};
main();
