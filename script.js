document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: "smooth",
    });
  });
});

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});
