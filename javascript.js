const btnList = document.querySelectorAll('button');
const playBtn = document.querySelector("#playbtn");
const container = document.querySelector("#container");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const resultCont = document.querySelector("#resultcont");
const scoreCont = document.querySelector("#scorecont");
const verdictCont = document.querySelector("#verditcont");


// function for computer choice
function getComputerChoice(){
    return Math.floor(Math.random()*3);
}


// function for player choice
function getPlayerChoice(playerChoice){
   
    if(playerChoice === "rock"){
        return 0;
    }
    else if(playerChoice === "paper"){
        return 1;
    }
    else if(playerChoice === "scissors"){
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

function startGame(playerChoice){
    let playerScore = 0;
    let computerScore = 0;
    let win = 0;
    
    win = result(getComputerChoice(), getPlayerChoice(playerChoice));
    
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
    }

    console.log(`Round 1: player score:${playerScore} | computer score:${computerScore}`);
    scoreCont.textContent = `Round 1: player score:${playerScore} | computer score:${computerScore}`;
    console.log("______________________________________________")

    if(win === 6){
    console.log("Reload the site");
    }
    else{
    
        if(playerScore > computerScore)
        {
            verdictCont.textContent = `You Win!`;
            console.log("You Win!")
        }
        else if(playerScore < computerScore)
        {
            verdictCont.textContent = `You Lose`;
            console.log("You Lose")
        }
        else if(playerScore == computerScore)
        {   
            verdictCont.textContent = `Tie`;
            console.log("Tie")
        }
    }
}
//UI

btnList.forEach(bt => {
    bt.addEventListener("mouseover", () => {bt.style.backgroundColor = "blue"});
    bt.addEventListener("mouseout", () => {bt.style.backgroundColor = "black"});
})


container.style.display = "none";

//making the button appear and start of game
function start(){

    container.style.display = "block";
    rock.addEventListener("click", () => startGame("rock"));
    paper.addEventListener("click", () => startGame("paper"));
    scissors.addEventListener("click", () => startGame("scissors"));

    
}




playBtn.addEventListener("click", start);



