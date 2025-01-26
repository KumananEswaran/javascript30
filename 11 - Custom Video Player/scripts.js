// Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const max = player.querySelector('.player__max');

// Build out functions
const togglePlay = () => {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
};

const updateButton = () => {
	const icon = video.paused ? '►' : '❚ ❚';
	toggle.textContent = icon;
};

const skip = (e) => {
	// console.log(e.target.dataset.skip);
	video.currentTime += parseFloat(e.target.dataset.skip);
};

const handleRangeUpdate = (e) => {
	video[e.target.name] = e.target.value;
	// console.log(e.target.name);
	// console.log(e.target.value);
};

const handleProgress = () => {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
};

const scrub = (e) => {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
	// console.log(e);
};

const handleMax = () => {
	const playerStyles = window.getComputedStyle(player);
	const maxWidth = playerStyles.getPropertyValue('max-width');
	const currentWidth = player.style.width;

	if (currentWidth === maxWidth) {
		player.style.width = '';
	} else {
		player.style.width = maxWidth;
	}
};

// Hook up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach((button) => button.addEventListener('click', skip));

ranges.forEach((range) => range.addEventListener('change', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));
max.addEventListener('click', handleMax);
