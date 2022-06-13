// ROCK, PAPER, SCISSORS GAME BY NICOLAS REBOLLO

// ALGORITHM:

/* 

Make a computerPlay function that does the following:
    Make computer choose a random number between 1 and 3
    Assign that number to either (1) Rock, (2) Paper, (3) Scissors
    Return computer's choice (make sure to turn to lowercase with .toLowerCase() method)

Make a playRound function that plays one round of RPS and does the following:
    Ask user to input an option (rock, paper, or scissors)
    Store player's choice (make sure to turn to lowercase with .toLowerCase() method) in a variable called playerSelection
    Call computerPlay function and store returned choice in a computerSelection variable

    If playerSelection is the same as computerSelection:
        Tie
    Else if playerSelection is rock and computerSelection is scissors:
        Player wins
    Else if playerSelection is rock and computerSelection is paper:
        Player loses
    Else if playerSelection is paper and computerSelection is scissors:
        Player loses
    Else if playerSelection is paper and computerSelection is rock:
        Player wins
    Else if playerSelection is scissors and computerSelection is paper:
        Player wins
    Else if playerSelection is scissors and computerSelection is rock:
        Player loses
    Else (Input was not rock, paper, or scissors, i.e. error handling):
        Send error message "You must choose either Rock, Paper, or Scissors."

    NOTE: For ties, return string `You both chose ${playerSelection} and tied!`
    NOTE: For player wins, return string `You chose ${playerSelection} and beat the computer, who chose ${computerSelection}!`
    NOTE: For computer wins, return string `You chose ${playerSelection} and lost to the computer, who chose ${computerSelection}`

*/

function computerPlay() {
    const randInt = Math.floor(Math.random() * 3) + 1;
    let computerSelection;
    if (randInt === 1) { 
        computerSelection = "rock";
    } else if (randInt === 2) { 
        computerSelection = "paper";
    } else if (randInt === 3) { 
        computerSelection = "scissors";
    }
    return computerSelection;
}

const winnerPara = document.querySelector(".winner");
const winReasonPara = document.querySelector(".winReason");

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let tieMessage = `You both chose ${playerSelection}`;
    let winMessage = `${playerSelection[0].toUpperCase() + playerSelection.substring(1)} beats ${computerSelection}`;
    let loseMessage = `${computerSelection[0].toUpperCase() + computerSelection.substring(1)} beats ${playerSelection}`;
    let errorMessage = "You must choose either Rock, Paper, or Scissors."
    // looks at all possible cases
    if (playerSelection === computerSelection) {
        winnerPara.textContent = "Tie";
        winReasonPara.textContent = tieMessage;
        return tieMessage;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        winnerPara.textContent = "You win";
        winReasonPara.textContent = winMessage;
        return winMessage;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        winnerPara.textContent = "You lose";
        winReasonPara.textContent = loseMessage;
        return loseMessage;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        winnerPara.textContent = "You lose";
        winReasonPara.textContent = loseMessage;
        return loseMessage;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        winnerPara.textContent = "You win";
        winReasonPara.textContent = winMessage;
        return winMessage;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        winnerPara.textContent = "You win";
        winReasonPara.textContent = winMessage;
        return winMessage;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        winnerPara.textContent = "You lose";
        winReasonPara.textContent = loseMessage;
        return loseMessage;
    } else {
        winnerPara.textContent = "Error";
        winReasonPara.textContent = errorMessage;
        return errorMessage;
    }
}

// selecting certain elements to manipulate DOM with event listeners
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const buttons = document.querySelectorAll(".playerOptions");
const currentPlayer = document.querySelector("#playerChose");
const currentComputer = document.querySelector("#computerChose");
const playerScoreDiv = document.querySelector(".playerScore");
const computerScoreDiv = document.querySelector(".computerScore");
let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => button.addEventListener("click", function(e) {
    let playerSelection = e.target.id;
    if(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        // conditional statement for error handling when not clicking on one of 3 buttons
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        currentPlayer.innerHTML = e.target.innerHTML;
        // below here is dealing with keeping score and showing current round selections in top boxes
        if (computerSelection === "rock") {
            currentComputer.innerHTML = rockBtn.innerHTML;
            if (playerSelection === "paper") {
                playerScore += 1;
                playerScoreDiv.textContent = `PLAYER: ${playerScore}`;
            } else if (playerSelection === "scissors") {
                computerScore += 1
                computerScoreDiv.textContent = `COMPUTER: ${computerScore}`;
            }
        }

        else if (computerSelection === "paper") {
            currentComputer.innerHTML = paperBtn.innerHTML;
            if (playerSelection === "scissors") {
                playerScore += 1;
                playerScoreDiv.textContent = `PLAYER: ${playerScore}`;
            } else if (playerSelection === "rock") {
                computerScore += 1
                computerScoreDiv.textContent = `COMPUTER: ${computerScore}`;
            }
        }

        else if (computerSelection === "scissors") {
            currentComputer.innerHTML = scissorsBtn.innerHTML;
            if (playerSelection === "rock") {
                playerScore += 1;
                playerScoreDiv.textContent = `PLAYER: ${playerScore}`;
            } else if (playerSelection === "paper") {
                computerScore += 1
                computerScoreDiv.textContent = `COMPUTER: ${computerScore}`;
            }
        }

    } else return;
    // this checks when game is over and resets stats
    if (playerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        playerScoreDiv.textContent = `PLAYER: ${playerScore}`;
        computerScoreDiv.textContent = `COMPUTER: ${computerScore}`;
        location.href = './pages/playagainplayer.html';
    } else if (computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        playerScoreDiv.textContent = `PLAYER: ${playerScore}`;
        computerScoreDiv.textContent = `COMPUTER: ${computerScore}`;
        location.href = './pages/playagaincomputer.html';
    }
}));

//sets player score div text to 0 by default when opening page
window.addEventListener("load", function(e) {
    playerScoreDiv.textContent = `PLAYER: ${playerScore}`;
    computerScoreDiv.textContent = `COMPUTER: ${computerScore}`;
});

const githubIcon = document.querySelector(".fa-brands");
githubIcon.addEventListener('mouseover', function(e) {
    e.target.classList.add("fa-bounce")
});

githubIcon.addEventListener('mouseleave', function(e) {
    e.target.classList.remove("fa-bounce")
});

function addPlaying(e) {
    e.target.classList.add("playing");
} 

function removePlaying(e) {
    e.target.classList.remove("playing");
}

rockBtn.addEventListener("mouseover", addPlaying);
paperBtn.addEventListener("mouseover", addPlaying);
scissorsBtn.addEventListener("mouseover", addPlaying);

rockBtn.addEventListener("mouseleave", removePlaying);
paperBtn.addEventListener("mouseleave", removePlaying);
scissorsBtn.addEventListener("mouseleave", removePlaying);