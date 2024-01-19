function getRandom() {
    return Math.floor(Math.random() * 3)
}

function getComputerChoice(){
    let choice = getRandom();
    switch(choice){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playGame(playerChoice, compChoice) {
    playerChoice = playerChoice.toLowerCase();

    if(playerChoice === compChoice) {
        console.log('Tie! Go agane!');
        return playGame(playerChoice, getComputerChoice());
    }
    else if(playerChoice === 'rock' && compChoice === 'paper') {
        return 'You lose! Paper beats Rock!';
    }
    else if(playerChoice === 'rock' && compChoice === 'scissors') {
        return 'You win! Rock beats Scissors!';
    }
    else if(playerChoice === 'scissors' && compChoice === 'paper') {
        return 'You win! Scissors beats Paper!';
    }
    else if(playerChoice === 'scissors' && compChoice === 'rock') {
        return 'You lose! Rock beats Scissors!';
    }
    else if(playerChoice === 'paper' && compChoice === 'scissors') {
        return 'You lose! Scissors beats Paper!';
    }else {
        return 'You Win! Paper beats Rock!';
    }
}

function game() {
    for(let i = 0; i < 5; i++){
        const playerChoice = prompt("Rock, Paper, or Scissors?");
        const compChoice = getComputerChoice();

        console.log(playGame(playerChoice, compChoice))
    }
}

game();

