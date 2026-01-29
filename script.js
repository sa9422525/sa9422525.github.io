// Dark mode toggle
document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("dark");
};

// Scroll animation
const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});
faders.forEach(el => observer.observe(el));

// Back to top button
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
