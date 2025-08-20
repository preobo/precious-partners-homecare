const primaryHeader = document.querySelector('.header')
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher);

const navObserver= new IntersectionObserver((entries) => {
    primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting)
}, {rootMargin: "200px 0px 0px 0px"});

navObserver.observe(scrollWatcher)

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav__links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});


