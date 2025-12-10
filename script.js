// script.js

// Menu mobile
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".mobile-toggle");
    const menu = document.querySelector("nav ul");

    btn.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
});
