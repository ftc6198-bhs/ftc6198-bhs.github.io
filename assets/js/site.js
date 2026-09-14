(() => {
  const root = document.documentElement;
  const menu = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-nav]');
  const theme = document.querySelector('[data-theme-button]');

  const setTheme = (value) => {
    root.dataset.theme = value;
    localStorage.setItem('ftc6198-theme', value);
    if (theme) {
      theme.setAttribute('aria-label', value === 'dark' ? 'Use light theme' : 'Use dark theme');
      theme.textContent = value === 'dark' ? '☼' : '◐';
    }
  };

  const savedTheme = localStorage.getItem('ftc6198-theme');
  if (savedTheme === 'dark' || savedTheme === 'light') setTheme(savedTheme);
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark');
  else setTheme('light');

  const closeMenu = () => {
    if (!menu || !nav) return;
    nav.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  menu?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menu.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  });

  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  theme?.addEventListener('click', () => {
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  const current = document.body.dataset.page;
  nav?.querySelector(`[data-page="${current}"]`)?.setAttribute('aria-current', 'page');

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
})();
