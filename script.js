document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".downArrow");
    const menuItems = document.querySelector(".nav-elements");
    const arrowIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", function () {
        menuItems.classList.toggle("active"); // Toggle menu visibility
        arrowIcon.classList.toggle("fa-chevron-up"); // Change arrow to up
        arrowIcon.classList.toggle("fa-chevron-down"); // Change arrow to down
    });
});
