const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.1 });

document.querySelectorAll('[data-reveal]').forEach((item) => revealObserver.observe(item));

const chapterLinks = [...document.querySelectorAll('.case-nav a')];
const chapters = [...document.querySelectorAll('[data-chapter]')];
const chapterObserver = new IntersectionObserver((entries) => {
  const active = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!active) return;
  chapterLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${active.target.id}`));
}, { rootMargin: '-22% 0px -60% 0px', threshold: [0.1, 0.35] });
chapters.forEach((chapter) => chapterObserver.observe(chapter));

const showcase = document.querySelector('#screen-showcase');
if (showcase) {
  const tabs = [...showcase.querySelectorAll('.showcase-tabs button')];
  const sets = [...showcase.querySelectorAll('.showcase-set')];
  const kicker = showcase.querySelector('#showcase-kicker');
  const description = showcase.querySelector('#showcase-description');
  const index = showcase.querySelector('#showcase-index');
  const total = showcase.querySelector('#showcase-total');

  const bindPhones = (set) => {
    const row = set.querySelector('.showcase-phones');
    const phones = [...set.querySelectorAll('.showcase-phone')];
    const activatePhone = (phone, inspecting = true) => {
      phones.forEach((item) => item.classList.toggle('is-active', item === phone));
      row.classList.toggle('is-inspecting', inspecting);
      description.textContent = phone.dataset.description;
      index.textContent = String(phones.indexOf(phone) + 1).padStart(2, '0');
    };
    phones.forEach((phone) => {
      phone.tabIndex = 0;
      phone.addEventListener('pointerenter', () => activatePhone(phone));
      phone.addEventListener('focus', () => activatePhone(phone));
      phone.addEventListener('click', () => activatePhone(phone));
      phone.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          activatePhone(phone);
        }
      });
    });
    row.addEventListener('pointerleave', () => activatePhone(phones[0], false));
  };

  sets.forEach(bindPhones);
  const switchSet = (name) => {
    const set = sets.find((item) => item.dataset.set === name);
    if (!set) return;
    const first = set.querySelector('.showcase-phone');
    const count = set.querySelectorAll('.showcase-phone').length;
    tabs.forEach((tab) => tab.classList.toggle('is-active', tab.dataset.set === name));
    sets.forEach((item) => item.classList.toggle('is-active', item === set));
    showcase.classList.toggle('is-welcome', name === 'welcome');
    kicker.textContent = name === 'welcome' ? '01 / WELCOME FLOW · 欢迎引导' : '02 / CORE JOURNEY · 核心路径';
    description.textContent = first.dataset.description;
    index.textContent = '01';
    total.textContent = String(count).padStart(2, '0');
  };
  tabs.forEach((tab) => tab.addEventListener('click', () => switchSet(tab.dataset.set)));
}

const previewItems = [...document.querySelectorAll('.screen-tile')];
const previewModal = document.querySelector('#screen-modal');
if (previewModal && previewItems.length) {
  const modalImage = previewModal.querySelector('#modal-image');
  const modalCaption = previewModal.querySelector('#modal-caption');
  const closeButton = previewModal.querySelector('.modal-close');
  const previousButton = previewModal.querySelector('.modal-prev');
  const nextButton = previewModal.querySelector('.modal-next');
  let currentIndex = 0;

  const renderPreview = (index) => {
    currentIndex = (index + previewItems.length) % previewItems.length;
    const item = previewItems[currentIndex];
    modalImage.src = item.dataset.preview;
    modalImage.alt = item.querySelector('img').alt;
    modalCaption.textContent = `${item.dataset.title} / ${item.dataset.cn} · ${String(currentIndex + 1).padStart(2, '0')} / ${String(previewItems.length).padStart(2, '0')}`;
  };

  previewItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      renderPreview(index);
      previewModal.showModal();
    });
  });
  closeButton.addEventListener('click', () => previewModal.close());
  previousButton.addEventListener('click', () => renderPreview(currentIndex - 1));
  nextButton.addEventListener('click', () => renderPreview(currentIndex + 1));
  previewModal.addEventListener('click', (event) => {
    if (event.target === previewModal) previewModal.close();
  });
  document.addEventListener('keydown', (event) => {
    if (!previewModal.open) return;
    if (event.key === 'ArrowLeft') renderPreview(currentIndex - 1);
    if (event.key === 'ArrowRight') renderPreview(currentIndex + 1);
  });
}
