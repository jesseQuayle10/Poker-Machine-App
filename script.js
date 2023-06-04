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

// BTNs
// To add a "NEW GAME" BTN
const buttonsContainer = document.querySelector('#buttons-container');
const dealBtn = document.querySelector('#deal-btn');
const playBtn = document.querySelector('#play-btn');

const holdBtnOne = document.querySelector('#card-1-btn');
const holdBtnTwo = document.querySelector('#card-2-btn');
const holdBtnThree = document.querySelector('#card-3-btn');
const holdBtnFour = document.querySelector('#card-4-btn');
const holdBtnFive = document.querySelector('#card-5-btn');

//// Gl. VARs

// So can only Deal/Draw 2x
// to stop the ability to hold a Card b4 you DEAL
// also to change Text on Deal BTN to Draw
let dealCount = 0;

// Initial Card Held VAL = F
let cardOneIsHeld = false;
let cardTwoIsHeld = false;
let cardThreeIsHeld = false;
let cardFourIsHeld = false;
let cardFiveIsHeld = false;

// Init. Game
const init = function () {
  //
  cardOneImg.src = './images/blue2.svg';
  cardTwoImg.src = './images/blue2.svg';
  cardThreeImg.src = './images/blue2.svg';
  cardFourImg.src = './images/blue2.svg';
  cardFiveImg.src = './images/blue2.svg';

  // Reset HELD VALs to = F (so can Gen. Rand. Nums)
  cardOneIsHeld = false;
  cardTwoIsHeld = false;
  cardThreeIsHeld = false;
  cardFourIsHeld = false;
  cardFiveIsHeld = false;

  // So can Add Class for Styling HELD Card (CSS Filter)
  dealCount = 0;

  // Hide PLAY AGAIN BTN - on Game Start
  playBtn.classList.add('hide-element');

  // Reset Text to Initial
  dealBtn.textContent = 'DEAL';

  // Rem. CSS Filter Styling (for when Card is Held)
  cardOneDiv.classList.remove('card-held');
  cardTwoDiv.classList.remove('card-held');
  cardThreeDiv.classList.remove('card-held');
  cardFourDiv.classList.remove('card-held');
  cardFiveDiv.classList.remove('card-held');
};

init();

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
  // Only Run IF Card isnt "Held"
  if (!cardOneIsHeld) {
    // To Hold Returns from Gen. Random Nums
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
  }
};

const cardResult2 = function () {
  // Only Run IF Card isnt "Held"
  if (!cardTwoIsHeld) {
    // To Hold Returns from Gen. Random Nums
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
  }
};

const cardResult3 = function () {
  // Only Run IF Card isnt "Held"
  if (!cardThreeIsHeld) {
    // To Hold Returns from Gen. Random Nums
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
  }
};

const cardResult4 = function () {
  // Only Run IF Card isnt "Held"
  if (!cardFourIsHeld) {
    // To Hold Returns from Gen. Random Nums
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
  }
};

const cardResult5 = function () {
  // Only Run IF Card isnt "Held"
  if (!cardFiveIsHeld) {
    // To Hold Returns from Gen. Random Nums
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
  }
};

///////////////////// EVTs
//// Deal BTN
dealBtn.addEventListener('click', function (e) {
  // VAR so no More than 2 Deal/Draws Poss
  dealCount++;
  console.log(dealCount);

  if (dealCount > 0) {
    playBtn.classList.remove('hide-element');
    this.textContent = 'DRAW';
  }

  // if (dealCount === 2) {
  //   const newHtml = `
  //     <div class="deal-button">
  //       <button class="btn-large" id="draw-btn">NEW GAME</button>
  //     </div>`;

  //   buttonsContainer.insertAdjacentHTML('beforeend', newHtml);
  // }

  // Call Gen. Rand Nums FNs
  // bc ea "card FN" has eg. "cardFiveIsHeld" - these will ONLY Exec. if !cardFiveIsHeld

  if (dealCount < 3) {
    cardResult1();

    cardResult2();

    cardResult3();

    cardResult4();

    cardResult5();
  }
});

playBtn.addEventListener('click', function (e) {
  init();
});

//// HOLD BTNs
holdBtnOne.addEventListener('click', function (e) {
  // Check VAL - so cant HOLD a Card before you Start game
  if (dealCount > 0) {
    // Flip State Boolean
    cardOneIsHeld ? (cardOneIsHeld = false) : (cardOneIsHeld = true);

    // IF = Card IS HELD = ADD CSS Low B/Ness CLASS - ELSE Rem. it
    cardOneIsHeld
      ? cardOneDiv.classList.add('card-held')
      : cardOneDiv.classList.remove('card-held');
  }
});

holdBtnTwo.addEventListener('click', function (e) {
  // Check VAL - so cant HOLD a Card before you Start game
  if (dealCount > 0) {
    // Flip State Boolean
    cardTwoIsHeld ? (cardTwoIsHeld = false) : (cardTwoIsHeld = true);

    // IF = Card IS HELD = ADD CSS Low B/Ness CLASS - ELSE Rem. it
    cardTwoIsHeld
      ? cardTwoDiv.classList.add('card-held')
      : cardTwoDiv.classList.remove('card-held');
  }
});

holdBtnThree.addEventListener('click', function (e) {
  // Check VAL - so cant HOLD a Card before you Start game
  if (dealCount > 0) {
    // Flip State Boolean
    cardThreeIsHeld ? (cardThreeIsHeld = false) : (cardThreeIsHeld = true);

    // IF = Card IS HELD = ADD CSS Low B/Ness CLASS - ELSE Rem. it
    cardThreeIsHeld
      ? cardThreeDiv.classList.add('card-held')
      : cardThreeDiv.classList.remove('card-held');
  }
});

holdBtnFour.addEventListener('click', function (e) {
  // Check VAL - so cant HOLD a Card before you Start game
  if (dealCount > 0) {
    // Flip State Boolean
    cardFourIsHeld ? (cardFourIsHeld = false) : (cardFourIsHeld = true);

    // IF = Card IS HELD = ADD CSS Low B/Ness CLASS - ELSE Rem. it
    cardFourIsHeld
      ? cardFourDiv.classList.add('card-held')
      : cardFourDiv.classList.remove('card-held');
  }
});

holdBtnFive.addEventListener('click', function (e) {
  // Check VAL - so cant HOLD a Card before you Start game
  if (dealCount > 0) {
    // Flip State Boolean
    cardFiveIsHeld ? (cardFiveIsHeld = false) : (cardFiveIsHeld = true);

    // IF = Card IS HELD = ADD CSS Low B/Ness CLASS - ELSE Rem. it
    cardFiveIsHeld
      ? cardFiveDiv.classList.add('card-held')
      : cardFiveDiv.classList.remove('card-held');
  }
});
