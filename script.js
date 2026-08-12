const revealItems = document.querySelectorAll('.reveal');
const header = document.querySelector('.site-header');
const videos = document.querySelectorAll('video');
const heroSection = document.querySelector('.hero-section');
const heroBlobFrame = document.querySelector('.hero-blob-frame');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const dashboardLoginLinks = document.querySelectorAll('[data-dashboard-login]');

const dashboardUrl = window.IFLORA_DASHBOARD_URL || document.documentElement.dataset.dashboardUrl;
if (dashboardUrl) {
	dashboardLoginLinks.forEach((link) => {
		link.href = dashboardUrl;
	});
}

function setMobileMenu(open) {
	if (!header || !menuToggle || !navLinks) return;
	const menuLabel = open ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού';
	header.classList.toggle('nav-open', open);
	menuToggle.setAttribute('aria-expanded', String(open));
	menuToggle.setAttribute('aria-label', window.iFloraTranslate ? window.iFloraTranslate(menuLabel) : menuLabel);
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

window.addEventListener('iflora-language-change', () => {
	if (!header || !menuToggle) return;
	setMobileMenu(header.classList.contains('nav-open'));
});

const languageNames = {
	el: 'Ελληνικά',
	bg: 'Български',
	sq: 'Shqip',
	tr: 'Türkçe',
	ro: 'Română',
	nl: 'Nederlands',
	fr: 'Français',
	es: 'Español',
	it: 'Italiano'
};

const languageSwitchers = document.querySelectorAll('[data-language-switcher]');

function closeLanguageSwitcher(switcher) {
	const button = switcher?.querySelector('[data-language-button]');
	switcher?.classList.remove('is-open');
	button?.setAttribute('aria-expanded', 'false');
}

function syncLanguageSwitcher(switcher, language) {
	if (!switcher) return;
	const normalizedLanguage = languageNames[language] ? language : 'el';
	const button = switcher.querySelector('[data-language-button]');
	const flag = switcher.querySelector('[data-language-flag]');
	const code = switcher.querySelector('[data-language-code]');
	const menu = switcher.querySelector('[data-language-menu]');

	if (flag) {
		flag.className = `flag-icon flag-${normalizedLanguage}`;
	}

	if (code) {
		code.textContent = normalizedLanguage.toUpperCase();
	}

	button?.setAttribute('aria-label', languageNames[normalizedLanguage]);

	menu?.querySelectorAll('[data-language-option]').forEach((option) => {
		const isActive = option.dataset.languageOption === normalizedLanguage;
		option.classList.toggle('is-active', isActive);
		option.setAttribute('aria-selected', String(isActive));
		option.tabIndex = isActive ? 0 : -1;
	});
}

function setupLanguageSwitchers() {
	languageSwitchers.forEach((switcher) => {
		const select = switcher.querySelector('[data-language-select]');
		const button = switcher.querySelector('[data-language-button]');
		const menu = switcher.querySelector('[data-language-menu]');
		if (!select || !button || !menu) return;

		const options = Array.from(select.options).map((option) => option.value).filter(Boolean);
		menu.innerHTML = options.map((language) => `
			<button class="language-option" type="button" role="option" data-language-option="${language}" aria-selected="false">
				<span class="flag-icon flag-${language}" aria-hidden="true"></span>
				<span class="language-option-code">${language.toUpperCase()}</span>
				<span class="language-option-name">${languageNames[language] || language.toUpperCase()}</span>
			</button>
		`).join('');

		button.addEventListener('click', () => {
			const isOpen = switcher.classList.toggle('is-open');
			button.setAttribute('aria-expanded', String(isOpen));
			if (isOpen) {
				menu.querySelector('.language-option.is-active')?.focus();
			}
		});

		menu.querySelectorAll('[data-language-option]').forEach((option) => {
			option.addEventListener('click', () => {
				const language = option.dataset.languageOption;
				if (!language) return;
				select.value = language;
				select.dispatchEvent(new Event('change', { bubbles: true }));
				closeLanguageSwitcher(switcher);
				button.focus();
			});
		});

		switcher.addEventListener('keydown', (event) => {
			const menuOptions = Array.from(menu.querySelectorAll('[data-language-option]'));
			const activeIndex = menuOptions.indexOf(document.activeElement);

			if (event.key === 'Escape') {
				closeLanguageSwitcher(switcher);
				button.focus();
			}

			if (event.key === 'ArrowDown') {
				event.preventDefault();
				if (!switcher.classList.contains('is-open')) {
					switcher.classList.add('is-open');
					button.setAttribute('aria-expanded', 'true');
				}
				menuOptions[(activeIndex + 1 + menuOptions.length) % menuOptions.length]?.focus();
			}

			if (event.key === 'ArrowUp') {
				event.preventDefault();
				if (!switcher.classList.contains('is-open')) {
					switcher.classList.add('is-open');
					button.setAttribute('aria-expanded', 'true');
				}
				menuOptions[(activeIndex - 1 + menuOptions.length) % menuOptions.length]?.focus();
			}
		});

		syncLanguageSwitcher(switcher, select.value || 'el');
	});
}

setupLanguageSwitchers();

document.addEventListener('click', (event) => {
	languageSwitchers.forEach((switcher) => {
		if (!switcher.contains(event.target)) closeLanguageSwitcher(switcher);
	});
});

window.addEventListener('iflora-language-change', (event) => {
	languageSwitchers.forEach((switcher) => {
		syncLanguageSwitcher(switcher, event.detail?.language || 'el');
	});
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

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
	const contactInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
	const updateContactFormTheme = () => {
		const isLight = document.body.classList.contains('light-theme');
		contactForm.style.background = isLight ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.03)';
		contactForm.style.borderColor = isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)';
		contactInputs.forEach((input) => {
			input.style.background = isLight ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.2)';
			input.style.borderColor = isLight ? 'rgba(0, 0, 0, 0.1)' : 'rgba(175, 208, 154, 0.3)';
		});
	};

	new MutationObserver(updateContactFormTheme).observe(document.body, {
		attributes: true,
		attributeFilter: ['class']
	});
	updateContactFormTheme();
}
