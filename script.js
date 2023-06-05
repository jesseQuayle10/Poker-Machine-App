'use strict';

// Import Cards ARR (contains a Partial STR - to Embed in .src Path)
// ...when a Card is Drawn it is Rem'd from the ARR (thus it cant be Rendered again (so = NO Duplicate Cards Rendered))
// import { possibleCards } from './possibleCards.js';

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
// Stop Duplicate Cards - by:
// ARR Contains ALL POSS Cards
// ...as a Card is Drawn it gets Rem'd from ARR - so that Card cant be redrawn
// ...this STR gets Embedded in .src in ea Card FN
// Instead of 2 Gens(Suit & num) = just 1 Gen'd Num (out of remaining .length of ARR)
let possibleCards = [
  'clubs_2',
  'clubs_3',
  'clubs_4',
  'clubs_5',
  'clubs_6',
  'clubs_7',
  'clubs_8',
  'clubs_9',
  'clubs_10',
  'clubs_ace',
  'clubs_jack',
  'clubs_queen',
  'clubs_king',
  'diamonds_2',
  'diamonds_3',
  'diamonds_4',
  'diamonds_5',
  'diamonds_6',
  'diamonds_7',
  'diamonds_8',
  'diamonds_9',
  'diamonds_10',
  'diamonds_ace',
  'diamonds_jack',
  'diamonds_queen',
  'diamonds_king',
  'hearts_2',
  'hearts_3',
  'hearts_4',
  'hearts_5',
  'hearts_6',
  'hearts_7',
  'hearts_8',
  'hearts_9',
  'hearts_10',
  'hearts_ace',
  'hearts_jack',
  'hearts_queen',
  'hearts_king',
  'spades_2',
  'spades_3',
  'spades_4',
  'spades_5',
  'spades_6',
  'spades_7',
  'spades_8',
  'spades_9',
  'spades_10',
  'spades_ace',
  'spades_jack',
  'spades_queen',
  'spades_king',
];

// Copy of Cards ARR
let possibleCardsCopy = [];

// Push Gen'd Card IDX STR here - so can run a check for ea. Card FN to see if the Card the Card FN Gen'd is already in here & IF it is = Re-Gen another Card
let cardsSelected = [];

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

