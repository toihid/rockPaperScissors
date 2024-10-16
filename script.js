// tracking the score
let humanScore = 0;
let computerScore = 0;
const CHOICES = ["paper", "rock", "scissors"];

// Function to randomly select the computers choice (rock, paper or Scissors)
const getComputerChoice = () => {
  // generate a random index between 0 and 2 to select a choice
  const randomNumber = Math.floor(Math.random() * 3);
  return CHOICES[randomNumber];
};

// Function to get hummans choice by prompt (rock, paper or scissors)
const getHumanChoice = () => {
  return window.prompt("Enter your choice");
};

// logic to play a single round
const playRound = (humanChoice, computerChoice) => {
  let humanChoiceLowerCase = humanChoice.toLowerCase();
  if (humanChoiceLowerCase === getComputerChoice()) {
    console.log("Tie");
    return;
  }

  // Rock beats Scissors, Paper beats Rock, Scissors beat Paper
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    return ++humanScore;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    return ++computerScore;
  }
};

// define the total round of play and publish the final result
const playGame = (round) => {
  let i = 0;
  while (i < round) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    i++;
    console.log(
      "Score:",
      "You got:",
      humanScore,
      "Computer got:",
      computerScore
    );
  }
  let result = "";
  humanScore === computerScore && (result = "Tie");
  humanScore > computerScore && (result = "Finally You are winner");
  humanScore < computerScore && (result = "Finally You lose! try again later");
  return result;

  return result;
};
console.log(playGame(5));
