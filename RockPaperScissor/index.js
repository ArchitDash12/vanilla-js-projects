const choices = ["rock", "paper", "scissors"];
const signs = document.getElementById("signs");
let myChoice= "";
let playerOutput= "";
let computerOutput= "";
let output= "";

signs.addEventListener("click", event => {
    playerOutput.textContent= "", computerOutput.textContent= "", output.textContent= "";
    const firstChild= signs.firstElementChild;
    if(event.target === signs.firstElementChild){
        myChoice= choices[0];
    }
    else if(event.target === firstChild.nextElementSibling){
        myChoice= choices[1];
    }
    else if(event.target === signs.lastElementChild){
        myChoice= choices[2];
    }
    else{
        return;
    }

    playGame(myChoice);
});

let myScore=0;
let computerScore=0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === choices[2])? "YOU WIN!": "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === choices[0])? "YOU WIN!": "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === choices[1])? "YOU WIN!": "YOU LOSE!";
                break;
        }
    }

    playerOutput = document.getElementById("playerOutput").textContent = `Player: ${playerChoice}`;
    computerOutput = document.getElementById("computerOutput").textContent = `Computer: ${computerChoice}`;


    output= document.getElementById("result");
    output.textContent= result;
    if(result === "YOU WIN!"){
        myScore ++;
        output.style.color = "green";
    }
    else if(result === "YOU LOSE!"){
        computerScore++;
        output.style.color = "red";
    }
    else{
        output.style.color = "yellow";
    }

    let yourScore = document.getElementById("yourScore").textContent = `Player Score: ${myScore}`;
    let compScore = document.getElementById("compScore").textContent = `Computer Score: ${computerScore}`;
    

}