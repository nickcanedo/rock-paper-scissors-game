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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let tieMessage = `You both chose ${playerSelection} and tied!`;
    let winMessage = `You chose ${playerSelection} and beat the computer, who chose ${computerSelection}!`;
    let loseMessage = `You chose ${playerSelection} and lost to the computer, who chose ${computerSelection}`;
    let errorMessage = "You must choose either Rock, Paper, or Scissors."
    if (playerSelection === computerSelection) {
        return tieMessage;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return winMessage;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return loseMessage;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return loseMessage;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return winMessage;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return winMessage;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return loseMessage;
    } else {
        return errorMessage;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 5 && computerScore < 5) {
        let playerSelection;
        while (typeof(playerSelection) != "string") {
            if (playerSelection == "null") {
                playerSelection = "q";
            } else {
                playerSelection = prompt("Enter one of the following options (Rock, Paper, or Scissors):").toLowerCase();
            }
        }
        if (playerSelection === "q") {
            return;
        }
        let computerSelection = computerPlay();
        let roundOutcome = playRound(playerSelection, computerSelection);
        if (roundOutcome === `You both chose ${playerSelection} and tied!`) {
            console.log(`Player ${playerScore} - ${computerScore} Computer`);
        } else if (roundOutcome === `You chose ${playerSelection} and beat the computer, who chose ${computerSelection}!`) {
            playerScore += 1;
            console.log(`Player ${playerScore} - ${computerScore} Computer`);
        } else if (roundOutcome === `You chose ${playerSelection} and lost to the computer, who chose ${computerSelection}`) {
            computerScore += 1;
            console.log(`Player ${playerScore} - ${computerScore} Computer`);
        }
    }
    let gameWinner;
    if (playerScore > computerScore) {
        gameWinner = "Player";
    } else if (playerScore < computerScore) {
        gameWinner = "Computer";
    } else {
        gameWinner = "Tie";
    }
    if (gameWinner == "Player") {
        console.log(`Congratulations! You have beat the computer with a score of ${playerScore} - ${computerScore}`);
    } else if (gameWinner == "Computer")  {
        console.log(`Better luck next time! You have lost to the computer with a score of ${playerScore} - ${computerScore}`);
    }
}