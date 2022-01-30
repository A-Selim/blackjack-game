let cards = [];
let sum = 0;
let isGameAlive = false;
const messageEl = document.querySelector(".message-el");
const cardsEl = document.querySelector(".cards-el");
const sumEl = document.querySelector(".sum-el");
// Declare buttons
const startBtn = document.querySelector("#start-btn");
const cardBtn = document.querySelector("#card-btn");

// Generate 2 cards when Start Game btn clicked & add them to sum
startBtn.addEventListener("click", function () {
    isGameAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
});

// Generate a new card when New Card btn clicked & update sum with new card value
cardBtn.addEventListener("click", function () {
    if (isGameAlive) {
        let newCard = getRandomCard();
        cards.push(newCard);
        sum += newCard;
        renderGame();
    }
});

// function to generate random card and if randomCard > 10 turn the card to 10
function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard > 10 || randomCard === 1) {
        return 10;
    } else {
        return randomCard;
    }
}

// function to render cards, sum & message
function renderGame() {
    let cardsText = `Cards: `;
    for (let i = 0; i < cards.length; i++) {
        if (i === cards.length - 1) {
            cardsText += `${cards[i]}`;
        } else {
            cardsText += `${cards[i]} - `;
        }
    }
    cardsEl.textContent = cardsText;
    sumEl.textContent = `Sum: ${sum}`;
    if (sum === 21) {
        messageEl.textContent = `🎉 Blackjack 🎉`;
        isGameAlive = false;
    } else if (sum > 21) {
        messageEl.textContent = `Sorry, you lost.`;
        isGameAlive = false;
    } else {
        messageEl.textContent = `Do you want another card`;
    }
}
