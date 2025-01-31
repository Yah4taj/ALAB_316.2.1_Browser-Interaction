//Create a simple guessing game that pushes users toward the correct answer in some iterative way. 

let winningNumber =Math.floor(Math.random() * 100);
console.log(winningNumber);
let attempt = 7;

while (attempt > 0) {
    let userGuess = window.prompt("Guess a number from 1 -100")

if (isNaN(userGuess)|| userGuess > 100 || userGuess < 1){
    window.alert("Please choose a valid number") }
if (userGuess == winningNumber){
    window.alert("Congrats! Right number");
    break
}
else if (userGuess > winningNumber) {
   window.alert(`Too high, guess again! attempts left ${attempt}`)
   attempt--
   document.getElementById("attempts").innerText = attempt
}
else {
    window.alert(`Too low, guess again attempts left ${attempt}`)
    attempt--
    document.getElementById("attempts").innerText = attempt
}// window.alert(`Game Over the winning number was ${winningNumber}`)

}



















// const output = document.querySelector("div");
// const myInput = document.querySelector("input");
// const btn = document.querySelector("button");

// let button = document.createElement("button");

// function clickedMe() {

// let temp = Math.random() * 10;
// console.log(temp);
// temp = Math.floor(temp);
// output.textContent = temp;
// }

