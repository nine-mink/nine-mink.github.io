const zh = document.documentElement.lang === 'zh-CN';

// Keep bookmarks from the original one-page site working in both languages.
const originalSections = {
  about: 'about', experience: 'about',
  research: 'research', publications: 'research', paperList: 'research', paperCount: 'research',
  projects: 'projects', wellbeing: 'wellbeing',
  community: 'community', 'business-visits': 'community', 'aspiring-leaders-forum': 'community',
  'future-academy-team': 'community', 'nz-community': 'community', 'ai-teaching': 'community',
  gallery: 'community', galleryPrev: 'community', galleryNext: 'community'
};

function syncLocation() {
  const id = location.hash.slice(1);
  if (document.body.dataset.page === 'home' && Object.hasOwn(originalSections, id)) {
    const destination = new URL(originalSections[id] + (zh ? '-zh.html' : '.html'), location.href);
    destination.hash = id;
    location.replace(destination.href);
    return;
  }
  const languageSwitch = document.querySelector('.language-switch');
  languageSwitch.hash = document.getElementById(id) ? location.hash : '';
}

syncLocation();
window.addEventListener('hashchange', syncLocation);

const toggle=document.getElementById('menuToggle'),nav=document.getElementById('navLinks');
function closeMenu(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
const gallery=document.getElementById('gallery');
function scrollGallery(dir){const width=gallery.querySelector('figure').getBoundingClientRect().width+14;gallery.scrollBy({left:dir*width,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}
document.getElementById('galleryPrev')?.addEventListener('click',()=>scrollGallery(-1));document.getElementById('galleryNext')?.addEventListener('click',()=>scrollGallery(1));document.getElementById('year').textContent=new Date().getFullYear();

const entryDialog = document.getElementById('entry-dialog');
const detailTitle = document.getElementById('detail-title');
const detailSection = document.getElementById('detail-section');
const detailBody = document.getElementById('detail-body');
let lastDetailButton;

function openEntry(button) {
  const entry = detailEntries[button.dataset.detail];
  const section = button.closest('section')?.querySelector('.section-label');
  detailSection.textContent = section?.textContent.replace(/^\d+\s*\/\s*/, '') ||
    (zh ? '工作概览' : 'At a glance');
  detailTitle.textContent = entry.title;
  detailBody.replaceChildren(...entry.paragraphs.map(text => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
  }));
  lastDetailButton = button;
  entryDialog.showModal();
  entryDialog.scrollTop = 0;
}

document.addEventListener('click', event => {
  const button = event.target.closest('button[data-detail]');
  if (button) {
    openEntry(button);
    return;
  }
  // Preserve links, text selection and native controls inside a clickable card.
  if (event.target.closest('a, button, summary, dialog') || window.getSelection()?.toString()) return;
  const card = event.target.closest('[data-detail-card]');
  if (card) openEntry(card.querySelector('button[data-detail]'));
});

document.getElementById('detail-close')?.addEventListener('click', () => entryDialog.close());
entryDialog?.addEventListener('click', event => {
  if (event.target === entryDialog) entryDialog.close();
});
entryDialog?.addEventListener('close', () => lastDetailButton?.focus({preventScroll: true}));

// Featured-work links open the same full account as the detail button on the subject page.
function showFeaturedEntry() {
  const id = location.hash.slice(1);
  if (!['fact', 'legal', 'chancard'].includes(id) || entryDialog?.open) return;
  const button = document.getElementById(id)?.querySelector('button[data-detail]');
  if (button) openEntry(button);
}
showFeaturedEntry();
window.addEventListener('hashchange', showFeaturedEntry);
