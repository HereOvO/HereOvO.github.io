const projects = [
  {
    id: "wheeled-leg-robot",
    title: "Wheeled-leg robot",
    category: "robotics",
    kind: "robotics / platform",
    description: "A controller foundation for a wheeled-leg robot, balancing low-level motion control with a platform that can grow.",
    tags: ["STM32", "robotics", "control"],
    repo: "https://github.com/HereOvO/wheeled-leg-robot",
    role: "Robot controller",
    stack: "C / STM32",
    status: "Active",
    context: "A hardware-first controller project exploring how a compact mobile platform can combine rolling and legged motion.",
    details: [
      "Designed around repeatable controller behavior instead of a one-off demo path.",
      "Keeps hardware-facing code organized so motor, sensor, and platform work can evolve independently.",
      "Acts as a base for future field tests, tuning records, and mechanical iterations."
    ]
  },
  {
    id: "stm32-remote-upgrade",
    title: "STM32 remote upgrade",
    category: "firmware",
    kind: "firmware / reliability",
    description: "Remote firmware upgrade using an ESP32-S3 as an auxiliary controller for STM32 systems.",
    tags: ["STM32", "ESP32-S3", "OTA"],
    repo: "https://github.com/HereOvO/STM32-remote-upgrade",
    role: "Upgrade path",
    stack: "C / ESP32-S3",
    status: "Prototype",
    context: "A practical OTA direction that treats the update process as part of the product, including the auxiliary communication layer.",
    details: [
      "Uses an ESP32-S3 as a bridge around the STM32 firmware update workflow.",
      "Targets a repeatable remote update path for embedded devices with limited physical access.",
      "Leaves room for stronger rollback, image validation, and field recovery strategies."
    ]
  },
  {
    id: "line-inspection-and-target-shooting",
    title: "Line inspection & target shooting",
    category: "robotics",
    kind: "competition / sensing",
    description: "A competition robot project combining line inspection, target acquisition, and timed actuation.",
    tags: ["STM32", "sensing", "competition"],
    repo: "https://github.com/HereOvO/Line-inspection-and-target-shooting",
    role: "System integration",
    stack: "C / real-time I/O",
    status: "Completed",
    context: "A time-constrained system where sensing, decision-making, and physical actuation have to agree under pressure.",
    details: [
      "Connects line-following behavior with target shooting in one control loop.",
      "Turns competition rules into explicit state transitions and hardware actions.",
      "Provides a useful baseline for documenting tuning, failure cases, and test runs."
    ]
  },
  {
    id: "single-usb-burning-for-ab-partition",
    title: "Single USB A/B burning",
    category: "firmware",
    kind: "firmware / boot flow",
    description: "A single-USB programming path for STM32F407 A/B partitions, with room for OTA-style deployment.",
    tags: ["STM32F407", "bootloader", "A/B"],
    repo: "https://github.com/HereOvO/Single-USB-burning-for-AB-partition",
    role: "Boot workflow",
    stack: "C / STM32",
    status: "Working",
    context: "An experiment in making firmware deployment safer and simpler by treating two application partitions as a normal part of the boot flow.",
    details: [
      "Targets an STM32F407VET6 system with two application partitions.",
      "Keeps a single USB connection at the center of the programming workflow.",
      "Creates a foundation for future validation, rollback, and peripheral-assisted OTA behavior."
    ]
  },
  {
    id: "desktop-wallpaper-display",
    title: "Desktop wallpaper display",
    category: "tools",
    kind: "tool / hardware",
    description: "A compact desktop display project that brings a changing visual surface into the physical workspace.",
    tags: ["STM32", "display", "hardware"],
    repo: "https://github.com/HereOvO/Desktop-wallpaper-display",
    role: "Device prototype",
    stack: "C / embedded display",
    status: "Experiment",
    context: "A smaller hardware project that sits outside the robot path but keeps the same interest in turning code into a tangible object.",
    details: [
      "Explores a small-form-factor display built for a desktop environment.",
      "Combines firmware, display driving, and a simple physical product boundary.",
      "Useful as a compact testbed for UI, image handling, and device packaging."
    ]
  }
];

function iconRefresh() {
  if (window.lucide) window.lucide.createIcons();
}

function projectCard(project, index) {
  return `
    <article class="project-card" data-category="${project.category}">
      <div class="card-top">
        <span class="project-number">0${index + 1}</span>
        <span class="project-kind">${project.kind}</span>
      </div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="card-footer">
        <div class="tags">${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        <a class="card-link" href="project.html?id=${project.id}">details <i data-lucide="arrow-up-right"></i></a>
      </div>
    </article>
  `;
}

function renderProjects() {
  const grid = document.querySelector("#project-grid");
  if (!grid) return;
  grid.innerHTML = projects.map(projectCard).join("");
  iconRefresh();

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      const filter = button.dataset.filter;
      document.querySelectorAll(".project-card").forEach((card) => {
        card.classList.toggle("is-hidden", filter !== "all" && card.dataset.category !== filter);
      });
    });
  });
}

function renderDetail() {
  const target = document.querySelector("#project-detail");
  if (!target) return;
  const id = new URLSearchParams(window.location.search).get("id") || projects[0].id;
  const project = projects.find((item) => item.id === id) || projects[0];
  document.title = `${project.title} / HereOvO`;
  target.innerHTML = `
    <p class="eyebrow">${project.kind}</p>
    <h1 class="detail-title">${project.title.replace(" & ", " <em>&</em> ")}</h1>
    <p class="detail-description">${project.description}</p>
    <div class="detail-meta">
      <div><span>role</span><strong>${project.role}</strong></div>
      <div><span>stack</span><strong>${project.stack}</strong></div>
      <div><span>status</span><strong>${project.status}</strong></div>
    </div>
    <div class="detail-body">
      <div>
        <h2>What this project is testing.</h2>
        <p>${project.context}</p>
        <p>This page is intentionally concise. The source repository remains the living record for implementation details, hardware changes, and future iterations.</p>
        <a class="button button-primary" href="${project.repo}" target="_blank" rel="noreferrer">Open repository <i data-lucide="github"></i></a>
      </div>
      <aside class="detail-aside">
        <h3>working notes</h3>
        <ul>${project.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>
        <a class="text-link" href="${project.repo}" target="_blank" rel="noreferrer">read the source <i data-lucide="arrow-up-right"></i></a>
      </aside>
    </div>
  `;
  iconRefresh();
}

function setupNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.innerHTML = open ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
      iconRefresh();
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.innerHTML = '<i data-lucide="menu"></i>';
      iconRefresh();
    }));
  }

  const theme = document.querySelector(".theme-toggle");
  if (theme) {
    const stored = localStorage.getItem("hereovo-theme");
    if (stored === "light") document.body.classList.add("light");
    theme.addEventListener("click", () => {
      document.body.classList.toggle("light");
      localStorage.setItem("hereovo-theme", document.body.classList.contains("light") ? "light" : "dark");
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderDetail();
  setupNavigation();
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
  iconRefresh();
});
