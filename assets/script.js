// Assignment code here




function generatePassword() {
        var length = window.prompt("Please enter a number between 8 and 128:");

        if (length > 7 && length < 129)  {
        }
            else {
                alert("Please enter a valid response")
                generatePassword()
            }
        
    
        var charset = "",
        retVal = "";
        var charprompt1 = window.prompt("Do you want to include lowercase characters?")
        var charprompt2 = window.prompt("Do you want to include uppercase characters?")
        var charprompt3 = window.prompt("Do you want to include special characters?")
        var charprompt4 = window.prompt("Do you want to include numbers?")
    
    if (charprompt1.toString().toLowerCase() == "yes") {
        charset += "abcdefghijklmnopqrstuvwxyz"
    }

    if (charprompt2.toString().toLowerCase() == "yes") {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    if (charprompt3.toString().toLowerCase() == "yes") {
        charset += "@%+/'!#$?()[]{}_.-"
    }

    if (charprompt4.toString().toLowerCase() == "yes") {
        charset += "0123456789"
    }

    
    
    
    if (charset == "") {
    alert("Please include atleast one option.")
    
    generatePassword();
    }
    
        
        
        for (var i = 0, n = charset.length; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * n ))
    }
    return retVal;

}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
    
