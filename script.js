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

const waFloat = document.querySelector(".wa-float");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight * 0.6) {
    waFloat.style.opacity = "1";
    waFloat.style.pointerEvents = "auto";
    waFloat.style.transform = "translateY(0)";
  } else {
    waFloat.style.opacity = "0";
    waFloat.style.pointerEvents = "none";
    waFloat.style.transform = "translateY(20px)";
  }
});
