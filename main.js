const nav = document.querySelector("nav");
const btnToggleNav = document.querySelector(".menu-hamburguesa");

btnToggleNav.addEventListener('click', () => {

    nav.classList.toggle("active");
    btnToggleNav.classList.toggle("active");
})
