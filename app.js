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
    const result = document.querySelector('.result');


    if(playerChoice === compChoice) {
        return result.textContent = 'Tie!';
    }
    else if(playerChoice === 'rock' && compChoice === 'paper') {
        return result.textContent = 'You lose! Paper beats Rock!';
    }
    else if(playerChoice === 'rock' && compChoice === 'scissors') {
        return result.textContent = 'You win! Rock beats Scissors!';
    }
    else if(playerChoice === 'scissors' && compChoice === 'paper') {
        return result.textContent = 'You win! Scissors beats Paper!';
    }
    else if(playerChoice === 'scissors' && compChoice === 'rock') {
        return result.textContent = 'You lose! Rock beats Scissors!';
    }
    else if(playerChoice === 'paper' && compChoice === 'scissors') {
        return result.textContent = 'You lose! Scissors beats Paper!';
    }else {
        return result.textContent = 'You Win! Paper beats Rock!';
    }
}


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const compChoice = getComputerChoice();
        console.log(playerChoice, compChoice)
        playGame(playerChoice, compChoice);
    })
})

// game();

