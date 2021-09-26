const burger = document.querySelector('.burger');
const navPills = document.querySelector(".nav-pills");
const navLinks = document.querySelectorAll(".nav-links")

function navAnimation () {
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.7}s`;
        }
    });
}

burger.addEventListener('click', () => {
    // to toggle nav
    navPills.classList.toggle("nav-active");

    // for navbar animation
    navAnimation();

    // for burger animation 
    burger.classList.toggle("burger-active");
});