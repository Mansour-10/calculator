"use strict";


const firstInputEl = document.querySelector('#firstOperand');
const secondInputEl = document.querySelector('#secondOperand');
const resultInputEl = document.querySelector('#result');


// action buttons elements
const sumEl = document.querySelector('#sum');
const subtractEl = document.querySelector('#subtract');
const multiplyEL = document.querySelector('#multiply');
const divideEL = document.querySelector('#divide');

const resetButtonEl = document.querySelector('#reset');

sumEl.addEventListener('click', () => {
  resultInputEl.value = +firstInputEl.value + +secondInputEl.value;
});

subtractEl.addEventListener('click', () => {
  resultInputEl.value = +firstInputEl.value - +secondInputEl.value;
});


multiplyEL.addEventListener('click', () => {
  resultInputEl.value = +firstInputEl.value * +secondInputEl.value;
});

divideEL.addEventListener('click', () => {
  resultInputEl.value = +firstInputEl.value / +secondInputEl.value;
});


resetButtonEl.addEventListener('click', () => {
  resultInputEl.value = '';
  firstInputEl.value = '';
  secondInputEl.value = '';
});
