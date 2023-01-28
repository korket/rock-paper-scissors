// game start / end

const main = document.querySelector('main');
const rule = document.querySelector('.description-container');
const start = document.querySelector('.start');
const startBtn = document.querySelector('.start button');

startBtn.addEventListener('click', () => gameStart());

start.style.display = 'flex';
main.style.display = 'none';
rule.style.display = 'none';

function gameStart() {
	main.style.display = 'grid';
	rule.style.display = 'grid';
	start.style.display = 'none';
};

const end = document.querySelector('.end');
const endPara = document.querySelector('.end p');
const endBtn = document.querySelector('.end button');
endBtn.addEventListener('click', () => {
	window.location = 'index.html';
});

end.style.display = 'none';

function gameEnd() {
	main.style.display = 'none';
	rule.style.display = 'none';
	end.style.display = 'flex';

	if (playerScore.textContent === computerScore.textContent) {
		endPara.textContent = 'It\'s shockingly a draw!';
	}
	else if (playerScore.textContent >= computerScore.textContent) {
		endPara.textContent = 'You win!';
	}
	else {
		endPara.textContent = 'Sadly, you lost the game.';
	};
};

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
		if (playerScore.textContent >= 5 || computerScore.textContent >= 5) {
			gameEnd();
		}
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