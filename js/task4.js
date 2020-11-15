"use strict";

let counterValue = 0;

function decrement() {
	counterValue -= 1;
	reference.htmlValue.textContent = counterValue;
};

function increment() {
	counterValue += 1;
	reference.htmlValue.textContent = counterValue;
};

const reference = {
	 buttDecr: document.querySelector("[data-action='decrement']"),
	 buttonIncrement: document.querySelector("[data-action='increment']"),
	 htmlValue: document.querySelector('#value'),
};

reference.buttDecr.addEventListener('click', decrement);
reference.buttonIncrement.addEventListener('click', increment);

// Пример В
/* 
<div class="counter">
<button class="decrement"> - </button>
<p class="value">0</p>
<button class="increment" >+</button>
</div> 
*/

// let counterValue = 0;

// function decrement() {
// 	counterValue -= 1;
// 	render();
// };

// function increment() {
// 	counterValue += 1;
// 	render();
// };

// function render() {
// 	reference.htmlValue.textContent = counterValue;
// };

// const reference = {
// 	 buttDecr: document.querySelector('.decrement'),
// 	 buttonIncrement: document.querySelector('.increment'),
// 	 htmlValue: document.querySelector('.value'),
// };

// reference.buttDecr.addEventListener('click', decrement);
// reference.buttonIncrement.addEventListener('click', increment);