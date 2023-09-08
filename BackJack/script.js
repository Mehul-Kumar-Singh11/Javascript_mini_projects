let cards = [];
let sum = 0;
// let sumEl = document.getElementById("sum-El")
let sumEl = document.querySelector("#sum-El");

let cardsEl = document.getElementById("cards-El");

let hasBlackjack = false;
let isAlive = false;

let msg = "";
let msgEl = document.getElementById("msg-El");

let player = {
  name: "per",
  chips: 145,
  sayHello: function () {
    console.log("huray!!");
  },
};
console.log(player.sayHello);
let playerObj = {
  name: "Per",
  chips: 200,
};
let playerEl = document.getElementById("player-El");
playerEl.textContent = playerObj.name + ": $" + playerObj.chips;

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  if (sum < 21) {
    msg = "Do you want to draw a new card?";
    isAlive = true;
  } else if (sum === 21) {
    msg = "Congratulations!! You've got Blackjack";
    hasBlackjack = true;
  } else {
    msg = "You lost!!";
    isAlive = false;
  }
  msgEl.textContent = msg;
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
  }
}

function getRandomCard() {
  let num = 1 + Math.floor(Math.random() * 13);
  if (num === 1) {
    return 11;
  } else if (num > 10) {
    return 10;
  } else {
    return num;
  }
}

let castle = {
  title: "hello",
  price: 100,
  is: true,
  images: ["img/castle1.png", "img/castle1.png"],
};

console.log(castle.title);
console.log(castle.is);
console.log(castle.images[0]);
