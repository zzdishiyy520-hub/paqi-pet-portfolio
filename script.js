const stage = document.querySelector('.card-stage');
const cards = [...document.querySelectorAll('.work-card')];
const cat = document.querySelector('.cat-wrap');

stage.addEventListener('pointermove', (event) => {
  const rect = stage.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - .5;
  const y = (event.clientY - rect.top) / rect.height - .5;
  cards.forEach((card, index) => {
    const angle = Number(card.dataset.angle);
    const drift = (index - 2) * x * 7;
    card.style.setProperty('--drift-x', `${drift}px`);
    card.style.setProperty('--drift-y', `${y * 9}px`);
    card.style.setProperty('--drift-r', `${x * 2 - angle}deg`);
  });
});

stage.addEventListener('pointerleave', () => {
  cards.forEach(card => {
    card.style.removeProperty('--drift-x');
    card.style.removeProperty('--drift-y');
    card.style.removeProperty('--drift-r');
  });
});

window.addEventListener('pointermove', (event) => {
  const x = event.clientX / window.innerWidth - .5;
  cat.style.transform = `translateX(calc(-50% + ${x * 18}px))`;
}, { passive:true });

const viewLinks = [...document.querySelectorAll('[data-view]')];
const panels = [...document.querySelectorAll('[data-view-panel]')];
const processPanel = document.querySelector('.process-view');
const steps = [...document.querySelectorAll('.step')];
const arts = [...document.querySelectorAll('.canvas-art')];
const indexMain = document.querySelector('.canvas-index');
const copy = document.querySelector('.workflow-copy');
const nextStep = document.querySelector('.next-step');
const wireRail = document.querySelector('.wire-rail');
const prototypeDots = [...document.querySelectorAll('.prototype-dots i')];
const prototypeLabel = document.querySelector('.prototype-label');
const briefStage = document.querySelector('.brief-stage');
const briefPrompt = document.querySelector('.brief-prompt');
const briefResponse = document.querySelector('.brief-response');
const briefGoals = [document.querySelector('.brief-goal-a'), document.querySelector('.brief-goal-b'), document.querySelector('.brief-goal-c')];
const stepContent = [
  ['01 / INPUT', '需求文档', 'AI requirement dialogue', '先通过 AI 对话收敛需求，再将核心目标转译为首页低保真原型与可验证的产品方向。', 'AI conversation / Extracted goals / Low-fi prototype'],
  ['02 / STRUCTURE', '信息架构', 'Information architecture', '用“发现 → 浏览 → 加入”组织核心路径，活动详情承接所有关键决策。', 'Home / Categories / Activity details / Join flow'],
  ['03 / FOUNDATION', '设计系统', 'Design system', '以舒缓绿色、浅色表面和圆角卡片建立轻松且可信赖的社交氛围。', 'Brand color / Type scale / Cards / Navigation'],
  ['04 / COMPOSE', '页面设计', 'Interface design', '围绕发现、社交与报名三类关键场景展开页面设计，形成完整的线下活动体验闭环。', 'Home discovery / Messages / Activity detail'],
  ['05 / REFINE', 'UI 审查', 'UI review', '围绕活动信息层级、人数状态与报名行动进行最终校准，降低加入决策成本。', 'Content hierarchy / Social proof / Primary action']
];
let activeStep = 0;
let wheelLocked = false;
let prototypeIndex = 0;
const prototypeStates = [
  ['HOME / DISCOVERY', '想做一个面向重庆年轻人的线下约玩产品，能快速找到附近活动和同好。', '我会先用地点、活动分类和精选推荐建立高效的发现入口。', ['Local discovery', 'Nearby events', 'Quick search']],
  ['MESSAGES / SOCIAL', '用户报名后，需要怎样自然地认识同行的人？', '将群聊、私信和未读消息纳入同一社交通道，降低破冰门槛。', ['Group chat', 'New friends', 'Message states']],
  ['EXPLORE / FILTER', '用户如何快速筛选符合自己时间与兴趣的活动？', '通过兴趣分类与轻量筛选，把选择成本留在最短路径内。', ['Interest tags', 'Activity filter', 'Clear status']],
  ['PROFILE / TRUST', '怎样让陌生人线下约玩更有信任感？', '完善个人资料、兴趣与活动记录，提供必要的社交信号。', ['Profile', 'Activity history', 'Social proof']],
  ['DETAIL / JOIN', '活动详情页最重要的转化动作是什么？', '将时间、地点、人数与报名入口集中呈现，让用户安心加入。', ['Event details', 'Capacity', 'Join action']]
];

