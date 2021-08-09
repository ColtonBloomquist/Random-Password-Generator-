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
        //Select password optons prompts
        var charprompt1 = window.prompt("Do you want to include lowercase characters? Type yes or no")

        if (charprompt1.toString().toLowerCase() == "yes") {
            charset += "abcdefghijklmnopqrstuvwxyz"
        }
        else if (charprompt1.toString().toLowerCase() == "no") {
            charset += ""
        }
        
        else {
            alert("Invalid selection. Please try again and enter either yes or no.")
            return 
            
            
        }
        

        var charprompt2 = window.prompt("Do you want to include uppercase characters? Type yes or no")
        
        if (charprompt2.toString().toLowerCase() == "yes") {
            charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }
        else if (charprompt2.toString().toLowerCase() == "no") {
            charset += ""
        }
    
        else {
            alert("Invalid selection. Please try again and enter either yes or no.")
            return 
            
        }
        

        var charprompt3 = window.prompt("Do you want to include special characters? Type yes or no")

        if (charprompt3.toString().toLowerCase() == "yes") {
            charset += "@%+/'!#$?()[]{}_.-"
        }
        else if (charprompt3.toString().toLowerCase() == "no") {
            charset += ""
        }
    
        else {
            alert("Invalid selection. Please try again and enter either yes or no.")
            return 
            
        }
        
        var charprompt4 = window.prompt("Do you want to include numbers? Type yes or no")
    
        if (charprompt4.toString().toLowerCase() == "yes") {
            charset += "1234567890"
        }
        else if (charprompt4.toString().toLowerCase() == "no") {
            charset += ""
        }
    
        else {
            alert("Invalid selection. Please try again and enter either yes or no.")
            return 
            
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
    
