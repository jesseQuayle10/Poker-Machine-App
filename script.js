'use strict';

//// DOM EL's
// Card DIVs
const cardOneDiv = document.querySelector('#card-1');
const cardTwoDiv = document.querySelector('#card-2');
const cardThreeDiv = document.querySelector('#card-3');
const cardFourDiv = document.querySelector('#card-4');
const cardFiveDiv = document.querySelector('#card-5');

// Card <imgs>
const cardOneImg = document.querySelector('#card-1-img');
const cardTwoImg = document.querySelector('#card-2-img');
const cardThreeImg = document.querySelector('#card-3-img');
const cardFourImg = document.querySelector('#card-4-img');
const cardFiveImg = document.querySelector('#card-5-img');
////

/////////////////// STEPS NEEDED
// Gen. 5 playing Cards & Render them

// gen. random suit & number
const generateSuit = Math.floor(Math.random() * 4 + 1);
const generateNumber = Math.floor(Math.random() * 13 + 1);

// Grab generated Suit Name  (via Rand. Num + Switch)
// Grab generated Card Name  (via Rand. Num + Switch)
let suit;
let cardNumber;

switch (generateSuit) {
  case 1:
    suit = 'clubs';
    break;

  case 2:
    suit = 'spades';
    break;

  case 3:
    suit = 'diamonds';
    break;

  case 4:
    suit = 'hearts';
    break;
}
// console.log(suit);

switch (generateNumber) {
  case 1:
    cardNumber = 'ace';
    break;

  case 2:
    cardNumber = '2';
    break;

  case 3:
    cardNumber = '3';
    break;

  case 4:
    cardNumber = '4';
    break;

  case 5:
    cardNumber = '5';
    break;

  case 6:
    cardNumber = '6';
    break;

  case 7:
    cardNumber = '7';
    break;

  case 8:
    cardNumber = '8';
    break;

  case 9:
    cardNumber = '9';
    break;

  case 10:
    cardNumber = '10';
    break;

  case 11:
    cardNumber = 'jack';
    break;

  case 12:
    cardNumber = 'queen';
    break;

  case 13:
    cardNumber = 'king';
    break;
}

// File name STR (to match IMG File name - for Rendering)
let cardName = `./images/${suit}_${cardNumber}.svg`;

cardOneImg.src = `${cardName}`;
// // File name STR (to match IMG File name - for Rendering)
// let cardName = `./images/${suit}_${cardNumber}.svg`;

// // diceOne.src = `./images/dice${dice1}.png`;

// const html = `<div>
//                 <img src="${cardName}">
//               </div>

// `;

// // Grab Container div
// const docBody = document.querySelector('body');
// // console.log(docBody);

// docBody.insertAdjacentHTML('afterbegin', html);

// create img
console.log(cardNumber);
console.log(cardName);