function setView(name) {
  panels.forEach(panel => panel.classList.toggle('is-active', panel.dataset.viewPanel === name));
  viewLinks.forEach(link => link.classList.toggle('active', link.dataset.view === name));
  if (name === 'process') setStep(activeStep);
}

function setStep(step) {
  activeStep = (step + steps.length) % steps.length;
  const [number, title, english, summary, output] = stepContent[activeStep];
  steps.forEach((item, index) => item.classList.toggle('is-current', index === activeStep));
  arts.forEach((art, index) => art.classList.toggle('is-visible', index === activeStep));
  indexMain.innerHTML = `0<span>${activeStep + 1}</span> / 05`;
  copy.querySelector('.copy-number').textContent = number;
  copy.querySelector('h1').textContent = title;
  copy.querySelector('h2').textContent = english;
  copy.querySelector('.copy-summary').textContent = summary;
  copy.querySelector('.deliverable strong').textContent = output;
}

viewLinks.forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  setView(link.dataset.view);
}));
steps.forEach(step => step.addEventListener('click', () => setStep(Number(step.dataset.step))));
nextStep.addEventListener('click', () => setStep(activeStep + 1));

window.addEventListener('wheel', event => {
  if (!processPanel.classList.contains('is-active') || wheelLocked || window.innerWidth < 621) return;
  if (Math.abs(event.deltaY) < 12) return;
  event.preventDefault();
  wheelLocked = true;
  setStep(activeStep + (event.deltaY > 0 ? 1 : -1));
  window.setTimeout(() => { wheelLocked = false; }, 520);
}, { passive:false });

function setPrototype(index) {
  prototypeIndex = (index + prototypeStates.length) % prototypeStates.length;
  const [label, prompt, response, goals] = prototypeStates[prototypeIndex];
  // The wireframes move continuously in their own viewport.  This class keeps
  // the visible treatment and the accompanying AI brief in the same state.
  wireRail?.querySelectorAll('.mini-wire').forEach((frame, frameIndex) => {
    frame.classList.toggle('is-active-wire', frameIndex === prototypeIndex);
  });
  prototypeDots.forEach((dot, dotIndex) => dot.classList.toggle('is-current', dotIndex === prototypeIndex));
  prototypeLabel.textContent = label;
  briefStage.textContent = `0${prototypeIndex + 1} / 05`;
  briefPrompt.textContent = prompt;
  briefResponse.textContent = response;
  briefGoals.forEach((goal, goalIndex) => goal.textContent = goals[goalIndex]);
}

window.setInterval(() => {
  if (processPanel.classList.contains('is-active') && activeStep === 0) setPrototype(prototypeIndex + 1);
}, 3200);

const workflowCanvas = document.querySelector('.workflow-canvas');
workflowCanvas.addEventListener('pointermove', event => {
  const bounds = workflowCanvas.getBoundingClientRect();
  workflowCanvas.style.setProperty('--glow-x', `${event.clientX - bounds.left}px`);
  workflowCanvas.style.setProperty('--glow-y', `${event.clientY - bounds.top}px`);
  workflowCanvas.classList.add('is-glowing');
});
workflowCanvas.addEventListener('pointerleave', () => workflowCanvas.classList.remove('is-glowing'));

const architectureArt = document.querySelector('.map-art');
if (architectureArt) {
  architectureArt.innerHTML = `
    <div class="architecture-case">
      <div class="architecture-kicker">END-TO-END EXPERIENCE LOOP</div>
      <div class="architecture-loop">
        <article class="arch-node welcome"><b>01</b><strong>Welcome</strong><small>First impression</small></article>
        <article class="arch-node account"><b>02</b><strong>Account</strong><small>Log in / Sign up</small></article>
        <article class="arch-node interests"><b>03</b><strong>Interests</strong><small>Choose preferences</small></article>
        <article class="arch-node permissions"><b>04</b><strong>Permission</strong><small>Location / Notice</small></article>
        <article class="arch-node community"><b>05</b><strong>Community</strong><small>Discover / Meet</small></article>
        <article class="arch-node publish"><b>06</b><strong>Activity</strong><small>Create / Join / Manage</small></article>
        <span class="arch-arrow arrow-a">→</span><span class="arch-arrow arrow-b">→</span><span class="arch-arrow arrow-c">→</span><span class="arch-arrow arrow-d">→</span>
      </div>
      <div class="architecture-screens">
        <figure><img src="assets/chongqing/screen-home.webp" alt="Discover activities" /><figcaption>DISCOVER</figcaption></figure>
        <figure><img src="assets/chongqing/screen-01.webp" alt="Messages and social connection" /><figcaption>CONNECT</figcaption></figure>
        <figure><img src="assets/chongqing/screen-07.webp" alt="Activity details and joining" /><figcaption>JOIN</figcaption></figure>
      </div>
      <div class="architecture-note"><span>CORE LOOP</span> Discover → Connect → Participate → Return</div>
    </div>`;
}

