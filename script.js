function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    return options.at(Math.floor(Math.random() * 3));
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "Paper") {
            return "You Lose! Paper beats Rock.";
        }
        else if (computerSelection === "Scissors") {
            return "You Win! Rock beats Scissors.";
        }
        else {
            return "Draw! You both chose Rock.";
        }
    }
    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "Paper") {
            return "Draw! You both chose Paper.";
        }
        else if (computerSelection === "Scissors") {
            return "You Lose! Scissors beats Paper.";
        }
        else {
            return "You Win! Paper beats Rock.";
        }
    }
    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "Paper") {
            return "You Win! Scissors beats Paper.";
        }
        else if (computerSelection === "Scissors") {
            return "Draw! You both chose Scissors.";
        }
        else {
            return "You Lose! Rock beats Scissors.";
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));