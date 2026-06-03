const revealItems = document.querySelectorAll('.reveal');
const header = document.querySelector('.site-header');
const videos = document.querySelectorAll('video');
const heroSection = document.querySelector('.hero-section');
const heroBlobFrame = document.querySelector('.hero-blob-frame');

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
const blobScrollStart = window.scrollY;
const blobBreakDistance = 340;

function updateBlobScrollState() {
	if (!heroSection || !heroBlobFrame?.contentWindow) return;

	const progress = Math.min(1, Math.max(0, (window.scrollY - blobScrollStart) / blobBreakDistance));

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
updateBlobScrollState();

videos.forEach((video) => {
	video.play().catch(() => {
		video.controls = true;
	});
});
