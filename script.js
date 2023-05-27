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

//// Gen. Suit & Num
const generateSuit = function () {
  return Math.floor(Math.random() * 4 + 1);
};

const generateNumber = function () {
  return Math.floor(Math.random() * 13 + 1);
};

//// FNs w/ Switches Inside
//  they Receive a Num & Return a suitname or Number - so can Build a STR for <img src="..."
const suitSwitch = function (numberOfSuit) {
  let suit;

  switch (numberOfSuit) {
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

  return suit;
};

const numberSwitch = function (number) {
  let cardNumber;

  switch (number) {
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

  return cardNumber;
};

//// Card FNs
// These ALL Call Rand Num FNs
// Call Switch FNs
// Build a STR (for .src)
// Upd the .src in DOM

const cardResult1 = function () {
  let cardSuit = 0;
  let cardNumber = 0;

  // Call FN & Grab its Gen. Suit & Num
  cardSuit = generateSuit();
  cardNumber = generateNumber();

  // Call FNs w/ Switches in them - Passing the Rand. Nums
  // Grab the Returned Suit & Card Num from them
  const suitResult = suitSwitch(cardSuit);
  const numberResult = numberSwitch(cardNumber);

  // File name STR (to match IMG File name - for Rendering)
  let cardName = `./images/${suitResult}_${numberResult}.svg`;

  // Upd the SRC for IMG
  cardOneImg.src = `${cardName}`;
};

cardResult1();

const cardResult2 = function () {
  let cardSuit = 0;
  let cardNumber = 0;
  // Call FN & Grab its Gen. Suit & Num
  cardSuit = generateSuit();
  cardNumber = generateNumber();

  // Call FNs w/ Switches in them - Passing the Rand. Nums
  // Grab the Returned Suit & Card Num from them
  const suitResult = suitSwitch(cardSuit);
  const numberResult = numberSwitch(cardNumber);

  // File name STR (to match IMG File name - for Rendering)
  let cardName = `./images/${suitResult}_${numberResult}.svg`;

  // Upd the SRC for IMG
  cardTwoImg.src = `${cardName}`;
};

cardResult2();

const cardResult3 = function () {
  let cardSuit = 0;
  let cardNumber = 0;
  // Call FN & Grab its Gen. Suit & Num
  cardSuit = generateSuit();
  cardNumber = generateNumber();

  // Call FNs w/ Switches in them - Passing the Rand. Nums
  // Grab the Returned Suit & Card Num from them
  const suitResult = suitSwitch(cardSuit);
  const numberResult = numberSwitch(cardNumber);

  // File name STR (to match IMG File name - for Rendering)
  let cardName = `./images/${suitResult}_${numberResult}.svg`;

  // Upd the SRC for IMG
  cardThreeImg.src = `${cardName}`;
};

cardResult3();

const cardResult4 = function () {
  let cardSuit = 0;
  let cardNumber = 0;
  // Call FN & Grab its Gen. Suit & Num
  cardSuit = generateSuit();
  cardNumber = generateNumber();

  // Call FNs w/ Switches in them - Passing the Rand. Nums
  // Grab the Returned Suit & Card Num from them
  const suitResult = suitSwitch(cardSuit);
  const numberResult = numberSwitch(cardNumber);

  // File name STR (to match IMG File name - for Rendering)
  let cardName = `./images/${suitResult}_${numberResult}.svg`;

  // Upd the SRC for IMG
  cardFourImg.src = `${cardName}`;
};

cardResult4();

const cardResult5 = function () {
  let cardSuit = 0;
  let cardNumber = 0;
  // Call FN & Grab its Gen. Suit & Num
  cardSuit = generateSuit();
  cardNumber = generateNumber();

  // Call FNs w/ Switches in them - Passing the Rand. Nums
  // Grab the Returned Suit & Card Num from them
  const suitResult = suitSwitch(cardSuit);
  const numberResult = numberSwitch(cardNumber);

  // File name STR (to match IMG File name - for Rendering)
  let cardName = `./images/${suitResult}_${numberResult}.svg`;

  // Upd the SRC for IMG
  cardFiveImg.src = `${cardName}`;
};

cardResult5();
