function getComputerChoice() {
	let random = (Math.random() * 2).toFixed(0);
	let computerHand = ['rock', 'paper', 'scissors'];
	return computerHand[random];
};

function playRound(playerSelection, computerSelection) {
	playerSelection = clickedButton;
	computerSelection = getComputerChoice();
	let win = 'You win!';
	let lose = 'You lose!';
	let draw = 'It\'s a draw!';
	if (playerSelection === computerSelection) {
		return `${draw} Your opponent choose ${computerSelection}!`;
	}
	else if (
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'paper' && computerSelection === 'rock') ||
		(playerSelection === 'scissors' && computerSelection === 'paper')) {
		return `${win} Your opponent choose ${computerSelection}!`;
	}
	else {
		return `${lose} Your opponent choose ${computerSelection}!`;
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

const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
const bgPlayer = document.querySelector('.bg-player');
let clickedButton;

btnRock.addEventListener('click', () => {
	clickedButton = 'rock';
	bgPlayer.textContent = '✊';
	playRound();
	}
);

btnPaper.addEventListener('click', () => {
	clickedButton = 'paper';
	bgPlayer.textContent = '✋';
	playRound();
	}
);

btnScissors.addEventListener('click', () => {
	clickedButton = 'scissors';
	bgPlayer.textContent = '✌';
	playRound();
	}
);