// Assignment Code
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];

var specialCharacters = ['!','@','#','$','%','^','&','*'];

function generatePassword()
{
  var length = parseInt (prompt("Please enter a password length that is greater than 8 characters"));

  if (isNaN(length)) {
    alert ("Password lenght must be entered in number format only");
    return null;
  }
  if (length<8) {
   alert ("Password lenght must be atleast 8 characters");
    return null;
 }
  var haslowerCasedCharacters = confirm(('Click Ok to confirm if we need to include lower case alphabets'));

  var hasUpperCasedCharacters = confirm(('Click Ok to confirm if we need to include upper case alphabets'));

  var hasSpecialCharacters = confirm(('Click Ok to confirm if we need to include special characters')); 

  var hasNumericCharacters = confirm(('Click Ok to confirm if we need to include numeric characters')); 
  
  if (haslowerCasedCharacters === false && hasNumericCharacters === false && hasSpecialCharacters === false &&  hasUpperCasedCharacters === false)
 { alert ("Password must have atleast one character type selected");
  return null;
 }
  var passwordProperties = {
  length: length,
  hasNumericCharacters: hasNumericCharacters,
  hasSpecialCharacters: hasSpecialCharacters,
  hasUpperCasedCharacters: hasUpperCasedCharacters,
  haslowerCasedCharacters: haslowerCasedCharacters,
 };
console.log(passwordProperties);

  var passcombination = [];

  if (passwordProperties.haslowerCasedCharacters) {
    passcombination = [...lowerCasedCharacters,...passcombination];
  }

  if (passwordProperties.hasUpperCasedCharacters) {
    passcombination = [...upperCasedCharacters,...passcombination];
  }

  if (passwordProperties.hasNumericCharacters) {
    passcombination = [...numericCharacters,...passcombination];
  }

  if (passwordProperties.hasSpecialCharacters) {
    passcombination = [...specialCharacters,...passcombination];
  }
console.log(passcombination);

var password = [];

  for (i=0; i<passwordProperties.length; i++){
 password += passcombination[Math.floor(Math.random()*passcombination.length)];
  }
  console.log(password);
  return(password);

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() 
{
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