const bilingualMapItems = [
  ['01 / Welcome', '\u6b22\u8fce\u4e0e\u5f15\u5bfc', 'WELCOME / ACCOUNT \u6b22\u8fce\u4e0e\u8d26\u6237'],
  ['02 / Account', '\u767b\u5f55\u4e0e\u6ce8\u518c', 'ACCOUNT SETUP \u8d26\u6237\u5efa\u7acb'],
  ['03 / Interests', '\u5174\u8da3\u9009\u62e9', 'INTERESTS \u5174\u8da3\u504f\u597d'],
  ['04 / Permission', '\u6743\u9650\u5f00\u542f', 'LOCATION ACCESS \u4f4d\u7f6e\u4e0e\u901a\u77e5'],
  ['05 / Community', '\u793e\u533a\u53d1\u73b0\u4e0e\u793e\u4ea4', 'DISCOVER & CONNECT \u53d1\u73b0\u4e0e\u8fde\u63a5'],
  ['06 / Activity', '\u521b\u5efa\u3001\u62a5\u540d\u4e0e\u7ba1\u7406', 'JOIN & PARTICIPATE \u53c2\u4e0e\u4e0e\u62a5\u540d']
];
document.querySelectorAll('.map-point').forEach((point, index) => {
  const [english, chinese, caption] = bilingualMapItems[index];
  point.querySelector(':scope > span').innerHTML = `<b>${english}</b><small>${chinese}</small>`;
  point.querySelector('.map-preview figcaption').textContent = caption;
});
document.querySelector('.map-kicker')?.replaceChildren('PRODUCT EXPERIENCE MAP / ', document.createTextNode('\u4ea7\u54c1\u4f53\u9a8c\u5730\u56fe'));
document.querySelector('.map-legend')?.replaceChildren('CORE LOOP / \u6838\u5fc3\u95ed\u73af  Discover → \u53d1\u73b0  ·  Connect → \u8fde\u63a5  ·  Participate → \u53c2\u4e0e  ·  Return → \u56de\u6d41');

