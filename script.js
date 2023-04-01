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
            playerScore += 1;
            return "You Win! Rock beats Scissors.";
        }
        else if (computerSelection === "Paper") {
            computerScore += 1;
            return "You Lose! Paper beats Rock.";
        }
    }
    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "Rock") {
            playerScore += 1;
            return "You Win! Paper beats Rock.";
        }
        else if (computerSelection === "Scissors") {
            computerScore += 1;
            return "You Lose! Scissors beats Paper.";
        }
    }
    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "Paper") {
            playerScore += 1;
            return "You Win! Scissors beats Paper.";
        }
        else if (computerSelection === "Rock") {
            computerScore += 1;
            return "You Lose! Rock beats Scissors.";
        }
    }
}
function game(playFunction) {
    return playFunction;
}
function updateScoreText() {
    playerScorePara.textContent = "Player: " + playerScore;
    computerScorePara.textContent = "Computer: " + computerScore;
}

let playerSelection = "";

const btnRock = document.querySelector('.BtnRock');
const btnPaper = document.querySelector('.BtnPaper');
const btnScissors = document.querySelector('.BtnScissors');

const resultsContainer = document.querySelector("#ResultsContainer");

let playerScore = 0;
let computerScore = 0;

const playerScorePara = document.querySelector('.PlayerScore');
const computerScorePara = document.querySelector('.ComputerScore');

playerScorePara.textContent = "Player: " + playerScore;
computerScorePara.textContent = "Computer: " + computerScore;

btnRock.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    playerSelection = "rock";
    const resultsPara = document.createElement('p');
    resultsPara.textContent = playRound(playerSelection, computerSelection);
    resultsContainer.appendChild(resultsPara);
    updateScoreText();
});
btnPaper.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    playerSelection = "paper";
    const resultsPara = document.createElement('p');
    resultsPara.textContent = playRound(playerSelection, computerSelection);
    resultsContainer.appendChild(resultsPara);
    updateScoreText();
});
btnScissors.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    playerSelection = "scissors";
    const resultsPara = document.createElement('p');
    resultsPara.textContent = playRound(playerSelection, computerSelection);
    resultsContainer.appendChild(resultsPara);
    updateScoreText();
});