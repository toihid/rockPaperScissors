// Logic to get the computer logic
const getComputerChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  // generate random integer form 0 to 2
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};
console.log(getComputerChoice());
