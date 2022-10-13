const getComputerChoice = () => {
  const randNum = Math.random();
  if (randNum < 1/3) return 'Rock';
  else if (randNum < 2/3) return 'Paper';
  else return 'Scissors';
};

const play = (playerSelection, computerSelection) => {
  if (!playerSelection || !computerSelection) return 'Missing selection!';

  const winningHierarchy = ['rock', 'paper', 'scissors'];
  const playerSelectionFormatted = playerSelection.toLowerCase();
  const computerSelectionFormatted = computerSelection.toLowerCase();
  if (!(winningHierarchy.indexOf(playerSelectionFormatted)+1) || !(winningHierarchy.indexOf(computerSelectionFormatted)+1)) return 'Improper selection!';
  if (playerSelectionFormatted === computerSelectionFormatted) return 'Tie! Bitches!';

  const playerDefeatIndex = (winningHierarchy.indexOf(playerSelectionFormatted)+1) % 3;
  if (computerSelectionFormatted === winningHierarchy[playerDefeatIndex]) return 'Computer wins! seriouslly....';
  else return 'Nice u won against a bot LOL';
}

const playerMove = 'ROCK';
const computerMove = getComputerChoice();
console.log(`play(${playerMove}, ${computerMove}): ${play(playerMove, computerMove)}`);