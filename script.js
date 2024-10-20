const CHOICES = [
  { id: "rock", icon: `<i class="fas fa-hand-rock"></i>` },
  { id: "paper", icon: `<i class="fa-solid fa-hand"></i>` },
  { id: "scissors", icon: `<i class="fa-solid fa-hand-scissors"></i>` },
];
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
let winner = "";

// interface design
const container = document.querySelector("#container");
const pageTitle = document.querySelector("#page-title");
console.log(pageTitle);
pageTitle.setAttribute(
  "style",
  "text-align: center; colo: #000; font-size: 30px;"
);

const inputDiv = document.createElement("div");
inputDiv.classList.add("input-box");
// design for rock btn
const rockBtn = document.createElement("button");
rockBtn.setAttribute("id", "rock");
rockBtn.innerHTML = `<i class="fas fa-hand-rock"></i>`;
inputDiv.appendChild(rockBtn);

// design for Paper btn
const paperBtn = document.createElement("button");
paperBtn.setAttribute("id", "paper");
paperBtn.innerHTML = `<i class="fa-solid fa-hand"></i>`;
inputDiv.appendChild(paperBtn);

// design for Scissors btn
const scissorsBtn = document.createElement("button");
scissorsBtn.setAttribute("id", "scissors");
scissorsBtn.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`;
inputDiv.appendChild(scissorsBtn);

// append all inputs
container.appendChild(inputDiv);

// attach click events to add buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    appendInput(e.currentTarget.id, getComputerChoice());
  });
});

// design for loading actions
const processingDiv = document.createElement("div");
processingDiv.classList.add("processing", "d-none");
processingDiv.innerHTML = `<img src="asset/img/loading.png" />`;

// display inputs
const displayInputs = document.createElement("div");
displayInputs.id = "displayInputs";
displayInputs.classList.add("display-inputs");

container.appendChild(processingDiv);
container.appendChild(displayInputs);

const resultTable = document.createElement("table");
resultTable.id = "results";
const tHeadRow = document.createElement("tr");
tHeadRow.innerHTML =
  "<th>Round</th><th>Your score</th> <th>Computer  score</th> <th>Result</th> ";

resultTable.appendChild(tHeadRow);

container.appendChild(resultTable);

const getComputerChoice = () => {
  // generate a random index between 0 and 2 to select a choice
  const randomNumber = Math.floor(Math.random() * 3);
  return CHOICES[randomNumber].id;
};

const appendInput = (humanInput, computerInput) => {
  const disPlayInputs = document.getElementById("displayInputs");
  disPlayInputs.innerHTML = "";

  // display inputs
  const humanInputDiv = setInput(humanInput, "Your input");
  const computerInputDiv = setInput(computerInput, "Computer input");
  processingDiv.classList.remove("d-none");
  setTimeout(() => {
    processingDiv.classList.add("d-none");
    disPlayInputs.appendChild(humanInputDiv);
    disPlayInputs.appendChild(computerInputDiv);
    playRound(humanInput, computerInput);
  }, 2000);
};

const setInput = (input, title) => {
  // display human input
  const inputDiv = document.createElement("div");
  inputDiv.classList.add("input");

  const inputTitle = document.createElement("h3");
  inputTitle.textContent = title;
  inputDiv.appendChild(inputTitle);
  const inputIcon = document.createElement("div");
  inputIcon.innerHTML = CHOICES.find((choice) => choice.id === input)?.icon;
  inputDiv.appendChild(inputIcon);
  return inputDiv;
};

// logic to play a single round
const playRound = (humanChoice, computerChoice) => {
  roundCount++;
  let message = "";

  if (humanChoice === computerChoice) {
    console.log("tie2222");
    message = `You Tie!`;
  } else {
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      ++humanScore;
      message = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
      ++computerScore;
      message = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
  }
  const resultTr = document.createElement("tr");
  resultTr.innerHTML = `<td>${roundCount}</td><td>${humanScore}</td><td>${computerScore}</td><td>${message}</td>`;
  resultTable.appendChild(resultTr);

  if (roundCount == 5) {
    humanScore === computerScore && (winner = "Tie");
    humanScore > computerScore && (winner = "You are the winner");
    humanScore < computerScore && (winner = "Computer is the winner");
    const finalResultTr = document.createElement("tr");
    finalResultTr.classList.add("result-row");
    finalResultTr.innerHTML = `<td colspan="3">The final result</td colspan="1"><td>${winner}</td>`;
    resultTable.appendChild(finalResultTr);
  }
};
