document.addEventListener("DOMContentLoaded", () => {

  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".panel-content");
  const toggle = document.getElementById("themeToggle");

  /* TAB SWITCHING */
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });

  /* LOAD SAVED THEME */
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "☀";
  }

  /* TOGGLE DARK MODE */
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      toggle.textContent = "☀";
    } else {
      localStorage.setItem("theme", "light");
      toggle.textContent = "☾";
    }
  });

});
