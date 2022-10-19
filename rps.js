const IMPROPER_INPUT_CODE = 'dumb';
const TIE_CODE = 'tie';
const PLAYER_WINS_CODE = 'win';
const PLAYERS_LOSES_CODE = 'lose';

const RESULT_MESSAGES = {
  [IMPROPER_INPUT_CODE]: 'Improper selection!',
  [TIE_CODE]: 'Tie! Bitches!',
  [PLAYER_WINS_CODE]: 'Nice u won against a bot LOL',
  [PLAYERS_LOSES_CODE]: 'Computer wins! seriouslly....'
}

const getComputerChoice = () => {
  const randNum = Math.random();
  if (randNum < 1/3) return 'Rock';
  else if (randNum < 2/3) return 'Paper';
  else return 'Scissors';
};

const getWinner = (playerSelection, computerSelection) => {
  const winningHierarchy = ['rock', 'paper', 'scissors'];
  const playerSelectionFormatted = playerSelection.toLowerCase();
  const computerSelectionFormatted = computerSelection.toLowerCase();
  if (!(winningHierarchy.indexOf(playerSelectionFormatted)+1) || !(winningHierarchy.indexOf(computerSelectionFormatted)+1)) return IMPROPER_INPUT_CODE;
  if (playerSelectionFormatted === computerSelectionFormatted) return TIE_CODE;

  const playerDefeatIndex = (winningHierarchy.indexOf(playerSelectionFormatted)+1) % 3;
  if (computerSelectionFormatted === winningHierarchy[playerDefeatIndex]) return PLAYERS_LOSES_CODE;
  else return PLAYER_WINS_CODE;
}

const getNewScore = () => ({
  [IMPROPER_INPUT_CODE]: 0,
  [TIE_CODE]: 0,
  [PLAYER_WINS_CODE]: 0,
  [PLAYERS_LOSES_CODE]: 0
});

const resetScore = (score) => {
  score[IMPROPER_INPUT_CODE] = 0;
  score[TIE_CODE] = 0;
  score[PLAYER_WINS_CODE] = 0;
  score[PLAYERS_LOSES_CODE] = 0;
}

const playRound = (userMove, score) => {
  const body = document.querySelector('body');
  const resultDiv = document.createElement('div');
  const result = getWinner(userMove, getComputerChoice());
  score[result]+=1;
  resultDiv.textContent = RESULT_MESSAGES[result];
  body.appendChild(resultDiv);
  if (score[PLAYER_WINS_CODE] === 5 || score[PLAYERS_LOSES_CODE] === 5) {
    console.log(score);
    const finalDiv = document.createElement('div');
    finalDiv.textContent = result === PLAYER_WINS_CODE ? 'PLAYER WINS CONGRATS' : 'COMPUTER WINS THE GAME MAJOR L';
    finalDiv.style.backgroundColor = 'teal';
    body.appendChild(finalDiv);
    resetScore(score);
  }
}

const score = getNewScore();
const buttons = document.querySelectorAll('.choiceButton');
buttons.forEach(button => {
  const playRoundAction = (e) => {
    const move = button.getAttribute('id');
    playRound(move, score);
  };

  button.addEventListener('click', playRoundAction);
});