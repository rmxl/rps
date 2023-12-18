
const arr1 = ["rock","paper","scissors"];
const arr2 = ["Rock","Paper","Scissors"];

function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection===computerSelection) return `It was a tie!`;
    else if(playerSelection === (computerSelection+1)%3) return `You won! ${arr2[playerSelection]} beats ${arr1[computerSelection]}.`;
    else return `You lost! ${arr2[playerSelection]} loses to ${arr1[computerSelection]}.`;
}

function game() {
    let i = 0;
    let playerWin = 0;
    let compWin = 0;
    while(i<5){
        let ent = prompt("What is your play?");
        const playerChoice = arr1.indexOf(ent.toString().toLowerCase());
        if(playerChoice===-1) {
            console.log("Invalid input! Try again.");
            continue;
        }
        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice,computerChoice);
        console.log(result);
        if(result===`It was a tie!`) console.log(result);
        else result.slice(4,7)===`won`?playerWin++:compWin++;
        i++;
}
    console.log(playerWin===3?`You won the game!`:`You lost the game!`);
}

game();


