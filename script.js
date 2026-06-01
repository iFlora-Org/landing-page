const cities = [
	// Attica
	{ name: 'Athens', lat: 37.9838, lng: 23.7275, major: true, region: 'Attica' },
	{ name: 'Piraeus', lat: 37.9420, lng: 23.6466, major: true, region: 'Attica' },
	{ name: 'Peristeri', lat: 38.0138, lng: 23.6886, region: 'Attica' },
	{ name: 'Kallithea', lat: 37.9557, lng: 23.7016, region: 'Attica' },
	{ name: 'Nikaia', lat: 37.9667, lng: 23.6333, region: 'Attica' },
	{ name: 'Glyfada', lat: 37.8667, lng: 23.7500, region: 'Attica' },
	{ name: 'Maroussi', lat: 38.0567, lng: 23.8083, region: 'Attica' },
	{ name: 'Elefsina', lat: 38.0403, lng: 23.5414, region: 'Attica' },
	// Central Greece
	{ name: 'Chalkida', lat: 38.4636, lng: 23.6036, region: 'Central Greece' },
	{ name: 'Lamia', lat: 38.8980, lng: 22.4340, region: 'Central Greece' },
	{ name: 'Livadeia', lat: 38.4372, lng: 22.8744, region: 'Central Greece' },
	{ name: 'Thiva', lat: 38.3244, lng: 23.3197, region: 'Central Greece' },
	{ name: 'Amfissa', lat: 38.5267, lng: 22.3703, region: 'Central Greece' },
	{ name: 'Karpenisi', lat: 38.9214, lng: 21.7878, region: 'Central Greece' },
	{ name: 'Itea', lat: 38.4269, lng: 22.4311, region: 'Central Greece' },
	// Thessaly
	{ name: 'Larissa', lat: 39.6390, lng: 22.4194, major: true, region: 'Thessaly' },
	{ name: 'Volos', lat: 39.3667, lng: 22.9333, major: true, region: 'Thessaly' },
	{ name: 'Trikala', lat: 39.5558, lng: 21.7683, region: 'Thessaly' },
	{ name: 'Karditsa', lat: 39.3636, lng: 21.9214, region: 'Thessaly' },
	{ name: 'Almyros', lat: 39.1800, lng: 22.7567, region: 'Thessaly' },
	{ name: 'Tyrnavos', lat: 39.7333, lng: 22.2833, region: 'Thessaly' },
	{ name: 'Elassona', lat: 39.8917, lng: 22.1878, region: 'Thessaly' },
	// Macedonia & Thrace Mapping
	{ name: 'Thessaloniki', lat: 40.6401, lng: 22.9444, major: true, region: 'Central Macedonia' },
	{ name: 'Kavala', lat: 40.9390, lng: 24.4017, major: true, region: 'East Macedonia and Thrace' },
	{ name: 'Serres', lat: 41.0853, lng: 23.5465, region: 'Central Macedonia' },
	{ name: 'Drama', lat: 41.1499, lng: 24.1476, region: 'East Macedonia and Thrace' },
	{ name: 'Veria', lat: 40.5236, lng: 22.2044, region: 'Central Macedonia' },
	{ name: 'Kozani', lat: 40.3006, lng: 21.7894, region: 'West Macedonia' },
	{ name: 'Katerini', lat: 40.2721, lng: 22.5058, region: 'Central Macedonia' },
	{ name: 'Kilkis', lat: 40.9936, lng: 22.8753, region: 'Central Macedonia' },
	{ name: 'Ptolemaida', lat: 40.5125, lng: 21.6814, region: 'West Macedonia' },
	{ name: 'Florina', lat: 40.7800, lng: 21.4078, region: 'West Macedonia' },
	{ name: 'Edessa', lat: 40.8017, lng: 22.0453, region: 'Central Macedonia' },
	{ name: 'Giannitsa', lat: 40.7933, lng: 22.4133, region: 'Central Macedonia' },
	{ name: 'Naoussa', lat: 40.6283, lng: 22.0694, region: 'Central Macedonia' },
	{ name: 'Kastoria', lat: 40.5186, lng: 21.2686, region: 'West Macedonia' },
	{ name: 'Grevena', lat: 40.0833, lng: 21.4278, region: 'West Macedonia' },
	{ name: 'Siatista', lat: 40.2583, lng: 21.5500, region: 'West Macedonia' },
	{ name: 'Polykastro', lat: 41.0053, lng: 22.5667, region: 'Central Macedonia' },
	{ name: 'Alexandreia', lat: 40.6308, lng: 22.4533, region: 'Central Macedonia' },
	{ name: 'Ierissou', lat: 40.3975, lng: 23.8731, region: 'Central Macedonia' },
	{ name: 'Alexandroupoli', lat: 40.8456, lng: 25.8744, major: true, region: 'East Macedonia and Thrace' },
	{ name: 'Komotini', lat: 41.1226, lng: 25.4033, region: 'East Macedonia and Thrace' },
	{ name: 'Xanthi', lat: 41.1353, lng: 24.8883, region: 'East Macedonia and Thrace' },
	{ name: 'Orestiada', lat: 41.5025, lng: 26.5292, region: 'East Macedonia and Thrace' },
	{ name: 'Didymoteicho', lat: 41.3500, lng: 26.4964, region: 'East Macedonia and Thrace' },
	// Epirus
	{ name: 'Ioannina', lat: 39.6650, lng: 20.8537, major: true, region: 'Epirus' },
	{ name: 'Preveza', lat: 38.9583, lng: 20.7519, region: 'Epirus' },
	{ name: 'Arta', lat: 39.1597, lng: 20.9875, region: 'Epirus' },
	{ name: 'Igoumenitsa', lat: 39.5028, lng: 20.2628, region: 'Epirus' },
	{ name: 'Filippiada', lat: 39.2167, lng: 20.8833, region: 'Epirus' },
	{ name: 'Parga', lat: 39.2847, lng: 20.4022, region: 'Epirus' },
	// Peloponnese
	{ name: 'Patras', lat: 38.2466, lng: 21.7346, major: true, region: 'West Greece' },
	{ name: 'Kalamata', lat: 37.0365, lng: 22.1142, major: true, region: 'Peloponnese' },
	{ name: 'Tripoli', lat: 37.5079, lng: 22.3794, region: 'Peloponnese' },
	{ name: 'Nafplio', lat: 37.5671, lng: 22.8018, region: 'Peloponnese' },
	{ name: 'Sparta', lat: 37.0740, lng: 22.4292, region: 'Peloponnese' },
	{ name: 'Korinthos', lat: 37.9380, lng: 22.9260, region: 'Peloponnese' },
	{ name: 'Argos', lat: 37.6333, lng: 22.7333, region: 'Peloponnese' },
	{ name: 'Pyrgos', lat: 37.6753, lng: 21.4397, region: 'West Greece' },
	{ name: 'Aigio', lat: 38.2519, lng: 22.0769, region: 'West Greece' },
	{ name: 'Kyparissia', lat: 37.2500, lng: 21.6667, region: 'Peloponnese' },
	{ name: 'Gythio', lat: 36.7583, lng: 22.5681, region: 'Peloponnese' },
	{ name: 'Nemea', lat: 37.8186, lng: 22.6606, region: 'Peloponnese' },
	{ name: 'Kranidi', lat: 37.3764, lng: 23.1556, region: 'Peloponnese' },
	// W. Greece
	{ name: 'Agrinio', lat: 38.6208, lng: 21.4080, region: 'West Greece' },
	{ name: 'Mesolongi', lat: 38.3700, lng: 21.4281, region: 'West Greece' },
	{ name: 'Nafpaktos', lat: 38.3919, lng: 21.8286, region: 'West Greece' },
	{ name: 'Amfilochia', lat: 38.8681, lng: 21.1733, region: 'West Greece' },
	{ name: 'Astakos', lat: 38.5333, lng: 21.0833, region: 'West Greece' },
	// Ionian Islands
	{ name: 'Corfu', lat: 39.6243, lng: 19.9217, major: true, region: 'Ionian Islands' },
	{ name: 'Lefkada', lat: 38.8333, lng: 20.7000, region: 'Ionian Islands' },
	{ name: 'Argostoli', lat: 38.1736, lng: 20.4889, region: 'Ionian Islands' },
	{ name: 'Zakynthos', lat: 37.7842, lng: 20.8953, region: 'Ionian Islands' },
	{ name: 'Ithaki', lat: 38.3667, lng: 20.7167, region: 'Ionian Islands' },
	// North Aegean
	{ name: 'Mytilene', lat: 39.1045, lng: 26.5535, major: true, region: 'North Aegean' },
	{ name: 'Chios', lat: 38.3670, lng: 26.1365, region: 'North Aegean' },
	{ name: 'Samos', lat: 37.7572, lng: 26.9769, region: 'North Aegean' },
	{ name: 'Ikaria', lat: 37.6167, lng: 26.1667, region: 'North Aegean' },
	{ name: 'Limnos', lat: 39.8833, lng: 25.0667, region: 'North Aegean' },
	{ name: 'Thasos', lat: 40.7786, lng: 24.7069, region: 'East Macedonia and Thrace' },
	{ name: 'Samothrace', lat: 40.4736, lng: 25.5314, region: 'East Macedonia and Thrace' },
	// Sporades
	{ name: 'Skiathos', lat: 39.1622, lng: 23.4908, region: 'Thessaly' },
	{ name: 'Skopelos', lat: 39.1214, lng: 23.7183, region: 'Thessaly' },
	{ name: 'Alonnisos', lat: 39.1500, lng: 23.8667, region: 'Thessaly' },
	// Cyclades
	{ name: 'Ermoupoli', lat: 37.4472, lng: 24.9417, region: 'South Aegean' },
	{ name: 'Mykonos', lat: 37.4467, lng: 25.3289, region: 'South Aegean' },
	{ name: 'Naxos', lat: 37.1033, lng: 25.3764, region: 'South Aegean' },
	{ name: 'Santorini', lat: 36.3932, lng: 25.4615, region: 'South Aegean' },
	{ name: 'Paros', lat: 37.0853, lng: 25.1544, region: 'South Aegean' },
	{ name: 'Milos', lat: 36.7228, lng: 24.4403, region: 'South Aegean' },
	{ name: 'Ios', lat: 36.7208, lng: 25.2817, region: 'South Aegean' },
	{ name: 'Andros', lat: 37.8483, lng: 24.8994, region: 'South Aegean' },
	{ name: 'Tinos', lat: 37.5381, lng: 25.1636, region: 'South Aegean' },
	{ name: 'Kea', lat: 37.6500, lng: 24.3333, region: 'South Aegean' },
	{ name: 'Folegandros', lat: 36.6167, lng: 24.9167, region: 'South Aegean' },
	{ name: 'Amorgos', lat: 36.8333, lng: 25.8833, region: 'South Aegean' },
	// Dodecanese
	{ name: 'Rhodes', lat: 36.4341, lng: 28.2176, major: true, region: 'South Aegean' },
	{ name: 'Kos', lat: 36.8943, lng: 27.2882, region: 'South Aegean' },
	{ name: 'Kalymnos', lat: 36.9494, lng: 26.9839, region: 'South Aegean' },
	{ name: 'Patmos', lat: 37.3206, lng: 26.5469, region: 'South Aegean' },
	{ name: 'Karpathos', lat: 35.5078, lng: 27.2136, region: 'South Aegean' },
	{ name: 'Leros', lat: 37.1500, lng: 26.8500, region: 'South Aegean' },
	{ name: 'Symi', lat: 36.6167, lng: 27.8333, region: 'South Aegean' },
	{ name: 'Nisyros', lat: 36.5867, lng: 27.1747, region: 'South Aegean' },
	// Crete
	{ name: 'Heraklion', lat: 35.3387, lng: 25.1442, major: true, region: 'Crete' },
	{ name: 'Chania', lat: 35.5138, lng: 24.0180, major: true, region: 'Crete' },
	{ name: 'Rethymno', lat: 35.3667, lng: 24.4800, region: 'Crete' },
	{ name: 'Agios Nikolaos', lat: 35.1900, lng: 25.7200, region: 'Crete' },
	{ name: 'Sitia', lat: 35.2050, lng: 26.1025, region: 'Crete' },
	{ name: 'Ierapetra', lat: 35.0097, lng: 25.7408, region: 'Crete' },
];

