const nav = document.querySelector('.case-nav');
if (nav) {
  const number = nav.querySelector('.project-no')?.textContent || '';
  nav.innerHTML = `
    <a class="case-brand" href="index.html#works"><strong>JIANG TINGXING</strong><span>UI DESIGNER × AI WORKFLOW</span></a>
    <a class="back-link" href="index.html#works">← WORKS <small>作品集</small></a>
    <span class="project-no">${number}</span>`;

  const backLink = nav.querySelector('.back-link');
  if (backLink) {
    backLink.setAttribute('aria-label', '返回个人作品集');
    backLink.innerHTML = '<span class="back-link-icon" aria-hidden="true">←</span><span class="back-link-copy"><b>BACK TO WORKS</b><small>返回作品集</small></span>';
  }
}

// Paqi Pet content is intentionally added here so it shares the case-page shell,
// reader navigation and image viewer used by every portfolio detail page.
if (document.body.classList.contains('theme-paqi')) {
  queueMicrotask(() => {
  if (!document.querySelector('#paqi-detail-style')) {
    const style = document.createElement('style');
    style.id = 'paqi-detail-style';
    style.textContent = `.theme-paqi .project-hero{background:radial-gradient(circle at 73% 25%,rgba(140,230,213,.78),transparent 34%),linear-gradient(135deg,#effcf9,#d8f5ef)}.theme-paqi .paqi-hero-screens{display:block!important;position:relative;overflow:hidden;padding:28px 31px!important;background:radial-gradient(circle at 50% 3%,rgba(255,255,255,.92),transparent 37%),linear-gradient(145deg,#cbf1e9,#93ded1)!important;cursor:default}.paqi-hero-copy{display:flex;justify-content:space-between;position:relative;z-index:3;color:#167e73;font-size:10px;font-weight:800;letter-spacing:.14em}.paqi-hero-copy strong{color:rgba(12,52,50,.62);font-weight:700}.paqi-hero-stack{position:absolute;inset:74px 7% 0;display:flex;align-items:flex-end;justify-content:center}.paqi-hero-card{position:relative;z-index:1;width:24%;margin-left:-6%;padding:0;border:3px solid rgba(255,255,255,.9);border-radius:18px;background:#fff;box-shadow:0 21px 39px rgba(13,89,78,.2);cursor:zoom-in;overflow:hidden;transform-origin:center bottom;transition:transform .34s cubic-bezier(.2,.9,.3,1),box-shadow .34s ease,filter .28s ease}.paqi-hero-card:first-child{margin-left:0}.paqi-hero-card img{display:block;width:100%;aspect-ratio:9/18.8;object-fit:cover}.paqi-hero-card small{display:block;padding:7px 8px;color:#147d72;background:#fff;font-size:8px;font-weight:800;letter-spacing:.07em;text-align:left}.paqi-hero-card.card-1{transform:rotate(-11deg) translateY(35px)}.paqi-hero-card.card-2{z-index:3;width:28%;transform:translateY(-14px)}.paqi-hero-card.card-3{z-index:2;transform:rotate(7deg) translateY(11px)}.paqi-hero-card.card-4{transform:rotate(13deg) translateY(38px)}.paqi-hero-stack:has(.paqi-hero-card:hover) .paqi-hero-card:not(:hover){filter:saturate(.55) brightness(.95);transform:translateY(18px) scale(.95)}.paqi-hero-card:hover,.paqi-hero-card:focus-visible{z-index:5;outline:0;transform:translateY(-25px) rotate(0)!important;box-shadow:0 31px 46px rgba(13,89,78,.27)}.paqi-hero-screens>p{position:absolute;z-index:4;right:25px;bottom:18px;margin:0;color:#147d72;font-size:9px;font-weight:750;letter-spacing:.08em}.paqi-brief-statement{grid-column:2;display:grid;gap:18px;max-width:650px;margin-top:55px;padding-top:25px;border-top:1px solid rgba(12,52,50,.15)}.paqi-brief-statement p{margin:0;color:rgba(12,52,50,.72);font-size:18px;line-height:1.75}.paqi-brief-statement span{color:#258d83;font-size:10px;font-weight:800;letter-spacing:.13em}.paqi-care-map,.paqi-system-board,.paqi-screen-explorer{grid-column:2;margin-top:44px}.paqi-care-map{padding:30px;border-radius:20px;background:linear-gradient(140deg,#e8faf5,#fff);box-shadow:0 23px 46px rgba(16,103,91,.11)}.paqi-map-title{color:#258d83;font-size:10px;font-weight:800;letter-spacing:.14em}.paqi-map-flow{display:grid;grid-template-columns:repeat(7,1fr);align-items:center;gap:7px;margin-top:31px}.paqi-map-flow article{min-height:155px;padding:17px 13px;border-radius:16px;background:#fff;box-shadow:0 10px 24px rgba(14,95,83,.09)}.paqi-map-flow article b{display:block;color:#258d83;font-size:9px;letter-spacing:.1em}.paqi-map-flow article strong{display:block;margin-top:30px;font-size:16px;letter-spacing:-.04em}.paqi-map-flow article span{display:block;margin-top:8px;color:rgba(12,52,50,.6);font-size:10px;line-height:1.5}.paqi-map-flow>i{color:#258d83;font-size:20px;font-style:normal;text-align:center}.paqi-care-map>p{margin:30px 0 0;color:rgba(12,52,50,.55);font-size:9px;font-weight:750;letter-spacing:.12em;text-align:right}.paqi-system-board{padding:31px;border-radius:20px;background:#0d423e;color:#f4fffb;box-shadow:0 23px 46px rgba(16,70,62,.2)}.paqi-swatches{display:grid;grid-template-columns:repeat(5,1fr);gap:9px}.paqi-swatches i{height:72px;border-radius:14px;background:#a7eadc}.paqi-swatches i:nth-child(2){background:#5bcfbc}.paqi-swatches i:nth-child(3){background:#258d83}.paqi-swatches i:nth-child(4){background:#0c3432}.paqi-swatches i:nth-child(5){background:#f6fcfa}.paqi-system-type{display:grid;grid-template-columns:1fr 210px;gap:28px;align-items:end;padding:27px 0;border-bottom:1px solid rgba(255,255,255,.18)}.paqi-system-type strong{font-size:clamp(28px,3vw,44px);letter-spacing:-.07em;line-height:.95}.paqi-system-type span{color:rgba(244,255,251,.68);font-size:11px;line-height:1.7}.paqi-system-rules{display:grid;grid-template-columns:repeat(3,1fr);gap:11px;margin-top:19px}.paqi-system-rules b{padding:14px;border-radius:12px;background:rgba(255,255,255,.1);font-size:12px}.paqi-system-rules small{display:block;margin-top:7px;color:rgba(244,255,251,.65);font-size:10px;font-weight:600}.paqi-screen-explorer{display:grid;grid-template-columns:180px minmax(0,1fr);gap:28px;border-top:1px solid rgba(12,52,50,.14);padding-top:20px}.paqi-version-tabs{display:grid;align-content:start;gap:7px}.paqi-version-tabs button{display:grid;grid-template-columns:48px 1fr;gap:7px;padding:14px 10px;border:0;border-left:2px solid transparent;background:transparent;color:rgba(12,52,50,.55);text-align:left;cursor:pointer;transition:transform .22s ease,color .22s ease,background .22s ease,border-color .22s ease}.paqi-version-tabs button b{color:#258d83;font-size:10px;letter-spacing:.12em}.paqi-version-tabs button small{font-size:12px;font-weight:760}.paqi-version-tabs button[aria-selected=true],.paqi-version-tabs button:hover,.paqi-version-tabs button:focus-visible{border-color:#258d83;background:#e4f7f2;color:#0c3432;outline:0;transform:translateX(4px)}.paqi-version-stage{min-width:0;opacity:0;transform:translateY(9px);transition:opacity .3s ease,transform .34s cubic-bezier(.2,.9,.3,1)}.paqi-version-stage.is-ready{opacity:1;transform:none}.paqi-version-stage header{display:grid;grid-template-columns:116px 1fr;gap:9px;align-items:baseline}.paqi-version-stage header p{margin:0;color:#258d83;font-size:10px;font-weight:800;letter-spacing:.14em}.paqi-version-stage header h3{margin:0;font-size:clamp(28px,3vw,44px);letter-spacing:-.065em;line-height:.95}.paqi-version-stage header span{grid-column:2;max-width:560px;margin-top:6px;color:rgba(12,52,50,.62);font-size:12px;line-height:1.65}.paqi-screen-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:13px;align-items:end;margin-top:27px;padding:26px 22px 22px;background:linear-gradient(135deg,#dff7f1,#f7fdfb)}.paqi-screen-card{position:relative;padding:0;border:0;background:transparent;text-align:left;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,.9,.3,1),filter .3s ease}.paqi-screen-card img{display:block;width:100%;border:3px solid #fff;border-radius:17px;box-shadow:0 14px 27px rgba(15,91,80,.18)}.paqi-screen-card small{display:block;margin:9px 2px 0;color:#258d83;font-size:8px;font-weight:800;letter-spacing:.06em}.paqi-screen-card.is-primary{transform:translateY(-18px)}.paqi-screen-grid:has(.paqi-screen-card:hover) .paqi-screen-card:not(:hover){filter:brightness(.94) saturate(.7);transform:translateY(5px) scale(.96)}.paqi-screen-card:hover,.paqi-screen-card:focus-visible{z-index:2;outline:0;transform:translateY(-15px) scale(1.04)!important}.paqi-screen-card:hover img,.paqi-screen-card:focus-visible img{box-shadow:0 28px 39px rgba(15,91,80,.27)}@media(max-width:900px){.paqi-brief-statement,.paqi-care-map,.paqi-system-board,.paqi-screen-explorer{grid-column:2}.paqi-map-flow{grid-template-columns:repeat(4,1fr)}.paqi-map-flow>i{display:none}.paqi-system-type{grid-template-columns:1fr}.paqi-screen-explorer{grid-template-columns:1fr}.paqi-version-tabs{grid-template-columns:repeat(2,minmax(0,1fr))}.paqi-screen-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:620px){.theme-paqi .paqi-hero-screens{padding:20px 13px!important}.paqi-hero-stack{inset:60px 0 0}.paqi-hero-card{width:26%;border-width:2px;border-radius:13px}.paqi-hero-card.card-2{width:31%}.paqi-hero-card small{display:none}.paqi-hero-screens>p{right:13px;bottom:13px;font-size:8px}.paqi-brief-statement{grid-column:1;margin-top:34px}.paqi-brief-statement p{font-size:15px}.paqi-care-map,.paqi-system-board,.paqi-screen-explorer{grid-column:2;margin-top:30px}.paqi-care-map{padding:19px}.paqi-map-flow{grid-template-columns:repeat(2,1fr);gap:8px;margin-top:20px}.paqi-map-flow article{min-height:120px;padding:12px}.paqi-map-flow article strong{margin-top:20px;font-size:14px}.paqi-system-board{padding:20px}.paqi-swatches i{height:45px;border-radius:10px}.paqi-system-type{gap:12px;padding:21px 0}.paqi-system-type strong{font-size:30px}.paqi-screen-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:23px 10px;padding:18px 14px}.paqi-version-stage header{display:block}.paqi-version-stage header h3{margin-top:10px;font-size:32px}.paqi-version-stage header span{display:block;margin-top:10px}.paqi-screen-card img{border-width:2px;border-radius:14px}}`;
    document.head.append(style);
  }
  if (!document.querySelector('#paqi-refinement-style')) {
    const refinement = document.createElement('style');
    refinement.id = 'paqi-refinement-style';
    refinement.textContent = `.theme-paqi .hero-copy .eyebrow{color:#147d72}.theme-paqi .hero-copy .intro{max-width:590px}.theme-paqi .hero-facts b{color:#147d72}.theme-paqi .paqi-screen-explorer{grid-template-columns:minmax(0,1fr);gap:28px;margin-top:44px;padding-top:0;border-top:0}.theme-paqi .paqi-release-label{margin:0 0 10px;color:#0c3432;font-size:10px;font-weight:800;letter-spacing:.14em}.theme-paqi .paqi-release-label span{margin-left:10px;color:#6b8581;font-size:11px;font-weight:650;letter-spacing:.04em}.theme-paqi .paqi-version-tabs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;padding:6px;border:1px solid rgba(12,52,50,.09);border-radius:16px;background:rgba(12,52,50,.06);box-shadow:0 14px 36px rgba(21,64,60,.08)}.theme-paqi .paqi-version-tabs button{min-height:74px;display:flex;align-items:center;gap:12px;padding:12px 14px;border:1px solid transparent;border-left:1px solid transparent;border-radius:11px;color:#315651;background:transparent;text-align:left;transform:none;transition:color .28s ease,background .28s ease,box-shadow .28s ease,transform .28s ease}.theme-paqi .paqi-version-tabs button b{display:grid;width:30px;height:30px;flex:0 0 30px;place-items:center;border-radius:50%;color:#147d72;background:rgba(20,125,114,.12);font-size:11px;letter-spacing:0}.theme-paqi .paqi-version-tabs button span{display:grid;gap:3px;min-width:0}.theme-paqi .paqi-version-tabs button strong{color:inherit;font-size:14px;letter-spacing:.01em;white-space:nowrap}.theme-paqi .paqi-version-tabs button small{color:#77908c;font-size:11px;line-height:1.25;letter-spacing:.01em}.theme-paqi .paqi-version-tabs button:hover{color:#0c3432;background:rgba(255,255,255,.7);transform:translateY(-1px)}.theme-paqi .paqi-version-tabs button:focus-visible{outline:3px solid rgba(20,125,114,.35);outline-offset:2px}.theme-paqi .paqi-version-tabs button[aria-selected="true"]{color:#fff;background:#0c3432;box-shadow:0 10px 20px rgba(12,52,50,.22);transform:translateY(-1px)}.theme-paqi .paqi-version-tabs button[aria-selected="true"] b{color:#0c3432;background:#b8f1eb}.theme-paqi .paqi-version-tabs button[aria-selected="true"] small{color:rgba(255,255,255,.72)}@media(max-width:620px){.theme-paqi .paqi-screen-explorer{margin-top:30px}.theme-paqi .paqi-version-tabs{grid-template-columns:1fr}.theme-paqi .paqi-version-tabs button{min-height:62px}}@media(prefers-reduced-motion:reduce){.theme-paqi .paqi-version-tabs button{transition:none}}`;
    document.head.append(refinement);
  }
  if (!document.querySelector('#paqi-gallery-style')) {
    const galleryStyle = document.createElement('style');
    galleryStyle.id = 'paqi-gallery-style';
      galleryStyle.textContent = `.paqi-gallery-toolbar{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:28px;padding:14px 16px;border-radius:14px;background:#e4f7f2}.paqi-gallery-toolbar p{margin:0;color:#315651;font-size:11px;line-height:1.5}.paqi-gallery-actions{display:flex;gap:8px;flex:0 0 auto}.paqi-gallery-actions button{min-height:38px;padding:0 15px;border:0;border-radius:999px;background:#0c3432;color:#fff;font:800 11px/1 inherit;cursor:pointer}.paqi-gallery-actions .is-secondary{display:none;background:#fff;color:#315651}.paqi-gallery-actions button:focus-visible{outline:3px solid rgba(20,125,114,.35);outline-offset:2px}.paqi-gallery-category{margin-top:34px}.paqi-gallery-category header{display:flex!important;grid-template-columns:none!important;align-items:end;justify-content:space-between;gap:14px;padding-bottom:12px;border-bottom:1px solid rgba(12,52,50,.12)}.paqi-gallery-category header h4{margin:0;color:#0c3432;font-size:20px;letter-spacing:-.02em}.paqi-gallery-category header span{display:block!important;grid-column:auto!important;margin:0!important;color:#6b8581!important;font-size:10px!important;font-weight:750;letter-spacing:.08em}.paqi-gallery-category .paqi-screen-grid{grid-template-columns:repeat(4,minmax(0,1fr));align-items:start;margin-top:14px;padding:18px}.paqi-gallery-category .paqi-screen-card{height:100%;padding:8px;border-radius:14px;background:rgba(255,255,255,.72)}.paqi-gallery-category .paqi-screen-card img{aspect-ratio:9/18.5;object-fit:cover}.paqi-gallery-category .paqi-screen-card small{min-height:30px;font-size:9px;line-height:1.45}.paqi-gallery-category .paqi-screen-card.is-primary{transform:none}.paqi-gallery-category .paqi-screen-grid:has(.paqi-screen-card:hover) .paqi-screen-card:not(:hover){transform:none}.paqi-sort-handle,.paqi-delete-card{display:none;position:absolute;z-index:3;place-items:center;border-radius:50%;color:#fff;font-size:14px;box-shadow:0 7px 18px rgba(12,52,50,.24)}.paqi-sort-handle{top:14px;right:14px;width:32px;height:32px;background:#0c3432;cursor:grab}.paqi-delete-card{top:14px;left:14px;width:32px;height:32px;border:0;background:#d84b4b;cursor:pointer}.paqi-delete-card:focus-visible{outline:3px solid rgba(216,75,75,.3);outline-offset:2px}.paqi-version-stage.is-sorting .paqi-gallery-actions .is-secondary,.paqi-version-stage.is-sorting .paqi-sort-handle,.paqi-version-stage.is-sorting .paqi-delete-card{display:grid}.paqi-version-stage.is-sorting .paqi-screen-card{cursor:grab}.paqi-version-stage.is-sorting .paqi-screen-card:hover{transform:none!important}.paqi-screen-card.is-dragging{opacity:.35;transform:scale(.96)!important}.paqi-screen-card.is-drop-target{outline:2px solid #258d83;outline-offset:3px}@media(max-width:900px){.paqi-gallery-category .paqi-screen-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:620px){.paqi-gallery-toolbar{align-items:flex-start;flex-direction:column}.paqi-gallery-actions{width:100%}.paqi-gallery-actions button{flex:1}.paqi-gallery-category{margin-top:28px}.paqi-gallery-category .paqi-screen-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 8px;padding:12px}.paqi-gallery-category header h4{font-size:18px}}`;
    document.head.append(galleryStyle);
  }
  const source = 'assets/projects/paqi-pet/';
  const brief = document.querySelector('#brief');
  const architecture = document.querySelector('#architecture');
  const system = document.querySelector('#system');
  const screens = document.querySelector('#screens');
  const heroStage = document.querySelector('.project-hero .hero-stage');
  const heroCopy = document.querySelector('.hero-copy');

  const openPaqiImage = (path) => {
    if (!viewer || !viewerImage) return;
    viewer.classList.remove('is-video');
    viewerImage.src = path;
    viewer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  if (heroCopy) {
    const eyebrow = heroCopy.querySelector('.eyebrow') || document.createElement('p');
    eyebrow.className = 'eyebrow';
    eyebrow.textContent = 'SELECTED WORK / PAQI PET';
    if (!eyebrow.parentNode) heroCopy.prepend(eyebrow);
    heroCopy.querySelector('h1').innerHTML = 'Paqi <span>Pet.</span>';
    const facts = heroCopy.querySelector('.hero-facts');
    if (facts) facts.innerHTML = '<div><b>FOCUS / 聚焦</b><span>Daily care · Health · Location</span></div><div><b>RELEASE / 版本</b><span>CN + Global mobile experience</span></div>';
    heroCopy.querySelector('.intro').innerHTML = 'A companion experience that makes every pet’s wellbeing<br>feel closer, clearer and easier to act on.<br>围绕日常陪伴、健康洞察与安心守护打造的智能宠物体验。';
  }

  if (heroStage) {
    const heroCards = [
      ['cn/home.webp', 'CN / 首页'],
      ['cn/health.webp', 'CN / 健康报告'],
      ['global/home.webp', 'GLOBAL / Home'],
      ['global/ai-care.webp', 'GLOBAL / AI Care']
    ];
    heroStage.classList.add('paqi-hero-screens');
    heroStage.dataset.viewImage = `${source}${heroCards[0][0]}`;
    heroStage.innerHTML = `<div class="paqi-hero-copy"><span>PAQI PET</span><strong>CN + GLOBAL</strong></div><div class="paqi-hero-stack">${heroCards.map(([file,label],index)=>`<button type="button" class="paqi-hero-card card-${index + 1}" data-view-image="${source}${file}" aria-label="查看${label}"><img src="${source}${file}" alt="${label}"><small>${label}</small></button>`).join('')}</div><p>Explore product screens</p>`;
    heroStage.querySelectorAll('[data-view-image]').forEach((button) => button.addEventListener('click', (event) => { event.stopPropagation(); openPaqiImage(button.dataset.viewImage); }));
  }

  if (brief) {
    brief.querySelector('.section-heading h2').innerHTML = 'A kinder view of<br><em>everyday care.</em>';
    brief.querySelector('.overview-grid').innerHTML = `
      <div><b>PRODUCT / 产品</b><p>Paqi Pet<br>帕奇宠</p></div>
      <div><b>ROLE / 设计范围</b><p>Product & interaction<br>产品与交互设计</p></div>
      <div><b>RELEASE / 双版本</b><p>CN + Global<br>国内与海外体验</p></div>`;
    const statement = document.createElement('div');
    statement.className = 'paqi-brief-statement';
    statement.innerHTML = `<p>宠物的日常状态，往往是零散、难以理解的。帕奇宠将设备数据、行为洞察与陪伴时刻收进一个轻盈、可亲近的日常入口。</p><span>FROM DEVICE SIGNALS TO DAILY REASSURANCE</span>`;
    brief.append(statement);
  }

  if (architecture) {
    architecture.querySelector('.section-heading h2').innerHTML = 'One pet, one<br><em>connected care loop.</em>';
    architecture.querySelector('p')?.remove();
    const map = document.createElement('div');
    map.className = 'paqi-care-map';
    map.innerHTML = `<div class="paqi-map-title">DAILY CARE LOOP / 日常守护闭环</div><div class="paqi-map-flow"><article><b>01</b><strong>Sense</strong><span>项圈与设备采集行为信号</span></article><i>→</i><article><b>02</b><strong>Understand</strong><span>健康、情绪与位置被清晰解读</span></article><i>→</i><article><b>03</b><strong>Respond</strong><span>提醒、问诊与行动建议落到日常</span></article><i>→</i><article><b>04</b><strong>Care together</strong><span>家人与宠物共同参与照护</span></article></div><p>DATA → INSIGHT → ACTION → COMPANIONSHIP</p></div>`;
    architecture.append(map);
  }

  if (system) {
    system.querySelector('.section-heading h2').innerHTML = 'Soft signals,<br><em>clear actions.</em>';
    system.querySelector('p')?.remove();
    const board = document.createElement('div');
    board.className = 'paqi-system-board';
    board.innerHTML = `<div class="paqi-swatches"><i></i><i></i><i></i><i></i><i></i></div><div class="paqi-system-type"><strong>Friendly by default.<br>Legible when it matters.</strong><span>柔和的薄荷绿、干净留白与圆润的承载面，让健康信息既被看见，也不制造压力。</span></div><div class="paqi-system-rules"><b>Calm surfaces<small>轻盈背景承接情绪</small></b><b>Living signals<small>颜色标记状态与优先级</small></b><b>Gentle guidance<small>每一次提醒都有下一步</small></b></div>`;
    system.append(board);
  }

  if (screens) {
    screens.querySelector('.section-heading h2').innerHTML = 'One story,<br><em>two local voices.</em>';
    screens.querySelector('.atlas-panel')?.remove();
    const globalCategories = [
      ['首页与绑定',['welcome.webp','home-dashboard.webp','unbound-device.webp','unbound-pet.webp','collar-connected.webp']],
      ['账号与登录',['登录.webp','注册.webp','验证码.webp','忘记密码.webp','密码更换验证.webp','登录提示框.webp','默认头像.webp']],
      ['宠物档案与分享',['档案.webp','档案-1.webp','全景档案.webp','爱宠身份卡-男宝.webp','爱宠身份卡-男宝-1.webp','爱宠身份卡=女宝.webp','分享页.webp','联系我们.webp']],
      ['设备与项圈',['Frame 210.webp','Frame 29.webp','扫码.webp','激活项圈.webp','激活项圈-1.webp','项圈管理.webp','响铃设置.webp']],
      ['AI 健康与问诊',['它健康.webp','它健康没有绑定项圈.webp','AI问诊.webp','AI问诊1个宠物.webp','AI问诊弹窗.webp','AI问诊全景档案.webp','AI问诊详情_公.webp','AI问诊详情—母.webp','AI问诊报告生成弹窗.webp','智能医生问诊报告.webp','治疗养护建议.webp','治疗养护建议_1.webp','医疗检测方案.webp','问诊记录.webp','问诊记录-无数据.webp','问诊记录-1.webp','选择病症图.webp','选择病症图-1.webp','选择病症图-2.webp','选择病症图筛选.webp','选择日期.webp']],
      ['定位与围栏',['TA在哪 设置围栏.webp','TA在哪首页1.webp','TA在哪首页2.webp','未绑定状态.webp','宠主暂未绑定项圈.webp','家庭分享-未开启权限.webp','离线状态.webp','离线弹窗.webp','安心守护说明.webp','家庭围栏说明.webp','家庭围栏待开启.webp','家庭围栏待开启-1.webp','家庭围栏已开启.webp','家庭围栏已开启提醒.webp','家庭围栏地址选择.webp','重置家庭围栏范围提示.webp','电子围栏-列表.webp','电子围栏-列表-1.webp','电子围栏-列表-2.webp','添加电子围栏.webp','添加电子围栏-1.webp','电子围栏我的位置.webp','电子围栏项圈位置无.webp','在围栏内.webp','不在围栏.webp','历史轨迹.webp','历史轨迹-1.webp','历史轨迹说明.webp','寻宠攻略.webp','寻宠定位中.webp','寻宠定位完成.webp','寻宠定位完成-1.webp','寻宠高度提醒.webp','寻宠高度提醒-1.webp','寻宠高度提醒折叠.webp']],
      ['陪伴与个性化',['聊天.webp','聊天-1.webp','亲密度.webp','亲密度-暂无信息.webp','亲密度-兑奖 敬请期待.webp','皮肤切换.webp','背景.webp']]
    ];
/* Extra overseas batches. Keep the same [category, files] data shape as the
   main gallery so the renderer can display and reorder every screen. */
globalCategories.push(
  ['宠物共享',['宠物共享.webp','宠物共享—空.webp','宠物共享—群组.webp','创建群组.webp','分享链接.webp','分享二维码.webp','宠物共享—群详情.webp','宠物共享—群详情空.webp']],
  ['个人 AI',['个人AI.webp','个人AI-1.webp','上传视频.webp','视频预览界面.webp','视频预览界面-1.webp','结束评分.webp']],
  ['个人中心',['个人中心.webp','关联设备.webp','好友列表.webp','监护人-主人.webp','监护人.webp','排行榜-1.webp','排行榜.webp','常见问题.webp','详情排版样式.webp','联系我们.webp','举报及反馈.webp','举报及反馈_1.webp']],
  ['健康报告',['健康数据.webp','健康数据无数据.webp','健康报告（前三天未解锁）.webp','健康报告生成中.webp','健康报告.webp','健康报告—1.webp','健康报告无数据.webp','健康报告说明.webp','行为数据_猫.webp','行为数据_狗.webp','休息数据_猫.webp']]
);
    const cnCategories = [
      ['核心体验',['2.0.webp','3.0 国内项圈.webp','3.0 喂食器.webp','喂食器.webp','喂食器.webp']],
      ['会员中心',['会员中心/Laki Care · 定位功能永久版 · ¥299.webp','会员中心/个人中心-项圈会员.webp']],
      ['健康报告',['健康报告/休息趋势.webp','健康报告/优化复刻.webp','健康报告/健康数据猫-1.webp','健康报告/健康数据猫.webp','健康报告/嗅闻 详情.webp','健康报告/打滚 详情.webp','健康报告/月  通用.webp','健康报告/活动分析.webp','健康报告/舔毛 详情.webp','健康报告/进食 详情.webp','健康报告/逗猫 详情.webp']],
      ['制定 AI 宠物',['制定AI宠物/上传图片- 拍照或相册.webp','制定AI宠物/上传图片-3D演示 三视图-1.webp','制定AI宠物/上传图片-3D演示 三视图.webp','制定AI宠物/喂食器—宠物照片示例.webp','制定AI宠物/已生成-选择.webp','制定AI宠物/生成图形.webp']],
      ['喂食计划',['喂食计划/喂食器—喂食计划-1.webp','喂食计划/喂食器—喂食计划.webp','喂食计划/喂食计划—分析报告-猫.webp','喂食计划/喂食计划—分析报告.webp','喂食计划/喂食计划—更新.webp']],
      ['定位寻宠',['定位寻宠/TA在哪首页2.webp','定位寻宠/定位-寻宠提醒.webp','定位寻宠/定位-已绑定.webp','定位寻宠/定位-新项圈.webp','定位寻宠/定位-离家.webp','定位寻宠/寻宠模式.webp']],
      ['家庭成员',['家庭成员/家庭成员-弹窗.webp','家庭成员/家庭成员-编辑家庭.webp','家庭成员/家庭详情页- 群主.webp','家庭成员/家庭详情页-成员.webp','家庭成员/家庭详情页-权限-1.webp','家庭成员/家庭详情页-权限-2.webp','家庭成员/家庭详情页-权限.webp','家庭成员/我的家庭.webp']],
      ['抽奖问卷',['抽奖问卷/AI宠物生活调研.webp','抽奖问卷/PQAI-7K3M-92TX.webp','抽奖问卷/抽奖.webp']],
      ['排行榜',['排行榜/家庭设备-宠物-排行榜-暂无数据-猫.webp','排行榜/家庭设备-宠物-排行榜.webp','排行榜/家庭设备-宠物-热度第一.webp']],
      ['添加宠物',['添加宠物/品种选择.webp','添加宠物/添加宠物-1.webp','添加宠物/添加宠物.webp']],
      ['添加项圈',['添加项圈/喂食器设置.webp','添加项圈/设备-1.webp','添加项圈/设备.webp','添加项圈/选择设备类型.webp']],
      ['游戏',['游戏/游戏-宠物.webp','游戏/游戏-宠物道具.webp','游戏/游戏-已购买-下面显示LOGO底纹.webp','游戏/游戏-未解锁-积分购买.webp','游戏/游戏-首页.webp','游戏/游戏—喂食提示充值-1.webp','游戏/游戏—喂食提示充值.webp']],
      ['聊天界面',['聊天界面/聊天引导提示.webp','聊天界面/聊天引导提示消失.webp','聊天界面/聊天引导语音提示.webp','聊天界面/语音录音中.webp','聊天界面/语音松手取消.webp']]
    ];
    const flows = {
      cn: { label:'CN / 国内版', title:'陪伴，从日常开始。', note:'68 个页面按核心体验与功能流程归类；进入编辑排序后可在每个分类内直接拖动。', categories:cnCategories, assetFolder:'cn/all' },
      global: { label:'GLOBAL / 海外版', title:'Complete product screen archive', note:'90 screens are grouped by core product tasks. Enter edit mode to reorder screens within each category.', categories:globalCategories, assetFolder:'global/library' }
    };
    const explorer = document.createElement('div');
    explorer.className = 'paqi-screen-explorer';
    explorer.innerHTML = `<div class="paqi-version-tabs" role="tablist"><button type="button" role="tab" aria-selected="true" data-version="cn"><b>CN</b><small>国内版</small></button><button type="button" role="tab" aria-selected="false" data-version="global"><b>GLOBAL</b><small>海外版</small></button></div><div class="paqi-version-stage"></div>`;
    screens.append(explorer);
    const versionTabs = explorer.querySelector('.paqi-version-tabs');
    const releaseLabel = document.createElement('p');
    releaseLabel.className = 'paqi-release-label';
    releaseLabel.innerHTML = 'RELEASE VERSION <span>CN + GLOBAL</span>';
    versionTabs.before(releaseLabel);
    versionTabs.setAttribute('aria-label', 'Project release version');
    versionTabs.innerHTML = '<button type="button" role="tab" aria-selected="true" data-version="cn"><b>01</b><span><strong>CN / 国内版</strong><small>中文场景与日常陪伴</small></span></button><button type="button" role="tab" aria-selected="false" data-version="global"><b>02</b><span><strong>GLOBAL / 海外版</strong><small>Global care &amp; tracking</small></span></button>';
    const stage = explorer.querySelector('.paqi-version-stage');
    const orderKey = (version) => `paqi-${version}-gallery-order-v1`;
    const hiddenKey = (version) => `paqi-${version}-gallery-hidden-v1`;
    const readOrder = (version) => { try { return JSON.parse(localStorage.getItem(orderKey(version)) || '{}'); } catch { return {}; } };
    const readHidden = (version) => { try { return new Set(JSON.parse(localStorage.getItem(hiddenKey(version)) || '[]')); } catch { return new Set(); } };
    const saveOrder = (version) => {
      const order = {};
      stage.querySelectorAll('.paqi-gallery-category').forEach((section) => { order[section.dataset.category] = [...section.querySelectorAll('.paqi-screen-card')].map((card) => card.dataset.file); });
      localStorage.setItem(orderKey(version), JSON.stringify(order));
    };
    const orderedCategories = (categories, version) => {
      const saved = readOrder(version);
      const hidden = readHidden(version);
      return categories.map(([name, files]) => [name, files.filter((file) => !hidden.has(`${name}/${file}`)).sort((a,b) => (saved[name]?.indexOf(a) ?? 999) - (saved[name]?.indexOf(b) ?? 999))]);
    };
    const cardMarkup = (folder, file, index) => `<article class="paqi-screen-card" role="button" tabindex="0" draggable="false" data-file="${file}" data-view-image="${source}${folder}/${file}"><span class="paqi-sort-handle" aria-hidden="true">↕</span><button type="button" class="paqi-delete-card" data-delete-card aria-label="删除此页面">×</button><img src="${source}${folder}/${file}" alt="${file.replace(/\.(png|jpe?g|webp)$/i,'')}" loading="lazy" decoding="async"><small>${String(index+1).padStart(2,'0')} / ${file.replace(/\.(png|jpe?g|webp)$/i,'')}</small></article>`;
    const bindCards = (version) => {
      stage.querySelectorAll('[data-view-image]').forEach((button) => button.addEventListener('click', () => { if (!stage.classList.contains('is-sorting')) openPaqiImage(button.dataset.viewImage); }));
      stage.querySelectorAll('.paqi-screen-card').forEach((card) => {
        card.addEventListener('keydown', (event) => { if (!stage.classList.contains('is-sorting') && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); openPaqiImage(card.dataset.viewImage); } });
        card.addEventListener('dragstart', (event) => { if (!stage.classList.contains('is-sorting')) return event.preventDefault(); card.classList.add('is-dragging'); event.dataTransfer.effectAllowed = 'move'; });
        card.addEventListener('dragend', () => { card.classList.remove('is-dragging'); stage.querySelectorAll('.is-drop-target').forEach((item)=>item.classList.remove('is-drop-target')); saveOrder(version); });
        card.addEventListener('dragover', (event) => { const dragging = stage.querySelector('.is-dragging'); if (!dragging || dragging.closest('.paqi-gallery-category') !== card.closest('.paqi-gallery-category')) return; event.preventDefault(); card.classList.add('is-drop-target'); const box = card.getBoundingClientRect(); card.parentNode.insertBefore(dragging, event.clientX < box.left + box.width/2 ? card : card.nextSibling); });
        card.addEventListener('dragleave', () => card.classList.remove('is-drop-target'));
      });
      stage.querySelectorAll('[data-delete-card]').forEach((button) => button.addEventListener('click', (event) => {
        event.stopPropagation();
        const card = button.closest('.paqi-screen-card');
        const category = card.closest('.paqi-gallery-category')?.dataset.category;
        if (!category) return;
        const hidden = readHidden(version);
        hidden.add(`${category}/${card.dataset.file}`);
        localStorage.setItem(hiddenKey(version), JSON.stringify([...hidden]));
        card.remove();
        const section = stage.querySelector(`.paqi-gallery-category[data-category="${category}"]`);
        const remaining = section ? section.querySelectorAll('.paqi-screen-card').length : 0;
        if (remaining) section.querySelector('header span').textContent = `${remaining} SCREENS`;
        else section?.remove();
        saveOrder(version);
      }));
    };
    const renderVersion = (version) => {
      const flow = flows[version];
      stage.classList.remove('is-ready');
      if (flow.categories) {
        stage.innerHTML = `<header><p>${flow.label}</p><h3>${flow.title}</h3><span>${flow.note}</span></header><div class="paqi-gallery-toolbar"><p>浏览时点击可放大；开启编辑后拖动卡片调整顺序。</p><div class="paqi-gallery-actions"><button type="button" class="is-secondary" data-reset-order>恢复默认</button><button type="button" data-sort-toggle>编辑排序</button></div></div>${orderedCategories(flow.categories, version).map(([name,files])=>`<section class="paqi-gallery-category" data-category="${name}"><header><h4>${name}</h4><span>${files.length} SCREENS</span></header><div class="paqi-screen-grid">${files.map((file,index)=>cardMarkup(flow.assetFolder,file,index)).join('')}</div></section>`).join('')}`;
        const sortToggle = stage.querySelector('[data-sort-toggle]');
        sortToggle.addEventListener('click', () => { const active = stage.classList.toggle('is-sorting'); sortToggle.textContent = active ? '完成排序' : '编辑排序'; stage.querySelectorAll('.paqi-screen-card').forEach((card)=>card.draggable = active); if (!active) saveOrder(version); });
        stage.querySelector('[data-reset-order]').addEventListener('click', () => { localStorage.removeItem(orderKey(version)); localStorage.removeItem(hiddenKey(version)); renderVersion(version); });
      } else {
        stage.innerHTML = `<header><p>${flow.label}</p><h3>${flow.title}</h3><span>${flow.note}</span></header><div class="paqi-screen-grid">${flow.items.map(([file,label],index)=>`<button type="button" class="paqi-screen-card ${index===1?'is-primary':''}" data-view-image="${source}${file}"><img src="${source}${file}" alt="${label}"><small>${String(index+1).padStart(2,'0')} / ${label}</small></button>`).join('')}</div>`;
      }
      requestAnimationFrame(() => stage.classList.add('is-ready'));
      bindCards(version);
    };
    explorer.querySelectorAll('[data-version]').forEach((tab) => tab.addEventListener('click', () => { explorer.querySelectorAll('[data-version]').forEach((item)=>item.setAttribute('aria-selected', String(item===tab))); renderVersion(tab.dataset.version); }));
    renderVersion('cn');
  }
  });
}

