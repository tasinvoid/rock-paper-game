let humanScore = 0,
  computerScore = 0,
  round = 0;
let humanScoreDisplay = document.getElementById("humanScoreDisplay");
let computerScoreDisplay = document.getElementById("computerScoreDisplay");
let roundDisplay = document.getElementById("roundDisplay");
let scoreBoard = document.getElementById("score-board");

function showResults() {
  humanScoreDisplay.innerText = humanScore;
  computerScoreDisplay.innerText = computerScore;
  roundDisplay.innerText = ++round;
  if (round == 5) {
    let finishMsg = document.createElement("div");
    if (humanScore > computerScore) {
      finishMsg.innerText = "You Won";
    } else if (humanScore < computerScore) {
      finishMsg.innerText = "Computer Won";
    } else {
      finishMsg.innerText = "Its a draw";
    }
    scoreBoard.innerHTML = "";
    scoreBoard.appendChild(finishMsg);
  }
}
//human choice buttons
let buttons = document.getElementById("buttons");
buttons.addEventListener("click", (e) => {
  let key = e.target.innerText;

  switch (key) {
    case "Rock":
      playRound("ROCK", computerSelection());
      showResults();
      break;
    case "Paper":
      playRound("PAPER", computerSelection());
      showResults();
      break;
    case "Scissors":
      playRound("SCISSORS", computerSelection());
      showResults();
      break;
  }

  console.log(humanScore);
  console.log(computerScore);
});

let computerSelection = function () {
  let randomNmber = Math.floor(Math.random() * 3 + 1);
  let computerChoice;
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
  return computerChoice;
};

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("it's a draw");
  } else if (humanChoice == "ROCK" && computerChoice == "PAPER") {
    console.log("computerChoice =PAPER humanChoice = ROCK,computer win");
    computerScore++;
  } else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
    console.log("computerChoice =SCISSORS humanChoice =PAPER,computer win");
    computerScore++;
  } else if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
    console.log("computerChoice =ROCK humanChoice =SCISSORS,computer win");
    computerScore++;
  } else {
    console.log("you win");
    humanScore++;
  }
}