const root = document.documentElement;
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const animatedBlocks = document.querySelectorAll('[data-animate]');
const tiltCards = document.querySelectorAll('.tilt-card');
const identityBg = document.getElementById('identity-bg');
const themeToggle = document.getElementById('theme-toggle');
const plotsContainer = document.querySelector('.plots-container');

// Initialize Weather Worker with Fallback for file:// protocol
let weatherWorker;
let useWorkerFallback = false;

try {
	if (window.Worker) {
		weatherWorker = new Worker('weatherWorker.js');
		weatherWorker.onmessage = function (e) {
			const data = e.data;
			if (data.error) {
				console.error(data.error);
				if (plotsContainer) plotsContainer.innerHTML = `<p class="error-msg">${data.error}</p>`;
				return;
			}
			renderWeatherMetrics(data);
		};

		weatherWorker.onerror = function () {
			console.warn("Worker error detected, switching to main-thread fallback.");
			useWorkerFallback = true;
		};
	} else {
		useWorkerFallback = true;
	}
} catch (e) {
	console.warn("SecurityError: Web Worker cannot be started on file:// origin. Using main-thread fallback.");
	useWorkerFallback = true;
}

// Fallback logic for when Workers are restricted
async function fetchWeatherFallback(cityName) {
	try {
		const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`);
		const geoData = await geoResponse.json();
		if (!geoData.results || geoData.results.length === 0) throw new Error('City not found');

		const { latitude, longitude, name, country } = geoData.results[0];
		const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,uv_index&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,uv_index&timezone=auto`);
		const weatherData = await weatherResponse.json();

		renderWeatherMetrics({
			city: name,
			country: country,
			coords: { lat: latitude, lon: longitude },
			current: weatherData.current,
			units: weatherData.current_units,
			hourly: weatherData.hourly
		});
	} catch (error) {
		if (plotsContainer) plotsContainer.innerHTML = `<p class="error-msg">${error.message}</p>`;
	}
}


