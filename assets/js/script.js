// Assignment Code
var generateBtn = document.querySelector("#generate");
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var capitalLetters =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?'];


var pickedCharacterArr =[] 
var shadesArray = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){
    var numberOfCharacters = parseInt(prompt('how may characters do you want the password must be between 8-128 characters long?'))
    if(numberOfCharacters < 8|| numberOfCharacters > 128){
        alert("must be between 8 and 128")
        return ""
    }
    if(confirm('Would you like numbers?')) {
        pickedCharacterArr.push(number)
    }
    if(confirm('Would you like Capitol Letters?')) {
        pickedCharacterArr.push(capitalLetters)
    }
    if(confirm('Would you like lower case letters')) {
        pickedCharacterArr.push(lowerCaseLetters)
    }
    if(confirm('Would you like symbols')) {
        pickedCharacterArr.push(symbols)
    }
    if(pickedCharacterArr.length === 0){
        alert('You must select one character type')
        return ""
    }
    console.log(numberOfCharacters, pickedCharacterArr)
    var password =""
    for(var i =0; i < numberOfCharacters; i++){
        var randomCharacterType = Math.floor(Math.random()*pickedCharacterArr.length)
        var randomPostion = Math.floor(Math.random()*pickedCharacterArr[randomCharacterType].length)
        password = password + pickedCharacterArr[randomCharacterType][randomPostion]
       
    }
    return password
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);