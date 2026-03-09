const taglines = [
    "Building intelligent systems.",
    "Engineering data-driven solutions.",
    "From circuits to code.",
    "Turning signals into insights."
];
let idx = 0;
const taglineEl = document.getElementById('animated-tagline');

function rotateTagline() {
    if (taglineEl) {
        taglineEl.textContent = taglines[idx];
        idx = (idx + 1) % taglines.length;
    }
}

setInterval(rotateTagline, 3000);
rotateTagline();

// navigation helper
function initNav() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (toggle && links) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!expanded));
            links.classList.toggle('open');
        });
    }

    // mark active link based on current page
    const path = window.location.pathname.split('/').pop();
    document.querySelectorAll('nav .nav-links a').forEach(a => {
        const href = a.getAttribute('href');
        if (href === path || href === window.location.href) {
            a.classList.add('active');
        }
    });
}

function initScrollTop() {
    const btn = document.getElementById('toTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) btn.classList.add('show');
        else btn.classList.remove('show');
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function revealSections() {
    const secs = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    secs.forEach(s => observer.observe(s));
}

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initScrollTop();
    revealSections();
});
