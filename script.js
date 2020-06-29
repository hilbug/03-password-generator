// Create arrays for lowercase letters, uppercase letters, numbers, special characters

// Create user prompts for each question
  // length of password between 8 and 128
  // lower case letters
  // uppercase letters
  // numbers
  // special characters
// validate the user has chosen at least one character type
// when answered, a password is generated matching selected criteria
// password displayed in an alert OR written to the page

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
