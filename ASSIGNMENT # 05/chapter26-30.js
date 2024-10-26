// // Question 01
// var userInput=+prompt("Enter  number");
// var num1=Math.round(userInput);
// var num2=Math.ceil(userInput);
// var num3=Math.floor(userInput);
// document.write(`Number${userInput}<br/>Round of ${num1}<br/>Floor Value ${num3}<br/>Ceil Value${num2}`)


// Question 02
// var userInput=+prompt("Enter  number");
// var num1=Math.round(userInput);
// var num2=Math.ceil(userInput);
// var num3=Math.floor(userInput);
// document.write(`Number${userInput}<br/>Round of ${num1}<br/>Floor Value ${num3}<br/>Ceil Value${num2}`)




// Question 04
// var random=Math.floor(Math.random()*6 +1);
// document.write(`Random Dice: ${random}`);


// Question 05
// var random=Math.floor(Math.random()*2 +1);
// if(random=== 2){
//     document.write(`${random}<br/>Radom Coin Value Head`)
// }
// else if(random=== 1){
//     document.write(`${random}<br/>Radom Coin Value Tail`)
// }

// Question 06
// var random=Math.floor(Math.random()*100 +1);
// document.write(`Random Number Between 1 and 100: ${random}`);


var num=Math.floor(Math.random()*10 +1)
var userInput=+prompt("Please Enter a Number Between 1 to 10")

if(userInput===num){
    document.write("Bingo")
}
else if(userInput===++num ){
    document.write("Close enough to the correct answer.")
}
else{
    document.write("Sorry,You Lost")
}