if (navToggle && navLinks) {
	navToggle.addEventListener('click', () => {
		const isOpen = navLinks.classList.toggle('open');
		navToggle.setAttribute('aria-expanded', String(isOpen));
	});

	navLinks.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			navLinks.classList.remove('open');
			navToggle?.setAttribute('aria-expanded', 'false');
		});
	});
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!prefersReducedMotion.matches && animatedBlocks.length) {
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		});
	}, {
		threshold: 0.15,
		rootMargin: '0px 0px -50px 0px'
	});

	animatedBlocks.forEach(block => observer.observe(block));
} else {
	animatedBlocks.forEach(block => block.classList.add('visible'));
}
// --- Text Effect Animations (Framer Motion equivalent) ---
const textEffectBlocks = document.querySelectorAll('.text-effect-wrapper[data-text-effect]');

if (textEffectBlocks.length > 0) {
	const textObserver = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// Small delay to ensure styles are computed before adding animate-in
				requestAnimationFrame(() => {
					entry.target.classList.add('animate-in');
				});
			} else {
				// Remove the class when it leaves the viewport to reset the animation
				entry.target.classList.remove('animate-in');
			}
		});
	}, {
		threshold: 0.2,
		rootMargin: '0px 0px -50px 0px'
	});

	textEffectBlocks.forEach(block => {
		const text = block.textContent;
		const effectType = block.getAttribute('data-text-effect') || 'blur';
		block.setAttribute('data-preset', effectType);
		block.textContent = ''; // Clear original text nodes

		// Split text into words while preserving whitespace
		const words = text.split(/(\s+)/);
		let wordIndex = 0;
		const staggerDelay = 0.035; // 35ms stagger per word

		words.forEach(word => {
			if (word.trim() === '') {
				// Re-insert whitespace as text nodes
				block.appendChild(document.createTextNode(word));
			} else {
				// Wrap words in spans with staggered transition delays
				const span = document.createElement('span');
				span.className = 'text-effect-char';
				span.textContent = word;
				// Add an inline delay to recreate framer-motion staggerChildren
				span.style.transitionDelay = `${wordIndex * staggerDelay}s`;
				block.appendChild(span);
				wordIndex++;
			}
		});

		if (!prefersReducedMotion.matches) {
			textObserver.observe(block);
		} else {
			block.classList.add('animate-in');
		}
	});
}

