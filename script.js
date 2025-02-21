document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".downArrow");
    const navElements = document.querySelector(".nav-elements");

    hamburger.addEventListener("click", function() {
        navElements.classList.toggle("active");
    });
});
