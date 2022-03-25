const sections = document.querySelectorAll('.section');
const sectionBtnGroup = document.querySelectorAll('.controls');
const sectionBtn = document.querySelectorAll('.control');
const body = document.querySelectorAll('.main-content')[0];

function PageTransitions() {
	//button click active class
	for (let i = 0; i < sectionBtn.length; i++) {
		sectionBtn[i].addEventListener('click', () => {
			let btn = document.querySelectorAll('.active-btn');
			btn[0].className = btn[0].className.replace('active-btn', '');
			sectionBtn[i].className += ' active-btn';
		});
	}

	//sections active class
	body.addEventListener('click', (e) => {
		const id = e.target.dataset.id;
		if (id) {
			const element = document.getElementById(id);

			//remove selected from other btn
			sectionBtnGroup.forEach((btn) => {
				btn.classList.remove('active');
			});
			e.target.classList.add('active');

			//hide other sections
			sections.forEach((section) => {
				section.classList.remove('active');
			});
			element.classList.add('active');
		}
	});

	//toggle themes
	const themeBtn = document.querySelector('.theme-btn');
	themeBtn.addEventListener('click', () => {
		let element = document.body;
		element.classList.toggle('light-mode');
	});
}

PageTransitions();
