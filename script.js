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
  const saved = localStorage.getItem("theme");

  if (saved === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "☀";
  }

  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggle.textContent = isDark ? "☀" : "☾";
  });

  /* ── STICKY NAV (appears after scrolling past hero) ── */
  const nav = document.getElementById("topnav");
  const hero = document.querySelector(".hero");

  const navObserver = new IntersectionObserver(
    ([entry]) => {
      nav.classList.toggle("visible", !entry.isIntersecting);
    },
    { threshold: 0.15 }
  );
  navObserver.observe(hero);

  /* ── ACTIVE NAV LINK HIGHLIGHT ── */
  const navLinks = document.querySelectorAll(".topnav-links a");
  const sections = document.querySelectorAll("section[id], header[id]");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.style.color = "";
            link.style.background = "";
            if (link.getAttribute("href") === `#${id}`) {
              link.style.color = "var(--green)";
              link.style.fontWeight = "600";
            } else {
              link.style.fontWeight = "";
            }
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(s => sectionObserver.observe(s));

  /* ── SCROLL REVEAL ── */
  if ("IntersectionObserver" in window) {
    const style = document.createElement("style");
    style.textContent = `
      .reveal {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.45s ease, transform 0.45s ease;
      }
      .reveal.in {
        opacity: 1;
        transform: none;
      }
    `;
    document.head.appendChild(style);

    const revealEls = document.querySelectorAll(".panel, .section");
    revealEls.forEach(el => el.classList.add("reveal"));

    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.07 });

    revealEls.forEach(el => revealObs.observe(el));
  }

  /* ── SMOOTH SCROLL for nav links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

});