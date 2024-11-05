// DOM Elements
let textInput = document.getElementById("textInput");
let toUpperBtn = document.getElementById("toUpper");
let toLowerBtn = document.getElementById("toLower");
let toCapBtn = document.getElementById("toCap");
let capFirstLetBtn = document.getElementById("capFirstLet");
let resultOutput = document.getElementById("resultOutput");
let randomCapBtn = document.getElementById("randomCap");
let camelCaseBtn = document.getElementById("camelCase");

// Function to get text
function showResult(result) {
  resultOutput.style.textTransform = "inherit";
  resultOutput.value = result;
  resultOutput.focus();
  resultOutput.select();
}

// Text to uppercase function
function changeToUpper() {
  showResult(textInput.value.toUpperCase());
}

// Text to lowercase function
function changeToLower() {
  showResult(textInput.value.toLowerCase());
}

// Capitalize text function
function capitalizeText() {
  showResult(textInput.value);
  resultOutput.style.textTransform = "capitalize";
}

// Capitalize first letter function
function capitalizeFirstLtr() {
  let text = textInput.value;
  let validChar = /[a-zA-Z]/;
  let charPos = text.search(validChar);
  let firstChar = text.charAt(charPos);
  text = text.replace(firstChar, firstChar.toUpperCase());
  showResult(text);
}

// Randomcade function
function toRandomCase() {
  let text = textInput.value;
  const words = text.split(" ");
  const randomizedWords = words.map(word => {
    const charArray = word.split("");
    const randomizedChars = charArray.map(char => {
      let random = Math.random();
      return random < 0.5 ? char.toUpperCase() : char.toLowerCase();
    });
    let newWord = randomizedChars.join("");
    return newWord;
  });
  text = randomizedWords.join(" ");
  showResult(text);
}

// Camelcase funtion
function toCamelCase() {
  let text = textInput.value;
  const words = text.split(" ");
  const modWords = words.map((word, i) => {
    word = word.toLowerCase();
    let validChar = /[a-z]/i;
    let firstChar = word.charAt(word.search(validChar));
    console.log(word.search(validChar));
    if (i !== 0) {
      word = word.replace(firstChar, firstChar.toUpperCase());
    }
    return word;
  });
  text = modWords.join("");
  showResult(text);
}

toUpperBtn.addEventListener("click", changeToUpper);
toLowerBtn.addEventListener("click", changeToLower);
toCapBtn.addEventListener("click", capitalizeText);
capFirstLetBtn.addEventListener("click", capitalizeFirstLtr);
randomCapBtn.addEventListener("click", toRandomCase);
camelCaseBtn.addEventListener("click", toCamelCase);