// --- Canvas Particle Bloom Animation (Smooth Flow Version) ---
const canvas = document.getElementById('blob-canvas');
if (canvas && !prefersReducedMotion.matches) {
	const ctx = canvas.getContext('2d');

	const SHAPE_PTS = [[0.5179, 0.7748], [0.4727, 0.4345], [0.5989, 0.6843], [0.1036, 0.7704], [0.4699, 0.0624], [0.3597, 0.358], [0.3126, 0.2762], [0.9228, 0.5286], [0.6959, 0.1733], [0.3635, 0.5013], [0.9557, 0.686], [0.5669, 0.1829], [0.5885, 0.8434], [0.5857, 0.6728], [0.4991, 0.4442], [0.4482, 0.5884], [0.9896, 0.5998], [0.7335, 0.7502], [0.5565, 0.8874], [0.0706, 0.7194], [0.307, 0.4837], [0.5612, 0.6807], [0.274, 0.4688], [0.3409, 0.2375], [0.5085, 0.2595], [0.3785, 0.3949], [0.7279, 0.1777], [0.2759, 0.8936], [0.3795, 0.1917], [0.6384, 0.3412], [0.6271, 0.1064], [0.6215, 0.3404], [0.7382, 0.1803], [0.4774, 0.1777], [0.2363, 0.46], [0.3955, 0.7353], [0.3682, 0.3448], [0.7166, 0.9006], [0.3559, 0.2146], [0.5141, 0.4283], [0.5104, 0.6684], [0.2185, 0.4679], [0.0151, 0.4943], [0.6281, 0.6385], [0.4746, 0.1917], [0.0339, 0.3685], [0.9068, 0.7854], [0.9077, 0.5541], [0.9124, 0.7863], [0.5094, 0.3149], [0.5979, 0.8355], [0.2128, 0.8382], [0.4444, 0.0897], [0.6601, 0.803], [0.5518, 0.504], [0.452, 0.5989], [0.4652, 0.9068], [0.8729, 0.5673], [0.6064, 0.0748], [0.1733, 0.8004], [0.6817, 0.1794], [0.5339, 0.2383], [0.8484, 0.591], [0.7109, 0.2269], [0.677, 0.6183], [0.5207, 0.8663], [0.6412, 0.3923], [0.5565, 0.9358], [0.2994, 0.3588], [0.8154, 0.5734], [0.3851, 0.153], [0.0593, 0.3843], [0.4925, 0.6447], [0.2787, 0.3456], [0.6751, 0.7924], [0.6629, 0.9235], [0.0217, 0.482], [0.6441, 0.2339], [0.3974, 0.175], [0.5301, 0.9059], [0.4614, 0.9208], [0.5782, 0.6851], [0.5537, 0.8839], [0.3927, 0.1557], [0.5311, 0.9006], [0.5141, 0.7238], [0.6902, 0.1759], [0.5508, 0.0308], [0.774, 0.6113], [0.8992, 0.7863], [0.661, 0.2533], [0.4605, 0.4283], [0.5075, 0.6702], [0.323, 0.2779], [0.1121, 0.7537], [0.4275, 0.409], [0.9605, 0.7194], [0.6036, 0.9516], [0.4501, 0.4398], [0.4699, 0.1996], [0.3992, 0.9024], [0.9755, 0.6755], [0.9068, 0.8083], [0.5009, 0.1838], [0.146, 0.8109], [0.5245, 0.8804], [0.0697, 0.7027], [0.435, 0.3544], [0.1394, 0.7775], [0.2505, 0.4828], [0.9115, 0.7907], [0.0132, 0.5092], [0.4256, 0.7863], [0.0621, 0.4072], [0.5678, 0.7062], [0.5527, 0.9833], [0.5706, 0.2102], [0.0876, 0.4028], [0.9642, 0.5092], [0.0951, 0.7318], [0.0104, 0.3835], [0.662, 0.3421], [0.7053, 0.9015], [0.9444, 0.5427], [0.419, 0.9068], [0.596, 0.3887], [0.3729, 0.3193], [0.0047, 0.5418], [0.6601, 0.6429], [0.5471, 0.1909], [0.4765, 0.0554], [0.3004, 0.3052], [0.5725, 0.2049], [0.1544, 0.7889], [0.726, 0.8909], [0.1667, 0.81], [0.4831, 0.8637], [0.7684, 0.8839], [0.4925, 0.1856], [0.5669, 0.7018], [0.5198, 0.4292], [0.4087, 0.5532], [0.5659, 0.7124], [0.8079, 0.8769], [0.533, 0.5383], [0.9718, 0.613], [0.5179, 0.9446], [0.5198, 0.6887], [0.0151, 0.5356], [0.0772, 0.4072], [0.3503, 0.3914], [0.2891, 0.3193], [0.9049, 0.8091], [0.2486, 0.6376], [0.5593, 0.9595], [0.4746, 0.204], [0.5066, 0.7995], [0.2552, 0.4864], [0.5198, 0.6174], [0.8239, 0.5814], [0.4878, 0.0255], [0.5866, 0.6983], [0.6215, 0.81], [0.5198, 0.8338], [0.9633, 0.5321], [0.6384, 0.934], [0.9718, 0.7194], [0.2768, 0.6596], [0.3333, 0.4899], [0.8672, 0.8408], [0.4906, 0.8725], [0.6638, 0.6209], [0.0678, 0.6807], [0.5217, 0.5752], [0.3531, 0.3676], [0.5612, 0.9648], [0.0527, 0.6209], [0.3578, 0.9015], [0.5235, 0.3826], [0.3936, 0.4099], [0.4134, 0.5374], [0.4981, 0.6992], [0.033, 0.6508], [0.2175, 0.4494], [0.5179, 0.1706], [0.2863, 0.35], [0.0904, 0.7493], [0.0311, 0.4925], [0.0612, 0.3808], [0.5094, 0.6675], [0.5932, 0.0774], [0.9774, 0.6148], [0.6507, 0.1873], [0.5669, 0.467], [0.4906, 0.606], [0.646, 0.6579], [0.2976, 0.8971], [0.0188, 0.6095], [0.5942, 0.0836], [0.2994, 0.6684], [0.6827, 0.3474], [0.9275, 0.5444], [0.4736, 0.051], [0.5169, 0.6931], [0.967, 0.5954], [0.7081, 0.1566], [0.1864, 0.8355], [0.7194, 0.8857], [0.3531, 0.6974], [0.4831, 0.2445], [0.2674, 0.4002], [0.3663, 0.5145], [0.1121, 0.4318], [0.9736, 0.5796], [0.6554, 0.1689], [0.677, 0.7836], [0.6036, 0.409], [0.2637, 0.467], [0.4774, 0.0475], [0.6186, 0.6429], [0.9783, 0.5884], [0.4887, 0.4521], [0.2985, 0.8997], [0.4058, 0.1266], [0.5028, 0.8716], [0.5593, 0.4389], [0.5847, 0.6684], [0.8202, 0.5937], [0.4708, 0.0545], [0.9934, 0.5233], [0.6337, 0.3201], [0.4802, 0.496], [0.7156, 0.2164], [0.5292, 0.9464], [0.0169, 0.416], [0.5038, 0.5172], [0.113, 0.7537], [0.6243, 0.9191], [0.0461, 0.6561], [0.4944, 0.8575], [0.6761, 0.3624], [0.6149, 0.664], [0.0198, 0.5708], [0.6158, 0.9244], [0.6375, 0.1372], [0.1431, 0.4248], [0.162, 0.7924], [0.4906, 0.8971], [0.0038, 0.5189], [0.7505, 0.9006], [0.9557, 0.7423], [0.0047, 0.3967], [0.3277, 0.2489], [0.4407, 0.1038], [0.532, 0.7449], [0.4275, 0.7916], [0.3211, 0.6719], [0.9944, 0.5937], [0.1036, 0.7555], [0.4322, 0.5418], [0.3352, 0.2762], [0.7015, 0.8918], [0.5094, 0.591], [0.2608, 0.4802], [0.4501, 0.0994], [0.4718, 0.2269], [0.5367, 0.7256], [0.5574, 0.5136], [0.4322, 0.3492], [0.4331, 0.1231], [0.5565, 0.2128], [0.6168, 0.8338], [0.5631, 0.9639], [0.0085, 0.4327], [0.435, 0.9208], [0.5452, 0.1662], [0.4294, 0.3474], [0.5998, 0.8549], [0.1252, 0.7898], [0.0772, 0.7282], [0.5631, 0.8892], [0.0122, 0.5822], [0.0085, 0.5031], [0.7486, 0.8865], [0.0226, 0.5893], [0.7166, 0.219], [0.9313, 0.5268], [0.016, 0.3712], [0.3635, 0.5119], [0.6751, 0.321], [0.0179, 0.4556], [0.4774, 0.5031], [0.6864, 0.2586], [0.6045, 0.3799], [0.4746, 0.8223], [0.0782, 0.394], [0.0085, 0.3923], [0.5188, 0.4046], [0.5461, 0.2366], [0.5942, 0.9279], [0.693, 0.905], [0.1657, 0.4318], [0.0725, 0.3808], [0.7354, 0.7555], [0.032, 0.6508], [0.339, 0.263], [0.4736, 0.2093], [0.5669, 0.9736], [0.2768, 0.8909], [0.3456, 0.4969], [0.7081, 0.2471], [0.5132, 0.9745], [0.9068, 0.8091], [0.596, 0.3509], [0.5273, 0.8566], [0.4972, 0.1891], [0.4444, 0.7836], [0.0339, 0.5374], [0.4661, 0.058], [0.1638, 0.8267], [0.9755, 0.533], [0.0753, 0.7203], [0.5574, 0.9015], [0.3456, 0.6992], [0.4925, 0.4582], [0.7542, 0.7529], [0.677, 0.4002], [0.1893, 0.8311], [0.4473, 0.555], [0.484, 0.8558], [0.4859, 0.219], [0.4689, 0.8259], [0.5584, 0.4345], [0.2646, 0.6438], [0.7109, 0.7643], [0.4661, 0.4881], [0.2024, 0.4749], [0.4077, 0.912], [0.339, 0.3536], [0.532, 0.5814], [0.6827, 0.2322], [0.452, 0.905], [0.3249, 0.4969], [0.9934, 0.6385], [0.0631, 0.4081], [0.3653, 0.2269], [0.6751, 0.2436], [0.5612, 0.4811], [0.5085, 0.3861], [0.532, 0.3113], [0.9247, 0.7942], [0.2627, 0.3852], [0.4962, 0.2014], [0.048, 0.6438], [0.1045, 0.4222], [0.1478, 0.7792], [0.1121, 0.7405], [0.3192, 0.8971], [0.3625, 0.723], [0.4322, 0.8021], [0.7241, 0.2278], [0.3211, 0.2586], [0.4736, 0.9191], [0.5753, 0.2304], [0.6337, 0.9182], [0.5292, 0.0237], [0.032, 0.4266], [0.0659, 0.4028], [0.6893, 0.7731], [0.549, 0.482], [0.5141, 0.5585], [0.3051, 0.4776], [0.5584, 0.5066], [0.0047, 0.4019], [0.8041, 0.5805], [0.4783, 0.847], [0.693, 0.1733], [0.3738, 0.2084], [0.2966, 0.2938], [0.5603, 0.1812], [0.5075, 0.0211], [0.6158, 0.6649], [0.5038, 0.248], [0.419, 0.5479], [0.6911, 0.6271], [0.1243, 0.4266], [0.548, 0.7071], [0.5518, 0.2181], [0.3917, 0.905], [0.5772, 0.2146], [0.338, 0.2383], [0.6629, 0.3879], [0.1271, 0.4195], [0.5358, 0.7423], [0.0508, 0.4002], [0.5518, 0.9147], [0.7288, 0.2014], [0.0179, 0.3703], [0.3277, 0.4864], [0.2646, 0.4802], [0.5188, 0.2445], [0.5527, 0.1689], [0.4171, 0.5339], [0.3286, 0.27], [0.7439, 0.1996], [0.3371, 0.5084], [0.6478, 0.2304], [0.8635, 0.5734], [0.0038, 0.4934], [0.4237, 0.131], [0.5348, 0.8575], [0.9548, 0.7247], [0.3776, 0.5303], [0.726, 0.7661], [0.5264, 0.6385], [0.1017, 0.4116], [0.1215, 0.7731], [0.29, 0.3105], [0.2768, 0.4943], [0.4962, 0.0563], [0.9915, 0.5506], [0.5198, 0.5418], [0.3945, 0.9006], [0.4124, 0.5383], [0.6252, 0.3474], [0.5217, 0.8478], [0.2815, 0.3931], [0.9849, 0.6588], [0.0301, 0.6016], [0.032, 0.3773], [0.0132, 0.4609], [0.709, 0.8989], [0.5311, 0.927], [0.7693, 0.6007], [0.4124, 0.9147], [0.984, 0.5822], [0.5725, 0.0387], [0.0546, 0.6816], [0.3757, 0.1821], [0.4435, 0.3404], [0.3766, 0.1935], [0.8296, 0.5743], [0.5866, 0.0572], [0.0838, 0.3975], [0.4313, 0.117], [0.0217, 0.4661], [0.0104, 0.3905], [0.4426, 0.3773], [0.516, 0.8074], [0.8776, 0.8303], [0.5188, 0.5189], [0.5179, 0.3316], [0.4256, 0.3773], [0.467, 0.6033], [0.451, 0.8188], [0.694, 0.3377], [0.3418, 0.5154], [0.5292, 0.8355], [0.4266, 0.5646], [0.5301, 0.8531], [0.5028, 0.0475], [0.6959, 0.3562], [0.0066, 0.482], [0.5066, 0.3219], [0.548, 0.2049], [0.3164, 0.6851], [0.7825, 0.883], [0.3842, 0.7458], [0.2589, 0.4134], [0.5367, 0.6332], [0.3663, 0.1944], [0.5009, 0.5092], [0.516, 0.7634], [0.0734, 0.387], [0.6252, 0.1038], [0.2062, 0.4573], [0.6761, 0.2383], [0.6036, 0.9314], [0.048, 0.3993], [0.3456, 0.8918], [0.0188, 0.467], [0.3202, 0.5057], [0.5593, 0.4793], [0.3437, 0.27], [0.2976, 0.883], [0.419, 0.9164], [0.1921, 0.4617], [0.5424, 0.9666], [0.451, 0.4011], [0.6356, 0.3967], [0.4529, 0.5752], [0.9793, 0.5312], [0.5866, 0.6746], [0.3164, 0.4855], [0.4021, 0.1724], [0.2034, 0.4617], [0.9689, 0.7018], [0.5179, 0.8355], [0.8324, 0.5805], [0.1582, 0.7995], [0.7335, 0.8839], [0.6441, 0.65], [0.6234, 0.8329], [0.7947, 0.8848], [0.5377, 0.7704], [0.5876, 0.9279], [0.7137, 0.1944], [0.5264, 0.5128], [0.3766, 0.5374], [0.5179, 0.372], [0.0443, 0.3975], [0.0179, 0.5998], [0.8814, 0.8294], [0.4567, 0.9129], [0.6751, 0.3791], [0.0066, 0.3984], [0.2608, 0.4635], [0.1215, 0.4354], [0.3164, 0.2964], [0.9567, 0.7423], [0.4539, 0.5629], [0.5574, 0.9173], [0.4087, 0.1574], [0.6789, 0.35], [0.339, 0.9068], [0.596, 0.0897], [0.5292, 0.7652], [0.6469, 0.8135], [0.3701, 0.343], [0.694, 0.3755], [0.8917, 0.8004], [0.1356, 0.7722], [0.2006, 0.8443], [0.6573, 0.6253], [0.0716, 0.6667], [0.678, 0.4019], [0.5094, 0.5154], [0.4849, 0.8417], [0.6036, 0.1064], [0.0377, 0.5576], [0.3795, 0.1926], [0.6281, 0.6403], [0.9058, 0.5497], [0.6375, 0.9279], [0.8832, 0.8127], [0.8465, 0.8303], [0.6431, 0.9332], [0.6893, 0.3773], [0.693, 0.1785], [0.4567, 0.6086], [0.0471, 0.613], [0.6883, 0.6148], [0.4652, 0.8514], [0.3371, 0.2313], [0.9755, 0.5347], [0.5857, 0.0624], [0.6045, 0.4151], [0.2401, 0.8496], [0.4802, 0.8443], [0.7185, 0.1812], [0.5433, 0.2401], [0.5876, 0.6675], [0.5009, 0.2498], [0.5292, 0.1785], [0.1817, 0.8355], [0.5443, 0.0255], [0.0593, 0.3747], [0.5377, 0.7634], [0.5367, 0.2489], [0.3719, 0.9024], [0.5113, 0.7845], [0.4454, 0.5717], [0.0358, 0.3668], [0.4162, 0.9182], [0.8437, 0.584], [0.3409, 0.2735], [0.6733, 0.2269], [0.0631, 0.3852], [0.0141, 0.5128], [0.0113, 0.533], [0.5546, 0.4837], [0.404, 0.1504], [0.6205, 0.6658], [0.2354, 0.854], [0.3211, 0.8804], [0.6478, 0.4019], [0.8635, 0.8135], [0.3418, 0.2278], [0.5254, 0.2366], [0.5904, 0.8663], [0.8635, 0.5629], [0.2637, 0.3817], [0.8889, 0.5717], [0.6648, 0.6394], [0.3126, 0.9077], [0.9266, 0.7599], [0.4228, 0.9077], [0.596, 0.3923], [0.5301, 0.2489], [0.5179, 0.7784]];

	const DOT_COUNT = SHAPE_PTS.length;

	function noise(x, y, t) {
		x -= Math.floor(x); y -= Math.floor(y);
		return (
			Math.sin(x * 2.3 + t) * Math.cos(y * 1.7 + t * 0.7) * 0.5 +
			Math.sin(x * 0.9 - y * 1.3 + t * 1.1) * 0.3 +
			Math.cos(x * 3.1 + y * 0.8 + t * 0.5) * 0.2
		);
	}

	function easeInOut(t) {
		return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
	}

	function makeDots() {
		return Array.from({ length: DOT_COUNT }, (_, i) => {
			const angle = Math.random() * Math.PI * 2;
			const u1 = Math.random() + 1e-9, u2 = Math.random();
			const gauss = Math.abs(Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2));
			const r = Math.min(1, gauss * 0.38);
			return {
				baseAngle: angle,
				baseR: r,
				noiseOff: Math.random() * 100,
				speed: 0.3 + Math.random() * 0.4,
				size: 1.2 + Math.random() * 1.5,
				x: 0, y: 0,
				tx: 0, ty: 0,
				shapeIdx: i % SHAPE_PTS.length,
			};
		});
	}

	let W, H, cx, cy, baseBlob, scale;
	let initialPageY = 0;

	function resize() {
		const dpr = window.devicePixelRatio || 1;
		const rect = canvas.getBoundingClientRect();
		W = canvas.width = rect.width * dpr;
		H = canvas.height = rect.height * dpr;

		// Always center the blob exactly within its container
		baseBlob = Math.min(W, H) * 0.48;
		scale = baseBlob * 0.95;
		cx = baseBlob * 1.05;
		cy = baseBlob * 1.05;
		initialPageY = rect.height / 2;
	}
	resize();
	window.addEventListener('resize', resize);

	const dots = makeDots();
	let AR = 52, AG = 75, AB = 48;
	let time = 0;

	function updateBlobColors() {
		const rootStyles = getComputedStyle(document.body);
		AR = parseInt(rootStyles.getPropertyValue('--ar')) || 52;
		AG = parseInt(rootStyles.getPropertyValue('--ag')) || 75;
		AB = parseInt(rootStyles.getPropertyValue('--ab')) || 48;
	}

	function buildShapeTargets() {
		return SHAPE_PTS.map(([nx, ny]) => ({
			x: cx + (nx - 0.5) * scale,
			y: cy + (ny - 0.5) * scale * (1137 / 1062),
		}));
	}

	let shapeTargets = buildShapeTargets();

	function blobPosition(d, t, currentCenterY, spreadFactor) {
		const angle = d.baseAngle + t * 0.04;
		// Smooth scuttering speed: much calmer
		const scutterSpeed = t * d.speed * (1.2 + spreadFactor * 0.5) + d.noiseOff;
		const nv = noise(Math.cos(angle) * 1.5, Math.sin(angle) * 1.5, scutterSpeed);

		const currentBaseR = baseBlob + (spreadFactor * Math.max(W, H) * 1.0);
		// Minimal wobble for a smoother look
		const wobble = 1 + nv * (0.06 + spreadFactor * 0.04) * (0.4 + d.baseR * 0.6);
		const r = currentBaseR * wobble;

		// REMOVED random jitter for a stable, liquid-like movement

		return {
			x: cx + Math.cos(angle) * r * d.baseR,
			y: currentCenterY + Math.sin(angle) * r * d.baseR,
		};
	}

	function frame(now) {
		requestAnimationFrame(frame);
		time += 0.005;
		updateBlobColors();

		const scrollY = window.scrollY;
		const dpr = window.devicePixelRatio || 1;

		const distFactor = scrollY > 0 ? 1 : 0;
		const easeFactor = 1 - distFactor;

		const spreadFactor = Math.min(1, scrollY / (window.innerHeight * 0.6));

		const centerViewportY = (initialPageY * dpr);

		ctx.clearRect(0, 0, W, H);

		for (let i = 0; i < dots.length; i++) {
			const d = dots[i];
			const bp = blobPosition(d, time, centerViewportY, spreadFactor);

			const sp = shapeTargets[d.shapeIdx];
			const targetY = sp.y - (scrollY * dpr);

			const tx = bp.x + (sp.x - bp.x) * easeFactor;
			const ty = bp.y + (targetY - bp.y) * easeFactor;

			// Smooth lerp
			const lerpFactor = 0.1 + spreadFactor * 0.05;
			d.x += (tx - d.x) * lerpFactor;
			d.y += (ty - d.y) * lerpFactor;

			const fadeFactor = Math.max(0, 1 - scrollY / (window.innerHeight * 0.8));
			const alpha = (0.55 + easeFactor * 0.35) * (1 - d.baseR * 0.55) * fadeFactor;
			let sz = d.size * (1 + easeFactor * 0.2 * Math.sin(time * 4 + i * 0.1));

			ctx.beginPath();
			ctx.arc(d.x, d.y, sz, 0, Math.PI * 2);
			ctx.fillStyle = `rgba(${AR},${AG},${AB},${Math.max(0, Math.min(1, alpha))})`;
			ctx.fill();
		}

		if (easeFactor > 0.1) {
			ctx.lineWidth = 1.0;
			for (let i = 0; i < dots.length; i += 3) {
				const d1 = dots[i];
				for (let j = i + 1; j < i + 3; j++) {
					const d2 = dots[j % dots.length];
					const dx = d1.x - d2.x, dy = d1.y - d2.y;
					const dist2 = dx * dx + dy * dy;
					if (dist2 < 2000) {
						const a = (1 - Math.sqrt(dist2) / 45) * 0.15 * easeFactor;
						ctx.beginPath();
						ctx.moveTo(d1.x, d1.y);
						ctx.lineTo(d2.x, d2.y);
						ctx.strokeStyle = `rgba(${AR},${AG},${AB},${a})`;
						ctx.stroke();
					}
				}
			}
		}
	}

	requestAnimationFrame(frame);
}

