
const arr1 = ["rock","paper","scissors"];
const arr2 = ["Rock","Paper","Scissors"];

function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection===computerSelection) return `It was a tie!`;
    else if(playerSelection === (computerSelection+1)%3) return `You won! ${arr2[playerSelection]} beats ${arr2[computerSelection]}.`;
    else return `You lost! ${arr2[playerSelection]} loses to ${arr2[computerSelection]}.`;
}

function game(ch) {
    const playerChoice = arr1.indexOf(ch.toLowerCase());
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice,computerChoice);
    textDisplay.textContent = result;
    if(result===`It was a tie!`) return;
    result.slice(4,7)===`won`?playerWin++:compWin++;
    if(playerWin==5||compWin==5) displayResults();
}

function displayResults(winner){
    const tt = playerWin==5?`Congratulations! You won the game!`:`You lost the game.`;
    gameResult.textContent = tt;
}

let playerWin = 0;
let compWin = 0;
const choice = document.querySelectorAll(".buttons");
const textDisplay = document.querySelector(".result");
const gameResult = document.querySelector(".gamewinner");
choice.forEach((item) => {
    item.addEventListener("click",function(event){
        if(playerWin==5||compWin==5){
            gameResult.textContent = "";            
            playerWin = 0;
            compWin = 0;
        }
        game(event.target.id);
    });
});




