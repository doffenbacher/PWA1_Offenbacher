/*
 David Offenbacher
 05-09-2014
 Assignment: THE DUEL #1 Part 1
*/


(function(){
    // "FIGHT!!!" Print In The Console
    console.log("FIGHT!!!");

    // Players Names
    var player1 = "SPIDERMAN";
    var player2 = "BATMAN";

    // Players Maximum Damage (15 showed best results)
    var player1MaxDamage = 15;
    var player2MaxDamage = 15;

    // Players Starting Health
    var player1Health = 100;
    var player2Health = 100;

    // Start Round
    var round = 0;

    function fight(){

        // Alerts user with a message
        alert(player1 + "'s HEALTH = " + player1Health + "  ** START FIGHT!! **  " + player2 + "'s HEALTH = " + player2Health);

        // Syntax Formula
        for (var i = 0; i < 10; i++)
        {
            // Random Syntax Formula: Math.floor(Math.random() * (max - min) + min);
            var player1MinDamage = player1MaxDamage * .5;
            var player2MinDamage = player2MaxDamage * .5;
            var formula1 = Math.floor(Math.random()*(player1MaxDamage - player1MinDamage) + player1MinDamage);
            var formula2 = Math.floor(Math.random()*(player2MaxDamage - player2MinDamage) + player2MinDamage);

            // Players Damage Inflicted
            player1Health -= formula1;
            player2Health -= formula2;

            // Results Print In The Console
            console.log(player1 + ": " + player1Health + " " + player2 + ":" + player2Health);

            // Checks for Winner
            var result = winnerCheck();
            console.log(result);
            if (result === "NO WINNER")
            {
                round++;
                alert(player1 + "'s HEALTH = " + player1Health +"  ** ROUND " + round + " OVER **  " + player2 + "'s HEALTH = " + player2Health);

            } else{
                alert(result);
                break;
            };

        };
    };

    function winnerCheck(){
        var result = "NO WINNER";
        if (player1Health < 1 && player2Health < 1)
        {
            result = "YOU BOTH DIE!!! NO WINNER THIS ROUND!!!";
        } else if(player1Health < 1){
            result = "**GAME OVER** " + player2 + " WINS!!!"
        } else if (player2Health < 1)
        {
            result = "**GAME OVER** " + player1 + " WINS!!!"

            console.log(result);
        };
        return result;
    };

    fight();

})();