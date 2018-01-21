"use strict";

// loading assets

require("../node_modules/ratchet-npm/dist/js/ratchet.js");
require("../node_modules/ratchet-npm/dist/css/ratchet.css");
require("./shoot-counter.css");

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
