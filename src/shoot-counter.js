"use strict";

// loading assets
import Framework7 from 'framework7';
require("./shoot-counter.css");
require("../node_modules/framework7/dist/css/framework7.css");

const app = new Framework7({
	root: '#app',
	name: 'Shoot-Counter',
	id: 'shoot-counter.kna-st.de',
	routes: [{
		path: '/home/',
		url: './index.html'
	}, {
		path: '/details/',
		url: './details.html'
	}]
});

window.addEventListener('load', (event) => {
	let sum = 0;
	let history = [];

	const $main_sum = document.getElementById('main-sum');
	const $undo_button = document.getElementById('main-undo');

	const updateDisplay = () => {
		const message = sum + ((sum == 1) ? ' Punkt' : ' Punkte');
		$main_sum.innerText = message;
	}

	const singleAdd = (event) => {
		event.preventDefault();
		const amount = parseInt(event.target.innerText);
		sum += amount;
		history.push(amount);
		updateDisplay();
	}

	const $buttons = document.getElementsByTagName('BUTTON');
	for (let i = 0; i < $buttons.length; ++i) {
		const $button = $buttons[i];
		if ($button !== $undo_button) {
			$button.addEventListener('click', singleAdd);
		}
	}
	$undo_button.addEventListener('click', (event) => {
		event.preventDefault;
		if (history.length) {
			sum -= history.pop();
			updateDisplay();
		}
	});

	updateDisplay();
});
