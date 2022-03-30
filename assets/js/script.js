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
}