//// Init. Game
const init = function () {
  // Empty Poss Cards Copy ARR
  possibleCardsCopy = possibleCards;
  console.log(possibleCardsCopy);
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

//// Gen. Rand num - between 0 & poss Cards ARR .length
let generateCardIndex = function () {
  let result = Math.floor(Math.random() * possibleCards.length);

  return result;
};

//// Card FNs
// These ALL Call Rand Num FNs
// Call Switch FNs
// Build a STR (for .src)
// Upd the .src in DOM

const cardResult1 = function () {
  // Only Run IF Card isnt "Held"
  if (!cardOneIsHeld) {
    // Copy the Poss Cards into a New ARR
    // possibleCardsCopy = possibleCards;

    // To Hold Returns from Gen. Random Nums
    let cardIndex = 0;

    // Call FN to Gen a Card IDX (between 0 & Cards ARR.length)
    cardIndex = generateCardIndex();
    // console.log(`card1 IDX is ${cardIndex}`);

    // Slice the Gen'd Cards STR From Cards ARR
    const cardsSlice = possibleCardsCopy.slice(cardIndex, cardIndex + 1);
    console.log(cardsSlice);

    // IF cardsSelected ARR Doesnt Incl cardsSlice - PUSH cardsSlice to cardsSelected
    // ... then 1. Embed cardsSlice in IMG Name  2. Use it to Update IMG .src
    let isSelected = cardsSelected.includes(cardsSlice);
    console.log(isSelected);

    // IF cardsSelected ARR Incl's cardsSlice
    // 1. Gen a diff Num for IDX
    // 2. PUSH it to cardsSelected ARR
    // 3. Build STR
    // 4. Change IMG .src
    if (isSelected) {
      cardIndex = generateCardIndex();

      cardsSelected.push(cardsSlice);

      // Embed Gen'd Cards STR From Cards ARR into the .src Path
      let cardName = `./images/${cardsSlice}.svg`;

      // Upd the SRC for IMG
      cardOneImg.src = `${cardName}`;
    }

    // IF cardsSelected.includes(cardsSlice) = F - PUSH cardsSlice to cardsSelected ARR
    if (!isSelected) {
      console.log('not selected');
      cardsSelected.push(cardsSlice);
      console.log(cardsSelected);

      // Embed Gen'd Cards STR From Cards ARR into the .src Path
      let cardName = `./images/${cardsSlice}.svg`;

      // Upd the SRC for IMG
      cardOneImg.src = `${cardName}`;
    }
  }
};

const cardResult2 = function () {
  // Only Run IF Card isnt "Held"
  if (!cardTwoIsHeld) {
    // Copy the Poss Cards into a New ARR
    // possibleCardsCopy = possibleCards;
    // To Hold Returns from Gen. Random Nums
    let cardIndex = 0;

    // Call FN to Gen a Card IDX (between 0 & Cards ARR.length)
    cardIndex = generateCardIndex();
    // console.log(`card2 IDX is ${cardIndex}`);

    // Slice the Gen'd Cards STR From Cards ARR
    const cardsSlice = possibleCardsCopy.slice(cardIndex, cardIndex + 1);
    // console.log(cardsSplice);

    // IF cardsSelected ARR Doesnt Incl cardsSlice - PUSH cardsSlice to cardsSelected
    // ... then 1. Embed cardsSlice in IMG Name  2. Use it to Update IMG .src
    let isSelected = cardsSelected.includes(cardsSlice);

    // IF cardsSelected ARR Incl's cardsSlice
    // 1. Gen a diff Num for IDX
    // 2. PUSH it to cardsSelected ARR
    // 3. Build STR
    // 4. Change IMG .src
    if (isSelected) {
      cardIndex = generateCardIndex();

      cardsSelected.push(cardsSlice);

      // Embed Gen'd Cards STR From Cards ARR into the .src Path
      let cardName = `./images/${cardsSlice}.svg`;

      // Upd the SRC for IMG
      cardTwoImg.src = `${cardName}`;
    }

    // IF cardsSelected.includes(cardsSlice) = F - PUSH cardsSlice to cardsSelected ARR
    if (!isSelected) {
      cardsSelected.push(cardsSlice);

      // Embed Gen'd Cards STR From Cards ARR into the .src Path
      let cardName = `./images/${cardsSlice}.svg`;

      // Upd the SRC for IMG
      cardTwoImg.src = `${cardName}`;
    }
  }
};

const cardResult3 = function () {
  // Only Run IF Card isnt "Held"
  if (!cardThreeIsHeld) {
    // Copy the Poss Cards into a New ARR
    // possibleCardsCopy = possibleCards;
    // To Hold Returns from Gen. Random Nums
    let cardIndex = 0;

    // Call FN to Gen a Card IDX (between 0 & Cards ARR.length)
    cardIndex = generateCardIndex();
    // console.log(`card3 IDX is ${cardIndex}`);

    // Slice the Gen'd Cards STR From Cards ARR
    const cardsSlice = possibleCardsCopy.slice(cardIndex, cardIndex + 1);
    // console.log(cardsSplice);

    // IF cardsSelected ARR Doesnt Incl cardsSlice - PUSH cardsSlice to cardsSelected
    // ... then 1. Embed cardsSlice in IMG Name  2. Use it to Update IMG .src
    let isSelected = cardsSelected.includes(cardsSlice);

    // IF cardsSelected ARR Incl's cardsSlice
    // 1. Gen a diff Num for IDX
    // 2. PUSH it to cardsSelected ARR
    // 3. Build STR
    // 4. Change IMG .src
    if (isSelected) {
      cardIndex = generateCardIndex();

      cardsSelected.push(cardsSlice);

      // Embed Gen'd Cards STR From Cards ARR into the .src Path
      let cardName = `./images/${cardsSlice}.svg`;

      // Upd the SRC for IMG
      cardThreeImg.src = `${cardName}`;
    }

    // IF cardsSelected.includes(cardsSlice) = F - PUSH cardsSlice to cardsSelected ARR
    if (!isSelected) {
      cardsSelected.push(cardsSlice);

      // Embed Gen'd Cards STR From Cards ARR into the .src Path
      let cardName = `./images/${cardsSlice}.svg`;

      // Upd the SRC for IMG
      cardThreeImg.src = `${cardName}`;
    }
  }
};

const cardResult4 = function () {
  // Only Run IF Card isnt "Held"
  if (!cardFourIsHeld) {
    // Copy the Poss Cards into a New ARR
    // possibleCardsCopy = possibleCards;
    // To Hold Returns from Gen. Random Nums
    let cardIndex = 0;

    // Call FN to Gen a Card IDX (between 0 & Cards ARR.length)
    cardIndex = generateCardIndex();
    // console.log(`card4 IDX is ${cardIndex}`);

    // Slice the Gen'd Cards STR From Cards ARR
    const cardsSlice = possibleCardsCopy.slice(cardIndex, cardIndex + 1);
    // console.log(cardsSplice);

    // IF cardsSelected ARR Doesnt Incl cardsSlice - PUSH cardsSlice to cardsSelected
    // ... then 1. Embed cardsSlice in IMG Name  2. Use it to Update IMG .src
    let isSelected = cardsSelected.includes(cardsSlice);

    // IF cardsSelected ARR Incl's cardsSlice
    // 1. Gen a diff Num for IDX
    // 2. PUSH it to cardsSelected ARR
    // 3. Build STR
    // 4. Change IMG .src
    if (isSelected) {
      cardIndex = generateCardIndex();

      cardsSelected.push(cardsSlice);

      // Embed Gen'd Cards STR From Cards ARR into the .src Path
      let cardName = `./images/${cardsSlice}.svg`;

      // Upd the SRC for IMG
      cardFourImg.src = `${cardName}`;
    }

    // IF cardsSelected.includes(cardsSlice) = F - PUSH cardsSlice to cardsSelected ARR
    if (!isSelected) {
      cardsSelected.push(cardsSlice);

      // Embed Gen'd Cards STR From Cards ARR into the .src Path
      let cardName = `./images/${cardsSlice}.svg`;

      // Upd the SRC for IMG
      cardFourImg.src = `${cardName}`;
    }
  }
};

const cardResult5 = function () {
  // Only Run IF Card isnt "Held"
  if (!cardFiveIsHeld) {
    // Copy the Poss Cards into a New ARR
    // possibleCardsCopy = possibleCards;
    // To Hold Returns from Gen. Random Nums
    let cardIndex = 0;

    // Call FN to Gen a Card IDX (between 0 & Cards ARR.length)
    cardIndex = generateCardIndex();
    // console.log(`card5 IDX is ${cardIndex}`);

    // Slice the Gen'd Cards STR From Cards ARR
    const cardsSlice = possibleCardsCopy.slice(cardIndex, cardIndex + 1);
    // console.log(cardsSplice);

    // IF cardsSelected ARR Doesnt Incl cardsSlice - PUSH cardsSlice to cardsSelected
    // ... then 1. Embed cardsSlice in IMG Name  2. Use it to Update IMG .src
    let isSelected = cardsSelected.includes(cardsSlice);

    // IF cardsSelected ARR Incl's cardsSlice
    // 1. Gen a diff Num for IDX
    // 2. PUSH it to cardsSelected ARR
    // 3. Build STR
    // 4. Change IMG .src
    if (isSelected) {
      cardIndex = generateCardIndex();

      cardsSelected.push(cardsSlice);

      // Embed Gen'd Cards STR From Cards ARR into the .src Path
      let cardName = `./images/${cardsSlice}.svg`;

      // Upd the SRC for IMG
      cardFiveImg.src = `${cardName}`;
    }

    // IF cardsSelected.includes(cardsSlice) = F - PUSH cardsSlice to cardsSelected ARR
    if (!isSelected) {
      cardsSelected.push(cardsSlice);

      // Embed Gen'd Cards STR From Cards ARR into the .src Path
      let cardName = `./images/${cardsSlice}.svg`;

      // Upd the SRC for IMG
      cardFiveImg.src = `${cardName}`;
    }
  }
};

///////////////////// EVTs
//// Deal BTN
dealBtn.addEventListener('click', function (e) {
  // VAR so no More than 2 Deal/Draws Poss
  dealCount++;
  // console.log(dealCount);

  if (dealCount > 0) {
    playBtn.classList.remove('hide-element');
    this.textContent = 'DRAW';
  }

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
