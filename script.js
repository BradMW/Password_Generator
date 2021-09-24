// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

//   var password=document.getElementById("password");
console.log(password);
  passwordText.value = password;

}

const capital = ["A", "B", "C", "D", "E"]
const lower = ["a", "b", "c", "d"]
const number = [1,2,3,4,5,6,7,8,9]
const symbol = ["!", "$", "@"]

let bigarray = []






function generatePassword() {
    var length = 10

    var caps = confirm("do you want capital letters?")
    if (caps === true) {
        bigarray = bigarray.concat(capital) 
        console.log(bigarray);
    }

    var lwr = confirm("do you want lowercase letters?")
    if (lwr === true) {
        bigarray = bigarray.concat(lower) 
        console.log(bigarray);
    }

    var num = confirm("do you want numbers?")
    if (num === true) {
        bigarray = bigarray.concat(number) 
        console.log(bigarray);
    }

    var spc = confirm("do you want symbols?")
    if (spc === true) {
        bigarray = bigarray.concat(symbol) 
        console.log(bigarray);
    }

        // var pArr = []

    // var text = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789!@#$%^&*(){}[];:.>,</?";
    var password = "";
    for (var i = 0; i < length; i++); {
        password = password + bigarray[Math.floor(Math.random() * bigarray.length)];
        // console.log(bigarray[Math.floor(Math.random() * bigarray.length)]);
    }
    console.log(password);
    return password;
}
// function generatePassword(length) {
//     result = "";
//     var text = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789!@#$%^&*(){}[];:.>,</?";
//     var textLength = text.length;
//     for (var i = 0; i< length; i++) {
//         result += text.charAt(Math.floor(Math.random() * textLength));
//     }
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
