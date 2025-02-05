
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

function getHumanChoice() {
    let userChoice = prompt("Choose: Rock, Paper or Scissors?");
    
    userChoice = userChoice.toLowerCase();

    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        console.log("That's not an option!");
        return null;
    }

    return userChoice;
}

function playGame() {
    console.log("Hello, we will play rock paper scissors")

    let humanScore = 0;
    let computerScore = 0;
    let humanSelection, computerSelection;

    function playRound (humanChoice, computerChoice) {
        if ((humanChoice === "scissors" && computerChoice === "paper")
            || (humanChoice === "rock" && computerChoice === "scissors")
            || (humanChoice === "paper" && computerChoice === "rock")) {
            
                humanScore++;
                console.log(`You win this round, ${humanChoice} beats ${computerChoice}!`);
        } else if ((computerChoice === "scissors" && humanChoice === "paper")
            || (computerChoice === "rock" && humanChoice === "scissors")
            || (computerChoice === "paper" && humanChoice === "rock")) {
            
                computerScore++;
                console.log(`You lose this round, ${computerChoice} beats ${humanChoice}!`);
        } else {
            console.log(`Both chose ${humanChoice}, it's a tie!`);
        }
    }

    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        if(humanSelection === null) continue;

        playRound(humanSelection, computerSelection);
    }
    
    console.log(`These are the final scores:
                 Your score: ${humanScore}.
                 My score: ${computerScore}.`)

    if (humanScore > computerScore) {
        console.log("You won!");
    } else if (computerScore > humanScore) {
        console.log("I won!");
    } else {
        console.log("It's a tie!")
    }
}

console.log("Hi, to play Rock Paper Scissors with me type \'playGame();\'");
