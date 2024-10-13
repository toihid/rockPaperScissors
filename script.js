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
  let humanChoice = window.prompt("Enter your choice");
  return humanChoice;
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

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

// define the total round of play and publish the final result
const playGame = (round) => {
  let i = 0;
  while (i < round) {
    playRound(getHumanChoice(), getComputerChoice());
    i++;
    console.log(
      "Score:",
      "You got:",
      humanScore,
      "Computer got:",
      computerScore
    );
  }
  return (winner =
    humanScore === computerScore
      ? "Finally, Tie"
      : humanScore > computerScore
      ? "Finally, You are winner"
      : "Finally, You lose! try again later");
};
console.log(playGame(5));
