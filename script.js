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

  /* ── STICKY NAV (appears after scrolling past hero) ── */
  const nav = document.getElementById("topnav");
  const hero = document.querySelector(".hero");

  if (hero && "IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver(
      ([entry]) => {
        nav.classList.toggle("visible", !entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    navObserver.observe(hero);
  }

  /* ── ACTIVE NAV LINK HIGHLIGHT ── */
  const navLinks = document.querySelectorAll(".topnav-links a");
  const sections = document.querySelectorAll("section[id], header[id]");

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(link => {
              link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
            });
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach(s => sectionObserver.observe(s));
  }

  /* ── SCROLL REVEAL ── */
  if ("IntersectionObserver" in window) {
    const revealEls = document.querySelectorAll(".reveal");
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });

    revealEls.forEach(el => revealObs.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
  }

  /* ── SMOOTH SCROLL for nav links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (href.length < 2) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  /* ── NAV CLOCK (Tampa / Eastern local time, a small "systems" touch) ── */
  const clockEl = document.getElementById("navClock");
  if (clockEl) {
    const tick = () => {
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      clockEl.textContent = `TPA ${time} ET`;
    };
    tick();
    setInterval(tick, 30000);
  }

});
