const gameDisplay = document.getElementById("gameDisplay");
const gameInput = document.getElementById("gameInput");
const startButton = document.getElementById("startButton");
const buttonGroup = document.getElementById("buttonGroup");
const submitButton = document.getElementById("submitButton");
const quitButton = document.getElementById("quitButton");
const scoreValue = document.getElementById("scoreValue");

let fruitsName = [
  "apple",
  "banana",
  "guava",
  "grapes",
  "chicoo",
  "dragonfruit",
  "mango",
  "litchi",
  "wood apple",
  "star fruit",
  "coconut",
  "cherry",
  "blackberry",
  "blueberry",
  "avocado",
  "cranberries",
  "custard apple",
  "date fruit",
  "figs",
  "gooseberries",
  "watermelon",
  "musk melon",
  "plum",
  "kiwi",
  "lemon",
  "olives",
  "orange",
  "papaya",
  "peaches",
  "pear",
  "pineapple",
  "pomegranate",
  "raspberries",
  "rose apple",
  "spodilla",
  "sapote",
  "strawberry",
  "sugar apple",
];

let play = false;

let newWord = "";
let newScrambledWord = "";

let score = 0;

const newArrayWord = () => {
  let randomIndex = Math.floor(Math.random() * fruitsName.length);
  let randomWord = fruitsName[randomIndex];
  return randomWord;
};

const scrambledWord = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    tempInd = array[i];
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
  if (gameInput.value.toLowerCase() === newWord) {
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
