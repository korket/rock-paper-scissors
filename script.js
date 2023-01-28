// button selectors

const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
const buttons = document.querySelectorAll('.button');

// button clicks

btnRock.addEventListener('click', () => playRound('✊'));
btnPaper.addEventListener('click', () => playRound('✋'));
btnScissors.addEventListener('click', () => playRound('✌'));

// battleground selectors

const bgPlayer = document.querySelector('.bg-player');
const bgComputer = document.querySelector('.bg-computer');

// game

const computerDesc = document.querySelector('.computer-description');
const computerScore = document.querySelector('.computer-score p span');
const playerScore = document.querySelector('.player-score p span');

computerScore.textContent = 0;
playerScore.textContent = 0;

function getComputerChoice() {
	let random = (Math.floor(Math.random() * 3));
	let computerHand = ['✊', '✋', '✌'];
	return computerHand[random];
};

function playRound(playerSelection, computerSelection) {
	computerSelection = getComputerChoice();
 	bgPlayer.textContent = playerSelection;
	bgComputer.textContent = computerSelection;
 	bgResults = [];
 	newResult = `${playerSelection}ˣ${computerSelection}`;
 	bgResults.push(newResult);
 	historyArray.push(bgResults[0]);

	let win = 'You win...';
	let lose = 'You lose...';
	let draw = 'It\'s a draw...';

	if (playerSelection === computerSelection) {
		computerDesc.textContent = `Beep... ${draw}`;
	}
	else if (
		(playerSelection === '✊' && computerSelection === '✌') ||
		(playerSelection === '✋' && computerSelection === '✊') ||
		(playerSelection === '✌' && computerSelection === '✋')) {
		computerDesc.textContent = `${win} Beep...`;
		playerScore.textContent++;
	}
	else {
		computerDesc.textContent = `${lose} Beep...`;
		computerScore.textContent++;
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

// history selectors

const history1 = document.querySelector('.history-1 p');
const history2 = document.querySelector('.history-2 p');
const history3 = document.querySelector('.history-3 p');
const history4 = document.querySelector('.history-4 p');
const history1border = document.querySelector('.history-1');
const history2border = document.querySelector('.history-2');
const history3border = document.querySelector('.history-3');
const history4border = document.querySelector('.history-4');

const histories = [history1, history2, history3, history4];
const historiesBorder = [history1border, history2border, history3border, history4border];

// history / result log

let historyArray = ['','','',''];

for (const btn of buttons) {
	btn.addEventListener('click', () => {
		historyArray.splice(0,1);
		history1.textContent = historyArray[3];
		history2.textContent = historyArray[2];
		history3.textContent = historyArray[1];
		history4.textContent = historyArray[0];
		historyBorder();
	});
};

function historyBorder() {
	for (const history of histories) {
		if (
			history.textContent === '✊ˣ✊' ||
			history.textContent === '✋ˣ✋' ||
			history.textContent === '✌ˣ✌') {
			historiesBorder[histories.indexOf(history)].setAttribute('class', 'history draw');
		}
		else if (
			history.textContent === '✊ˣ✌' ||
			history.textContent === '✋ˣ✊' ||
			history.textContent === '✌ˣ✋') {
			historiesBorder[histories.indexOf(history)].setAttribute('class', 'history win');
		} 
		else if (
			history.textContent === '✊ˣ✋' ||
			history.textContent === '✋ˣ✌' ||
			history.textContent === '✌ˣ✊') {
			historiesBorder[histories.indexOf(history)].setAttribute('class','history lose');
		}
	}
};