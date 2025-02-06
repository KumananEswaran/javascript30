const bands = [
	'The Plot in You',
	'The Devil Wears Prada',
	'Pierce the Veil',
	'Norma Jean',
	'The Bled',
	'Say Anything',
	'The Midway State',
	'We Came as Romans',
	'Counterparts',
	'Oh, Sleeper',
	'A Skylit Drive',
	'Anywhere But Here',
	'An Old Dog',
];

const strip = (bandName) => {
	let words = ['A ', 'An ', 'The '];
	for (let word of words) {
		if (bandName.startsWith(word)) {
			return bandName.slice(word.length).trim();
		}
	}
	return bandName;
};

console.log(strip('An old dog'));

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));
// if (strip(a) > strip(b)) {
// 	return 1;
// } else {
// 	return -1;
// }

document.querySelector('#bands').innerHTML = sortedBands
	.map((band) => `<li>${band}</li>`)
	.join('');

console.log(sortedBands);
