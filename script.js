document.addEventListener("DOMContentLoaded", function() {
    const downArrow = document.querySelector(".downArrow");
    const navElements = document.querySelector(".nav-elements");

    downArrow.addEventListener("click", function() {
        navElements.classList.toggle("active");
    });
});
