document.addEventListener("DOMContentLoaded", () => {

  /* ── TAB SWITCHING ── */
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".panel-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });

  /* ── DARK MODE ── */
  const toggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "☀";
  }

  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggle.textContent = isDark ? "☀" : "☾";
  });

  /* ── SCROLL REVEAL ── */
  if ("IntersectionObserver" in window) {
    const style = document.createElement("style");
    style.textContent = `
      .panel, .section {
        opacity: 0;
        transform: translateY(16px);
        transition: opacity 0.4s ease, transform 0.4s ease;
      }
      .panel.visible, .section.visible {
        opacity: 1;
        transform: none;
      }
    `;
    document.head.appendChild(style);

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll(".panel, .section").forEach(el => obs.observe(el));
  }

});