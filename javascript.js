const btnList = document.querySelectorAll('button');
const playBtn = document.querySelector("#playbtn");
const restartBtn = document.querySelector("#restartbtn");
const container = document.querySelector("#container");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const scoreCont = document.querySelector("#scorecont");
const verdictCont = document.querySelector("#verdictcont");


let playerScore = 0;
let computerScore = 0;
let round = 0;

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
    
    let win = 0;
    verdictCont.textContent = "";
    
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

    ++round;
    scoreCont.textContent = `Round ${round}: player score:${playerScore} | computer score:${computerScore}`;
    

    
    if(round === 5){
        if(playerScore > computerScore)
        {
            verdictCont.textContent = `Congratulation You Win!`;
            round = 0;
            playerScore = 0;
            computerScore = 0;
            
        }
        else if(playerScore < computerScore)
        {   
            verdictCont.textContent = `You Lose!`;
            round = 0;
            playerScore = 0;
            computerScore = 0;
        
        }   
        else if(playerScore == computerScore)
        {   
            verdictCont.textContent = `Tie!`;
            round = 0;
            playerScore = 0;
            computerScore = 0;
            
        }
    }

}
//UI

btnList.forEach(bt => {
    bt.addEventListener("mouseover", () => {bt.style.backgroundColor = "blue"});
    bt.addEventListener("mouseout", () => {bt.style.backgroundColor = "black"});
})


playBtn.style.display = "block"
container.style.display = "none";

//making the button appear and start of game
function start(){
    round = 0;
    playerScore = 0;
    computerScore = 0;
    container.style.display = "block";
    rock.addEventListener("click", () => startGame("rock"));
    paper.addEventListener("click", () => startGame("paper"));
    scissors.addEventListener("click", () => startGame("scissors"));
    playBtn.style.display = "none"
    container.style.display= "flex";
    container.style.justifyContent= "center";
    container.style.gap= "10px";
}

playBtn.addEventListener("click", start);
restartBtn.addEventListener("click", () => {
    round = 0;
    playerScore = 0;
    computerScore = 0;
    verdictCont.textContent = "";
    scoreCont.textContent = "";});



