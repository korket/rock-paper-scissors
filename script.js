function getComputerChoice() {
    let random = (Math.random()*2+1).toFixed(0);
    let computerHand;
    if (random == 1) {
        computerHand = 'Rock';
    }
    else if (random == 2) {
        computerHand = 'Paper';
    }
    else {
        computerHand = 'Scissors';
    }
    return computerHand;
};

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt().toLowerCase();
    computerSelection = getComputerChoice();
    let win = 'You win!';
    let lose = 'You lose!';
    let draw = 'It\'s a draw!';

    if (playerSelection == 'rock' && computerSelection == 'Rock') {
        return `${draw} Your opponent choose ${computerSelection}!`;
    }
    else if (playerSelection == 'rock' && computerSelection == 'Paper') {
        return `${lose} Your opponent choose ${computerSelection}!`;
    }
    else if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        return `${win} Your opponent choose ${computerSelection}!`;
    }

    else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        return `${win} Your opponent choose ${computerSelection}!`;
    }
    else if (playerSelection == 'paper' && computerSelection == 'Paper') {
        return `${draw} Your opponent choose ${computerSelection}!`;
    }
    else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        return `${lose} Your opponent choose ${computerSelection}!`;
    }

    else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
        return `${lose} Your opponent choose ${computerSelection}!`;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        return `${win} Your opponent choose ${computerSelection}!`;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'Scissors') {
        return `${draw} Your opponent choose ${computerSelection}!`;
    };
};


function game() {
    let result;
    let score;
    let winScore = 0;
    let loseScore = 0;
    let drawScore = 0;

    for (i = 0; i < 5; i++) {
        result = playRound();
        score = String(result);
        console.log(result);
        if (score.includes('win')) {
            winScore++;
        }
        else if (score.includes('lose')) {
            loseScore++;
        }
        else if (score.includes('draw')) {
            drawScore++;
        };
    };
    
    if (winScore > loseScore) {
        console.log(`You win with a score of ${winScore} wins and ${loseScore} loses`);
    }
    else if (loseScore > winScore) {
        console.log(`You lose with a score of ${winScore} wins and ${loseScore} loses`);
    }
    else if (drawScore === 5 || winScore === loseScore) {
        console.log(`It's shockingly a draw!`);
    };
};