// --- Dynamic Theme Switching (Time-based & Debug Toggle) ---
const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

function updateTheme() {
	const hour = new Date().getHours();
	const isDarkTime = hour >= 21 || hour < 6;

	if (!document.body.classList.contains('light-theme') && !document.body.classList.contains('dark-theme')) {
		setTheme(isDarkTime ? 'dark' : 'light');
	}
}

function setTheme(theme) {
	if (theme === 'dark') {
		document.body.classList.remove('light-theme');
		document.body.classList.add('dark-theme');
		identityBg?.classList.remove('light');
		identityBg?.classList.add('dark');
		if (themeToggle) themeToggle.innerHTML = sunIcon;
	} else {
		document.body.classList.remove('dark-theme');
		document.body.classList.add('light-theme');
		identityBg?.classList.remove('dark');
		identityBg?.classList.add('light');
		if (themeToggle) themeToggle.innerHTML = moonIcon;
	}
}

if (themeToggle && identityBg) {
	themeToggle.addEventListener('click', () => {
		const isDark = document.body.classList.contains('dark-theme');
		setTheme(isDark ? 'light' : 'dark');
	});
}

// Initial check
updateTheme();

// Check every minute for automatic time-based switching
setInterval(updateTheme, 60000);

// --- Interactive Map Logic ---
const mapRegions = document.querySelectorAll('.map-region');
const townsList = document.getElementById('towns-list');

