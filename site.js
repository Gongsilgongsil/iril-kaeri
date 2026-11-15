// Menu: open on wide screens, closed on phones. Without script the list stays open.
const menu = document.querySelector('.menu');
const wide = matchMedia('(min-width: 72rem)');
const sync = () => { menu.open = wide.matches; };
sync(); wide.addEventListener('change', sync);
