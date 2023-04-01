function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    return options.at(Math.floor(Math.random() * 3));
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "Draw! You both chose " + computerSelection;
    }
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "Scissors") {
            
            return "You Win! Rock beats Scissors.";
        }
        else if (computerSelection === "Paper") {
            return "You Lose! Paper beats Rock.";
        }
    }
    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock.";
        }
        else if (computerSelection === "Scissors") {
            return "You Lose! Scissors beats Paper.";
        }
    }
    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "Paper") {
            return "You Win! Scissors beats Paper.";
        }
        else if (computerSelection === "Rock") {
            return "You Lose! Rock beats Scissors.";
        }
    }
}
function game(playFunction) {
    return playFunction;
}

let playerSelection = "";

const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');

btnRock.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    playerSelection = "rock";
    console.log(playRound(playerSelection, computerSelection));
});
btnPaper.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    playerSelection = "paper";
    console.log(playRound(playerSelection, computerSelection));
});
btnScissors.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    playerSelection = "scissors";
    console.log(playRound(playerSelection, computerSelection));
});