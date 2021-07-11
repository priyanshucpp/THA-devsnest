const startButton = document.getElementById("start");
const nextButton = document.getElementById("next");
startButton.addEventListener("click", start);
nextButton.addEventListener("click", () => {
  current++;
  next();
});
const questionContainerElement = document.getElementById("question-container");
let shuffle, current;
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-buttons");
function start() {
  //   console.log("heelo");
  startButton.classList.add("hide");
  shuffle = questions.sort(() => Math.random());
  current = 0;
  questionContainerElement.classList.remove("hide");
  next();
}
//for next question and shuffling
function next() {
  reset();
  show(shuffle[current]);
}
function show(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", select);
    answerElement.appendChild(button);
  });
}
function reset() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerElement.firstChild) {
    answerElement.removeChild(answerElement.firstChild);
  }
}
function select(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffle.length > current + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
  nextButton.classList.remove("hide");
}
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
const questions = [
  {
    question:
      "If soccer is called football in England, what is American football called in England?",
    answers: [
      { text: "American football", correct: true },
      { text: "Comball", correct: false },
      { text: "Handball", correct: false },
      { text: "Touchdown", correct: false },
    ],
  },
  {
    question: "What is the largest country in the world?",
    answers: [
      { text: "Russia", correct: true },
      { text: "Canada", correct: false },
      { text: "China", correct: false },
      { text: "United States", correct: false },
    ],
  },
  {
    question: "Which of these is a stop codon in DNA?",
    answers: [
      { text: "TAA", correct: true },
      { text: "ACT", correct: false },
      { text: "ACA", correct: false },
      { text: "GTA", correct: false },
    ],
  },
];
