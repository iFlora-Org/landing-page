const revealItems = document.querySelectorAll('.reveal');
const header = document.querySelector('.site-header');
const videos = document.querySelectorAll('video');
const heroSection = document.querySelector('.hero-section');
const heroBlobFrame = document.querySelector('.hero-blob-frame');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

function setMobileMenu(open) {
	if (!header || !menuToggle || !navLinks) return;
	header.classList.toggle('nav-open', open);
	menuToggle.setAttribute('aria-expanded', String(open));
	menuToggle.setAttribute('aria-label', open ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού');
}

menuToggle?.addEventListener('click', () => {
	setMobileMenu(!header?.classList.contains('nav-open'));
});

navLinks?.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', () => setMobileMenu(false));
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') setMobileMenu(false);
});

document.addEventListener('click', (event) => {
	if (!header?.classList.contains('nav-open')) return;
	if (!header.contains(event.target)) setMobileMenu(false);
});

if ('IntersectionObserver' in window && revealItems.length) {
	const revealObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				revealObserver.unobserve(entry.target);
			}
		});
	}, {
		threshold: 0.15,
		rootMargin: '0px 0px -60px 0px'
	});

	revealItems.forEach((item, index) => {
		item.style.transitionDelay = `${Math.min(index % 4, 3) * 80}ms`;
		revealObserver.observe(item);
	});
} else {
	revealItems.forEach((item) => item.classList.add('visible'));
}

function updateHeaderDepth() {
	if (!header) return;
	header.classList.toggle('is-scrolled', window.scrollY > 40);
}

updateHeaderDepth();
window.addEventListener('scroll', updateHeaderDepth, { passive: true });

let blobScrollQueued = false;
const getScrollY = () => window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
const blobScrollStart = 0;

function getBlobBreakDistance() {
	const viewportHeight = window.visualViewport?.height || window.innerHeight || 720;
	const isMobile = window.matchMedia('(max-width: 720px)').matches;
	return Math.max(isMobile ? 720 : 420, viewportHeight * (isMobile ? 0.9 : 0.58));
}

function updateBlobScrollState() {
	if (!heroSection || !heroBlobFrame?.contentWindow) return;

	const progress = Math.min(1, Math.max(0, (getScrollY() - blobScrollStart) / getBlobBreakDistance()));

	heroBlobFrame.contentWindow.postMessage({
		type: 'iflora-blob-scroll',
		progress
	}, '*');
}

function requestBlobScrollState() {
	if (blobScrollQueued) return;
	blobScrollQueued = true;
	requestAnimationFrame(() => {
		blobScrollQueued = false;
		updateBlobScrollState();
	});
}

heroBlobFrame?.addEventListener('load', updateBlobScrollState);
window.addEventListener('scroll', requestBlobScrollState, { passive: true });
window.addEventListener('resize', requestBlobScrollState);
window.visualViewport?.addEventListener('scroll', requestBlobScrollState, { passive: true });
window.visualViewport?.addEventListener('resize', requestBlobScrollState, { passive: true });
document.addEventListener('touchmove', requestBlobScrollState, { passive: true });
updateBlobScrollState();

videos.forEach((video) => {
	video.play().catch(() => {
		video.controls = true;
	});
});
