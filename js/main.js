const selectDom = (selector) => document.querySelector(selector);

{
	/* <i class="ri-sun-line"></i> */
}
const body = selectDom('body');
const modeIcon = selectDom('.mode i');
console.log(body, modeIcon);
modeIcon.addEventListener('click', function () {
	if (this.className === 'ri-moon-clear-line') {
		body.className = 'dark';
		this.className = 'ri-sun-line';
		return;
	}
	body.className = '';
	this.className = 'ri-moon-clear-line';
	return;
});

//Generate PDF

const main = selectDom('#main');
const downloadBtn = selectDom('.download_1 i');
var opt = {
	margin: 0,
	filename: 'myResume.pdf',
	image: { type: 'jpeg', quality: 0.98 },
	html2canvas: { scale: 2 },
	jsPDF: { format: 'a4', orientation: 'portrait' },
};

downloadBtn.addEventListener('click', () => {
	main.classList.add('pdf');
	html2pdf(main, opt);
	setTimeout(() => {
		main.classList.remove('pdf');
	}, 5000);
});
