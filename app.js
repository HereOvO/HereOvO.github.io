// 导航高亮 + 页脚年份
(function () {
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const links = Array.from(document.querySelectorAll('.topnav a[href^="#"]'));
  if (!links.length || !("IntersectionObserver" in window)) return;

  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  function activate(id) {
    links.forEach((link) => {
      const on = link.getAttribute("href") === "#" + id;
      link.classList.toggle("is-active", on);
      if (on) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible.length) activate(visible[0].target.id);
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
  );

  sections.forEach((section) => observer.observe(section));
})();