const reviewArt = document.querySelector('.review-art');
if (reviewArt) {
  reviewArt.innerHTML = `
    <section class="audit-station" aria-label="UI review station">
      <div class="audit-head"><span>UI REVIEW / \u8bbe\u8ba1\u5ba1\u67e5</span><b>03 CHECKS</b></div>
      <div class="audit-list">
        <button class="audit-item is-selected" type="button" data-review="hierarchy"><i>01</i><span><strong>Content hierarchy</strong><small>\u6d3b\u52a8\u4fe1\u606f\u5c42\u7ea7</small></span><em>View</em></button>
        <button class="audit-item" type="button" data-review="proof"><i>02</i><span><strong>Social proof</strong><small>\u4e3b\u7406\u4eba\u4e0e\u4eba\u6570\u72b6\u6001</small></span><em>View</em></button>
        <button class="audit-item" type="button" data-review="action"><i>03</i><span><strong>Primary action</strong><small>\u62a5\u540d\u884c\u52a8\u4e0e\u8f6c\u5316</small></span><em>View</em></button>
      </div>
      <div class="audit-device"><img src="assets/chongqing/screen-07.webp" alt="Activity detail page under UI review" /><span class="audit-focus"></span><b class="audit-pin">01</b></div>
      <div class="audit-result"><span class="audit-result-label">REVIEW FINDING / \u5ba1\u67e5\u7ed3\u8bba</span><strong class="audit-result-title">Content hierarchy</strong><p class="audit-result-copy">\u4f18\u5148\u5448\u73b0\u6d3b\u52a8\u6807\u9898\u3001\u65f6\u95f4\u4e0e\u5730\u70b9\uff0c\u8ba9\u7528\u6237\u5728\u51b3\u7b56\u524d\u5feb\u901f\u83b7\u5f97\u5173\u952e\u4fe1\u606f\u3002</p><div class="audit-status"><b>PASS</b><span>Clarity improved</span></div></div>
    </section>`;

  const auditContent = {
    hierarchy: ['01', 'Content hierarchy', '\u4f18\u5148\u5448\u73b0\u6d3b\u52a8\u6807\u9898\u3001\u65f6\u95f4\u4e0e\u5730\u70b9\uff0c\u8ba9\u7528\u6237\u5728\u51b3\u7b56\u524d\u5feb\u901f\u83b7\u5f97\u5173\u952e\u4fe1\u606f\u3002', 'focus-hierarchy'],
    proof: ['02', 'Social proof', '\u8865\u5145\u4e3b\u7406\u4eba\u3001\u5df2\u62a5\u540d\u4eba\u6570\u4e0e\u5269\u4f59\u540d\u989d\uff0c\u964d\u4f4e\u53c2\u52a0\u7ebf\u4e0b\u6d3b\u52a8\u7684\u4e0d\u786e\u5b9a\u6027\u3002', 'focus-proof'],
    action: ['03', 'Primary action', '\u5c06\u62a5\u540d\u6309\u94ae\u56fa\u5b9a\u4e8e\u89c6\u89c9\u7ec8\u70b9\uff0c\u8ba9\u7528\u6237\u5728\u9605\u8bfb\u5b8c\u4fe1\u606f\u540e\u7acb\u5373\u5b8c\u6210\u884c\u52a8\u3002', 'focus-action']
  };
  const setAudit = (key) => {
    const [number, title, copy, focusClass] = auditContent[key];
    reviewArt.querySelectorAll('.audit-item').forEach(item => item.classList.toggle('is-selected', item.dataset.review === key));
    reviewArt.querySelector('.audit-focus').className = `audit-focus ${focusClass}`;
    reviewArt.querySelector('.audit-pin').textContent = number;
    reviewArt.querySelector('.audit-result-title').textContent = title;
    reviewArt.querySelector('.audit-result-copy').textContent = copy;
  };
  reviewArt.querySelectorAll('.audit-item').forEach(item => {
    const activate = () => setAudit(item.dataset.review);
    item.addEventListener('mouseenter', activate);
    item.addEventListener('focus', activate);
    item.addEventListener('click', activate);
  });
  setAudit('hierarchy');
}

