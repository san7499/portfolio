// ================= SCROLL TO TOP BUTTON =================
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.id = "scrollTopBtn";
document.body.appendChild(scrollBtn);

scrollBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 10px 15px;
    font-size: 18px;
    background: #22c55e;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: none;
    z-index: 1000;
`;

// Show/Hide button
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

// Scroll to top
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ================= SECTION SCROLL PROGRESS BAR =================
const progressBar = document.createElement("div");
progressBar.id = "scrollProgress";
document.body.appendChild(progressBar);

progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: #22c55e;
    width: 0%;
    z-index: 1000;
`;

// Update progress
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (scrollTop / height) * 100;
    progressBar.style.width = scrolled + "%";
});


// ================= SCROLL SNAP EFFECT (OPTIONAL SMOOTH SECTION ALIGN) =================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            section.classList.add("active-section");
        } else {
            section.classList.remove("active-section");
        }
    });
});


// ================= ADD ACTIVE SECTION STYLE =================
const sectionStyle = document.createElement("style");
sectionStyle.innerHTML = `
.active-section {
    transition: all 0.3s ease;
}
`;
document.head.appendChild(sectionStyle);