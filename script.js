
//Game variables
let humanScore = 0;
let computerScore = 0;
let canPlay = true;

//Text elements references
const resultsDiv = document.querySelector(".results");
const roundInfo = document.querySelector(".roundInfo");
const scoresInfo = document.querySelector(".scoresInfo");
const winnerInfo = document.querySelector(".winnerInfo");

//Game buttons event handlers
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
    playRound("rock");
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
    playRound("paper");
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
    playRound("scissors");
});

//Reset button event handler
const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
resetBtn.classList.add("reset");
resetBtn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    scoresInfo.textContent = `Your score: ${humanScore} - Computer score: ${computerScore}`;
    roundInfo.textContent = "We are gonna play until one of us reaches 5 points."
    winnerInfo.textContent = "";
    canPlay = true;

    resultsDiv.removeChild(resetBtn);
});

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);

    if (randomNumber < 33) {
        return "scissors";
    } else if(randomNumber < 66) {
        return "rock";
    } else {
        return "paper";
    }
}

function playRound (humanChoice) {
    if (!canPlay) return;
    let computerChoice = getComputerChoice();

    if ((humanChoice === "scissors" && computerChoice === "paper")
        || (humanChoice === "rock" && computerChoice === "scissors")
        || (humanChoice === "paper" && computerChoice === "rock")) {
        
            humanScore++;
            roundInfo.textContent = `You win this round, ${humanChoice} beats ${computerChoice}!`;
        } 
    else if ((computerChoice === "scissors" && humanChoice === "paper")
        || (computerChoice === "rock" && humanChoice === "scissors")
        || (computerChoice === "paper" && humanChoice === "rock")) {
        
            computerScore++;
            roundInfo.textContent = `You lose this round, ${computerChoice} beats ${humanChoice}!`;
        } 
    else {
        roundInfo.textContent = `Both chose ${humanChoice}, it's a tie!`;
    }

    scoresInfo.textContent = `Your score: ${humanScore} - Computer score: ${computerScore}`;

    if (humanScore === 5) {
        winnerInfo.textContent = `You've won, congratulations! Do you want to play again?`;
        displayReset();
    }
    if (computerScore === 5) {
        winnerInfo.textContent = `I've won, well played! Do you want to play again?`;
        displayReset();
    }
}

function displayReset() {
    resultsDiv.appendChild(resetBtn);
    canPlay = false;
}
