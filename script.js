let result;
let playerSelection;
let computerSelection;
let scorePlayer = 0; //initial value required;
let scoreComputer = 0; //initial value required;
let topScore;
let gameEnded = false;

const playerScoreboard = document.querySelector('#playerScoreboard');
playerScoreboard.textContent = "0";
playerScoreboard.style.color = 'azure'; 

const computerScoreboard = document.querySelector('#computerScoreboard');
computerScoreboard.textContent = "0";
computerScoreboard.style.color = 'azure'; 

const resultBoard = document.querySelector('#resultBoard');


// Player UI
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    if (gameEnded = true) {
        playerScoreboard.textContent = scorePlayer.toString();
        computerScoreboard.textContent = scoreComputer.toString();
    }
    playerSelection = "Rock";
    game();
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    if (gameEnded = true) {
        playerScoreboard.textContent = scorePlayer.toString();
        computerScoreboard.textContent = scoreComputer.toString();
    }
    playerSelection = "Paper";
    game();
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    if (gameEnded = true) {
        playerScoreboard.textContent = scorePlayer.toString();
        computerScoreboard.textContent = scoreComputer.toString();
    }
    playerSelection = "Scissors";
    game();
});

function game() {
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    whoLeading ();
    if (topScore == 5) {
        announceWinner ();
    }
} 

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

//Compare the plays and count score
function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection == "Rock" && computerSelection == "Scissors"):
            result = "You win! Rock beats Scissors!";
            resultBoard.textContent = result;
            scorePlayer = scorePlayer + 1;
            playerScoreboard.textContent = scorePlayer.toString();
            break;
        case (playerSelection == "Rock" && computerSelection == "Rock"):
            result = "Draw!";
            resultBoard.textContent = result;
            break;
        case (playerSelection == "Rock" && computerSelection == "Paper"):
            result = "You lose! Paper beats Rock!";
            resultBoard.textContent = result;
            scoreComputer = scoreComputer + 1;
            computerScoreboard.textContent = scoreComputer.toString();
            break;
        case (playerSelection == "Paper" && computerSelection == "Rock"):
            result = "You win! Paper beats Rock!";
            resultBoard.textContent = result;
            scorePlayer = scorePlayer + 1;
            playerScoreboard.textContent = scorePlayer.toString();
            break;
        case (playerSelection == "Paper" && computerSelection == "Paper"):
            result = "Draw!";
            resultBoard.textContent = result;
            break;
        case (playerSelection == "Paper" && computerSelection == "Scissors"):
            result = "You lose! Scissors beats Paper!";
            resultBoard.textContent = result;
            scoreComputer = scoreComputer + 1;
            computerScoreboard.textContent = scoreComputer.toString();
            break;
        case (playerSelection == "Scissors" && computerSelection == "Paper"):
            result = "You win! Scissors beats Paper!";
            resultBoard.textContent = result;
            scorePlayer = scorePlayer + 1;
            playerScoreboard.textContent = scorePlayer.toString();
            break;
        case (playerSelection == "Scissors" && computerSelection == "Scissors"):
            result = "Draw!";
            resultBoard.textContent = result;
            break;
        case (playerSelection == "Scissors" && computerSelection == "Rock"):
            result = "You lose! Rock beats Scissors!";
            resultBoard.textContent = result;
            scoreComputer = scoreComputer + 1;
            computerScoreboard.textContent = scoreComputer.toString();
            break;
        default:
            result = "Illegal play!";
    }
}

// Calculate leading score
function whoLeading () {
    if (scorePlayer > scoreComputer) {
        topScore = scorePlayer;
    } else if (scorePlayer == scoreComputer) {
        topScore = scorePlayer;
    } else {
        topScore = scoreComputer;
    }
}

function announceWinner () {
    if (scorePlayer > scoreComputer) {
        result = "You won the game!";
        resultBoard.textContent = result;
    } else {
        result = "You lost the game!";
        resultBoard.textContent = result;
    }
    scorePlayer = 0;
    scoreComputer = 0;
    topScore = 0;
    gameEnded = true;
}