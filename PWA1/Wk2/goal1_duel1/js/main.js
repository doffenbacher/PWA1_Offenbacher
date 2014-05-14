/*
 David Offenbacher
 05-09-2014
 Assignment: THE DUEL #1 Part 1
*/


(function(){
    // "FIGHT!!!" Print In The Console
    console.log("FIGHT!!!");

    // Players Names,  Players Maximum Damage,  Players Starting Health
    var fighter1 = ["SPIDERMAN", 20, 100];
    var fighter2 = ["BATMAN", 20, 100];

    // Start Round
    var round = 0;

    function fight(){

        // Alerts user with a message
        alert(fighter1[0] + "'s HEALTH = " + fighter1[2] + "  ** START FIGHT!! **  " + fighter2[0] + "'s HEALTH = " + fighter2[2]);

        // Syntax Formula
        for (var i = 0; i < 10; i++)
        {
            // Random Syntax Formula: Math.floor(Math.random() * (max - min) + min);
            var player1MinDamage = fighter1[1] * .5;
            var player2MinDamage = fighter2[1] * .5;
            var formula1 = Math.floor(Math.random()*(fighter1[1] - player1MinDamage) + player1MinDamage);
            var formula2 = Math.floor(Math.random()*(fighter2[1] - player2MinDamage) + player2MinDamage);

            // Players Damage Inflicted
            fighter1[2] -= formula1;
            fighter2[2] -= formula2;

            // Results Print In The Console
            console.log(fighter1[0] + ": " + fighter1[2] + " " + fighter2[0] + ":" + fighter2[2]);

            // Checks for Winner
            var result = winnerCheck();
            console.log(result);
            if (result === "NO WINNER")
            {
                round++;
                alert(fighter1[0] + "'s HEALTH = " + fighter1[2] +"  ** ROUND " + round + " OVER **  " + fighter2[0] + "'s HEALTH = " + fighter2[2]);

            } else{
                alert(result);
                break;
            };

        };
    };

    function winnerCheck(){
        var result = "NO WINNER";
        if (fighter1[2] < 1 && fighter2[2] < 1)
        {
            result = "YOU BOTH DIE!!! NO WINNER THIS ROUND!!!";

        } else if(fighter1[2] < 1){
            result = "**GAME OVER** " + fighter2[0] + " WINS!!!"

        } else if (fighter2[2] < 1)
        {
            result = "**GAME OVER** " + fighter1[0] + " WINS!!!"

            console.log(result);
        };
        return result;
    };

    fight();

})();

//I am happy with the final results!!