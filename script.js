// Function to randomly select the computers choice (rock, paper or Scissors)
const getComputerChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  // generate a random index between 0 and 2 to select a choice
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};
console.log(getComputerChoice());

// Function to get hummans choice by prompt (rock, paper or scissors)

const getHumanChoice = () => {
  let humanChoice = window.prompt("Enter your choice");
  console.log(humanChoice);
};
console.log(getHumanChoice());
