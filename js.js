
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
}
getHumanChoice()