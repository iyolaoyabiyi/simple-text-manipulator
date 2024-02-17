// DOM Elements
let textInput = document.getElementById("textInput");
let toUpperBtn = document.getElementById("toUpper");
let toLowerBtn = document.getElementById("toLower");
let toCapBtn = document.getElementById("toCap");
let capFirstLetBtn = document.getElementById("capFirstLet");
let resultOutput = document.getElementById("resultOutput");
let randomCapBtn = document.getElementById("randomCap");
let camelCaseBtn = document.getElementById("camelCase");

let testText = "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.";

// Function to get text
function getText() {
  resultOutput.style.textTransform = "inherit";
  text = textInput.value;
}

// Text to uppercase function
function changeToUpper() {
  getText();
  let result = text.toUpperCase();
  resultOutput.innerHTML = result;
}

// Text to lowercase function
function changeToLower() {
  getText();
  let result = text.toLowerCase();
  resultOutput.innerHTML = result;
}

// Capitalize text function
function capitalizeText() {
  getText();
  resultOutput.innerHTML = text;
  resultOutput.style.textTransform = "capitalize";
}

// Capitalize first letter function
function capitalizeFirstLtr() {
  getText();
  let validChar = /[a-z1-9]/;
  let charPos = text.search(validChar);
  let firstChar = text.charAt(charPos);
  text = text.replace(firstChar, firstChar.toUpperCase());
  resultOutput.innerHTML = text;
}

// Randomcade function
function toRandomCase() {
  getText();
  let words = text.split(" ");
  randomizedWords = words.map(word => {
    let charArray = word.split("");
    let randomizedChars = charArray.map(char => {
      let random = Math.random();
      return random < 0.5 ? char.toUpperCase() : char.toLowerCase();
    });
    let newWord = randomizedChars.join("");
    return newWord;
  });
  let newText = randomizedWords.join(" ");
  resultOutput.innerHTML = newText;
}

// Camelcase funtion
function toCamelCase() {
  getText();
  let words = text.split(" ");
  modWords = words.map(word => {
    if (word !== words[0]) {
      word = word.toLowerCase();
      let firstChar = word.charAt(0);
      let modFirstChar = firstChar.toUpperCase();
      modWord = word.replace(firstChar, modFirstChar);
      return modWord;
    } else {
      return word;
    }
  });
  let newText = modWords.join("");
  resultOutput.innerHTML = newText;
}

toUpperBtn.addEventListener("click", changeToUpper);
toLowerBtn.addEventListener("click", changeToLower);
toCapBtn.addEventListener("click", capitalizeText);
capFirstLetBtn.addEventListener("click", capitalizeFirstLtr);
randomCapBtn.addEventListener("click", toRandomCase);
camelCaseBtn.addEventListener("click", toCamelCase);