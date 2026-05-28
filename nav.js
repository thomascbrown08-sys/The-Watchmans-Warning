const PAGES = [
  { id: 'index', href: 'index.html', title: "Welcome", sub: 'About This Study', special: false },
  { id: 'page-00', href: 'page-00-pastoral-guide.html', title: 'Pastoral Guide', sub: 'For Leaders & Readers', special: true },
  { id: 'page-01', href: 'page-01-watchmans-call.html', num: 'Study 1', title: "The Watchman's Call", sub: 'Why This Warning?' },
  { id: 'page-02', href: 'page-02-two-ditches.html', num: 'Study 2', title: 'The Two Ditches', sub: 'A Diagnostic Lens' },
  { id: 'page-03', href: 'page-03-pride.html', num: 'Study 3', title: 'Pride: The Parent Sin', sub: 'The Root of It All' },
  { id: 'page-04', href: 'page-04-self-deception.html', num: 'Study 4', title: 'The Art of Self-Deception', sub: 'How We Hide from Ourselves' },
  { id: 'page-05', href: 'page-05-respectable-sins.html', num: 'Study 5', title: 'Respectable Sins', sub: "Sins We've Stopped Seeing" },
  { id: 'page-06', href: 'page-06-spiritual-apathy.html', num: 'Study 6', title: 'The Slow Drift', sub: 'Spiritual Apathy' },
  { id: 'page-07', href: 'page-07-grace-ceiling.html', num: 'Study 7', title: 'Grace as a Ceiling', sub: 'When Freedom Becomes License' },
  { id: 'page-08', href: 'page-08-obedience-wall.html', num: 'Study 8', title: 'Obedience as a Wall', sub: 'When Striving Replaces Trust' },
  { id: 'page-09', href: 'page-09-presumption.html', num: 'Study 9', title: 'Presumption and Hardening', sub: 'The Anatomy of a Drift' },
  { id: 'page-10', href: 'page-10-unpardonable.html', num: 'Study 10', title: 'The Unpardonable Sin', sub: 'A Warning and a Mercy' },
  { id: 'page-11', href: 'page-11-assurance.html', num: 'Study 11', title: 'Assurance and Fruit', sub: 'Where to Look' },
  { id: 'page-12', href: 'page-12-no-longer-slaves.html', num: 'Study 12', title: 'No Longer Slaves', sub: 'The Hope That Holds' },
];

function buildNav(currentId) {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  const brand = document.createElement('div');
  brand.className = 'sidebar-brand';
  brand.innerHTML = `<a href="index.html"><div class="brand-title">The Watchman's Warning</div><div class="brand-sub">A Study in Self-Examination</div></a>`;
  sidebar.appendChild(brand);

  const label = document.createElement('div');
  label.className = 'nav-section-label';
  label.textContent = 'Studies';
  sidebar.appendChild(label);

  const ul = document.createElement('ul');
  ul.className = 'nav-list';

  PAGES.forEach(page => {
    const li = document.createElement('li');
    if (page.special) li.className = 'nav-special';
    const a = document.createElement('a');
    a.href = page.href;
    if (page.id === currentId) a.className = 'active';
    let inner = '';
    if (page.num) inner += `<span class="nav-num">${page.num}</span>`;
    inner += `<span class="nav-title">${page.title}</span>`;
    a.innerHTML = inner;
    li.appendChild(a);
    ul.appendChild(li);
  });

  sidebar.appendChild(ul);

  // Mobile toggle
  const toggle = document.getElementById('sidebar-toggle');
  const overlay = document.getElementById('sidebar-overlay');
  if (toggle && overlay) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('visible');
    });
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('visible');
    });
  }

  // Discussion toggles
  document.querySelectorAll('.discussion-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('open');
      const content = btn.nextElementSibling;
      if (content) content.classList.toggle('open');
    });
  });
}
