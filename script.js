// Office Hours
// # password generator (office hours rundown)
//   event listener
//   - on click some button
//   - someElem.addEventListener("click", function() {})
//   prompt user for input
//     1. num of char
//      - validate user input for 8 > num < 129
//      - validate for a number
//     - bunch of booleans
//   approaches for possible password chars
//     1. uild array for potential chars
//       booleans if branches to add char
//     2. acii ref for char
//       - use random num for range within ascii char code for upper or lower, etc
//   loop through length of pass to add a char to password
//   finally displaying password

// Create arrays for lowercase letters, uppercase letters, numbers, special characters
// Create user prompts for each question
  // length of password between 8 and 128
  // lower case letters
  // uppercase letters
  // numbers
  // special characters
// validate the user has chosen at least one character type
// make one mega-array based on what characters the user wants
// loop through the mega array the max number of characters the user wanted
  // if the user wanted 8, loop through 8 but make sure randomly selecting a character from each request character array at least once
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
