// button selectors

const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');

// battleground selectors

const bgPlayer = document.querySelector('.bg-player');
const bgComputer = document.querySelector('.bg-computer');
const history1 = document.querySelector('.history-1 p');
const history2 = document.querySelector('.history-2 p');
const history3 = document.querySelector('.history-3 p');
const history4 = document.querySelector('.history-4 p');
let newResult;
let lastResult;
let clickedButton;

btnRock.addEventListener('click', () => {
	clickedButton = 'rock';
	bgPlayer.textContent = '✊';

	newResult = `✊🗙${playRound()}`;
	bgResults = [];
	bgResults.push(newResult);
	if (bgResults.length === 4) {
		bgResults.splice(0,1);
	};
	
	historyArray = [];
	historyArray.push(bgResults[0]);
	history1.textContent = historyArray[0];
	history2.textContent = historyArray[1];
	console.log(bgResults);
	console.log(historyArray);
	console.log(bgResults);

	return historyArray[0];
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

// game

function getComputerChoice() {
	let random = (Math.random() * 2).toFixed(0);
	let computerHand = ['rock', 'paper', 'scissors'];
	return computerHand[random];
};

function playRound(playerSelection, computerSelection) {
	playerSelection = clickedButton;
	computerSelection = getComputerChoice();

	if (computerSelection === 'rock') {
		bgComputer.textContent = '✊';
		return '✊';
	}
	else if (computerSelection === 'paper'){
		bgComputer.textContent = '✋';
		return '✋';
	}
	else {
		bgComputer.textContent = '✌';
		return '✌';
	};

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