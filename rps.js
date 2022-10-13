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

const playRound = (round, score) => {
  console.log(`ROUND ${round} ---- FIGHT`);
  const userMove = prompt('ENTER A MOVE');
  const result = getWinner(userMove, getComputerChoice());
  score[result]+=1;
  console.log(RESULT_MESSAGES[result]);
}

const printResults = (score) => {
  console.log('\nRESULTS');
  console.log(`THERE ${score[TIE_CODE] === 1 ? 'WAS' : 'WERE'} ${score[TIE_CODE]} TIE${score[TIE_CODE]!==1?'S':''}`);
  console.log(`THE FINAL SCORE WAS ${score[PLAYER_WINS_CODE]} - ${score[PLAYERS_LOSES_CODE]} YOU`);
  console.log(`YOU WERE PRITTY FRICKIN DUMB ${score[IMPROPER_INPUT_CODE]} TIME${score[IMPROPER_INPUT_CODE]!==1?'S':''}. L`);
}

const game = () => {
  const score = {
    [IMPROPER_INPUT_CODE]: 0,
    [TIE_CODE]: 0,
    [PLAYER_WINS_CODE]: 0,
    [PLAYERS_LOSES_CODE]: 0
  }

  for (let i=0; i<5; i++) {
    playRound(i+1, score);
  }

  printResults(score);
}

game();