// ===============================
// Cloud Engineer Portfolio
// JavaScript
// ===============================


// 1. Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// 2. Scroll reveal animation
const sections = document.querySelectorAll("section");

const revealSections = () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("show-section");
        }

    });

};

window.addEventListener("scroll", revealSections);

revealSections();


// 3. Navbar background while scrolling
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(8, 6, 18, 0.95)";
        header.style.boxShadow =
            "0 5px 30px rgba(139, 92, 246, 0.15)";

    } else {

        header.style.background = "rgba(8, 6, 18, 0.75)";
        header.style.boxShadow = "none";

    }

});


// 4. Add hover effect to skill cards
const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


// 5. Current year automatically updates in footer
const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.innerHTML =
        `© ${year} <span>Jinusha</span>. Built with passion for Cloud & DevOps.`;

}


// 6. Welcome message in browser console
console.log(
    "☁️ Welcome to Jinusha's Cloud Engineer Portfolio!"
);

console.log(
    "💜 Built with HTML, CSS & JavaScript"
);
