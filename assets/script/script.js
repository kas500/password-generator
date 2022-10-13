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
  var conditions;
  //validate preconditions
  while(!(conditions=preReqSetUp())){
    alert("At least one of the four conditions must be set");
  }

  var passwordString = "";
  var upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCaseCaracters = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var specChars = "!#$%&'()*+,-.:;<=>?@[]^_`{|}~";
  // generating password string with preconditions selected
  while(passwordString.length < passwordLength)
   {
      passwordString+= (conditions.isLowercaseIncluded ? lowerCaseCaracters.charAt(Math.random()*lowerCaseCaracters.length) : "") +
                        (conditions.isUpperCaseIncluded ? upperCaseCharacters.charAt(Math.random()*upperCaseCharacters.length):"") +
                        (conditions.isNumeric ? numbers.charAt(Math.random()*numbers.length):"")+
                        (conditions.isSpecCharsIncluded ? specChars.charAt(Math.random()*specChars.length):"");
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
  function preReqSetUp(){
    var conditions = {
          isLowercaseIncluded: false,
          isUpperCaseIncluded: false,
          isNumeric: false,
          isSpecCharsIncluded: false
    }
    conditions.isLowercaseIncluded = window.confirm("Include lowercase letters?");
    conditions.isUpperCaseIncluded = window.confirm("Include uppercase letters?");
    conditions.isNumeric = window.confirm("Include numbers?");
    conditions.isSpecCharsIncluded = window.confirm("Include spec characters?");
    return (!conditions.isLowercaseIncluded&&
            !conditions.isUpperCaseIncluded&&
            !conditions.isNumeric&&
            !conditions.isSpecCharsIncluded)?false:conditions;
  }

