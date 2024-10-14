// tracking the score
let humanScore = 0;
let computerScore = 0;
const CHOICES = ["paper", "rock", "scissors"];

// Function to randomly select the computers choice (rock, paper or Scissors)
const getComputerChoice = () => {
  // generate a random index between 0 and 2 to select a choice
  const randomNumber = Math.floor(Math.random() * 3);
  console.log(CHOICES[randomNumber]);
  return CHOICES[randomNumber];
};

// Function to get hummans choice by prompt (rock, paper or scissors)
const getHumanChoice = () => {
  return window.prompt("Enter your choice");
};

// logic to play a single round
const playRound = (humanChoice, computerChoice) => {
  let humanChoiceLowerCase = humanChoice.toLowerCase();
  let humanChoiceIndex = CHOICES.indexOf(humanChoiceLowerCase);
  let computerChoiceIndex = CHOICES.indexOf(computerChoice);
  // win the last index instead of 1st index
  // win the smaller index
  // tie if both index are same
  if (humanChoiceIndex == 0 && computerChoiceIndex == CHOICES.length - 1) {
    console.log(`You Lose!  ${computerChoice} beats ${humanChoiceLowerCase}`);
    return ++computerScore;
  } else if (
    humanChoiceIndex == CHOICES.length - 1 &&
    computerChoiceIndex == 0
  ) {
    console.log(`You Win!  ${computerChoice} beats ${humanChoiceLowerCase}`);
    return ++humanScore;
  } else if (humanChoiceIndex < computerChoiceIndex) {
    console.log(`You Win!  ${computerChoice} beats ${humanChoiceLowerCase}`);
    return ++humanScore;
  } else if (humanChoiceIndex > computerChoiceIndex) {
    console.log(`You Lose!  ${computerChoice} beats ${humanChoiceLowerCase}`);
    return ++computerScore;
  } else {
    console.log("tie");
    return;
  }
};

//playRound(humanSelection, computerSelection);

const playGame = (round) => {
  let i = 0;
  while (i < round) {
    playRound(getHumanChoice(), getComputerChoice());
    i++;
  }

  let result = "";
  humanScore === computerScore && (result = "Tie");
  humanScore > computerScore && (result = "Finally You are winner");
  humanScore < computerScore && (result = "Finally You lose! try again later");
  return result;
};
console.log(playGame(5));
console.log("scor=", humanScore, computerScore);