const hero = document.querySelector('.project-hero');
const sections = [...document.querySelectorAll('main > .case-section')];
if (hero && sections.length) {
  const image = hero.querySelector('[data-view-image]')?.dataset.viewImage || '';
  const overview = sections[0];
  const screens = sections[1] || overview.cloneNode(true);
  const pending = (id, number, label, cn, title, request) => {
    const section = document.createElement('section');
    section.className = 'case-section detail-pending';
    section.id = id;
    section.innerHTML = `<div class="section-heading"><small>${number} / ${label}<br>${cn}</small><h2>${title}</h2></div><p>${request}</p>`;
    return section;
  };
  overview.id = 'brief';
  overview.querySelector('.section-heading small').innerHTML = '01 / BRIEF<br>需求定义';
  const architecture = pending('architecture', '02', 'ARCHITECTURE', '信息架构', 'Make the path<br>easy to follow.', '待补充：用户流程、功能关系图或信息架构图。');
  const system = pending('system', '03', 'SYSTEM', '设计系统', 'One visual<br>language.', '待补充：颜色、字体、组件与布局规范图。');
  screens.id = 'screens';
  screens.querySelector('.section-heading small').innerHTML = '04 / SCREENS<br>页面设计';

  const layout = document.createElement('div');
  layout.className = 'detail-case-layout';
  const rail = document.createElement('aside');
  rail.className = 'detail-rail';
  rail.innerHTML = `<p>CASE CONTENTS<br><span>案例内容</span></p>
    <a class="is-active" href="#brief"><b>01</b><span>Brief<small>需求定义</small></span></a>
    <a href="#architecture"><b>02</b><span>Architecture<small>信息架构</small></span></a>
    <a href="#system"><b>03</b><span>System<small>设计系统</small></span></a>
    <a href="#screens"><b>04</b><span>Screens<small>页面设计</small></span></a>`;
  const content = document.createElement('div');
  content.className = 'detail-content';
  [overview, architecture, system, screens].forEach((section) => content.append(section));
  layout.append(rail, content);
  hero.insertAdjacentElement('afterend', layout);

  const links = [...rail.querySelectorAll('a')];
  const chapterObserver = new IntersectionObserver((entries) => {
    const active = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!active) return;
    links.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${active.target.id}`));
  }, { rootMargin: '-22% 0px -60% 0px', threshold: [0.1, 0.35] });
  [overview, architecture, system, screens].forEach((section) => chapterObserver.observe(section));
}

const viewer = document.querySelector('.viewer');
const viewerImage = viewer?.querySelector('img');
const viewerVideo = document.createElement('video');
viewerVideo.className = 'viewer-video';
viewerVideo.controls = true;
viewerVideo.loop = true;
viewerVideo.muted = true;
viewerVideo.playsInline = true;
viewer?.append(viewerVideo);
if (!document.querySelector('#viewer-video-style')) {
  const viewerStyle = document.createElement('style');
  viewerStyle.id = 'viewer-video-style';
  viewerStyle.textContent = `.viewer-video{display:none;width:min(92vw,1440px);max-height:90vh;background:#000;box-shadow:0 30px 100px #000;cursor:auto}.viewer.is-video img{display:none}.viewer.is-video .viewer-video{display:block}`;
  document.head.append(viewerStyle);
}
const openVideoViewer = (source) => {
  if (!viewer || !viewerImage) return;
  viewerImage.removeAttribute('src');
  viewer.classList.add('is-video', 'is-open');
  viewerVideo.src = source;
  viewerVideo.play().catch(() => {});
  document.body.style.overflow = 'hidden';
};
document.querySelectorAll('[data-view-image]').forEach((trigger) => trigger.addEventListener('click', () => {
  if (!viewer || !viewerImage) return;
  viewer.classList.remove('is-video', 'is-scrollable');
  viewerVideo.pause();
  viewerImage.src = trigger.dataset.viewImage;
  viewer.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}));
viewer?.addEventListener('click', (event) => {
  if (event.target === viewerVideo) return;
  viewerVideo.pause();
  viewer.classList.remove('is-open', 'is-video', 'is-scrollable');
  document.body.style.overflow = '';
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    viewer?.classList.remove('is-open', 'is-video', 'is-scrollable');
    viewerVideo.pause();
    document.body.style.overflow = '';
  }
});

if (!document.querySelector('#hero-screen-density-style')) {
  const style = document.createElement('style');
  style.id = 'hero-screen-density-style';
  style.textContent = `.cat-hero-screens>div{gap:0;padding:0 3%;align-items:flex-end}.cat-hero-screen{width:30%;margin-left:-9%}.cat-hero-screen:first-child{margin-left:0}.cat-hero-screen.screen-2{z-index:2}.cat-hero-screen.screen-3{z-index:3}.theme-ryyes .ryyes-hero-screens>div{gap:0;padding:0 2%;align-items:flex-end}.theme-ryyes .ryyes-hero-screen{width:27%;margin-left:-8%}.theme-ryyes .ryyes-hero-screen:first-child{margin-left:0}.theme-ryyes .ryyes-hero-screen.screen-3{z-index:4}.theme-ryyes .ryyes-hero-screen.screen-2,.theme-ryyes .ryyes-hero-screen.screen-4{z-index:3}.theme-ryyes .ryyes-hero-screen.screen-1,.theme-ryyes .ryyes-hero-screen.screen-5{z-index:2}@media(max-width:620px){.cat-hero-screens>div{padding:0}.cat-hero-screen{width:30%;margin-left:-8%}.theme-ryyes .ryyes-hero-screens>div{padding:0}.theme-ryyes .ryyes-hero-screen{width:27%;margin-left:-7%}}`;
  document.head.append(style);
}

if (document.body.classList.contains('theme-paqi')) {
  const paqiBrief = document.querySelector('#brief');
  if (paqiBrief && !paqiBrief.querySelector('.paqi-demo-slot')) {
    const demoSlot = document.createElement('figure');
    demoSlot.className = 'paqi-demo-slot';
    demoSlot.innerHTML = `
      <figcaption><span>APP DEMO / 产品演示</span><small>替换 assets/projects/paqi-pet/demo.mp4 即可展示录屏</small></figcaption>
      <div class="paqi-demo-device">
        <i class="paqi-demo-speaker" aria-hidden="true"></i>
        <video muted loop playsinline preload="metadata" aria-label="帕奇宠 APP 演示录屏">
          <source src="assets/projects/paqi-pet/demo.mp4" type="video/mp4">
        </video>
        <div class="paqi-demo-placeholder"><b>PAQI PET</b><span>APP DEMO</span><em>Drop recording here</em></div>
      </div>`;
    paqiBrief.append(demoSlot);
    const video = demoSlot.querySelector('video');
    video?.addEventListener('canplay', () => {
      demoSlot.classList.add('is-ready');
      video.play().catch(() => {});
    });
  }
  if (!document.querySelector('#paqi-demo-slot-style')) {
    const style = document.createElement('style');
    style.id = 'paqi-demo-slot-style';
    style.textContent = `.theme-paqi .paqi-demo-slot{grid-column:2;display:grid;grid-template-columns:170px minmax(0,1fr);gap:38px;align-items:center;margin:52px 0 0;padding:32px;border:1px solid rgba(37,141,131,.2);border-radius:24px;background:linear-gradient(135deg,#dff5ef,#f9fdfc);box-shadow:0 22px 46px rgba(37,141,131,.1)}.paqi-demo-slot figcaption{display:grid;gap:9px;align-self:start;padding-top:12px}.paqi-demo-slot figcaption span{color:#258d83;font-size:10px;font-weight:800;letter-spacing:.14em}.paqi-demo-slot figcaption small{color:rgba(12,52,50,.62);font-size:11px;line-height:1.6}.paqi-demo-device{position:relative;justify-self:center;width:min(100%,292px);aspect-ratio:9/19.5;overflow:hidden;border:8px solid #163e3b;border-radius:38px;background:radial-gradient(circle at 50% 20%,#e3fff7,transparent 31%),linear-gradient(160deg,#8ed9c9,#effbf7);box-shadow:0 24px 42px rgba(16,80,76,.22)}.paqi-demo-speaker{position:absolute;z-index:3;top:13px;left:50%;width:31%;height:5px;border-radius:999px;background:rgba(12,52,50,.48);transform:translateX(-50%)}.paqi-demo-device video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .4s ease}.paqi-demo-placeholder{position:absolute;inset:0;display:grid;place-content:center;gap:11px;color:#0c3432;text-align:center;background:linear-gradient(160deg,rgba(236,255,249,.8),rgba(130,211,193,.45));transition:opacity .35s ease}.paqi-demo-placeholder::before{content:"";justify-self:center;width:48px;height:48px;border:1px dashed rgba(37,141,131,.65);border-radius:50%}.paqi-demo-placeholder b{font-size:18px;letter-spacing:.02em}.paqi-demo-placeholder span{color:#258d83;font-size:10px;font-weight:800;letter-spacing:.18em}.paqi-demo-placeholder em{color:rgba(12,52,50,.58);font-size:10px;font-style:normal}.paqi-demo-slot.is-ready video{opacity:1}.paqi-demo-slot.is-ready .paqi-demo-placeholder{opacity:0;pointer-events:none}@media(max-width:620px){.theme-paqi .paqi-demo-slot{grid-column:1;grid-template-columns:1fr;gap:20px;margin-top:32px;padding:21px}.paqi-demo-slot figcaption{padding-top:0}.paqi-demo-device{width:min(100%,255px);border-radius:31px}}`;
    document.head.append(style);
  }
}

if (document.body.classList.contains('theme-cats')) {
  const briefChapter = document.querySelector('#brief');
  const architectureChapter = document.querySelector('#architecture');
  const systemChapter = document.querySelector('#system');
  const screensChapter = document.querySelector('#screens');
  const source = 'assets/projects/cat-kingdom/screens/';
  if (briefChapter) {
    briefChapter.querySelector('.section-heading small').innerHTML = '01 / BRIEF<br>需求定义';
    briefChapter.querySelector('.section-heading h2').innerHTML = 'One workspace for<br><em>every rescue.</em>';
    const briefFacts = briefChapter.querySelector('.overview-grid');
    if (briefFacts) {
      briefFacts.innerHTML = `
        <div><b>INTAKE / 建档</b><p>Record stray cats<br>流浪猫信息录入与关联建档</p></div>
        <div><b>RESCUE / 协作</b><p>Rescue, medical & care<br>救援、医疗与照护协同推进</p></div>
        <div><b>RETURN / 追踪</b><p>Release & follow-up<br>放归流转与持续状态追踪</p></div>`;
    }
  }
  if (architectureChapter) {
    architectureChapter.classList.add('has-ia-map');
    architectureChapter.querySelector('p')?.remove();
    architectureChapter.querySelector('.section-heading h2').innerHTML = 'One connected<br><em>rescue system.</em>';
    const journey = [
      ['home', '首页', 'HOME / 实时救助', '首页.webp'],
      ['profile', '个人中心', 'ME / 我的救援', '个人中心.webp'],
      ['rescue', '救援事件', 'RESCUE / 发起与跟进', '千猫救援.webp'],
      ['detail', '事件详情', 'DETAIL / 人员与进展', '救援详情.webp'],
      ['record', '猫咪档案', 'RECORD / 故事与病历', '猫咪档案详情页.webp'],
      ['care', '医疗管理', 'CARE / 病房与隔离', '医疗管理.webp'],
      ['adopt', '收养发起', 'ADOPT / 长期照护', '收养-发起.webp']
    ];
    const map = document.createElement('div');
    map.className = 'ia-map';
    map.innerHTML = `<p class="ia-map-kicker">PRODUCT RELATIONSHIP MAP / 产品功能关系</p><svg class="ia-map-lines" viewBox="0 0 1000 560" preserveAspectRatio="none" aria-hidden="true"><path d="M112 282 C205 270 250 188 380 186 S595 170 669 190"/><path d="M378 191 C425 270 476 320 515 391"/><path d="M518 394 C634 456 731 445 808 405"/><path d="M512 397 C420 456 331 465 242 437"/><path d="M238 432 C177 414 140 344 132 284"/><path class="ia-map-link" d="M667 195 C734 250 773 321 809 401"/></svg><div class="ia-map-start">RESCUE LOOP<br><span>发现 · 记录 · 照护</span></div>${journey.map(([key, cn, en, image]) => `<button type="button" class="ia-map-node ia-${key}" data-view-image="${source}${image}" aria-label="查看${cn}页面"><i></i><span><b>${cn}</b><small>${en}</small></span><figure><img src="${source}${image}" alt="${cn}"><figcaption>点击高清查看</figcaption></figure></button>`).join('')}<p class="ia-map-footer">Home → Rescue → Record → Care → Adopt → My rescue</p>`;
    architectureChapter.append(map);
    map.querySelectorAll('[data-view-image]').forEach((trigger) => {
      const openViewer = () => {
        if (!viewer || !viewerImage) return;
        viewerImage.src = trigger.dataset.viewImage;
        viewer.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      };
      trigger.addEventListener('click', openViewer);
    });
  }
  if (systemChapter) {
    systemChapter.classList.add('has-system-board');
    systemChapter.querySelector('p')?.remove();
    const board = document.createElement('figure');
    board.className = 'generated-system-board';
    board.setAttribute('data-view-image', 'assets/projects/cat-kingdom/design-system-generated.webp');
    board.setAttribute('role', 'button');
    board.setAttribute('tabindex', '0');
    board.setAttribute('aria-label', '查看千猫王国设计系统规范图');
    board.innerHTML = '<img src="assets/projects/cat-kingdom/design-system-generated.webp" alt="千猫王国设计系统：色彩、字体、组件与图标规范">';
    systemChapter.append(board);
    board.addEventListener('click', () => {
      if (!viewer || !viewerImage) return;
      viewerImage.src = board.dataset.viewImage;
      viewer.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
    board.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') board.click();
    });
  }
  const heroStage = document.querySelector('.project-hero .hero-stage');
  if (heroStage) {
    const keyScreens = [['首页.webp', 'HOME / 首页'], ['救援详情.webp', 'RESCUE / 救援详情'], ['医疗管理.webp', 'CARE / 医疗管理'], ['猫咪档案详情页.webp', 'RECORD / 档案详情']];
    heroStage.classList.add('cat-hero-screens');
    heroStage.dataset.viewImage = `${source}${keyScreens[0][0]}`;
    heroStage.setAttribute('aria-label', '查看千猫王国核心页面');
    heroStage.innerHTML = `<p class="hero-screen-label">KEY SCREENS / 核心页面</p><div>${keyScreens.map(([file, label], index) => `<figure class="cat-hero-screen screen-${index + 1}"><img src="${source}${file}" alt="${label}"><figcaption>${label}</figcaption></figure>`).join('')}</div>`;
  }
  const groups = [
    ['01 / RESCUE FLOW', '救援闭环', '从发现救援对象，到查看详情、发起领养与管理我的救援。', [['首页.webp', 'Home / 首页'], ['千猫救援.webp', 'Rescue / 千猫救援'], ['救援详情.webp', 'Detail / 救援详情'], ['收养-发起.webp', 'Adopt / 发起收养'], ['我的救援.webp', 'My rescue / 我的救援']]],
    ['02 / CARE & RECORDS', '医疗与档案', '以医疗管理、隔离入口和猫咪档案，持续记录每一只猫的照护信息。', [['医疗管理.webp', 'Medical / 医疗管理'], ['医疗管理-隔离数据入口.webp', 'Isolation / 隔离入口'], ['猫咪档案.webp', 'Records / 猫咪档案'], ['猫咪档案详情页.webp', 'Profile / 档案详情'], ['新建档案-关联成功.webp', 'Create / 新建档案']]],
    ['03 / PERSONAL HUB', '个人管理', '关联宠物、救援事件和个人资料，让每一次参与都有清晰的归属。', [['个人中心.webp', 'Profile / 个人中心'], ['个人信息.webp', 'Information / 个人信息'], ['关联宠物对象.webp', 'Pets / 关联宠物'], ['关联救援事件.webp', 'Events / 关联救援']]]
  ];
  if (screensChapter) {
    screensChapter.querySelector('.atlas-panel')?.remove();
    screensChapter.querySelector('.section-heading h2').innerHTML = 'Designed for<br><em>every rescue.</em>';
    const gallery = document.createElement('div');
    gallery.className = 'cat-screen-groups';
    groups.forEach(([number, title, description, files]) => {
      const group = document.createElement('section');
      group.className = 'cat-screen-group';
      group.innerHTML = `<header><p>${number}</p><h3>${title}</h3><span>${description}</span></header><div class="cat-screen-row">${files.map(([file, label], index) => `<button type="button" data-view-image="${source}${file}" aria-label="查看${label}"><img src="${source}${file}" alt="${label}"><small>${String(index + 1).padStart(2, '0')} / ${label}</small></button>`).join('')}</div>`;
      gallery.append(group);
    });
    screensChapter.append(gallery);
    gallery.querySelectorAll('[data-view-image]').forEach((trigger) => trigger.addEventListener('click', () => {
      if (!viewer || !viewerImage) return;
      viewerImage.src = trigger.dataset.viewImage;
      viewer.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }));
  }
}

if (document.body.classList.contains('theme-ryyes')) {
  const ryyesContent = document.querySelector('.detail-content');
  const ryyesRail = document.querySelector('.detail-rail');
  const ryyesBrief = document.querySelector('#brief');
  const ryyesHero = document.querySelector('.project-hero .hero-stage');
  if (ryyesHero) {
    const source = 'assets/projects/ryyes/app/';
    const heroScreens = [
      ['scan-welcome.webp', 'PHOTO SCAN / 拍照扫描'],
      ['device-link-overview.webp', 'PEN LINK / 智能笔连接'],
      ['files-home.webp', 'CORE FILES / 核心文件'],
      ['calendar-week.webp', 'PLAN / 日历提醒'],
      ['profile-signed-in.webp', 'ACCOUNT / 个人中心']
    ];
    ryyesHero.classList.add('ryyes-hero-screens');
    ryyesHero.dataset.viewImage = `${source}${heroScreens[0][0]}`;
    ryyesHero.setAttribute('aria-label', '查看 NEWYES 核心界面');
    ryyesHero.innerHTML = `<p class="hero-screen-label">KEY SCREENS / 核心界面</p><div>${heroScreens.map(([file, label], index) => `<figure class="ryyes-hero-screen screen-${index + 1}"><img src="${source}${file}" alt="${label}"><figcaption>${label}</figcaption></figure>`).join('')}</div><video class="ryyes-web-demo" autoplay muted loop playsinline preload="auto" aria-label="NEWYES 网页端演示录屏"><source src="assets/projects/ryyes/web-demo.mp4" type="video/mp4"></video><span class="ryyes-hero-hint">Click to enlarge / 点击放大</span>`;
    ryyesHero.addEventListener('click', () => {
      if (!viewer || !viewerImage) return;
      if (ryyesHero.classList.contains('show-web')) {
        openVideoViewer('assets/projects/ryyes/web-demo.mp4');
        return;
      }
      viewer.classList.remove('is-video');
      viewerVideo.pause();
      viewerImage.src = ryyesHero.dataset.viewImage;
      viewer.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
    if (!document.querySelector('#ryyes-web-demo-style')) {
      const webDemoStyle = document.createElement('style');
      webDemoStyle.id = 'ryyes-web-demo-style';
      webDemoStyle.textContent = `.theme-ryyes .ryyes-web-demo{position:absolute;inset:70px 9% 44px;display:none;width:82%;height:calc(100% - 114px);border:1px solid rgba(21,149,109,.17);border-radius:16px;background:#eefaf5;object-fit:cover;object-position:center;box-shadow:0 16px 34px rgba(21,149,109,.12)}.theme-ryyes .ryyes-hero-screens.show-web .ryyes-web-demo{display:block}.theme-ryyes .ryyes-hero-screens.show-web::after{display:none}@media(max-width:620px){.theme-ryyes .ryyes-web-demo{inset:58px 7% 37px;width:86%;height:calc(100% - 95px);border-radius:12px}}`;
      document.head.append(webDemoStyle);
    }

    const platformSwitch = document.createElement('div');
    platformSwitch.className = 'hero-platform-switch';
    platformSwitch.setAttribute('role', 'tablist');
    platformSwitch.setAttribute('aria-label', '作品端别切换');
    platformSwitch.innerHTML = `<button type="button" role="tab" aria-selected="true" data-platform="app"><b>APP</b><small>移动端</small></button><button type="button" role="tab" aria-selected="false" data-platform="web"><b>WEB</b><small>网页端</small></button>`;
    ryyesHero.insertAdjacentElement('afterend', platformSwitch);
    const switchPlatform = (platform) => {
      const isApp = platform === 'app';
      ryyesHero.classList.toggle('show-web', !isApp);
      ryyesHero.dataset.viewImage = isApp ? `${source}${heroScreens[0][0]}` : '';
      platformSwitch.querySelectorAll('button').forEach((button) => button.setAttribute('aria-selected', String(button.dataset.platform === platform)));
      document.dispatchEvent(new CustomEvent('ryyes-platform-change', { detail: { platform } }));
    };
    platformSwitch.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-platform]');
      if (button) switchPlatform(button.dataset.platform);
    });
  }
  if (ryyesContent && ryyesBrief && !document.querySelector('.dual-platform-chapter')) {
    if (!document.querySelector('#ryyes-flow-map-styles')) {
      const flowStyles = document.createElement('style');
      flowStyles.id = 'ryyes-flow-map-styles';
      flowStyles.textContent = `.theme-ryyes .ryyes-flow-map,.theme-ryyes .ryyes-system-flow{grid-column:2;position:relative;min-height:620px;margin-top:42px;overflow:visible;border:1px solid rgba(16,25,51,.16);border-radius:26px;background:radial-gradient(circle at 76% 16%,rgba(161,184,255,.48),transparent 28%),linear-gradient(135deg,#f9fbff,#dfe7ff);box-shadow:0 28px 62px rgba(37,64,132,.13)}.theme-ryyes .ryyes-flow-map::before,.theme-ryyes .ryyes-system-flow::before{content:"";position:absolute;inset:0;border-radius:inherit;background-image:linear-gradient(rgba(61,101,212,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(61,101,212,.07) 1px,transparent 1px);background-size:42px 42px;pointer-events:none}.theme-ryyes .ryyes-flow-kicker{position:absolute;z-index:3;top:26px;left:29px;margin:0;color:#3d65d4;font-size:10px;font-weight:800;letter-spacing:.14em}.theme-ryyes .ryyes-flow-lines{position:absolute;z-index:1;inset:76px 5% 62px;width:90%;height:calc(100% - 138px);overflow:visible}.theme-ryyes .ryyes-flow-lines path{fill:none;stroke:#5d7ae0;stroke-width:2.3;stroke-linecap:round;stroke-dasharray:9 13;opacity:.78;animation:ryyes-flow 8s linear infinite}.theme-ryyes .ryyes-flow-lines .ryyes-flow-link{stroke:#7c9afa;animation-duration:10s}.theme-ryyes .ryyes-flow-start{position:absolute;z-index:2;top:92px;left:7%;color:#3d65d4;font-size:9px;font-weight:850;letter-spacing:.13em}.theme-ryyes .ryyes-flow-start span{display:block;margin-top:5px;color:rgba(16,25,51,.52);font-size:9px;font-weight:650;letter-spacing:.03em}.theme-ryyes .ryyes-flow-node{position:absolute;z-index:4;display:flex;align-items:center;gap:11px;border:0;padding:0;background:transparent;color:#101933;text-align:left;cursor:zoom-in}.theme-ryyes .ryyes-flow-node>i{width:19px;height:19px;flex:0 0 19px;border:3px solid #fff;border-radius:50%;background:#3d65d4;box-shadow:0 0 0 4px rgba(61,101,212,.23),0 0 19px rgba(61,101,212,.65);transition:transform .25s ease,box-shadow .25s ease}.theme-ryyes .ryyes-flow-node>span{display:grid;gap:4px;min-width:148px;padding:10px 12px;border:1px solid rgba(16,25,51,.09);border-radius:11px;background:rgba(250,252,255,.9);box-shadow:0 11px 25px rgba(34,55,118,.1);transition:transform .25s ease,background .25s ease}.theme-ryyes .ryyes-flow-node b{font-size:13px;line-height:1;font-weight:820;letter-spacing:-.035em}.theme-ryyes .ryyes-flow-node small{color:rgba(16,25,51,.58);font-size:9px;line-height:1.2;font-weight:650}.theme-ryyes .ryyes-flow-node figure{position:absolute;z-index:7;bottom:calc(100% + 16px);left:50%;width:152px;margin:0;overflow:hidden;border:1px solid rgba(16,25,51,.16);border-radius:14px;background:#fff;box-shadow:0 22px 45px rgba(22,38,90,.2);opacity:0;pointer-events:none;transform:translate(-50%,10px) scale(.93);transform-origin:bottom center;transition:opacity .22s ease,transform .28s cubic-bezier(.2,.9,.3,1)}.theme-ryyes .ryyes-flow-node figure img{display:block;width:100%;max-height:195px;object-fit:cover;object-position:top}.theme-ryyes .ryyes-flow-node figcaption{padding:7px 9px;color:#3d65d4;font-size:9px;font-weight:780;letter-spacing:.04em}.theme-ryyes .ryyes-flow-node:hover>i,.theme-ryyes .ryyes-flow-node:focus-visible>i{transform:scale(1.2);box-shadow:0 0 0 6px rgba(61,101,212,.22),0 0 29px rgba(61,101,212,.76)}.theme-ryyes .ryyes-flow-node:hover>span,.theme-ryyes .ryyes-flow-node:focus-visible>span{background:#fff;transform:translateX(4px)}.theme-ryyes .ryyes-flow-node:hover figure,.theme-ryyes .ryyes-flow-node:focus-visible figure{opacity:1;transform:translate(-50%,0) scale(1)}.theme-ryyes .ryyes-flow-node:focus-visible{outline:0}.theme-ryyes .ryyes-connect,.theme-ryyes .ryyes-frame{top:45%;left:7%}.theme-ryyes .ryyes-capture,.theme-ryyes .ryyes-navigation{top:20%;left:25%}.theme-ryyes .ryyes-recognize,.theme-ryyes .ryyes-content{top:43%;left:43%}.theme-ryyes .ryyes-organize,.theme-ryyes .ryyes-action{top:68%;left:49%}.theme-ryyes .ryyes-plan,.theme-ryyes .ryyes-scan{top:20%;left:66%}.theme-ryyes .ryyes-profile,.theme-ryyes .ryyes-state{top:57%;right:6%}.theme-ryyes .ryyes-flow-footer{position:absolute;z-index:3;right:28px;bottom:23px;left:28px;margin:0;color:rgba(16,25,51,.66);font-size:10px;font-weight:760;letter-spacing:.06em;text-align:center}.theme-ryyes .ryyes-system-flow{background:radial-gradient(circle at 20% 14%,rgba(222,235,255,.95),transparent 32%),radial-gradient(circle at 76% 85%,rgba(179,198,255,.42),transparent 28%),linear-gradient(135deg,#fafdff,#e5ecff)}.theme-ryyes .ryyes-system-flow .ryyes-flow-lines path{stroke:#4f75cf}.theme-ryyes .ryyes-system-flow .ryyes-flow-node>i{background:#5478d2}.theme-ryyes .ryyes-system-flow .ryyes-flow-kicker{color:#385ebc}@keyframes ryyes-flow{to{stroke-dashoffset:-176}}@media(max-width:700px){.theme-ryyes .ryyes-flow-map,.theme-ryyes .ryyes-system-flow{grid-column:1;min-height:540px;margin-top:32px;border-radius:18px}.theme-ryyes .ryyes-flow-kicker{top:19px;left:18px;font-size:8px}.theme-ryyes .ryyes-flow-start{top:64px;left:6%;font-size:8px}.theme-ryyes .ryyes-flow-lines{inset:58px 2% 50px;width:96%;height:calc(100% - 108px)}.theme-ryyes .ryyes-flow-node{gap:7px}.theme-ryyes .ryyes-flow-node>i{width:14px;height:14px;flex-basis:14px;border-width:2px}.theme-ryyes .ryyes-flow-node>span{min-width:95px;padding:7px 8px}.theme-ryyes .ryyes-flow-node b{font-size:10px}.theme-ryyes .ryyes-flow-node small{font-size:8px}.theme-ryyes .ryyes-flow-node figure{width:126px}.theme-ryyes .ryyes-connect,.theme-ryyes .ryyes-frame{top:43%;left:4%}.theme-ryyes .ryyes-capture,.theme-ryyes .ryyes-navigation{top:21%;left:21%}.theme-ryyes .ryyes-recognize,.theme-ryyes .ryyes-content{top:44%;left:37%}.theme-ryyes .ryyes-organize,.theme-ryyes .ryyes-action{top:68%;left:40%}.theme-ryyes .ryyes-plan,.theme-ryyes .ryyes-scan{top:23%;left:62%}.theme-ryyes .ryyes-profile,.theme-ryyes .ryyes-state{top:57%;right:2%}.theme-ryyes .ryyes-flow-footer{right:14px;bottom:16px;left:14px;font-size:8px}}@media(prefers-reduced-motion:reduce){.theme-ryyes .ryyes-flow-lines path{animation:none}}`;
      document.head.append(flowStyles);
    }
    if (!document.querySelector('#ryyes-green-theme-styles')) {
      const greenStyles = document.createElement('style');
      greenStyles.id = 'ryyes-green-theme-styles';
      greenStyles.textContent = `.theme-ryyes{--paper:#f4faf7;--ink:#0b2c22;--accent:#15956d;--soft:#caefe0}.theme-ryyes .project-hero{background:radial-gradient(circle at 76% 24%,#c9f1df,transparent 33%),#f4faf7}.theme-ryyes .overview-grid div{background:#f4faf7}.theme-ryyes .ryyes-expanded-grid{background:linear-gradient(135deg,#e5f7ef,#fbfefc)!important}.theme-ryyes .ryyes-expanded-group header p,.theme-ryyes .ryyes-expanded-group h3 span,.theme-ryyes .ryyes-expanded-card span{color:#15956d!important}.theme-ryyes .ryyes-expanded-group header small{color:rgba(11,44,34,.62)!important}.theme-ryyes .ryyes-expanded-card{color:#0b2c22!important}.theme-ryyes .ryyes-expanded-card img{box-shadow:0 18px 32px rgba(21,149,109,.16)!important}.theme-ryyes .ryyes-expanded-card:hover img,.theme-ryyes .ryyes-expanded-card:focus-visible img{box-shadow:0 28px 42px rgba(21,149,109,.25)!important}.theme-ryyes .detail-rail a.is-active{border-color:#15956d!important}.theme-ryyes .detail-rail a.is-active b,.theme-ryyes .detail-rail a.is-active span{color:#15956d!important}.theme-ryyes .ryyes-system-sheet:hover,.theme-ryyes .ryyes-system-sheet:focus-visible{transform:translateY(-7px);box-shadow:0 32px 62px rgba(21,149,109,.18)!important;outline:0}@media(max-width:620px){.theme-ryyes .ryyes-system-sheet{grid-column:1!important;margin-top:30px!important;border-radius:14px!important}}`;
      document.head.append(greenStyles);
    }
    if (!document.querySelector('#ryyes-map-tuning-styles')) {
      const mapTuning = document.createElement('style');
      mapTuning.id = 'ryyes-map-tuning-styles';
      mapTuning.textContent = `.theme-ryyes .ryyes-flow-map{border-color:rgba(21,149,109,.17);background:radial-gradient(circle at 78% 16%,rgba(192,237,218,.55),transparent 29%),linear-gradient(135deg,#fbfefc,#e8f7f0);box-shadow:0 26px 58px rgba(21,149,109,.1)}.theme-ryyes .ryyes-flow-map::before{background-image:linear-gradient(rgba(21,149,109,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(21,149,109,.07) 1px,transparent 1px)}.theme-ryyes .ryyes-flow-map .ryyes-flow-kicker,.theme-ryyes .ryyes-flow-map .ryyes-flow-start{color:#12815e}.theme-ryyes .ryyes-flow-map .ryyes-flow-start span,.theme-ryyes .ryyes-flow-map .ryyes-flow-footer{color:rgba(11,44,34,.58)}.theme-ryyes .ryyes-flow-map .ryyes-flow-lines path{stroke:#48ae89;opacity:.72}.theme-ryyes .ryyes-flow-map .ryyes-flow-lines .ryyes-flow-link{stroke:#7acbab}.theme-ryyes .ryyes-flow-map .ryyes-flow-node>i{background:#15956d;box-shadow:0 0 0 4px rgba(21,149,109,.17),0 0 18px rgba(21,149,109,.38)}.theme-ryyes .ryyes-flow-map .ryyes-flow-node>span{border-color:rgba(21,149,109,.1);background:rgba(255,255,255,.83);box-shadow:0 10px 22px rgba(21,149,109,.09)}.theme-ryyes .ryyes-flow-map .ryyes-flow-node small{color:rgba(11,44,34,.55)}.theme-ryyes .ryyes-flow-map .ryyes-flow-node:hover>i,.theme-ryyes .ryyes-flow-map .ryyes-flow-node:focus-visible>i{box-shadow:0 0 0 6px rgba(21,149,109,.16),0 0 28px rgba(21,149,109,.5)}.theme-ryyes .ryyes-flow-map .ryyes-flow-node figcaption{color:#12815e}`;
      document.head.append(mapTuning);
    }
    const briefHeading = ryyesBrief.querySelector('.section-heading');
    const briefFacts = ryyesBrief.querySelector('.overview-grid');
    if (briefHeading) {
      briefHeading.querySelector('small').innerHTML = '01 / BRIEF<br>需求定义';
      briefHeading.querySelector('h2').innerHTML = 'Turn input into<br><em>usable knowledge.</em>';
    }
    if (briefFacts) {
      briefFacts.innerHTML = `
        <div><b>INPUT / 输入</b><p>Smart pen + photo scan<br>智能笔与拍照扫描</p></div>
        <div><b>PROBLEM / 问题</b><p>Writing, files and reminders<br>记录、整理与提醒容易断开</p></div>
        <div><b>GOAL / 目标</b><p>Capture, organize and act<br>一次输入，持续整理与行动</p></div>`;
    }
    document.querySelector('#architecture')?.classList.add('ryyes-architecture');
    document.querySelector('#system')?.classList.add('ryyes-system');
    const architectureChapter = document.querySelector('#architecture');
    const systemChapter = document.querySelector('#system');
    if (architectureChapter) {
      architectureChapter.querySelector('p')?.remove();
      architectureChapter.querySelector('.section-heading h2').innerHTML = 'One connected<br><em>knowledge loop.</em>';
      const workflow = document.createElement('div');
      workflow.className = 'ryyes-workflow-map';
      workflow.innerHTML = '<p>PRODUCT FLOW / 功能关系</p><div><article><b>01</b><strong>Write</strong><span>书写记录</span></article><article><b>02</b><strong>Capture</strong><span>拍照扫描</span></article><article><b>03</b><strong>Connect</strong><span>智能笔连接</span></article><article><b>04</b><strong>Organize</strong><span>核心文件</span></article><article><b>05</b><strong>Plan</strong><span>日历提醒</span></article><article><b>06</b><strong>Account</strong><span>个人中心</span></article></div><small>Input → recognize → organize → act → return</small>';
      architectureChapter.append(workflow);
      workflow.remove();
      const flowSource = 'assets/projects/ryyes/app/';
      const flowNodes = [
        ['connect', '智能笔连接', 'CONNECT / 设备配对', 'device-link-overview.webp'],
        ['capture', '拍照扫描', 'CAPTURE / 纸面输入', 'scan-welcome.webp'],
        ['recognize', '内容识别', 'RECOGNIZE / 转写识别', 'files-recognize.webp'],
        ['organize', '核心文件', 'ORGANIZE / 文件整理', 'files-home.webp'],
        ['plan', '日历提醒', 'PLAN / 行动计划', 'calendar-day.webp'],
        ['profile', '个人中心', 'ACCOUNT / 个人管理', 'profile-signed-in.webp']
      ];
      const flowMap = document.createElement('div');
      flowMap.className = 'ryyes-flow-map';
      flowMap.innerHTML = `<p class="ryyes-flow-kicker">PRODUCT RELATIONSHIP MAP / 产品功能关系</p><svg class="ryyes-flow-lines" viewBox="0 0 1000 560" preserveAspectRatio="none" aria-hidden="true"><path d="M108 305 C188 172 292 158 372 218 S526 362 526 395"/><path d="M104 307 C208 375 328 420 482 395"/><path d="M520 394 C612 330 670 200 760 184"/><path d="M760 189 C820 270 835 350 884 404"/><path class="ryyes-flow-link" d="M482 398 C592 484 720 480 884 406"/></svg><div class="ryyes-flow-start">KNOWLEDGE LOOP<br><span>连接 · 采集 · 整理 · 行动</span></div>${flowNodes.map(([key, cn, en, image]) => `<button type="button" class="ryyes-flow-node ryyes-${key}" data-view-image="${flowSource}${image}" aria-label="查看${cn}页面"><i></i><span><b>${cn}</b><small>${en}</small></span><figure><img src="${flowSource}${image}" alt="${cn}"><figcaption>点击高清查看</figcaption></figure></button>`).join('')}<p class="ryyes-flow-footer">Connect → Capture → Recognize → Organize → Plan → Account</p>`;
      architectureChapter.append(flowMap);
      flowMap.querySelectorAll('[data-view-image]').forEach((trigger) => trigger.addEventListener('click', () => {
        if (!viewer || !viewerImage) return;
        viewerImage.src = trigger.dataset.viewImage;
        viewer.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }));
    }
    if (systemChapter) {
      systemChapter.querySelector('p')?.remove();
      systemChapter.querySelector('.section-heading h2').innerHTML = 'A system for<br><em>clear thinking.</em>';
      const systemBoard = document.createElement('div');
      systemBoard.className = 'ryyes-system-board';
      systemBoard.innerHTML = '<p>VISUAL FOUNDATION / 视觉规范</p><div class="ryyes-swatches"><i></i><i></i><i></i><i></i></div><div class="ryyes-type"><strong>NEWYES Smart Pen</strong><span>清晰层级 · 轻量表面 · 明确状态</span></div><div class="ryyes-rules"><b>01 / Hierarchy<br><small>信息优先级</small></b><b>02 / Feedback<br><small>状态反馈</small></b><b>03 / Rhythm<br><small>间距节奏</small></b></div>';
      systemChapter.append(systemBoard);
      systemBoard.remove();

      const systemSource = 'assets/projects/ryyes/app/';
      const systemNodes = [
        ['frame', 'Mobile frame', '430 PX / 移动端基准', 'files-home.webp'],
        ['navigation', 'Navigation', '统一顶栏与底部导航', 'files-home-alt.webp'],
        ['content', 'Content card', '文件、笔记与内容容器', 'files-notebook.webp'],
        ['action', 'Primary action', '连接、扫描与确认操作', 'device-link-overview.webp'],
        ['scan', 'Scan modes', '导入 / PDF / 摘要 / 识字', 'scan-welcome.webp'],
        ['state', 'Account state', '设置、反馈与个人状态', 'profile-settings.webp']
      ];
      const systemFlow = document.createElement('div');
      systemFlow.className = 'ryyes-system-flow';
      systemFlow.innerHTML = `<p class="ryyes-flow-kicker">DESIGN SYSTEM MAP / 设计规范关系</p><svg class="ryyes-flow-lines" viewBox="0 0 1000 560" preserveAspectRatio="none" aria-hidden="true"><path d="M104 293 C184 166 284 165 378 226 S490 343 530 364"/><path d="M104 293 C195 391 339 438 520 401"/><path d="M528 401 C634 362 678 211 761 182"/><path d="M760 182 C812 272 817 358 885 405"/><path class="ryyes-flow-link" d="M530 401 C640 484 752 478 884 407"/></svg><div class="ryyes-flow-start">VISUAL RHYTHM<br><span>框架 · 导航 · 内容 · 操作 · 状态</span></div>${systemNodes.map(([key, title, detail, image]) => `<button type="button" class="ryyes-flow-node ryyes-${key}" data-view-image="${systemSource}${image}" aria-label="查看${title}参考界面"><i></i><span><b>${title}</b><small>${detail}</small></span><figure><img src="${systemSource}${image}" alt="${title}"><figcaption>点击高清查看</figcaption></figure></button>`).join('')}<p class="ryyes-flow-footer">Frame → Navigation → Content → Action → Scan → State</p>`;
      systemChapter.append(systemFlow);
      systemFlow.querySelectorAll('[data-view-image]').forEach((trigger) => trigger.addEventListener('click', () => {
        if (!viewer || !viewerImage) return;
        viewerImage.src = trigger.dataset.viewImage;
        viewer.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }));
      systemFlow.remove();
      const systemSheet = document.createElement('figure');
      systemSheet.className = 'ryyes-system-sheet';
      systemSheet.setAttribute('data-view-image', 'assets/projects/ryyes/design-system.svg');
      systemSheet.setAttribute('role', 'button');
      systemSheet.setAttribute('tabindex', '0');
      systemSheet.setAttribute('aria-label', '查看 NEWYES 设计系统规范图');
      systemSheet.innerHTML = '<img src="assets/projects/ryyes/design-system.svg" alt="NEWYES 设计规范：颜色、字体、组件节奏与移动端布局规则">';
      systemSheet.style.cssText = 'grid-column:2;display:block;width:100%;margin-top:42px;overflow:hidden;border:1px solid rgba(16,25,51,.14);border-radius:22px;background:#fff;box-shadow:0 24px 55px rgba(37,64,132,.13);cursor:zoom-in;transition:transform .28s ease,box-shadow .28s ease';
      systemSheet.querySelector('img').style.cssText = 'display:block;width:100%;height:auto';
      systemSheet.addEventListener('click', () => {
        if (!viewer || !viewerImage) return;
        viewerImage.src = systemSheet.dataset.viewImage;
        viewer.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      });
      systemSheet.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') systemSheet.click();
      });
    }
    document.querySelector('#screens .section-heading small')?.replaceChildren('03 / SCREENS', document.createElement('br'), document.createTextNode('页面展示'));
    const platformChapter = document.createElement('section');
    platformChapter.className = 'case-section dual-platform-chapter';
    platformChapter.id = 'platforms';
    platformChapter.innerHTML = `
      <div class="section-heading"><small>02 / PLATFORMS<br>双端体验</small><h2>One product.<br><em>Two surfaces.</em></h2></div>
      <p class="dual-platform-intro">NEWYES is designed as one continuous writing workflow across mobile and web.<br>智能笔的移动端与网页端，共同承接记录、整理与查看。</p>
      <div class="platform-preview-grid">
        <article class="platform-preview app-preview" id="app" tabindex="-1"><header><span>01 / APP</span><small>移动端</small></header><div class="platform-device phone-device"><i></i><b>APP INTERFACE</b><small>等待上传移动端界面</small></div><footer><strong>Capture on the go.</strong><span>随手记录</span></footer></article>
        <article class="platform-preview web-preview" id="web" tabindex="-1"><header><span>02 / WEB</span><small>网页端</small></header><div class="platform-device web-device"><i></i><b>WEB WORKSPACE</b><small>等待上传网页端界面</small></div><footer><strong>Organize with clarity.</strong><span>集中整理</span></footer></article>
      </div>`;
    ryyesBrief.insertAdjacentElement('afterend', platformChapter);
    platformChapter.remove();
    if (ryyesRail) {
      const platformLink = document.createElement('a');
      platformLink.href = '#platforms';
      platformLink.innerHTML = '<b>02</b><span>Platforms<small>双端体验</small></span>';
      ryyesRail.querySelector('a[href="#architecture"]')?.classList.remove('is-active');
      ryyesRail.querySelector('a[href="#system"]')?.classList.remove('is-active');
      platformLink.remove();
    }
    if (location.hash === '#app' || location.hash === '#web') {
      requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth', block: 'center' }));
    }

    const appScreensChapter = document.querySelector('#screens');
    if (appScreensChapter) {
      const systemSheet = document.querySelector('.ryyes-system-sheet');
      if (systemSheet) appScreensChapter.append(systemSheet);
      systemChapter?.remove();
      const systemRailLink = ryyesRail?.querySelector('a[href="#system"]');
      const screensRailLink = ryyesRail?.querySelector('a[href="#screens"]');
      systemRailLink?.remove();
      if (screensRailLink) {
        screensRailLink.innerHTML = '<b>03</b><span>System & screens<small>规范与页面</small></span>';
      }
      const appSource = 'assets/projects/ryyes/app/';
      const flows = [
        { id: 'files', no: '01', title: 'Core files', cn: '核心文件', note: '从首页进入笔记、识别与转写，把纸面内容沉淀为可继续编辑的数字文件。', screens: [['files-home.webp', 'Home / 文件首页'], ['files-notebook.webp', 'Notebook / 笔记本'], ['files-recognize.webp', 'Recognize / 识别入口'], ['files-text-recognition.webp', 'Text recognition / 文本识别'], ['files-batch-transcribe.webp', 'Batch transcribe / 批量转写'], ['files-tablet.webp', 'Tablet / 平板适配']] },
        { id: 'link', no: '02', title: 'Pen connection', cn: '智能笔连接', note: '把设备配对、使用指引与连接状态放在连续流程中，降低首次使用的理解成本。', screens: [['device-link-overview.webp', 'Connection / 连接入口'], ['device-link-guide.webp', 'Guide / 使用指引'], ['device-link-success.webp', 'Success / 连接完成']] },
        { id: 'scan', no: '03', title: 'Photo scan', cn: '拍照扫描', note: '从扫描入口、实时拍摄到裁切确认与识别编辑，让纸面内容快速进入后续整理。', screens: [['scan-welcome.webp', 'Scan home / 扫描入口'], ['scan-link.webp', 'Live camera / 实时拍摄'], ['scan-crop.webp', 'Crop confirm / 裁切确认'], ['scan-library.webp', 'Scan library / 扫描管理'], ['scan-edit.webp', 'Recognize & edit / 识别编辑']] },
        { id: 'calendar', no: '04', title: 'Calendar reminder', cn: '日历提醒', note: '以日、周、年的不同时间尺度查看计划，让手写记录持续转化为可执行提醒。', screens: [['calendar-day.webp', 'Day plan / 日计划'], ['calendar-week.webp', 'Week plan / 周计划'], ['calendar-year.webp', 'Year plan / 年计划']] },
        { id: 'profile', no: '05', title: 'Personal center', cn: '个人中心', note: '覆盖账号状态、设置、反馈与互动，让设备与内容始终有清晰的个人归属。', screens: [['profile-signed-in.webp', 'Signed in / 已登录'], ['profile-signed-out.webp', 'Signed out / 未登录'], ['profile-settings.webp', 'Settings / 设置'], ['profile-feedback.webp', 'Feedback / 意见反馈'], ['profile-interaction.webp', 'Interaction / 在线互动'], ['profile-role.webp', 'Role / 角色选择']] }
      ];
      appScreensChapter.classList.add('has-app-explorer');
      appScreensChapter.classList.remove('atlas-section');
      appScreensChapter.querySelector('.atlas-panel')?.remove();
      appScreensChapter.querySelector('.section-heading small').innerHTML = '03 / SYSTEM & SCREENS<br>规范与页面展示';
      appScreensChapter.querySelector('.section-heading h2').innerHTML = 'One system.<br><em>Every screen.</em>';
      const explorer = document.createElement('section');
      explorer.className = 'ryyes-app-explorer';
      explorer.innerHTML = `<div class="app-flow-tabs" role="tablist" aria-label="NEWYES App 功能分组">${flows.map((flow, index) => `<button role="tab" type="button" aria-selected="${index === 0}" data-flow="${flow.id}"><b>${flow.no}</b><span>${flow.title}<small>${flow.cn}</small></span></button>`).join('')}</div><div class="app-flow-stage" aria-live="polite"></div>`;
      appScreensChapter.append(explorer);
      const stage = explorer.querySelector('.app-flow-stage');
      const modeSwitch = document.createElement('div');
      modeSwitch.className = 'platform-mode-switch';
      modeSwitch.setAttribute('role', 'tablist');
      modeSwitch.setAttribute('aria-label', '作品端切换');
      modeSwitch.innerHTML = '<span>PRODUCT PLATFORM / 作品端</span><button type="button" role="tab" aria-selected="true" data-platform="app">APP <small>移动端</small></button><button type="button" role="tab" aria-selected="false" data-platform="web">WEB <small>网页端</small></button>';
      const webStage = document.createElement('section');
      webStage.className = 'web-screen-stage';
      webStage.hidden = true;
      webStage.innerHTML = '<div class="web-screen-empty"><p>02 / WEB WORKSPACE</p><strong>Web screens<br>ready for your files.</strong><span>网页端界面待上传</span></div>';
      explorer.prepend(modeSwitch);
      explorer.append(webStage);
      const renderFlow = (id) => {
        const flow = flows.find((item) => item.id === id) || flows[0];
        explorer.querySelectorAll('[data-flow]').forEach((tab) => tab.setAttribute('aria-selected', String(tab.dataset.flow === flow.id)));
        stage.classList.remove('is-ready');
        stage.innerHTML = `<header><p>${flow.no} / APP FLOW</p><h3>${flow.title}<span>${flow.cn}</span></h3><small>${String(flow.screens.length).padStart(2, '0')} screens · 点击界面高清查看</small></header><p class="app-flow-note">${flow.note}</p><div class="app-screen-grid">${flow.screens.map(([file, label], index) => `<button type="button" class="app-screen-tile ${index === 0 ? 'is-primary' : ''}" data-view-image="${appSource}${file}" aria-label="查看 ${label}"><img src="${appSource}${file}" alt="${label}"><span>${String(index + 1).padStart(2, '0')} / ${label}</span></button>`).join('')}</div>`;
        stage.querySelectorAll('[data-view-image]').forEach((trigger) => trigger.addEventListener('click', () => {
          if (!viewer || !viewerImage) return;
          viewerImage.src = trigger.dataset.viewImage;
          viewer.classList.add('is-open');
          document.body.style.overflow = 'hidden';
        }));
        requestAnimationFrame(() => stage.classList.add('is-ready'));
      };
      explorer.querySelectorAll('[data-flow]').forEach((tab) => {
        tab.addEventListener('mouseenter', () => window.matchMedia('(hover:hover)').matches && renderFlow(tab.dataset.flow));
        tab.addEventListener('focus', () => renderFlow(tab.dataset.flow));
        tab.addEventListener('click', () => renderFlow(tab.dataset.flow));
      });
      const setPlatform = (platform) => {
        const isApp = platform === 'app';
        modeSwitch.querySelectorAll('[data-platform]').forEach((button) => button.setAttribute('aria-selected', String(button.dataset.platform === platform)));
        explorer.querySelector('.app-flow-tabs').hidden = !isApp;
        stage.hidden = !isApp;
        webStage.hidden = isApp;
        if (isApp) renderFlow(explorer.querySelector('[data-flow][aria-selected="true"]')?.dataset.flow || 'files');
      };
      modeSwitch.querySelectorAll('[data-platform]').forEach((button) => {
        button.addEventListener('click', () => setPlatform(button.dataset.platform));
      });
      renderFlow('files');
      const expandedStyles = document.createElement('style');
      expandedStyles.textContent = `.theme-ryyes .ryyes-expanded-screens{grid-column:2;display:grid;gap:82px;margin-top:58px}.theme-ryyes .ryyes-expanded-group{padding-top:34px;border-top:1px solid rgba(16,25,51,.15)}.theme-ryyes .ryyes-expanded-group header{display:grid;grid-template-columns:145px minmax(0,1fr);gap:18px;align-items:baseline;margin-bottom:32px}.theme-ryyes .ryyes-expanded-group header p{margin:0;color:#3d65d4;font-size:10px;font-weight:800;letter-spacing:.13em}.theme-ryyes .ryyes-expanded-group h3{margin:0;color:#101933;font-size:clamp(30px,3.4vw,52px);letter-spacing:-.07em;line-height:.9}.theme-ryyes .ryyes-expanded-group h3 span{display:block;margin-top:8px;color:#3d65d4;font-size:13px;font-weight:700;letter-spacing:0}.theme-ryyes .ryyes-expanded-group header small{grid-column:2;max-width:560px;color:rgba(16,25,51,.6);font-size:12px;line-height:1.65}.theme-ryyes .ryyes-expanded-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:38px 26px;align-items:end;padding:44px;background:linear-gradient(135deg,#e7edff,#fafbff)}.theme-ryyes .ryyes-expanded-card{border:0;padding:0;background:transparent;color:#101933;text-align:left;cursor:zoom-in;transition:transform .28s cubic-bezier(.2,.9,.3,1),filter .28s ease}.theme-ryyes .ryyes-expanded-card img{display:block;width:100%;border:3px solid #fff;border-radius:21px;box-shadow:0 18px 32px rgba(37,64,132,.17);transition:box-shadow .28s ease}.theme-ryyes .ryyes-expanded-card span{display:block;margin:11px 2px 0;color:#3d65d4;font-size:10px;font-weight:800;letter-spacing:.08em}.theme-ryyes .ryyes-expanded-grid:has(.ryyes-expanded-card:hover) .ryyes-expanded-card:not(:hover){filter:brightness(.93) saturate(.72);transform:scale(.97)}.theme-ryyes .ryyes-expanded-card:hover,.theme-ryyes .ryyes-expanded-card:focus-visible{z-index:2;outline:0;transform:translateY(-11px) scale(1.03)}.theme-ryyes .ryyes-expanded-card:hover img,.theme-ryyes .ryyes-expanded-card:focus-visible img{box-shadow:0 28px 42px rgba(37,64,132,.26)}@media(max-width:900px){.theme-ryyes .ryyes-expanded-screens{grid-column:2}.theme-ryyes .ryyes-expanded-grid{grid-template-columns:repeat(3,minmax(0,1fr));gap:30px 18px;padding:32px}}@media(max-width:620px){.theme-ryyes .ryyes-expanded-screens{grid-column:1;gap:52px;margin-top:36px}.theme-ryyes .ryyes-expanded-group header{grid-template-columns:1fr;gap:9px}.theme-ryyes .ryyes-expanded-group header small{grid-column:auto}.theme-ryyes .ryyes-expanded-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:25px 11px;padding:18px}.theme-ryyes .ryyes-expanded-card img{border-width:2px;border-radius:14px}.theme-ryyes .ryyes-expanded-card span{font-size:8px}}`;
      document.head.append(expandedStyles);
      const expandedGallery = document.createElement('div');
      expandedGallery.className = 'ryyes-expanded-screens ryyes-app-screens';
      expandedGallery.innerHTML = flows.map((flow) => `<section class="ryyes-expanded-group"><header><p>${flow.no} / APP FLOW</p><h3>${flow.title}<span>${flow.cn}</span></h3><small>${flow.note}</small></header><div class="ryyes-expanded-grid">${flow.screens.map(([file, label], index) => `<button type="button" class="ryyes-expanded-card" data-view-image="${appSource}${file}" aria-label="查看 ${label}"><img src="${appSource}${file}" alt="${label}"><span>${String(index + 1).padStart(2, '0')} / ${label}</span></button>`).join('')}</div></section>`).join('');
      const webSource = 'assets/projects/ryyes/web/';
      const webFlows = [
        { no: '01', title: 'Smart pen pairing', cn: '智能笔蓝牙绑定', note: '按识别设备、唤醒设备、选择配对到绑定完成的顺序，引导首次连接并提供故障处理入口。', screens: [['web-pair-01-identify.webp', 'Identify pen / 识别设备'], ['web-pair-02-power.webp', 'Power on / 开启设备'], ['web-pair-03-select.webp', 'Select & pair / 选择配对'], ['web-pair-03-troubleshoot.webp', 'Troubleshoot / 连接排查'], ['web-pair-04-bound.webp', 'Bound / 绑定完成']] },
        { no: '02', title: 'Workspace & devices', cn: '主页面与设备状态', note: '从工作台进入常用内容，并让已连接与未连接的设备状态保持清晰可见。', screens: [['web-home.webp', 'Home / 工作台'], ['web-devices-connected.webp', 'Connected / 已连接'], ['web-devices-disconnected.webp', 'Disconnected / 未连接']] },
        { no: '03', title: 'Notebooks & recognition', cn: '笔记本与 AI 识别', note: '以笔记本为信息容器，串联创建、编辑、手写内容转文字与 AI 识别。', screens: [['web-notebooks.webp', 'Notebooks / 笔记本列表'], ['web-new-notebook.webp', 'New notebook / 新建笔记'], ['web-notebook-detail.webp', 'Notebook detail / 笔记详情'], ['web-typed-text.webp', 'Typed text / 文字编辑'], ['web-typed-text-1.webp', 'Text view / 内容阅读'], ['web-ai-recognition.webp', 'AI recognition / AI 识别']] },
        { no: '04', title: 'Timeline & recordings', cn: '时间线与录音整理', note: '把记录、时间线和 AI 处理结果集中呈现，帮助用户回看与继续整理内容。', screens: [['web-timeline-list.webp', 'Timeline / 时间线'], ['web-timeline-ai-agent.webp', 'AI agent / 智能助理'], ['web-timeline-ai-details.webp', 'AI details / 结果详情'], ['web-recordings.webp', 'Recordings / 录音文件']] },
        { no: '05', title: 'Offline & settings', cn: '离线数据与设置', note: '通过离线数据与账户设置，补足不同网络状态下的使用和管理闭环。', screens: [['web-offline-data.webp', 'Offline data / 离线数据'], ['web-settings.webp', 'Settings / 设置']] }
      ];
      const webGallery = document.createElement('div');
      webGallery.className = 'ryyes-expanded-screens ryyes-web-screens';
      webGallery.innerHTML = webFlows.map((flow) => `<section class="ryyes-expanded-group"><header><p>${flow.no} / WEB FLOW</p><h3>${flow.title}<span>${flow.cn}</span></h3><small>${flow.note}</small></header><div class="ryyes-expanded-grid">${flow.screens.map(([file, label], index) => `<button type="button" class="ryyes-expanded-card" data-view-image="${webSource}${file}" aria-label="查看 ${label}"><img src="${webSource}${file}" alt="${label}"><span>${String(index + 1).padStart(2, '0')} / ${label}</span></button>`).join('')}</div></section>`).join('');
      appScreensChapter.append(webGallery);
      appScreensChapter.querySelector('.section-heading small').innerHTML = '03 / WEB SCREENS<br>网页端页面展示';
      appScreensChapter.querySelector('.section-heading h2').innerHTML = 'One workspace.<br><em>Every flow.</em>';
      explorer.remove();
      webGallery.querySelectorAll('[data-view-image]').forEach((trigger) => trigger.addEventListener('click', () => {
        if (!viewer || !viewerImage) return;
        viewer.classList.remove('is-video');
        viewerVideo.pause();
        viewerImage.src = trigger.dataset.viewImage;
        viewer.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }));
      if (location.hash === '#app' || location.hash === '#web') {
        setPlatform(location.hash.slice(1));
        requestAnimationFrame(() => appScreensChapter.scrollIntoView({ behavior: 'smooth', block: 'start' }));
      }
    }
  }
}

