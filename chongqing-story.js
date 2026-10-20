// Restore the original case-study composition: a concise chapter rail and
// complete, readable evidence boards. The five chapters tell one clear story.
document.querySelector('.case-story')?.remove();

const navigation = document.querySelector('.case-nav');
const chapters = document.querySelector('.case-chapters');

if (navigation && chapters) {
  navigation.innerHTML = `
    <p>CASE CONTENTS<br><span>案例内容</span></p>
    <a class="is-active" href="#brief"><b>01</b> Brief <small>需求是什么</small></a>
    <a href="#find"><b>02</b> Find <small>我发现了什么问题</small></a>
    <a href="#decision"><b>03</b> Decide <small>为什么这样设计</small></a>
    <a href="#ai"><b>04</b> AI Co-pilot <small>AI 帮我提高了什么</small></a>
    <a href="#outcome"><b>05</b> Outcome <small>最终结果</small></a>`;

  const screen = (file, title, cn) => `
    <button class="screen-tile" type="button" data-preview="assets/chongqing/${file}" data-title="${title}" data-cn="${cn}">
      <img src="assets/chongqing/${file}" alt="重庆约玩 ${cn}">
      <span>${title}<small>${cn}</small></span>
    </button>`;

  chapters.innerHTML = `
    <article class="case-chapter" id="brief" data-chapter data-reveal>
      <header><p class="chapter-number">01</p><div><p class="eyebrow">PROJECT POSITIONING / 项目定位</p><h2>A calmer way to<br><em>connect locally.</em></h2><p class="chapter-cn">调研购物狂、粗门等重庆本地社交产品后，我发现分类、广告与文字信息过密，用户很难快速决定下一步。重庆约玩以“少干扰的一站式活动社交”为定位：用兴趣驱动的首页、附近活动与轻量发布，让用户更快发现、发起和参与；同时以注册规范、敏感词限制与告警机制建立安全边界。</p></div></header>
      <section class="screen-collection"><header><p class="eyebrow">ONBOARDING / 欢迎与准备</p><h3>Set context before action <span>欢迎页 · 兴趣选择 · 权限开启</span></h3><p>先确认兴趣与必要权限，再将用户带入适合自己的本地活动场景。</p></header><div class="screen-wall core-wall">${screen('welcome/welcome-01.webp','Welcome','欢迎页')}${screen('welcome/welcome-04.webp','Interests','兴趣选择')}${screen('welcome/welcome-05.webp','Permission','权限开启')}</div></section>
    </article>

    <article class="case-chapter" id="find" data-chapter data-reveal>
      <header><p class="chapter-number">02</p><div><p class="eyebrow">FIND / 我发现了什么问题</p><h2>Deciding to join should feel <em>easy.</em></h2><p class="chapter-cn">当搜索、筛选、参与者和活动详情分散时，用户很难在短时间内完成“这件事值不值得参加”的判断。</p></div></header>
      <section class="screen-collection"><header><p class="eyebrow">DECISION FRICTION / 决策阻力</p><h3>Search, people, details <span>搜索筛选 · 参与者 · 活动详情</span></h3><p>把筛选条件、共同参与的人与活动关键信息放在可连续阅读的位置，降低判断成本。</p></header><div class="screen-wall core-wall">${screen('screen-04.webp','Explore','搜索与筛选')}${screen('screen-05.webp','People','参与者')}${screen('screen-07.webp','Activity detail','活动详情')}</div></section>
    </article>

    <article class="case-chapter" id="decision" data-chapter data-reveal>
      <header><p class="chapter-number">03</p><div><p class="eyebrow">DESIGN DECISION / 为什么这样设计</p><h2>Turn intent into a <em>shorter path.</em></h2><p class="chapter-cn">首页聚焦发现，活动列表用于比较，地图帮助判断距离，同好匹配让“参加活动”自然延续为“建立连接”。</p></div></header>
      <section class="screen-collection"><header><p class="eyebrow">CORE EXPERIENCE / 核心体验</p><h3>Discover, explore, locate, connect <span>首页发现 · 活动列表 · 地图 · 同好匹配</span></h3><p>每个页面只承担一个明确动作，并通过相邻入口串成从发现到参与的连续路径。</p></header><div class="screen-wall">${screen('screen-home.webp','Home','首页发现')}${screen('screen-04.webp','Explore','活动列表')}${screen('screen-02.webp','Map','附近地图')}${screen('screen-03.webp','Match','同好匹配')}</div></section>
    </article>

    <article class="case-chapter" id="ai" data-chapter data-reveal>
      <header><p class="chapter-number">04</p><div><p class="eyebrow">AI CO-PILOT / AI 帮我提高了什么</p><h2>Use AI to make the work<br><em>more deliberate.</em></h2><p class="chapter-cn">AI 不是替我决定页面，而是帮助我更快完成需求梳理、信息校对和规范检查，把更多时间留给设计判断。</p></div></header>
      <div class="brief-evidence"><div class="brief-card"><span>REAL USE / 真实使用方式</span><strong>Research → brief → structure → QA</strong><p>我先将调研记录和需求对话整理成需求梳理稿，再用 AI 对照用户旅程补全缺失页面、归类功能优先级；进入设计阶段后，以信息架构和规范画板为检查基准，复核组件、文案层级、间距与状态。最终的取舍由我结合项目目标完成。</p></div><div class="brief-list"><p><b>01</b><span>需求梳理稿</span><small>把零散调研与沟通内容归纳成范围、场景和优先级。</small></p><p><b>02</b><span>信息架构</span><small>用用户路径检查搜索、参与和连接之间是否形成闭环。</small></p><p><b>03</b><span>规范画板</span><small>以颜色、文字、组件与布局规则提升页面的一致性和 QA 效率。</small></p></div></div>
      <figure class="evidence-board system-board"><img src="assets/chongqing/design-system-spec.svg" alt="重庆约玩设计规范画板"><figcaption>DESIGN SYSTEM / 设计规范：作为页面设计与 UI QA 的共同检查基准</figcaption></figure>
    </article>

    <article class="case-chapter screens-chapter" id="outcome" data-chapter data-reveal>
      <header><p class="chapter-number">05</p><div><p class="eyebrow">OUTCOME / 最终结果</p><h2>One loop, ready<br>for <em>real participation.</em></h2><p class="chapter-cn">首页发现、消息连接、创建活动与活动详情共同形成“发现—沟通—发起—参与”的闭环。</p></div></header>
      <section class="screen-collection"><header><p class="eyebrow">THE COMPLETE LOOP / 完整闭环</p><h3>Discover to participate <span>首页 · 消息 · 创建活动 · 活动详情</span></h3><p>作品的最终呈现不是孤立页面，而是一条让用户可以自然走完、也愿意再次开始的活动路径。</p></header><div class="screen-wall">${screen('screen-home.webp','Home','首页发现')}${screen('screen-01.webp','Messages','消息连接')}${screen('screen-06.webp','Create','创建活动')}${screen('screen-07.webp','Activity detail','活动详情')}</div></section>
      <p class="screens-note">点击任意页面可进入高清预览，并使用左右方向键切换。</p>
    </article>`;

  const railLinks = [...navigation.querySelectorAll('a')];
  const storyChapters = [...chapters.querySelectorAll('[data-chapter]')];
  railLinks.forEach((link) => link.addEventListener('click', () => {
    railLinks.forEach((item) => item.classList.toggle('is-active', item === link));
  }));
  const railObserver = new IntersectionObserver((entries) => {
    const active = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!active) return;
    railLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${active.target.id}`));
  }, { rootMargin: '-22% 0px -60% 0px', threshold: [0.1, 0.35] });
  storyChapters.forEach((chapter) => railObserver.observe(chapter));

  const modal = document.querySelector('#screen-modal');
  const tiles = [...chapters.querySelectorAll('.screen-tile')];
  let current = 0;
  const showPreview = (index) => {
    current = (index + tiles.length) % tiles.length;
    const tile = tiles[current];
    modal.querySelector('#modal-image').src = tile.dataset.preview;
    modal.querySelector('#modal-image').alt = tile.querySelector('img').alt;
    modal.querySelector('#modal-caption').textContent = `${tile.dataset.title} / ${tile.dataset.cn} · ${String(current + 1).padStart(2, '0')} / ${String(tiles.length).padStart(2, '0')}`;
  };
  tiles.forEach((tile, index) => tile.addEventListener('click', () => { showPreview(index); modal.showModal(); }));
  modal.querySelector('.modal-close').addEventListener('click', () => modal.close());
  modal.querySelector('.modal-prev').addEventListener('click', () => showPreview(current - 1));
  modal.querySelector('.modal-next').addEventListener('click', () => showPreview(current + 1));
  modal.addEventListener('click', (event) => { if (event.target === modal) modal.close(); });
  document.addEventListener('keydown', (event) => {
    if (!modal.open) return;
    if (event.key === 'ArrowLeft') showPreview(current - 1);
    if (event.key === 'ArrowRight') showPreview(current + 1);
  });
}
