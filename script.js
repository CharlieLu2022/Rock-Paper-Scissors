//Computer's play
function getComputerChoice() {
    let randomNum = Math.random(); //creates a random decimal number between 0 and 1. The returned value may be 0, but it will never be 1.
    
    if (randomNum <= 1/3) {
        return "Rock";
    } else if (randomNum > 1/3 && randomNum <= 2/3) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

//Compare the plays
function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection == "rock" && computerSelection == "Scissors"):
            result = "You win! Rock beats Scissors!";
            console.log(result);
            scorePlayer = scorePlayer + 1;
            break;
        case (playerSelection == "rock" && computerSelection == "Rock"):
            result = "Draw!";
            console.log(result);
            break;
        case (playerSelection == "rock" && computerSelection == "Paper"):
            result = "You lose! Paper beats Rock!";
            console.log(result);
            scoreComputer = scoreComputer + 1;
            break;
        case (playerSelection == "paper" && computerSelection == "Rock"):
            result = "You win! Paper beats Rock!";
            console.log(result);
            scorePlayer = scorePlayer + 1;
            break;
        case (playerSelection == "paper" && computerSelection == "Paper"):
            result = "Draw!";
            console.log(result);
            break;
        case (playerSelection == "paper" && computerSelection == "Scissors"):
            result = "You lose! Scissors beats Paper!";
            console.log(result);
            scoreComputer = scoreComputer + 1;
            break;
        case (playerSelection == "scissors" && computerSelection == "Paper"):
            result = "You win! Scissors beats Paper!";
            console.log(result);
            scorePlayer = scorePlayer + 1;
            break;
        case (playerSelection == "scissors" && computerSelection == "Scissors"):
            result = "Draw!";
            console.log(result);
            break;
        case (playerSelection == "scissors" && computerSelection == "Rock"):
            result = "You lose! Rock beats Scissors!";
            console.log(result);
            scoreComputer = scoreComputer + 1;
            break;
        default:
            result = "Illegal play!";
    }
}

let result = "";
let playerSelection;
let computerSelection;
let scorePlayer = 0;
let scoreComputer = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Type your play:", "");
        computerSelection = getComputerChoice();
        console.log("Your play:" + playerSelection);
        console.log("Computer's play:" + computerSelection);
        playRound(playerSelection, computerSelection);
    }
    if (scorePlayer > scoreComputer) {
        console.log("You won the game! And the score is " + scorePlayer + ":" + scoreComputer + ".");
    } else if (scorePlayer == scoreComputer) {
        console.log("Nobody has won the game! And the score is " + scorePlayer + ":" + scoreComputer + ".");
    } else {
        console.log("You lost the game! And the score is " + scorePlayer + ":" + scoreComputer + ".");
    }
}

game();