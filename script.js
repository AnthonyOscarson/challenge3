var generateBtn = document.querySelector("#generate");
//types of characters
var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var specialCharacters = ("!@#$%^&*()<>_");
var numbers = ("123456789");

function generatePassword() {
  console.log('PasswordBox');


// Key variables and prompt
var lengthOfPass = prompt("How many digets?");
var numberOfCharacters = [];
var characters = [];
//limitor!
if(lengthOfPass < 8 || lengthOfPass > 128 || isNaN(lengthOfPass)) {
  alert('password must be a number between 8 to 128.');
  generatePassword();
}

//logger!
console.log(lengthOfPass);

//Prompt selectors
var hasLowerCase = confirm("Would you like lower case letters?");
var hasUpperCase = confirm("would you like upper case letters?");
var hasSpecialCharacters = confirm("Would you like synbols?");
var hasNumbers = confirm("Would you like numbers?");
//logger!
console.log(hasLowerCase, hasUpperCase, hasSpecialCharacters, hasNumbers, characters);
//----Statments----//
var passwordLowerArr = lowerCase.split("");
if(hasLowerCase) {
  numberOfCharacters = numberOfCharacters.concat(passwordLowerArr)
}
var passwordUpperArr = upperCase.split("");
if(hasUpperCase) {
  numberOfCharacters = numberOfCharacters.concat(passwordUpperArr)
}
var passwordSpecialArr = specialCharacters.split("");
if(hasSpecialCharacters) {
  numberOfCharacters = numberOfCharacters.concat(passwordSpecialArr)
}
var passwordNumbersArr = numbers.split("");
if(hasNumbers) {
  numberOfCharacters = numberOfCharacters.concat(passwordNumbersArr)
}

//----Statments----//
//logger!
console.log(numberOfCharacters);

 for(var i = 0; i < lengthOfPass; i++) {
  var randomvalue = getrandomElement(numberOfCharacters);
  characters.push(randomvalue);
 }
return characters.join("");
}

function getrandomElement(array) {
  var randomindex = Math.floor(Math.random() * array.length);
  var randomelement = array[randomindex];
  return randomelement;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}
generateBtn.addEventListener("click", writePassword);
