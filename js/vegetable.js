const gameDisplay = document.getElementById("gameDisplay");
const gameInput = document.getElementById("gameInput");
const startButton = document.getElementById("startButton");
const buttonGroup = document.getElementById("buttonGroup");
const submitButton = document.getElementById("submitButton");
const quitButton = document.getElementById("quitButton");
const scoreValue = document.getElementById("scoreValue");

let vegetablesName = [
  "chilli",
  "lady finger",
  "potato",
  "tomato",
  "coriender",
  "jack fruit",
  "peas",
  "spinach",
  "cabbage",
  "cauli flower",
  "cucumber",
  "asparagus",
  "beans",
  "beetroot",
  "carrot",
  "radish",
  "broccoli",
  "celery",
  "corn",
  "eggplant",
  "ginger",
  "onion",
  "mushrooms",
  "green pepper",
  "red pepper",
  "yellow pepper",
  "pumpkin",
  "sweet potato",
  "turnip",
];

let play = false;

let newWord = "";
let newScrambledWord = "";

let score = 0;

const newArrayWord = () => {
  let randomIndex = Math.floor(Math.random() * vegetablesName.length);
  // console.log(randomIndex);
  let randomWord = vegetablesName[randomIndex];
  return randomWord;
};

const scrambledWord = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    tempInd = array[i];
    // console.log(tempInd);
    let randomNum = Math.floor(Math.random() * i + 1);
    array[i] = array[randomNum];
    array[randomNum] = tempInd;
  }
  return array;
};

// Start game Script
startButton.addEventListener("click", () => {
  play = true;
  startButton.style.display = "none";
  gameInput.style.display = "inline-flex";
  buttonGroup.style.display = "inline-flex";
  newWord = newArrayWord();
  newScrambledWord = scrambledWord(newWord.split(""));
  gameDisplay.innerHTML = `"${newScrambledWord.join("")}"`;
});

// Submit answer script
submitButton.addEventListener("click", () => {
  if (gameInput.value === newWord) {
    !play;
    gameDisplay.innerHTML = "Hurray! correct answer.";
    buttonGroup.style.display = "none";
    startButton.style.display = "inline-flex";
    gameInput.value = "";
    gameInput.style.display = "none";
    score = score + 1;
    scoreValue.innerHTML = score;
  } else {
    gameDisplay.innerHTML = `opps! wrong answer, try again: "${newScrambledWord.join(
      ""
    )}"`;
    gameInput.value = "";
  }
});

// Quit game script
quitButton.addEventListener("click", () => {
  play = false;
  gameDisplay.innerHTML = `your score is ${score}.<br> better luck next time.`;
  gameInput.style.display = "none";
  buttonGroup.style.display = "none";
  startButton.style.display = "inline-flex";
  startButton.innerHTML = "try again";
  score = 0;
  scoreValue.innerHTML = score;
});
