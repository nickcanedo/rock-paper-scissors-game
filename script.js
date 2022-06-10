// ROCK, PAPER, SCISSORS GAME BY NICOLAS REBOLLO

// ALGORITHM:

/* 

Make a computerPlay function that does the following:
    Make computer choose a random number between 1 and 3
    Assign that number to either (1) Rock, (2) Paper, (3) Scissors
    Return computer's choice (make sure to turn to lowercase with .toLowerCase() method)

Make a rpsRound function that plays one round of RPS and does the following:
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