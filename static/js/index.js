window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function () {
	// Check for click events on the navbar burger icon

	var options = {
		slidesToScroll: 1,
		slidesToShow: 1,
		loop: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
	}

	// Initialize all div with carousel class
	var carousels = bulmaCarousel.attach('.carousel', options);

	bulmaSlider.attach();

	// Dark Mode Logic
	const toggleButton = document.getElementById('theme-toggle');
	const themeIcon = document.getElementById('theme-icon');
	const html = document.documentElement;

	function setTheme(theme) {
		if (theme === 'light') {
			html.setAttribute('data-theme', 'light');
			themeIcon.classList.remove('fa-sun');
			themeIcon.classList.add('fa-moon');
		} else {
			html.removeAttribute('data-theme');
			themeIcon.classList.remove('fa-moon');
			themeIcon.classList.add('fa-sun');
		}
		localStorage.setItem('theme', theme);
	}

	// Load saved preference or default to dark
	const savedTheme = localStorage.getItem('theme') || 'dark';
	setTheme(savedTheme);

	if (toggleButton) {
		toggleButton.addEventListener('click', () => {
			const currentTheme = html.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
			const newTheme = currentTheme === 'light' ? 'dark' : 'light';
			setTheme(newTheme);
		});
	}

})
