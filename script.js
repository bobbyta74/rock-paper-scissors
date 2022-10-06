function getComputerChoice () {
    const rps = ["rock", "paper", "scissors"];
    let randomindex = 0;
    while (randomindex === 0) {
        randomindex = Math.floor(Math.random() * 4);
    }
    return rps[randomindex - 1];
}

function getPlayerChoice () {
    let userinput = "nothing";
    while (userinput != "rock" && userinput != "paper" && userinput != "scissors") {
        userinput = prompt("Enter rock, paper or scissors");
        userinput.toLowerCase();
    }
    return userinput;
}

function playRound(playerSelection, computerSelection) {
    const playerwinsr = playerSelection == "rock" && computerSelection == "scissors";
    const playerwinsp = playerSelection == "paper" && computerSelection == "rock";
    const playerwinss = playerSelection == "scissors" && computerSelection == "paper";
    if (playerwinsr || playerwinsp || playerwinss) {
        return "You win! \n" + playerSelection + " beats " + computerSelection; 
    } else {
        return "You lose! \n" + computerSelection + " beats " + playerSelection; 
    }
}

function game() {
    for (let i=0;i<5;i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
}

game();