// Modal Elements
const townModal = document.getElementById('town-modal');
const modalClose = document.getElementById('modal-close');
const modalRegionName = document.getElementById('modal-region-name');

if (modalClose && townModal) {
	modalClose.addEventListener('click', () => {
		townModal.classList.add('hidden');
	});

	townModal.addEventListener('click', (e) => {
		if (e.target === townModal) {
			townModal.classList.add('hidden');
		}
	});
}

mapRegions.forEach(region => {
	region.addEventListener('click', () => {
		const name = region.getAttribute('data-name');

		// Remove selected class from others
		mapRegions.forEach(r => r.classList.remove('selected'));
		// Add to clicked
		region.classList.add('selected');

		// Update modal region title
		if (modalRegionName) modalRegionName.textContent = name;

		// Populate towns list in the modal
		if (townsList) {
			const regionCities = cities.filter(city => city.region === name);
			townsList.innerHTML = ''; // Clear current list

			if (regionCities.length > 0) {
				// Sort cities (major ones first, then alphabetical)
				regionCities.sort((a, b) => {
					if (a.major && !b.major) return -1;
					if (!a.major && b.major) return 1;
					return a.name.localeCompare(b.name);
				});

				regionCities.forEach(city => {
					const li = document.createElement('li');
					li.textContent = city.name;
					if (city.major) {
						li.classList.add('major-town');
					}

					// Click on a town closes modal
					li.addEventListener('click', () => {
						// Visual feedback
						const allTowns = townsList.querySelectorAll('li');
						allTowns.forEach(t => t.classList.remove('selected-town'));
						li.classList.add('selected-town');

						// Trigger Weather Data Fetch
						if (plotsContainer) {
							plotsContainer.innerHTML = `<div class="loading-spinner"></div><p>Fetching intelligence for ${city.name}...</p>`;
						}

						if (weatherWorker && !useWorkerFallback) {
							weatherWorker.postMessage(city.name);
						} else {
							fetchWeatherFallback(city.name);
						}

						// Close Modal
						if (townModal) {
							townModal.classList.add('hidden');
						}
					});

					townsList.appendChild(li);
				});
			} else {
				const li = document.createElement('li');
				li.className = 'empty-state';
				li.textContent = 'No smart greenhouses found in this region yet.';
				townsList.appendChild(li);
			}
		}

		// Show the towns modal
		if (townModal) {
			townModal.classList.remove('hidden');
		}

		console.log(`User selected region: ${name}`);
	});
});

