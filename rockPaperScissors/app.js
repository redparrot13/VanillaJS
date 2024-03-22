const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDisplay = document.getElementById('result');

let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

let currentRound = 1;
const totalRounds = 5;
const roundDisplay = document.getElementById('round');

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

function playRound(playerChoice) {
    if (currentRound <= totalRounds) {
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        //determine the winner, update resultDisplay

        if (playerChoice === computerChoice) {
            resultDisplay.textContent = 'It\'s a draw!';

        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            resultDisplay.textContent = 'You win!';
            playerScore++;
        } else {
            resultDisplay.textContent = 'Computer wins!';
            computerScore++;
        }

        // test for the logic  console.log(computerChoice, playerChoice);
        playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

        roundDisplay.textContent = `Round ${currentRound} of ${totalRounds}`;
        currentRound++
    }
    if (currentRound > totalRounds) {
        concludeGame();
    }
}


function concludeGame() {
    let finalResult = '';
    if(playerScore > computerScore) {
        finalResult = 'Congratulations, you win the game!';
    } else if  (playerScore < computerScore) {
        finalResult = 'Game over, the computer has won';

    } else {
        finalResult = 'The game has ended, its a draw.';
    }
    resultDisplay.textContent = finalResult;
}



