// function for computer choice
function getComputerChoice(){
    return Math.floor(Math.random()*3);
}


// function for player choice
function getPlayerChoice(){
    let playerChoice = prompt("Choose between Rock(0), Paper(1), scissors(2)")

    if(playerChoice === "rock" || playerChoice === "Rock" || playerChoice === "ROCK" || playerChoice === "0"){
        return 0;
    }
    if(playerChoice === "paper" || playerChoice === "Paper" || playerChoice === "PAPER" || playerChoice ==="1"){
        return 1;
    }
    if(playerChoice === "scissors" || playerChoice === "Scissors" || playerChoice === "SCISSORS" || playerChoice === "2"){
        return 2;
    }
}


// result function 
function result(computer, player){
    if((computer == 0 && player == 2) || (computer == 1 && player == 0) || (computer == 2 && player == 1)){
        return 0;
    }
    if((computer == 2 && player == 0) || (computer == 0 && player == 1) || (computer == 1 && player == 2)){
        return 1;
    }
    if(computer == player){
        return 10;
    }
}

// start game 
let playerScore = 0;
let computerScore = 0;
let win = 0;
for(let i = 0; i < 5; i++){

    win = result(getComputerChoice(), getPlayerChoice());
    
    if(win == 0){
        computerScore++;
    }
    else if(win == 1){
        playerScore++;
    }
    else if(win == 10){
        playerScore++;
        computerScore++;
    }
    else{
        win = 6;
        break;
    }

    console.log(`Round ${i+1}: player score:${playerScore} | computer score:${computerScore}`)
    console.log("______________________________________________")
}

if(win === 6){
   console.log("Reload the site");
}
else{
    
    if(playerScore > computerScore)
    {
        console.log("You Win!")
    }
    if(playerScore < computerScore)
    {
        console.log("You Lose")
    }
    if(playerScore == computerScore)
    {
        console.log("Tie")
    }
}

