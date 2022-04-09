//Wait for the DOM to finish loading
//Add event listeners to the buttons to get the data type and run the game
document.addEventListener('DOMContentLoaded', function() {
  let buttons = document.getElementsByTagName('button');

  for (let choiceP1 of buttons) { //Means the same as: for (let choiceP1 = 0; choiceP1 < buttons.length; choiceP1++)
    choiceP1.addEventListener('click', function() {
      let gameType = this.getAttribute('data-type');
      runGame(gameType);
    });
  }
});

/**
 * The main game function, called when the user made a choice.
 */
function runGame(gameType) {
  
  //Create a random number between 0 and 2
  let choiceComputer = Math.floor(Math.random() * 3);
  
  if (choiceComputer === 0) {
    document.getElementById('player2').innerHTML = '<img src="assets/images/rock.png" alt="rock">';
  } else if (choiceComputer === 1) {
    document.getElementById('player2').innerHTML = '<img src="assets/images/paper.png" alt="paper">';
  } else if (choiceComputer === 2) {
    document.getElementById('player2').innerHTML = '<img src="assets/images/scissors.png" alt="scissors">';
    // defensive programming
  } else if (choiceComputer !== 0 || 1 || 2) {
    document.getElementById('player2').innerHTML = 'ERROR';
    alert(`Unknown choice Computer: ${choiceComputer}`);
  }

  if (gameType === ('rock')) {
    document.getElementById('player1').innerHTML = '<img src="assets/images/rock.png" alt="rock">';
  } else if (gameType === ('paper')) {
    document.getElementById('player1').innerHTML = '<img src="assets/images/paper.png" alt="paper">';
  }else if (gameType === ('scissors')) {
    document.getElementById('player1').innerHTML = '<img src="assets/images/scissors.png" alt="scissors">';
    // defensive programming
  } else if (gameType !== 'rock' || 'paper' || 'scissors') {
    document.getElementById('player1').innerHTML = 'ERROR';
    alert(`Unknown game type: ${gameType}`);
  }
  determineWinner(gameType, choiceComputer);
}

/**
 * Make a number out of the gameType, determine if player or computer wins &
 * increase score of winner by 1
 */
function determineWinner(gameType, choiceComputer) {

  let scorePlayer = parseInt(document.getElementById('playerScore').innerText);
  let scoreComputer = parseInt(document.getElementById('computerScore').innerText);
  let choicePlayer;

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
    // defensive programming
  } else if (choicePlayer && choiceComputer !== 0 || 1 || 2) {
    document.getElementById('winner').innerHTML = 'ERROR';
    alert(`Unknown choice player or choice computer: ${choicePlayer} & ${choiceComputer}`);
  }
}

