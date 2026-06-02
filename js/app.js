(function() {
  const nav = document.getElementById("nav");
  const main = document.getElementById("main");

  // ---- Build Navigation ----
  KB.categories.forEach(cat => {
    const a = document.createElement("a");
    a.href = "#" + cat.id;
    a.dataset.id = cat.id;
    a.innerHTML = '<span class="icon">' + cat.icon + '</span>' + cat.name;
    nav.appendChild(a);
  });

  // Home link first
  const homeLink = document.createElement("a");
  homeLink.href = "#home";
  homeLink.dataset.id = "home";
  homeLink.innerHTML = '<span class="icon">🏠</span>首页';
  homeLink.classList.add("active");
  nav.insertBefore(homeLink, nav.firstChild);

  // ---- Render Functions ----
  function renderHome() {
    return `
      <div class="page active" id="page-home">
        <div class="welcome">
          <div class="big-avatar">徐</div>
          <h1>徐祎昌 · 个人知识库</h1>
          <p>软件工程（中外合作）· 学号 2318831<br>涵盖 Java / Vue3 / Python / C / MySQL / 软件测试 等方向的学习资料与项目归档</p>
        </div>
        <div class="stats">
          ${KB.home.stats.map(s => `
            <div class="stat-card">
              <div class="num">${s.num}</div>
              <div class="label">${s.label}</div>
            </div>
          `).join("")}
        </div>
        <div class="section" style="margin-bottom:24px">
          <a href="resume.html" style="display:block;background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;border-radius:10px;padding:24px 28px;text-decoration:none;transition:transform .2s,box-shadow .2s" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 24px rgba(37,99,235,.3)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
            <h3 style="font-size:18px;margin-bottom:4px">📋 个人简历</h3>
            <p style="font-size:14px;opacity:.85;margin:0">查看我的完整简历 · 支持打印和导出 PDF</p>
          </a>
        </div>
        <div class="section">
          <h2>知识分类</h2>
          <div class="cards">
            ${KB.categories.map(c => `
              <a class="card" href="#${c.id}" data-nav="${c.id}">
                <h3>${c.icon} ${c.name}</h3>
                <p>${c.desc}</p>
              </a>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }

  function renderCategory(id) {
    const cat = KB.categories.find(c => c.id === id);
    const data = KB[id];
    if (!data || !data.sections) return renderHome();

    let html = `<div class="page active" id="page-${id}">`;
    html += `<h1>${cat.icon} ${cat.name}</h1>`;
    html += `<p class="subtitle">${cat.desc}</p>`;

    data.sections.forEach(sec => {
      html += `<div class="section">`;
      html += `<h2>📂 ${sec.title}</h2>`;
      if (sec.path) {
        html += `<div class="breadcrumb">根路径：<span>${sec.path}</span></div>`;
      }
      sec.groups.forEach(group => {
        html += `<div class="file-group">`;
        html += `<h3>${group.title}</h3>`;
        html += `<ul class="file-list">`;
        group.items.forEach(item => {
          html += `
            <li>
              <span class="f-icon">${item.icon}</span>
              <div class="f-info">
                <div class="f-name">${item.name}</div>
                <div class="f-path">${item.path}</div>
                ${item.desc ? '<div style="font-size:12px;color:#94a3b8;margin-top:1px">' + item.desc + '</div>' : ''}
              </div>
            </li>
          `;
        });
        html += `</ul></div>`;
      });
      html += `</div>`;
    });

    html += `</div>`;
    return html;
  }

  // ---- Navigation ----
  function navigate(id) {
    // Update active nav link
    nav.querySelectorAll("a").forEach(a => a.classList.remove("active"));
    const link = nav.querySelector(`[data-id="${id}"]`);
    if (link) link.classList.add("active");

    // Render page
    main.innerHTML = id === "home" ? renderHome() : renderCategory(id);

    // Bind card clicks for navigation
    main.querySelectorAll("[data-nav]").forEach(el => {
      el.addEventListener("click", function(e) {
        e.preventDefault();
        navigate(this.dataset.nav);
        history.pushState(null, "", "#" + this.dataset.nav);
      });
    });
  }

  // ---- Hash Routing ----
  function handleHash() {
    const hash = location.hash.replace("#", "") || "home";
    const valid = KB.categories.find(c => c.id === hash);
    navigate(valid ? hash : "home");
  }

  window.addEventListener("hashchange", handleHash);

  // ---- Init ----
  handleHash();
})();
