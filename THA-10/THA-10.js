const cards = document.querySelectorAll(".cards");
let hasFlippedCard = false;
let lock = false;
let firstCard, secondCard;
function flipcard() {
  //   console.log("I was clicked");
  //   console.log(this);
  if (lock) return;
  if (this === firstCard) return;
  this.classList.add("flip");
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
    // console.log({ hasFlippedCard, firstCard });
  }
  hasFlippedCard = false;
  secondCard = this;
  check();
  // console.log(firstCard, secondCard);
  // console.log(firstCard.dataset.image);
  // console.log(secondCard.dataset.image);
}
function check() {
  let isMatch = firstCard.dataset.image === secondCard.dataset.image;
  isMatch ? disable() : unflip();
}
function disable() {
  firstCard.removeEventListener("click", flipcard);
  secondCard.removeEventListener("click", flipcard);
}
function unflip() {
  lock = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    // lock = false;
    reset();
  }, 1500);
}
function reset() {
  [hasFlippedCard, lock] = [false, false];
  [firstCard, secondCard] = [null, null];
}
(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();
cards.forEach((card) => card.addEventListener("click", flipcard));
