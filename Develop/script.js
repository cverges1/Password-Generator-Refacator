// Assignment Code
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var capLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var symbols = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\\", "|", ":", ";", "'", '"', ",", "<", ".", ">", "/", "?"];

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordOptions = []
  var finalPassword = []
  var passwordLength = prompt("How long would you like your password to be?")
  if (passwordLength < 8||passwordLength>128) {
    alert("Must be between 8 and 128 characters")
    return
  }
  var upperCase = confirm("Would you like uppercase letters in your password?")
  var lowerCase = confirm("Would you like lowercase letters in your password?")
  var hasNumbers = confirm("Would you like numbers in your password?")
  var hasSymbols = confirm("Would you like symbols in your password?")
  if (upperCase===true){
  passwordOptions=passwordOptions.concat(capLetters)  
  }
  if (lowerCase===true){
    passwordOptions=passwordOptions.concat(letters)
  }
  if (hasNumbers===true) {
    passwordOptions=passwordOptions.concat(numbers)
  }
  if (hasSymbols===true){
    passwordOptions=passwordOptions.concat(symbols)
  }
  if (lowerCase===false&&upperCase===false&&hasNumbers===false&&hasSymbols===false){
    alert("Please choose at least one valid password criteria")
    return
  }
  for (let index = 0; index < passwordLength; index++) {
    finalPassword.push(passwordOptions[Math.floor(Math.random()*passwordOptions.length)])
  }

  return finalPassword.join("")
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
