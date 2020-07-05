
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//Function to generate password based in user inputs
function generatePassword() {
// Arrays for password
  let lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let numbers = "0123456789".split("");
  let symbols = "!*$%&#@+?:;".split("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
