// script.js

// Show welcome message when page loads
window.onload = function () {
    alert("Welcome to My Webpage!");
};

// Change background color of cards when clicked
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", function () {
        card.style.backgroundColor = "#dbeafe";
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";
    });
});

// Footer current year update
const footer = document.querySelector("footer p");
const year = new Date().getFullYear();

footer.innerHTML = `© ${year} Simple Webpage | Ananth`;