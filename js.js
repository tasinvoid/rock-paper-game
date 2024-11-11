let humanScore =0,computerScore = 0;
function getComputerChoice(){
    let randomNmber = Math.floor((Math.random()*3)+1)
    let computerChoice
    switch (randomNmber) {
        case 1:
            computerChoice = "ROCK";
            break;
        case 2:
            computerChoice = "PAPER";
            break;
        case 3:
            computerChoice = "SCISSORS";
            break;
    }
    return computerChoice
    
}
function getHumanChoice(){
    let humanChoice = prompt("Choose rock or paper or scissors").toUpperCase();
    return humanChoice;
}
function playRound(humanChoice,computerChoice){
    if(humanChoice == computerChoice){
        console.log("it's a draw")
    }
    else if(humanChoice == "ROCK" && computerChoice == "PAPER"){
        console.log("computerChoice =PAPER ,computer win")
        computerScore++
    }
    else if(humanChoice == "PAPER" && computerChoice == "SCISSORS"){
        console.log("computerChoice =SCISSORS ,computer win")
        computerScore++

    }
    else if(humanChoice == "SCISSORS" && computerChoice == "ROCK"){
        console.log("computerChoice =ROCK ,computer win")
        computerScore++

    }
    else{
        console.log("you win");
        humanScore++
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);