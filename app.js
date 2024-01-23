const result = document.querySelector('.result');
const pScore = document.querySelector('.playerScore');
const cScore = document.querySelector('.computerScore');
let playerScore = 0;
let computerScore = 0;

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

    if(playerChoice === compChoice) {
        return result.textContent = 'Tie!';
    }
    else if(playerChoice === 'rock' && compChoice === 'paper') {
        computerScore++;
        cScore.textContent = `Computer: ${computerScore}`;
        return result.textContent = 'You lose! Paper beats Rock!';
    }
    else if(playerChoice === 'rock' && compChoice === 'scissors') {
        playerScore++;
        pScore.textContent = `Player: ${playerScore}`;
        return result.textContent = 'You win! Rock beats Scissors!';
    }
    else if(playerChoice === 'scissors' && compChoice === 'paper') {
        playerScore++;
        pScore.textContent = `Player: ${playerScore}`;
        return result.textContent = 'You win! Scissors beats Paper!';
    }
    else if(playerChoice === 'scissors' && compChoice === 'rock') {
        computerScore++;
        cScore.textContent = `Computer: ${computerScore}`;
        return result.textContent = 'You lose! Rock beats Scissors!';
    }
    else if(playerChoice === 'paper' && compChoice === 'scissors') {
        computerScore++;
        cScore.textContent = `Computer: ${computerScore}`;
        return result.textContent = 'You lose! Scissors beats Paper!';
    }else {
        playerScore++;
        pScore.textContent = `Player: ${playerScore}`;
        return result.textContent = 'You Win! Paper beats Rock!';
    }
}


const buttons = document.querySelectorAll('.choice');
const winnerDiv = document.querySelector('.winner');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const compChoice = getComputerChoice();
        console.log(playerChoice, compChoice)
        playGame(playerChoice, compChoice);

        // Determine winner
        if(playerScore == 5 || computerScore == 5) {
            buttons.forEach((button) => {
                button.disabled = true;
            })
            
            winnerDiv.textContent = (playerScore == 5 ? 'Player wins!' : 'Computer wins!');
        }
    })
})

const reset = document.querySelector('.reset');

reset.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;

    buttons.forEach(button => {
        button.disabled = false;
    });

    result.textContent = '';
    pScore.textContent = 'Player: 0';
    cScore.textContent = 'Computer: 0';
    winnerDiv.textContent = '';

})

// game();

