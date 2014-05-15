/**
 * GUESSING GAME:
 *
 * Created By: David Offenbacher
 * Date: 05/15/2014
 * 
 * GUESSING GAME
 */

//Game variables
(function (){
    var magicNumber = Math.floor(Math.random() * (10 - 1) + 1);
    var guessNumber = 0;
    var numberOfGuesses = 3;
    console.log("The magic number is: " + magicNumber);

    var dom = {
        input: document.querySelector('#input'),
        output: document.querySelector('#output'),
        button: document.querySelector('button')
    };

    function guessGame(){
        if (playerGuess === magicNumber){
            dom.output.innerHTML = "THAT IS CORRECT!!! The number was " + magicNumber + "!";
            dom.button.onclick = ""

            console.log("Guess " + guessNumber + ": " + playerGuess);

        }else if (playerGuess > magicNumber){
        guessNumber++;
        numberOfGuesses--;
        dom.output.innerHTML = "THAT IS TOO HIGH!!! That was guess: " + guessNumber + ", Remaining guesses: " + numberOfGuesses;

        console.log("Guess " + guessNumber + ": " + playerGuess);

        }
    }

})();