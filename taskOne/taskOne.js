const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function askForGuess() {
    const randomNumber = Math.floor(Math.random() * 10) + 1; 
    rl.question('Guess a number between 1 and 10: ', (guess) => {

        const makeGuessInt = parseInt(guess)

        if (guess == 'exit') {
            rl.close();
        } else {
        checkGuess(makeGuessInt, randomNumber);
        }

    });
}

function checkGuess(guess, randomNumber) {
  if (guess === randomNumber) {
      console.log('Congratulations! You guessed the correct number!' + randomNumber );
      askForGuess();
    } else {
        console.log('Wrong guess. Try again.');
    askForGuess();
  }
}

askForGuess();
