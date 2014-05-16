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
    var magicNumber = Math.floor(Math.random() * (10 - 1) + 1); //computer picks a random number which will be a decimal so multiply by 10, the 1 at the end lets it start at 1
    var guessNumber = 0;
    var numberOfGuesses = 3;
    console.log("The magic number is: " + magicNumber);

    var clickFn = function(e){
        console.log(numberOfGuesses);
        validateInput(e);
    };

    var dom = { //defines dom elements with the HTML id and tag names
        input: document.querySelector('#input'),
        output: document.querySelector('#output'),
        button: document.querySelector('button')
    };

    function guessGame(){
        if (playersGuess === magicNumber){
            dom.output.innerHTML = "THAT IS CORRECT!!! The number was " + magicNumber + "!";
            dom.button.onclick = "";

            console.log("Guess " + guessNumber + ": " + playersGuess);

        }else if (playersGuess > magicNumber){
            guessNumber++;
            numberOfGuesses--;
            dom.output.innerHTML = "THAT IS TOO HIGH!!! That was guess: " + guessNumber + ", Remaining guesses: " + numberOfGuesses;

        console.log("Guess " + guessNumber + ": " + playersGuess);

        }else if (playersGuess < magicNumber){
            guessNumber++;
            numberOfGuesses--;
            dom.output.innerHTML = "THAT IS TOO LOW!!! That was guess: " + guessNumber + ", Remaining guesses: " + numberOfGuesses;

            console.log("Guess " + guessNumber + ": " + playersGuess);

        }

        if (numberOfGuesses === 0){
            dom.output.innerHTML = "NO MORE GUESSES LEFT!!! The correct number was: " + magicNumber + "!";
            dom.button.onclick = "";
        }

    }

    var onKeyDown = function (e) {
        if (e.keyCode === 13) {
            validateInput();
        }
    }, playersGuess;

    dom.button.onclick = function validateInput(e){

        playersGuess = parseInt(dom.input.value);

        if(isNaN(playersGuess)){
            dom.output.innerHTML = "You did not input a number. Please try again.";

        }else if(playersGuess > 10){
            dom.output.innerHTML = "The number you entered is greater than 10!! Please try again.";

        }else if(playersGuess < 1){
            dom.output.innerHTML = "The number you entered is less than 1!! Please try again.";

        }else{
            guessGame();
        }

        dom.button.removeEventListener("click", clickFn, false);
        dom.button.addEventListener("click", clickFn, false);
        window.addEventListener("keydown", onKeyDown, false);

        e.preventDefault();

        return false;
    };

})();