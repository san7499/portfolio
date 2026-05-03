// ================= INTERSECTION OBSERVER (SCROLL ANIMATIONS) =================
const animatedElements = document.querySelectorAll(
    ".fade-in, .slide-left, .slide-right, .zoom-in"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show"); // remove if you want one-time animation
        }
    });
}, {
    threshold: 0.2
});

// Apply observer
animatedElements.forEach(el => observer.observe(el));


// ================= ADD SHOW CLASS STYLES DYNAMICALLY =================
const style = document.createElement("style");
style.innerHTML = `
.show {
    opacity: 1 !important;
    transform: translate(0,0) scale(1) !important;
    transition: all 0.8s ease;
}
`;
document.head.appendChild(style);


// ================= STAGGER ANIMATION (FOR MULTIPLE ITEMS) =================
const staggerContainer = document.querySelectorAll(".skills-container span, .project-card");

staggerContainer.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.1}s`;
});


// ================= PARALLAX EFFECT (OPTIONAL SMOOTH SCROLL) =================
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    const homeImage = document.querySelector(".home-image img");

    if (homeImage) {
        homeImage.style.transform = `translateY(${scrollY * 0.1}px)`;
    }
});


// ================= BUTTON RIPPLE EFFECT =================
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        const circle = document.createElement("span");

        circle.classList.add("ripple");
        this.appendChild(circle);

        const x = e.clientX - this.offsetLeft;
        const y = e.clientY - this.offsetTop;

        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;

        setTimeout(() => {
            circle.remove();
        }, 600);
    });
});


// ================= ADD RIPPLE STYLE =================
const rippleStyle = document.createElement("style");
rippleStyle.innerHTML = `
.btn {
    position: relative;
    overflow: hidden;
}

.ripple {
    position: absolute;
    width: 100px;
    height: 100px;
    background: rgba(255,255,255,0.3);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple-effect 0.6s linear;
}

@keyframes ripple-effect {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;
document.head.appendChild(rippleStyle);