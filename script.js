
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

  // prompt user for password length
  let userLength = prompt("Enter a password length between 8 and 128.");
  
  // If not a number between 8 and 128, alert user
  // I think I need a while loop but can't get it to work.
  if (userLength < 8 || userLength > 128 || isNaN(userLength)) {
    alert("Please enter a valid selection for password length.");
    return;
  };

  //prompt user for lower case letters
  let userLowerCase = confirm("Would you like LOWER CASE letters in your password?");

  //prompt user for upper case letters
  let userUpperCase = confirm("Would you like UPPER CASE letters in your password");

  //prompt user for numbers
  let userNumbers = confirm("Would you like NUMBERS in your password");

  //prompt user for symbols
  let userSymbols = confirm("Would you like SYMBOLS in your password?");

  // Strings for password
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let symbols = "!*$%&#@+?:;()^";
  let pwString = "";

  // Create pwString based on user inputs
  if (userLowerCase) {
    pwString = pwString + lowerCase;
  }

  if (userUpperCase) {
    pwString = pwString + upperCase;
  } 

  if (userNumbers) {
    pwString = pwString + numbers;
  }

  if (userSymbols) {
    pwString = pwString + symbols;
  }

  console.log(pwString);

  let userPassword = "";

  // generate random string from StackOverflow: 
  // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  for (let i = 0; i < userLength; i++) {
    userPassword += pwString.charAt(Math.floor(Math.random() * pwString.length));
  }

  console.log(userPassword);
  userPWPrompt = alert("Your password is " + userPassword);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
