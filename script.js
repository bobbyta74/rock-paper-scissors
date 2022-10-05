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
    }
}