// --- Weather UI Rendering ---
function renderWeatherMetrics(data) {
	if (!plotsContainer) return;

	const { city, current, units } = data;

	// Save the data globally so showHistoricalModal can access it
	window.activeWeatherData = data;

	plotsContainer.innerHTML = `
		<div class="weather-dashboard">
			<h4 class="dashboard-city">Περιβαλλον ${city} σε Πραγματικο Χρονο</h4>
			<div class="metrics-grid">
				<div class="metric-tile" onclick="showHistoricalModal('Θερμοκρασια', '${city}')">
					<span class="metric-label">Θερμοκρασια</span>
					<span class="metric-value">${current.temperature_2m}${units.temperature_2m}</span>
					<div class="metric-trend positive">↑ Βελτιστο</div>
				</div>
				<div class="metric-tile" onclick="showHistoricalModal('Υγρασια', '${city}')">
					<span class="metric-label">Υγρασια</span>
					<span class="metric-value">${current.relative_humidity_2m}${units.relative_humidity_2m}</span>
					<div class="metric-trend">Σταθερο</div>
				</div>
				<div class="metric-tile" onclick="showHistoricalModal('Ταχυτητα Ανεμου', '${city}')">
					<span class="metric-label">Ταχυτητα Ανεμου</span>
					<span class="metric-value">${current.wind_speed_10m} ${units.wind_speed_10m}</span>
					<div class="metric-trend negative">↓ Χαμηλη Ροη</div>
				</div>
				<div class="metric-tile" onclick="showHistoricalModal('Δεικτης UV', '${city}')">
					<span class="metric-label">Δεικτης UV</span>
					<span class="metric-value">${current.uv_index}</span>
					<div class="metric-trend positive">Υψηλη Καλυψη</div>
				</div>
			</div>
		</div>
	`;
}

// Historical Modal implementation
window.showHistoricalModal = function (metric, city) {
	console.log(`Opening historical data for ${metric} in ${city}`);
	const modal = document.getElementById('historical-modal');
	const title = document.getElementById('hist-modal-title');
	if (modal && title) {
		title.textContent = `Τασεις: ${metric} - ${city}`;
		modal.classList.remove('hidden');

		// One-time listener to close on overlay click
		const closeHandler = (e) => {
			if (e.target === modal) {
				modal.classList.add('hidden');
				modal.removeEventListener('click', closeHandler);
			}
		};
		modal.addEventListener('click', closeHandler);

		// Render the historical chart in the modal
		renderChartInModal(metric);
	}
};

// Aggregates 168 hours (24x7) of data to 7 daily readings
function aggregateHourlyToDaily(hourlyData, metricName, aggregationType = 'max') {
	const dailyValues = [];
	const dailyLabels = [];

	for (let i = 0; i < 7; i++) {
		const startIndex = i * 24;
		const endIndex = startIndex + 24;
		const chunk = hourlyData[metricName].slice(startIndex, endIndex);
		const timeVal = hourlyData.time[startIndex].split('T')[0];

		let aggregatedVal;
		if (aggregationType === 'max') {
			aggregatedVal = Math.max(...chunk);
		} else if (aggregationType === 'avg') {
			const sum = chunk.reduce((a, b) => a + b, 0);
			aggregatedVal = sum / chunk.length;
		} else {
			aggregatedVal = chunk[12]; // Noon value fallback
		}

		dailyValues.push(Number(aggregatedVal.toFixed(1)));

		const dateObj = new Date(timeVal);
		const day = dateObj.getDate();
		const month = dateObj.toLocaleString('en-US', { month: 'short' });
		dailyLabels.push(`${day} ${month}`);
	}

	return { labels: dailyLabels, values: dailyValues };
}

