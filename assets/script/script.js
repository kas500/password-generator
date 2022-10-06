///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  passwordText.value = password; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  // Gathering preconditions
  let passwordLength = returnPasswordLength();
  let isLowercaseIncluded = window.confirm("Include lowercase letters?");
  let isUpperCaseIncluded = window.confirm("Include uppercase letters?");
  let isNumeric = window.confirm("Include numbers?");
  let isSpecCharsIncluded = window.confirm("Include spec characters?");
  // initializing password string and characters sets
  var passwordString = "";
  var upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCaseCaracters = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var specChars = "!#$%&'()*+,-.:;<=>?@[]^_`{|}~";
  // generating password string with preconditions selected
  while(passwordString.length < passwordLength)
   {
      passwordString+= (isLowercaseIncluded ? lowerCaseCaracters.charAt(Math.random()*lowerCaseCaracters.length) : "") +
                        (isUpperCaseIncluded ? upperCaseCharacters.charAt(Math.random()*upperCaseCharacters.length):"") +
                        (isNumeric ? numbers.charAt(Math.random()*numbers.length):"")+
                        (isSpecCharsIncluded ? specChars.charAt(Math.random()*specChars.length):"");
  }
  return passwordString;
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
}
// check password length and digits only and not null
function returnPasswordLength(){
  var passwordLength = null;
  while(((passwordLength === null) || (passwordLength < 8 || passwordLength > 128)) || !(/^[0-9]+$/.test(passwordLength))){
    passwordLength = window.prompt("Please choose a length (>=8 chars and <=128 chars)");
  }
  return passwordLength;
} 