if (architectureArt) {
  architectureArt.innerHTML = `
    <div class="architecture-case map-case">
      <p class="map-kicker">PRODUCT EXPERIENCE MAP / HOVER A NODE</p>
      <svg class="map-routes" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M 11 30 C 24 17, 29 37, 42 29 S 58 16, 65 35 S 81 38, 89 23" />
        <path d="M 42 29 C 42 52, 50 48, 63 60 S 74 81, 89 72" />
      </svg>
      <span class="map-route-label label-start">ONBOARD</span><span class="map-route-label label-core">SOCIAL LOOP</span><span class="map-route-label label-return">RETURN</span>
      <button class="map-point point-welcome" type="button"><i></i><span>01 / Welcome<small>First impression</small></span><figure class="map-preview"><img src="assets/chongqing/architecture-social.webp" alt="Welcome and account flow" /><figcaption>WELCOME / ACCOUNT</figcaption></figure></button>
      <button class="map-point point-account" type="button"><i></i><span>02 / Account<small>Log in / Sign up</small></span><figure class="map-preview"><img src="assets/chongqing/architecture-social.webp" alt="Account and profile screens" /><figcaption>ACCOUNT SETUP</figcaption></figure></button>
      <button class="map-point point-interests" type="button"><i></i><span>03 / Interests<small>Choose preferences</small></span><figure class="map-preview"><img src="assets/chongqing/screen-home.webp" alt="Interest-led activity discovery" /><figcaption>INTERESTS</figcaption></figure></button>
      <button class="map-point point-permissions" type="button"><i></i><span>04 / Permission<small>Location / Notice</small></span><figure class="map-preview"><img src="assets/chongqing/architecture-social.webp" alt="Nearby map experience" /><figcaption>LOCATION ACCESS</figcaption></figure></button>
      <button class="map-point point-community" type="button"><i></i><span>05 / Community<small>Discover / Meet</small></span><figure class="map-preview"><img src="assets/chongqing/screen-01.webp" alt="Social messages screen" /><figcaption>DISCOVER &amp; CONNECT</figcaption></figure></button>
      <button class="map-point point-activity" type="button"><i></i><span>06 / Activity<small>Create / Join / Manage</small></span><figure class="map-preview"><img src="assets/chongqing/screen-07.webp" alt="Activity details and join page" /><figcaption>JOIN &amp; PARTICIPATE</figcaption></figure></button>
      <div class="map-legend"><b>CORE LOOP</b> Discover <em>→</em> Connect <em>→</em> Participate <em>→</em> Return</div>
    </div>`;
}
const finalBilingualMapItems = [
  ['01 / Welcome', '\u6b22\u8fce\u4e0e\u5f15\u5bfc', 'WELCOME / ACCOUNT \u6b22\u8fce\u4e0e\u8d26\u6237'],
  ['02 / Account', '\u767b\u5f55\u4e0e\u6ce8\u518c', 'ACCOUNT SETUP \u8d26\u6237\u5efa\u7acb'],
  ['03 / Interests', '\u5174\u8da3\u9009\u62e9', 'INTERESTS \u5174\u8da3\u504f\u597d'],
  ['04 / Permission', '\u6743\u9650\u5f00\u542f', 'LOCATION ACCESS \u4f4d\u7f6e\u4e0e\u901a\u77e5'],
  ['05 / Community', '\u793e\u533a\u53d1\u73b0\u4e0e\u793e\u4ea4', 'DISCOVER & CONNECT \u53d1\u73b0\u4e0e\u8fde\u63a5'],
  ['06 / Activity', '\u521b\u5efa\u3001\u62a5\u540d\u4e0e\u7ba1\u7406', 'JOIN & PARTICIPATE \u53c2\u4e0e\u4e0e\u62a5\u540d']
];
document.querySelectorAll('.map-point').forEach((point, index) => {
  const [english, chinese, caption] = finalBilingualMapItems[index];
  point.querySelector(':scope > span').innerHTML = `<b>${english}</b><small>${chinese}</small>`;
  point.querySelector('.map-preview figcaption').textContent = caption;
});
document.querySelector('.map-kicker')?.replaceChildren('PRODUCT EXPERIENCE MAP / ', document.createTextNode('\u4ea7\u54c1\u4f53\u9a8c\u5730\u56fe'));
document.querySelector('.map-legend')?.replaceChildren('CORE LOOP / \u6838\u5fc3\u95ed\u73af  Discover → \u53d1\u73b0  ·  Connect → \u8fde\u63a5  ·  Participate → \u53c2\u4e0e  ·  Return → \u56de\u6d41');
const mapRouteLayer = document.querySelector('.map-routes');
if (mapRouteLayer) {
  mapRouteLayer.innerHTML = `<path d="M 4 22 C 10 21, 16 8, 23 10 S 34 29, 42 24 S 56 7, 63 10 S 65 51, 59 64 S 72 84, 81 79" />`;
}
const finalRouteLayer = document.querySelector('.map-routes');
if (finalRouteLayer) {
  finalRouteLayer.innerHTML = `<path d="M 5 44 L 16 12 L 42 12 L 71 21 L 71 43 L 44 73 L 77 74" />`;
}
const curvedRouteLayer = document.querySelector('.map-routes');
if (curvedRouteLayer) {
  const curve = 'M 5 44 C 9 35, 12 17, 16 12 C 25 8, 33 8, 42 12 C 52 18, 62 15, 71 21 C 75 36, 65 58, 44 73 C 55 70, 66 76, 77 74';
  curvedRouteLayer.innerHTML = `<path class="route-base" d="${curve}" /><path class="route-flow" d="${curve}" />`;
}
const hoverWorkflowNav = document.querySelector('.workflow-nav');
if (hoverWorkflowNav) {
  steps.forEach(step => {
    step.addEventListener('pointerenter', () => {
      if (window.matchMedia('(hover: hover)').matches) setStep(Number(step.dataset.step));
    });
  });
  hoverWorkflowNav.addEventListener('pointermove', event => {
    const rect = hoverWorkflowNav.getBoundingClientRect();
    hoverWorkflowNav.style.setProperty('--nav-glow-x', `${event.clientX - rect.left}px`);
    hoverWorkflowNav.style.setProperty('--nav-glow-y', `${event.clientY - rect.top}px`);
    hoverWorkflowNav.classList.add('is-glowing');
  });
  hoverWorkflowNav.addEventListener('pointerleave', () => hoverWorkflowNav.classList.remove('is-glowing'));
}

document.querySelectorAll('.work-card[data-href]').forEach((card) => {
  const openCase = () => { window.location.href = card.dataset.href; };
  card.addEventListener('click', openCase);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openCase();
    }
  });
});

document.querySelectorAll('[data-ryyes-target]').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    window.location.href = `ryyes.html#${button.dataset.ryyesTarget}`;
  });
  button.addEventListener('keydown', (event) => event.stopPropagation());
});
