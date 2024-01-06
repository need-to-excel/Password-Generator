// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  
  var lowerCaseConfirmation = confirm("Do you want to include lower case characters?");
  var upperCaseConfirmation = confirm("Do you want to include upper case characters?");
  var specialCharacterConfirmation = confirm("Do you want to include special characters?");
  var numbersConfirmation = confirm("Do you want to include number?");
 
  return {
    lowerCaseConfirmation,
    upperCaseConfirmation,
    specialCharacterConfirmation,
    numbersConfirmation,
  };
  }

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var passwordLength = parseInt(prompt("Please select a number between 8-128 for the length of your password?"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please select a number between 8 and 128!")
    return generatePassword()
  }
    if (!passwordLength){
    alert("Please select a number between 8 and 128!")
    return generatePassword()
  }
var options = getPasswordOptions();
console.log(options);
var characterBank = [];
if (options.upperCaseConfirmation) {
  characterBank = characterBank.concat(upperCasedCharacters);
}
if (options.lowerCaseConfirmation) {
  characterBank = characterBank.concat(lowerCasedCharacters);
}
if (options.specialCharacterConfirmation) {
  characterBank = characterBank.concat(specialCharacters);
}
if (options.numbersConfirmation) {
  characterBank = characterBank.concat(numericCharacters);
}
console.log(characterBank)
var password = "";
console.log(getRandom(characterBank))
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
