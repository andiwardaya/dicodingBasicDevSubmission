// -------------------------NAVBAR-------------------------

// selectItem
const hamburger = document.querySelector(".nav__hamburger");
const closeIcon = document.querySelector(".nav__close-icon");
const navMenu	= document.querySelector("#nav__menu");

hamburger.addEventListener("click", function () {
	navMenu.classList.toggle("show-menu");
})

closeIcon.addEventListener("click", function () {
	navMenu.classList.remove("show-menu");
})