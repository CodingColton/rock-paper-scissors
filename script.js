function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"]
    return options.at(Math.floor(Math.random() * 3))
}