if (document.body.classList.contains('theme-joy')) {
  const joySource = 'assets/projects/meet-joy/screens/';
  const joyHero = document.querySelector('.project-hero .hero-stage');
  const joyBrief = document.querySelector('#brief');
  const joyArchitecture = document.querySelector('#architecture');
  const joySystem = document.querySelector('#system');
  const joyScreens = document.querySelector('#screens');
  const joyFlows = [
    { no: '01', title: 'Growing together', cn: '成长陪伴', note: '从首页进入宝宝档案、成长曲线与家庭成员管理，让成长信息持续可见。', screens: [['home.webp', 'Home / 首页'], ['baby-passport.webp', 'Baby passport / 宝宝护照'], ['growth-curve.webp', 'Growth curve / 成长曲线'], ['family-members.webp', 'Family members / 家庭成员']] },
    { no: '02', title: 'Learn by moments', cn: '内容学习', note: '用课程、专题包和播放器，将孕育与育儿知识组织为轻松连续的学习体验。', screens: [['courses-home.webp', 'Courses / 好课'], ['course-detail.webp', 'Course detail / 课程详情'], ['player.webp', 'Player / 播放器'], ['course-package.webp', 'Course package / 课程包'], ['topic-package.webp', 'Topic package / 专题包']] },
    { no: '03', title: 'A caring companion', cn: 'AI 陪伴', note: '通过育见小助手承接即时记录、提问与对话，让每次需求都得到温柔回应。', screens: [['agent-home.webp', 'Agent home / 小助手'], ['agent-record.webp', 'Record / 记录入口'], ['agent-chat.webp', 'Conversation / 对话']] },
    { no: '04', title: 'Motivate the journey', cn: '任务与激励', note: '任务、测评与勋章把碎片化行动转化为可完成、可回看的成长反馈。', screens: [['tasks.webp', 'Tasks / 任务大厅'], ['assessment.webp', 'Assessment / 测评'], ['badges.webp', 'Badges / 勋章规则']] },
    { no: '05', title: 'Personal care', cn: '个人服务', note: '会员与个人中心集中承接权益、订单和账户设置，补全长期使用体验。', screens: [['membership.webp', 'Membership / 会员'], ['profile.webp', 'Profile / 我的']] }
  ];

  if (!document.querySelector('#joy-detail-style')) {
    const style = document.createElement('style');
    style.id = 'joy-detail-style';
    style.textContent = `.viewer.is-scrollable{align-items:flex-start;overflow:auto;cursor:zoom-out}.viewer.is-scrollable img{width:min(820px,90vw);max-width:100%;max-height:none;margin:5vh auto;object-fit:contain}.theme-joy{--paper:#fff8f5;--ink:#39252a;--accent:#df7894;--soft:#ffe0e7}.theme-joy .project-hero{background:radial-gradient(circle at 76% 22%,#ffe2e7,transparent 34%),#fff8f5}.theme-joy .joy-hero-screens{display:flex;align-items:flex-end;justify-content:center;gap:0;padding:46px 3% 34px;overflow:visible;background:linear-gradient(145deg,#fff5f5,#ffe6ea)}.theme-joy .joy-hero-screens>p{position:absolute;top:24px;left:32px;margin:0;color:#c65d7b;font-size:10px;font-weight:800;letter-spacing:.14em}.theme-joy .joy-hero-screens figure{width:28%;margin:0 0 0 -8%;position:relative;z-index:1;transition:transform .35s cubic-bezier(.2,.9,.3,1),filter .35s ease}.theme-joy .joy-hero-screens figure:first-of-type{margin-left:0}.theme-joy .joy-hero-screens figure:nth-of-type(3){z-index:4;transform:translateY(-24px)}.theme-joy .joy-hero-screens figure:nth-of-type(2),.theme-joy .joy-hero-screens figure:nth-of-type(4){z-index:3}.theme-joy .joy-hero-screens figure:hover{z-index:8;transform:translateY(-42px) scale(1.07)}.theme-joy .joy-hero-screens img{display:block;width:100%;border:3px solid #fff;border-radius:20px;box-shadow:0 22px 36px rgba(133,62,80,.19)}.theme-joy .joy-hero-screens figcaption{margin-top:8px;color:#b64f70;font-size:8px;font-weight:800;letter-spacing:.08em}.theme-joy .joy-map{grid-column:2;position:relative;min-height:560px;margin-top:42px;overflow:visible;border:1px solid rgba(185,83,117,.18);border-radius:28px;background:radial-gradient(circle at 80% 16%,rgba(255,202,215,.72),transparent 28%),linear-gradient(135deg,#fffdfd,#fff0f3);box-shadow:0 25px 55px rgba(187,88,119,.1)}.theme-joy .joy-map::before{content:"";position:absolute;inset:0;border-radius:inherit;background-image:linear-gradient(rgba(222,120,148,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(222,120,148,.07) 1px,transparent 1px);background-size:42px 42px}.theme-joy .joy-map>p{position:absolute;top:26px;left:28px;z-index:2;margin:0;color:#c65d7b;font-size:10px;font-weight:800;letter-spacing:.14em}.theme-joy .joy-map svg{position:absolute;inset:74px 5% 55px;width:90%;height:calc(100% - 129px);overflow:visible}.theme-joy .joy-map path{fill:none;stroke:#df7894;stroke-width:2.4;stroke-linecap:round;stroke-dasharray:10 13;animation:joy-flow 9s linear infinite}.theme-joy .joy-map button{position:absolute;z-index:3;display:flex;align-items:center;gap:10px;border:0;padding:0;background:transparent;color:#39252a;text-align:left;cursor:zoom-in}.theme-joy .joy-map button i{width:18px;height:18px;flex:0 0 18px;border:3px solid #fff;border-radius:50%;background:#df7894;box-shadow:0 0 0 4px rgba(223,120,148,.2),0 0 19px rgba(223,120,148,.5);transition:transform .25s ease}.theme-joy .joy-map button span{display:grid;gap:3px;min-width:132px;padding:10px 12px;border:1px solid rgba(185,83,117,.1);border-radius:11px;background:rgba(255,255,255,.9);box-shadow:0 10px 20px rgba(165,71,102,.09)}.theme-joy .joy-map b{font-size:13px;line-height:1}.theme-joy .joy-map small{color:rgba(57,37,42,.62);font-size:9px}.theme-joy .joy-map figure{position:absolute;bottom:calc(100% + 16px);left:50%;z-index:5;width:148px;margin:0;overflow:hidden;border:1px solid rgba(185,83,117,.18);border-radius:14px;background:#fff;box-shadow:0 22px 44px rgba(132,55,80,.2);opacity:0;pointer-events:none;transform:translate(-50%,10px) scale(.92);transition:.25s ease}.theme-joy .joy-map figure img{display:block;width:100%}.theme-joy .joy-map button:hover i,.theme-joy .joy-map button:focus-visible i{transform:scale(1.2)}.theme-joy .joy-map button:hover figure,.theme-joy .joy-map button:focus-visible figure{opacity:1;transform:translate(-50%,0) scale(1)}.theme-joy .joy-map button:focus-visible{outline:0}.theme-joy .joy-home{top:44%;left:7%}.theme-joy .joy-profile{top:18%;left:26%}.theme-joy .joy-learn{top:42%;left:45%}.theme-joy .joy-agent{top:20%;left:67%}.theme-joy .joy-task{top:68%;left:51%}.theme-joy .joy-member{top:59%;right:5%}.theme-joy .joy-system-sheet{grid-column:2;display:grid;grid-template-columns:1.4fr 1fr;gap:28px;margin-top:42px;padding:36px;border:1px solid rgba(185,83,117,.19);border-radius:26px;background:linear-gradient(135deg,#fffdfd,#ffe8ee);box-shadow:0 22px 54px rgba(165,71,102,.1)}.theme-joy .joy-system-sheet h3{margin:0;color:#39252a;font-size:clamp(30px,3.3vw,52px);letter-spacing:-.07em;line-height:.9}.theme-joy .joy-system-sheet p{margin:16px 0 0;color:rgba(57,37,42,.63);font-size:13px;line-height:1.7}.theme-joy .joy-swatches{display:flex;gap:10px;margin-top:26px}.theme-joy .joy-swatches i{width:54px;height:54px;border-radius:16px}.theme-joy .joy-swatches i:nth-child(1){background:#39252a}.theme-joy .joy-swatches i:nth-child(2){background:#df7894}.theme-joy .joy-swatches i:nth-child(3){background:#ffdbe4}.theme-joy .joy-swatches i:nth-child(4){background:#fff8f5;border:1px solid rgba(57,37,42,.12)}.theme-joy .joy-system-rules{display:grid;align-content:start;gap:0;border:1px solid rgba(185,83,117,.13);border-radius:18px;overflow:hidden;background:rgba(255,255,255,.72)}.theme-joy .joy-system-rules b{display:flex;justify-content:space-between;padding:17px 19px;border-bottom:1px solid rgba(185,83,117,.12);font-size:12px}.theme-joy .joy-system-rules b:last-child{border-bottom:0}.theme-joy .joy-system-rules small{color:#c65d7b;font-size:10px}.theme-joy .joy-screen-groups{grid-column:2;display:grid;gap:78px;margin-top:54px}.theme-joy .joy-screen-group{padding-top:32px;border-top:1px solid rgba(57,37,42,.15)}.theme-joy .joy-screen-group header{display:grid;grid-template-columns:145px minmax(0,1fr);gap:18px;align-items:baseline;margin-bottom:30px}.theme-joy .joy-screen-group header p{margin:0;color:#c65d7b;font-size:10px;font-weight:800;letter-spacing:.13em}.theme-joy .joy-screen-group h3{margin:0;font-size:clamp(30px,3.4vw,52px);letter-spacing:-.07em;line-height:.9}.theme-joy .joy-screen-group h3 span{display:block;margin-top:8px;color:#c65d7b;font-size:13px;letter-spacing:0}.theme-joy .joy-screen-group header small{grid-column:2;max-width:560px;color:rgba(57,37,42,.62);font-size:12px;line-height:1.65}.theme-joy .joy-screen-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:38px 26px;padding:44px;background:linear-gradient(135deg,#fff0f3,#fffafa)}.theme-joy .joy-screen-card{border:0;padding:0;background:transparent;color:#39252a;text-align:left;cursor:zoom-in;transition:transform .28s ease}.theme-joy .joy-screen-card img{display:block;width:100%;height:520px;object-fit:cover;object-position:top;border:3px solid #fff;border-radius:22px;box-shadow:0 18px 32px rgba(165,71,102,.17)}.theme-joy .joy-screen-card span{display:block;margin:11px 2px 0;color:#c65d7b;font-size:10px;font-weight:800;letter-spacing:.08em}.theme-joy .joy-screen-card:hover,.theme-joy .joy-screen-card:focus-visible{outline:0;transform:translateY(-10px) scale(1.025)}@keyframes joy-flow{to{stroke-dashoffset:-170}}@media(max-width:700px){.theme-joy .joy-map,.theme-joy .joy-system-sheet,.theme-joy .joy-screen-groups{grid-column:1}.theme-joy .joy-map{min-height:500px}.theme-joy .joy-system-sheet{grid-template-columns:1fr;padding:24px}.theme-joy .joy-screen-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:25px 11px;padding:18px}.theme-joy .joy-screen-card img{height:360px}.theme-joy .joy-screen-group header{grid-template-columns:1fr;gap:9px}.theme-joy .joy-screen-group header small{grid-column:auto}.theme-joy .joy-hero-screens{padding:42px 2% 28px}.theme-joy .joy-hero-screens figure{width:30%;margin-left:-9%}.theme-joy .joy-hero-screens figure:nth-of-type(3){transform:translateY(-14px)}}@media(prefers-reduced-motion:reduce){.theme-joy .joy-map path{animation:none}}`;
    document.head.append(style);
    const viewportStyle = document.createElement('style');
    viewportStyle.id = 'joy-mobile-viewport-style';
    viewportStyle.textContent = `.theme-joy .joy-screen-card img{aspect-ratio:393/852;height:auto;object-fit:cover;object-position:top}.theme-joy .joy-hero-screens{gap:0;padding:38px 5% 30px;isolation:isolate}.theme-joy .joy-hero-screens>p{left:30px}.theme-joy .joy-hero-screens figure{width:23%;margin-left:-7%;transition:transform .35s cubic-bezier(.2,.9,.3,1),filter .35s ease}.theme-joy .joy-hero-screens figure:nth-of-type(3){transform:none}.theme-joy .joy-hero-screens figure:hover{z-index:6;transform:translateY(-20px) scale(1.04)}.theme-joy .joy-hero-phone{position:relative;z-index:7;width:min(27%,238px);aspect-ratio:393/852;margin:0 -3.5%;overflow:hidden;border:7px solid #fff;border-radius:33px;background:#fff0f3;box-shadow:0 28px 52px rgba(133,62,80,.27);transform:translateY(-34px);transition:transform .35s cubic-bezier(.2,.9,.3,1),box-shadow .35s ease}.theme-joy .joy-hero-phone::before{content:"";position:absolute;z-index:2;top:9px;left:50%;width:32%;height:5px;border-radius:999px;background:rgba(57,37,42,.38);transform:translateX(-50%)}.theme-joy .joy-hero-phone video{display:block;width:100%;height:100%;object-fit:cover;object-position:top}.theme-joy .joy-hero-phone span{position:absolute;z-index:3;right:10px;bottom:11px;padding:6px 8px;border:1px solid rgba(255,255,255,.75);border-radius:999px;background:rgba(57,37,42,.52);color:#fff;font-size:8px;font-weight:800;letter-spacing:.12em;backdrop-filter:blur(10px)}.theme-joy .joy-hero-phone:hover{transform:translateY(-47px) scale(1.035);box-shadow:0 35px 68px rgba(133,62,80,.33)}@media(max-width:700px){.theme-joy .joy-hero-screens{padding:38px 2% 24px}.theme-joy .joy-hero-screens figure{width:28%;margin-left:-12%}.theme-joy .joy-hero-phone{width:30%;margin:0 -7%;border-width:4px;border-radius:24px;transform:translateY(-18px)}.theme-joy .joy-hero-phone:hover{transform:translateY(-25px) scale(1.02)}}`;
    document.head.append(viewportStyle);
    const heroViewportStyle = document.createElement('style');
    heroViewportStyle.id = 'joy-hero-viewport-style';
    heroViewportStyle.textContent = `.theme-joy .joy-hero-screens figure img{aspect-ratio:393/852;height:auto;object-fit:cover;object-position:top}`;
    document.head.append(heroViewportStyle);
  }

  if (joyHero) {
    const heroScreens = [['home.webp', 'HOME / 首页'], ['baby-passport.webp', 'PASSPORT / 宝宝护照'], ['agent-home.webp', 'AGENT / 小助手'], ['profile.webp', 'PROFILE / 我的']];
    joyHero.className = 'hero-stage joy-hero-screens';
    joyHero.innerHTML = `<p>KEY SCREENS / 核心页面</p>${heroScreens.slice(0, 2).map(([file, label]) => `<figure><img src="${joySource}${file}" alt="${label}"><figcaption>${label}</figcaption></figure>`).join('')}<div class="joy-hero-phone" aria-label="Meet Joy product demo"><video src="${joySource}demo.mp4" poster="${joySource}courses-home.webp" autoplay muted loop playsinline></video><span>PRODUCT DEMO</span></div>${heroScreens.slice(2).map(([file, label]) => `<figure><img src="${joySource}${file}" alt="${label}"><figcaption>${label}</figcaption></figure>`).join('')}`;
    joyHero.querySelectorAll('figure').forEach((screen) => screen.addEventListener('click', () => { if (!viewer || !viewerImage) return; const image = screen.querySelector('img'); viewer.classList.remove('is-video'); viewerVideo.pause(); viewerImage.src = image.src; viewer.classList.add('is-open'); document.body.style.overflow = 'hidden'; }));
    joyHero.querySelector('.joy-hero-phone')?.addEventListener('click', () => {
      if (!viewer) return;
      viewerImage.src = '';
      viewerVideo.src = `${joySource}demo.mp4`;
      viewerVideo.play().catch(() => {});
      viewer.classList.add('is-video', 'is-open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (joyBrief) {
    joyBrief.querySelector('.section-heading small').innerHTML = '01 / BRIEF<br>需求定义';
    joyBrief.querySelector('.section-heading h2').innerHTML = 'Support every<br><em>growing moment.</em>';
    joyBrief.querySelector('.overview-grid').innerHTML = '<div><b>PRODUCT / 产品</b><p>Meet Joy<br>育见欢喜</p></div><div><b>DESIGN LENS / 设计视角</b><p>Warm parenting<br>温暖陪伴</p></div><div><b>KEY MOMENT / 核心时刻</b><p>Growth & care<br>成长与关怀</p></div>';
  }
  if (joyArchitecture) {
    joyArchitecture.querySelector('p')?.remove();
    joyArchitecture.querySelector('.section-heading small').innerHTML = '02 / ARCHITECTURE<br>信息架构';
    joyArchitecture.querySelector('.section-heading h2').innerHTML = 'One caring<br><em>growth loop.</em>';
    const mapNodes = [['home', '首页', 'HOME', 'home.webp'], ['profile', '成长档案', 'PROFILE', 'baby-passport.webp'], ['learn', '内容学习', 'LEARN', 'courses-home.webp'], ['agent', '育见助手', 'AGENT', 'agent-home.webp'], ['task', '任务激励', 'TASKS', 'tasks.webp'], ['member', '个人服务', 'ACCOUNT', 'profile.webp']];
    const map = document.createElement('div');
    map.className = 'joy-map';
    map.innerHTML = `<p>GROWTH EXPERIENCE MAP / 成长体验地图</p><svg viewBox="0 0 1000 560" preserveAspectRatio="none" aria-hidden="true"><path d="M112 308 C180 175 273 161 360 220 S502 360 522 404"/><path d="M111 307 C205 378 350 425 515 405"/><path d="M518 403 C610 344 683 206 754 184"/><path d="M754 185 C810 270 830 360 888 408"/><path d="M520 406 C630 482 738 479 886 409"/></svg>${mapNodes.map(([key, cn, en, file]) => `<button type="button" class="joy-${key}" data-view-image="${joySource}${file}"><i></i><span><b>${cn}</b><small>${en}</small></span><figure><img src="${joySource}${file}" alt="${cn}"></figure></button>`).join('')}`;
    joyArchitecture.append(map);
    map.querySelectorAll('[data-view-image]').forEach((trigger) => trigger.addEventListener('click', () => { if (!viewer || !viewerImage) return; viewerImage.src = trigger.dataset.viewImage; viewer.classList.add('is-open'); document.body.style.overflow = 'hidden'; }));
  }
  if (joySystem) {
    joySystem.querySelector('p')?.remove();
    joySystem.querySelector('.section-heading small').innerHTML = '03 / SYSTEM<br>设计系统';
    joySystem.querySelector('.section-heading h2').innerHTML = 'One gentle<br><em>visual language.</em>';
    const sheet = document.createElement('section');
    sheet.className = 'joy-system-sheet';
    sheet.innerHTML = '<div><p>MEET JOY / DESIGN SYSTEM</p><h3>Designed for<br>gentle care.</h3><p>以柔和的粉色、清晰的信息层级与轻量圆角组件，帮助家长在陪伴与记录中保持放松。</p><div class="joy-swatches"><i></i><i></i><i></i><i></i></div></div><div class="joy-system-rules"><b>Display type <small>32 / 40 / 52</small></b><b>Body & caption <small>14 / 12 / 10</small></b><b>Corner rhythm <small>16 / 24 / Full</small></b><b>Space system <small>8 / 12 / 20 / 32</small></b></div>';
    joySystem.append(sheet);
  }
  if (joyScreens) {
    joyScreens.classList.remove('atlas-section');
    joyScreens.querySelector('.atlas-panel')?.remove();
    joyScreens.querySelector('.section-heading small').innerHTML = '04 / SCREENS<br>页面展示';
    joyScreens.querySelector('.section-heading h2').innerHTML = 'Designed for<br><em>growing together.</em>';
    const groups = document.createElement('div');
    groups.className = 'joy-screen-groups';
    groups.innerHTML = joyFlows.map((flow) => `<section class="joy-screen-group"><header><p>${flow.no} / MINI PROGRAM</p><h3>${flow.title}<span>${flow.cn}</span></h3><small>${flow.note}</small></header><div class="joy-screen-grid">${flow.screens.map(([file, label], index) => `<button type="button" class="joy-screen-card" data-view-image="${joySource}${file}"><img src="${joySource}${file}" alt="${label}"><span>${String(index + 1).padStart(2, '0')} / ${label}</span></button>`).join('')}</div></section>`).join('');
    joyScreens.append(groups);
    groups.querySelectorAll('[data-view-image]').forEach((trigger) => trigger.addEventListener('click', () => { if (!viewer || !viewerImage) return; viewer.classList.remove('is-video'); viewer.classList.add('is-scrollable'); viewerVideo.pause(); viewerImage.src = trigger.dataset.viewImage; viewer.classList.add('is-open'); document.body.style.overflow = 'hidden'; }));
  }
}
