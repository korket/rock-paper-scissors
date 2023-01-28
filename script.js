// button selectors

const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
const buttons = document.querySelectorAll('.button');

// battleground selectors

const bgPlayer = document.querySelector('.bg-player');
const bgComputer = document.querySelector('.bg-computer');
const history1 = document.querySelector('.history-1 p');
const history2 = document.querySelector('.history-2 p');
const history3 = document.querySelector('.history-3 p');
const history4 = document.querySelector('.history-4 p');

let clickedButton;
let newResult;
let lastResult;
let historyArray = [];

btnRock.addEventListener('click', () => {
	clickedButton = 'rock';
	bgPlayer.textContent = '✊';

	newResult = `✊ˣ${playRound()}`;
	bgResults = [];
	bgResults.push(newResult);

	return historyArray.push(bgResults[0]);
	}
);

btnPaper.addEventListener('click', () => {
	clickedButton = 'paper';
	bgPlayer.textContent = '✋';
	
	newResult = `✋ˣ${playRound()}`;
	bgResults = [];
	bgResults.push(newResult);

	return historyArray.push(bgResults[0]);
	}
);

btnScissors.addEventListener('click', () => {
	clickedButton = 'scissors';
	bgPlayer.textContent = '✌';
	
	newResult = `✌ˣ${playRound()}`;
	bgResults = [];
	bgResults.push(newResult);

	return historyArray.push(bgResults[0]);
	}
);

// history / result log

historyArray = ['','','',''];

for (const btn of buttons) {
	btn.addEventListener('click', () => {
			historyArray.splice(0,1);
			history1.textContent = historyArray[3];
			history2.textContent = historyArray[2];
			history3.textContent = historyArray[1];
			history4.textContent = historyArray[0];
			console.log(historyArray);
	});
};

// game

function getComputerChoice() {
	let random = (Math.floor(Math.random() * 3));
	let computerHand = ['rock', 'paper', 'scissors'];
	return computerHand[random];
	console.log(random);
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