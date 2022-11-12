const resultsdisplay = document.querySelector("#results");
const playerscore = document.querySelector("#pscore");
const cpuscore = document.querySelector("#cscore");
const winner = document.querySelector("#winner");
//FUNCTIONS

//Random rock, paper or scissors
function getComputerChoice () {
    const rps = ["rock", "paper", "scissors"];
    let randomindex = 0;
    while (randomindex === 0) {
        randomindex = Math.floor(Math.random() * 4);
    }
    return rps[randomindex - 1];
}

let pscore = 0;
let cscore = 0;

//Displays scores and shows winner
function declarewinner() {
    if (pscore == 5) {
        winner.textContent = "Player wins!";
        pscore = 0;
        cscore = 0;
    } else if (cscore == 5) {
        winner.textContent = "Computer wins!";
        pscore = 0;
        cscore = 0;

    }
    playerscore.textContent = pscore;
    cpuscore.textContent = cscore;
}

//Plays round using input and random computer choice
function playRound(playerSelection, computerSelection) {
    const playerwinsr = playerSelection == "rock" && computerSelection == "scissors";
    const playerwinsp = playerSelection == "paper" && computerSelection == "rock";
    const playerwinss = playerSelection == "scissors" && computerSelection == "paper";
    let results;
    if (playerwinsr || playerwinsp || playerwinss) {
        results = "You win! \n" + playerSelection + " beats " + computerSelection; 
        pscore += 1;
    } else if (playerSelection == computerSelection) {
        results = "Draw!";
    } else {
        results = "You lose! \n" + computerSelection + " beats " + playerSelection;
        cscore += 1;
    }
    resultsdisplay.textContent = results;
    declarewinner()
}

//EVENT LISTENERS
const btns = document.querySelectorAll("button");
console.log(btns);

for (let i of btns) {
    i.addEventListener("click", function () {
        let playerchoice = i.getAttribute("id");
        console.log(playRound(playerchoice, getComputerChoice()));
    })
}