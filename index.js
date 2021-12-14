const navToggle = document.querySelector(".nav__menu");
const navMenu = document.querySelector(".nav__content--menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu--visible")
})

