document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navElements = document.querySelector(".nav-elements");

    hamburger.addEventListener("click", function() {
        navElements.classList.toggle("active");
    });
});
