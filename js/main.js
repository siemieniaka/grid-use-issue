const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const navLink = document.querySelectorAll('.nav__link');
const footerYear = document.querySelector('.footer__year');

// Automatyczny rok w footerze
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

// burger icon
const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');

	navLink.forEach((item) => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active');
			navBtn.classList.remove('is-active');
		});
	});

	window.addEventListener('scroll', () => {
		navMobile.classList.remove('nav-mobile--active');
		navBtn.classList.remove('is-active');
	});
};

navBtn.addEventListener('click', handleNav);
