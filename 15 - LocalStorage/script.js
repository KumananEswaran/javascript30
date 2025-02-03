const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

const addItem = (e) => {
	e.preventDefault();

	const text = document.querySelector('[name=item]').value;

	const item = {
		text,
		done: false,
	};

	items.push(item);
	populateList(items, itemsList);
	localStorage.setItem('items', JSON.stringify(items));
	e.currentTarget.reset();
};

const populateList = (plates = [], platesList) => {
	platesList.innerHTML = plates
		.map((plate, i) => {
			return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${
				plate.done ? 'checked' : ''
			}/>
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
		})
		.join('');
};

const toggleDone = (e) => {
	if (!e.target.matches('input')) return;
	const el = e.target;
	const index = el.dataset.index;
	items[index].done = !items[index].done;
	localStorage.setItem('items', JSON.stringify(items));
	populateList(items, itemsList);
};

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);

const buttons = document.querySelectorAll('.wrapper__buttons button');
const deleteAllButton = buttons[0];

deleteAllButton.addEventListener('click', () => {
	items.length = 0;
	localStorage.removeItem('items');
	populateList(items, itemsList);
});

const checkAllButton = buttons[1];

checkAllButton.addEventListener('click', () => {
	items.forEach((item) => (item.done = true));
	populateList(items, itemsList);
	localStorage.setItem('items', JSON.stringify(items));
});

const unCheckAllButton = buttons[2];

unCheckAllButton.addEventListener('click', () => {
	items.forEach((item) => (item.done = false));
	populateList(items, itemsList);
	localStorage.setItem('items', JSON.stringify(items));
});
