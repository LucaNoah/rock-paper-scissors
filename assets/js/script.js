//Wait for the DOM to finish loading
//Add event listeners to the buttons to get the data type and run the game
document.addEventListener('DOMContentLoaded', function() {
  let buttons = document.getElementsByTagName('button');

  for (let choiceP1 of buttons) { //Means the same as: for (let choiceP1 = 0; choiceP1 < buttons.length; choiceP1++)
    choiceP1.addEventListener('click', function() {
      let gameType = this.getAttribute('data-type');
      runGame(gameType);
    })
  }
})

/**
 * The main game function, called when the user made a choice.
 */
function runGame(gameType) {

  //create a random number between 0 and 2
  let choiceComputer = Math.floor(Math.random() * 3)

  if (choiceComputer === 0) {
    document.getElementById('player2').innerHTML = 'rock';
  } else if (choiceComputer === 1) {
    document.getElementById('player2').innerHTML = 'paper';
  } else if (choiceComputer === 2) {
    document.getElementById('player2').innerHTML = 'scissors';
  }

  if (gameType === ('rock')) {
    document.getElementById('player1').innerHTML = 'rock';
  } else if (gameType === ('paper')) {
    document.getElementById('player1').innerHTML = 'paper';
  }else if (gameType === ('scissors')) {
    document.getElementById('player1').innerHTML = 'scissors';
  }
  determineWinner(gameType, choiceComputer);
}

/**
 * Make a number out of the gameType & determine if player or computer wins.
 */
function determineWinner(gameType, choiceComputer) {

  let scorePlayer = parseInt(document.getElementById('playerScore').innerText);
  let scoreComputer = parseInt(document.getElementById('computerScore').innerText);

  if (gameType === 'rock') {
    choicePlayer = 0;
  } else if (gameType === 'paper') {
    choicePlayer = 1;
  } else if (gameType === 'scissors') {
    choicePlayer = 2;
  }

  if (choicePlayer === choiceComputer) {
    document.getElementById('winner').innerHTML = 'Draw, no one wins!';
  } else if (choicePlayer === 0 && choiceComputer === 1) {
    document.getElementById('winner').innerHTML = 'Computer wins!';
    document.getElementById('computerScore').innerText = ++scoreComputer;
  } else if (choicePlayer === 0 && choiceComputer === 2) {
    document.getElementById('winner').innerHTML = 'Player wins!';
    document.getElementById('playerScore').innerText = ++scorePlayer;
  } else if (choicePlayer === 1 && choiceComputer === 0) {
    document.getElementById('winner').innerHTML = 'Player wins!';
    document.getElementById('playerScore').innerText = ++scorePlayer;
  } else if (choicePlayer === 1 && choiceComputer === 2) {
    document.getElementById('winner').innerHTML = 'Computer wins!';
    document.getElementById('computerScore').innerText = ++scoreComputer;
  } else if (choicePlayer === 2 && choiceComputer === 0) {
    document.getElementById('winner').innerHTML = 'Computer wins!';
    document.getElementById('computerScore').innerText = ++scoreComputer;
  } else if (choicePlayer === 2 && choiceComputer === 1) {
    document.getElementById('winner').innerHTML = 'Player wins!';
    document.getElementById('playerScore').innerText = ++scorePlayer;
  }
}