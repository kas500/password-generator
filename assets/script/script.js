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
  let length = returnPasswordLength();
  let isLowercaseIncluded = window.confirm("Include lowercase letters?");
  let isUpperCaseIncluded = window.confirm("Include uppercase letters?");
  let isNumeric = window.confirm("Include numbers?");
  let isSpecCharsIncluded = window.confirm("Include spec characters?");
  return "p@ssw0rd";
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
}

function returnPasswordLength(){
  var length = null;
  while((length === null) || (length < 8 || length > 128)){
    length = window.prompt("Please choose a length (>=8 chars and <=128 chars)");
  }
  return length;
} 