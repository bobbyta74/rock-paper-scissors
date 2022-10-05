function getComputerChoice () {
    const rps = ["rock", "paper", "scissors"];
    let randomindex = 0;
    while (randomindex === 0) {
        randomindex = Math.floor(Math.random() * 4);
    }
    return rps[randomindex - 1];
}