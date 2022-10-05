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
  let length = window.prompt("Choose a length in boundaries (no less 8 characters and no more then 128 characters)");
  let isLowercaseIncluded = window.confirm("Include lowercase letters?");
  let isUpperCaseIncluded = window.confirm("Include uppercase letters?");
  let isNumeric = window.confirm("Include numbers?");
  let isSpecCharsIncluded = window.confirm("Include spec characters?");
  return "p@ssw0rd";
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
}
