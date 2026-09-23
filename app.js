const projects = [
  {
    id: "wheeled-leg-robot",
    title: "轮腿机器人",
    category: "robotics",
    kind: "机器人 / 运动平台",
    description: "面向轮腿机器人控制器的项目，关注底层运动控制和后续平台扩展。",
    tags: ["STM32", "机器人", "控制"],
    repo: "https://github.com/HereOvO/wheeled-leg-robot",
    role: "机器人控制",
    stack: "C / STM32",
    status: "进行中",
    context: "这是一个偏硬件落地的控制器项目，用来探索小型移动平台如何组合轮式运动和腿式结构。",
    details: [
      "围绕可重复的控制行为设计，而不是只完成一次演示。",
      "把电机、传感器和平台代码分层，方便后续分别迭代。",
      "适合作为实测记录、参数调试和机械版本更新的基础。"
    ]
  },
  {
    id: "stm32-remote-upgrade",
    title: "STM32 远程升级",
    category: "firmware",
    kind: "固件 / 可靠性",
    description: "使用 ESP32-S3 辅助 STM32 系统完成远程固件升级的实验。",
    tags: ["STM32", "ESP32-S3", "OTA"],
    repo: "https://github.com/HereOvO/STM32-remote-upgrade",
    role: "升级链路",
    stack: "C / ESP32-S3",
    status: "原型",
    context: "这个方向把更新流程当作系统的一部分来设计，而不只是把固件烧进去。",
    details: [
      "使用 ESP32-S3 作为 STM32 固件更新流程的辅助桥接。",
      "目标是让不方便物理接触的设备也能重复、可控地升级。",
      "后续可以继续补强回滚、镜像校验和现场恢复策略。"
    ]
  },
  {
    id: "line-inspection-and-target-shooting",
    title: "寻线与打靶机器人",
    category: "robotics",
    kind: "竞赛 / 感知执行",
    description: "结合寻线、目标识别和定时执行机构的竞赛机器人项目。",
    tags: ["STM32", "感知", "竞赛"],
    repo: "https://github.com/HereOvO/Line-inspection-and-target-shooting",
    role: "系统集成",
    stack: "C / 实时 I/O",
    status: "已完成",
    context: "这是一个受时间限制的竞赛系统，感知、决策和执行动作必须在压力下保持一致。",
    details: [
      "把寻线行为和打靶动作放在同一套控制流程里。",
      "将竞赛规则转化为明确的状态切换和硬件动作。",
      "为后续整理调参记录、失效案例和测试过程提供了基础。"
    ]
  },
  {
    id: "single-usb-burning-for-ab-partition",
    title: "单 USB A/B 分区烧录",
    category: "firmware",
    kind: "固件 / 启动流程",
    description: "面向 STM32F407 A/B 分区的单 USB 烧录流程，也为 OTA 式部署留下空间。",
    tags: ["STM32F407", "Bootloader", "A/B"],
    repo: "https://github.com/HereOvO/Single-USB-burning-for-AB-partition",
    role: "启动与烧录流程",
    stack: "C / STM32",
    status: "可运行",
    context: "这个实验关注如何把固件部署做得更简单、更稳，让两个应用分区成为正常启动流程的一部分。",
    details: [
      "目标平台是带双应用分区的 STM32F407VET6 系统。",
      "围绕单 USB 连接组织烧录和切换流程。",
      "为后续镜像校验、回滚和外设辅助 OTA 打基础。"
    ]
  },
  {
    id: "desktop-wallpaper-display",
    title: "桌面壁纸显示器",
    category: "tools",
    kind: "工具 / 硬件原型",
    description: "一个把动态视觉内容放到桌面实体设备里的小型显示项目。",
    tags: ["STM32", "显示", "硬件"],
    repo: "https://github.com/HereOvO/Desktop-wallpaper-display",
    role: "设备原型",
    stack: "C / 嵌入式显示",
    status: "实验",
    context: "这是一个更小的硬件项目，但同样关注如何把代码变成看得见、能使用的实体设备。",
    details: [
      "探索适合桌面环境的小尺寸显示设备。",
      "把固件、显示驱动和简单产品边界放在一起验证。",
      "可以作为 UI、图像处理和设备封装的小型试验平台。"
    ]
  }
];

const awards = [
  {
    year: "2025",
    title: "AIC 全国赛一等奖",
    event: "AIC 相关全国大学生竞赛",
    level: "国家级 / 一等奖"
  },
  {
    year: "2026",
    title: "全国大学生物联网设计大赛",
    event: "全国决赛",
    level: "国家级 / 二等奖"
  },
  {
    year: "2026",
    title: "中国大学生服务外包创新创业大赛",
    event: "全国赛",
    level: "国家级 / 三等奖"
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
        <a class="card-link" href="project.html?id=${project.id}">详情 <i data-lucide="arrow-up-right"></i></a>
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

function renderAwards() {
  const grid = document.querySelector("#award-grid");
  if (!grid) return;
  grid.innerHTML = awards.map((award, index) => `
    <article class="award-card">
      <div class="award-top">
        <span class="award-number">0${index + 1}</span>
        <span class="award-year">${award.year}</span>
      </div>
      <div class="award-seal" aria-hidden="true"><i data-lucide="award"></i></div>
      <p class="award-level">${award.level}</p>
      <h3>${award.title}</h3>
      <p class="award-event">${award.event}</p>
      <span class="award-note"><i data-lucide="shield-check"></i> 仅展示获奖信息</span>
    </article>
  `).join("");
  iconRefresh();
}

function renderDetail() {
  const target = document.querySelector("#project-detail");
  if (!target) return;
  const id = new URLSearchParams(window.location.search).get("id") || projects[0].id;
  const project = projects.find((item) => item.id === id) || projects[0];
  document.title = `${project.title} / HereOvO`;
  target.innerHTML = `
    <p class="eyebrow">${project.kind}</p>
    <h1 class="detail-title">${project.title}</h1>
    <p class="detail-description">${project.description}</p>
    <div class="detail-meta">
      <div><span>角色</span><strong>${project.role}</strong></div>
      <div><span>技术栈</span><strong>${project.stack}</strong></div>
      <div><span>状态</span><strong>${project.status}</strong></div>
    </div>
    <div class="detail-body">
      <div>
        <h2>这个项目在验证什么。</h2>
        <p>${project.context}</p>
        <p>这个详情页会保持简洁，具体实现、硬件变化和后续迭代仍以源仓库为准。</p>
        <a class="button button-primary" href="${project.repo}" target="_blank" rel="noreferrer">打开仓库 <i data-lucide="github"></i></a>
      </div>
      <aside class="detail-aside">
        <h3>工作笔记</h3>
        <ul>${project.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>
        <a class="text-link" href="${project.repo}" target="_blank" rel="noreferrer">查看源码 <i data-lucide="arrow-up-right"></i></a>
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
  renderAwards();
  renderDetail();
  setupNavigation();
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
  iconRefresh();
});
