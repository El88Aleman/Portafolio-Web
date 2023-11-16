const mostrarNavBar = document.querySelectorAll();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(
        "forMe",
        "education",
        "project",
        "footer",
        entry.isIntersecting
      );
    });
  },
  { threshold: 0.5 }
);
mostrarNavBar.forEach((seccion) => observer.observe(seccion));
