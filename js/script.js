// ================= SMOOTH SCROLL =================
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ================= TYPING EFFECT =================
const text = [
    "Data Scientist",
    "Full Stack Developer",
    "MERN Stack Developer",
    "AI Enthusiast"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

const typingElement = document.getElementById("typing-text");

function typeEffect() {
    if (!typingElement) return;

    if (index >= text.length) index = 0;

    currentText = text[index];

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex--);
    } else {
        typingElement.textContent = currentText.substring(0, charIndex++);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        speed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index++;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ================= NAVBAR SCROLL EFFECT =================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#020617";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
    } else {
        header.style.background = "transparent";
        header.style.boxShadow = "none";
    }
});


// ================= SCROLL REVEAL ANIMATION =================
const revealElements = document.querySelectorAll(".fade-in, .slide-left, .slide-right, .zoom-in");

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translate(0,0)";
        }
    });
};

window.addEventListener("scroll", revealOnScroll);


// ================= ACTIVE NAV LINK =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});