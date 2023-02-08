const topbarNav = document.querySelector('.js-topbar-nav');
const menuOpenBtn = document.querySelector('.js-menu-open');
const menuCloseBtn = document.querySelector('.js-menu-close');

menuOpenBtn.addEventListener('click', () => {
    topbarNav.classList.add('active');
});

menuCloseBtn.addEventListener('click', () => {
    topbarNav.classList.remove('active');
});