// Renders the chart inside the modal body container
function renderChartInModal(metric) {
	const container = document.querySelector('.historical-viz');
	if (!container || !window.activeWeatherData) return;

	const data = window.activeWeatherData;
	const hourly = data.hourly;
	if (!hourly) {
		container.innerHTML = `<p style="color: var(--text-muted);">Δεν υπαρχουν διαθεσιμα ιστορικα δεδομενα.</p>`;
		return;
	}

	let keyName = '';
	let aggType = 'max';
	let unit = '';
	let metricLabel = '';

	if (metric === 'Θερμοκρασια') {
		keyName = 'temperature_2m';
		aggType = 'max';
		unit = data.units.temperature_2m || '°C';
		metricLabel = 'Μεγιστη Ημερησια Θερμ.';
	} else if (metric === 'Υγρασια') {
		keyName = 'relative_humidity_2m';
		aggType = 'avg';
		unit = data.units.relative_humidity_2m || '%';
		metricLabel = 'Μεση Ημερησια Υγρασια';
	} else if (metric === 'Ταχυτητα Ανεμου') {
		keyName = 'wind_speed_10m';
		aggType = 'max';
		unit = data.units.wind_speed_10m || ' km/h';
		metricLabel = 'Μεγιστη Ταχυτητα Ανεμου';
	} else if (metric === 'Δεικτης UV') {
		keyName = 'uv_index';
		aggType = 'max';
		unit = '';
		metricLabel = 'Μεγιστος Δεικτης UV';
	}

	const aggregated = aggregateHourlyToDaily(hourly, keyName, aggType);
	drawSVGChart(container, aggregated.labels, aggregated.values, unit, metricLabel);
}

// Draws a premium, responsive, interactive SVG Line Chart
function drawSVGChart(container, labels, values, unit, metricLabel) {
	const minVal = Math.min(...values);
	const maxVal = Math.max(...values);
	const valRange = maxVal - minVal === 0 ? 1 : maxVal - minVal;

	const chartMinY = 30;
	const chartMaxY = 170;
	const chartMinX = 50;
	const chartMaxX = 450;

	const points = values.map((val, idx) => {
		const x = chartMinX + (idx * (chartMaxX - chartMinX)) / 6;
		const y = chartMaxY - ((val - minVal) / valRange) * (chartMaxY - chartMinY);
		return { x, y, val };
	});

	let pathD = '';
	let areaD = '';

	points.forEach((p, idx) => {
		if (idx === 0) {
			pathD = `M ${p.x} ${p.y}`;
			areaD = `M ${p.x} ${chartMaxY} L ${p.x} ${p.y}`;
		} else {
			pathD += ` L ${p.x} ${p.y}`;
			areaD += ` L ${p.x} ${p.y}`;
		}
	});
	areaD += ` L ${points[points.length - 1].x} ${chartMaxY} Z`;

	let gridHtml = '';
	let labelsHtml = '';
	let pointsHtml = '';

	for (let i = 0; i <= 3; i++) {
		const y = chartMinY + (i * (chartMaxY - chartMinY)) / 3;
		const gridVal = maxVal - (i * valRange) / 3;
		gridHtml += `
			<line x1="${chartMinX}" y1="${y}" x2="${chartMaxX}" y2="${y}" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
			<text x="${chartMinX - 12}" y="${y + 4}" fill="rgba(255,255,255,0.5)" font-size="10" text-anchor="end">${gridVal.toFixed(1)}${unit}</text>
		`;
	}

	points.forEach((p, idx) => {
		labelsHtml += `
			<text x="${p.x}" y="195" fill="rgba(255,255,255,0.5)" font-size="10" text-anchor="middle">${labels[idx]}</text>
		`;
		pointsHtml += `
			<g class="chart-point-group" style="cursor: pointer;">
				<circle cx="${p.x}" cy="${p.y}" r="4.5" fill="#597b5b" stroke="#ffffff" stroke-width="2" />
				<circle cx="${p.x}" cy="${p.y}" r="12" fill="transparent" />
				<text x="${p.x}" y="${p.y - 12}" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" class="point-value" style="display: none; background: rgba(0,0,0,0.85); padding: 2px 4px; border-radius: 4px;">${p.val}${unit}</text>
			</g>
		`;
	});

	const svgContent = `
		<svg width="100%" height="100%" viewBox="0 0 500 220" style="overflow: visible;">
			<defs>
				<linearGradient id="chartAreaGrad" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stop-color="#597b5b" stop-opacity="0.35" />
					<stop offset="100%" stop-color="#597b5b" stop-opacity="0.0" />
				</linearGradient>
			</defs>
			
			${gridHtml}
			<path d="${areaD}" fill="url(#chartAreaGrad)" />
			<path d="${pathD}" fill="none" stroke="#afd096" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
			<line x1="${chartMinX}" y1="${chartMaxY}" x2="${chartMaxX}" y2="${chartMaxY}" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" />
			${labelsHtml}
			${pointsHtml}
		</svg>
	`;

	container.innerHTML = `
		<div style="width: 100%; display: flex; flex-direction: column; align-items: stretch; animation: fadeIn 0.4s ease;">
			<div style="display: flex; justify-content: space-between; margin-bottom: 0.8rem; font-size: 0.85rem; color: var(--text-muted); padding-inline: 0.2rem;">
				<span style="font-weight: 500; color: var(--accent-a);">${metricLabel}</span>
				<span>Τελευταίες 7 Ημέρες (Ημερήσιες Συγκεντρώσεις)</span>
			</div>
			<div class="svg-container" style="flex: 1; min-height: 200px; padding: 0.5rem 0.2rem;">
				${svgContent}
			</div>
		</div>
	`;

	const pointGroups = container.querySelectorAll('.chart-point-group');
	pointGroups.forEach(group => {
		const text = group.querySelector('.point-value');
		const circle = group.querySelector('circle');

		group.addEventListener('mouseenter', () => {
			if (text) text.style.display = 'block';
			if (circle) {
				circle.setAttribute('r', '6');
				circle.setAttribute('fill', '#afd096');
			}
		});
		group.addEventListener('mouseleave', () => {
			if (text) text.style.display = 'none';
			if (circle) {
				circle.setAttribute('r', '4.5');
				circle.setAttribute('fill', '#597b5b');
			}
		});
	});
}

// --- Mobile Feature Card Scroll-spy Animations ---
function initMobileFeatureScrollSpy() {
	const featureCards = document.querySelectorAll('.feature-card');
	if (featureCards.length === 0) return;

	// Use an IntersectionObserver to detect when cards occupy the center region of screen on mobile
	const observerOptions = {
		root: null, // use the browser viewport
		rootMargin: '-28% 0px -28% 0px', // trigger when card occupies the middle 44% zone of screen
		threshold: 0.35 // card is 35% visible within the trigger zone
	};

	const observer = new IntersectionObserver((entries) => {
		// Clean up and skip triggers if the screen is desktop size
		if (window.innerWidth > 900) {
			entries.forEach(entry => {
				entry.target.classList.remove('active-feature');
			});
			return;
		}

		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				// Remove active-feature class from all other cards so only ONE card is active at a time
				featureCards.forEach(card => card.classList.remove('active-feature'));
				// Activate the intersecting card to trigger switches, thermometer rises, and bar grows
				entry.target.classList.add('active-feature');
			} else {
				// Clean up when card leaves the center zone
				entry.target.classList.remove('active-feature');
			}
		});
	}, observerOptions);

	featureCards.forEach((card) => {
		observer.observe(card);
	});
}

// Initial activation on page load
initMobileFeatureScrollSpy();
window.addEventListener('resize', initMobileFeatureScrollSpy);


