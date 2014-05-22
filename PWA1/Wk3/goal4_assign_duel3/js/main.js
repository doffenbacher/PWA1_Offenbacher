/*
 David Offenbacher
 05-22-2014
 Assignment: THE FINAL DUEL - Part 3
*/


(function(){


    console.log("FIGHT!!!"); // "FIGHT!!!" Print In The Console

	/*
    Players Names,  Players Maximum Damage,  Players Starting Health
    var fighter1 = ["SPIDERMAN", 20, 100];
    var fighter2 = ["BATMAN", 20, 100];
	*/
	
    var fighter1_txt = document.querySelector("#Spiderman").querySelector("p");
    var fighter2_txt = document.querySelector("#Batman").querySelector("p");
    var round_txt = document.querySelector("h5");
    var button = document.getElementById("fight_btn");

    console.log();

    button.addEventListener("click", fight, false);

    var fighters = [
        {
            name: "Spiderman",
            damage: 20,
            health: 100
        },
        {
            name: "Batman",
            damage: 20,
            health: 100
        }];

    // Start Round
    var round = 1;

    round_txt.innerHTML = "Click FIGHT BUTTON To START!!!";
    fighter1_txt.innerHTML = fighters[0].name + " : " + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name + " : " + fighters[1].health;

    function fight(){
		
		/*
        Alerts user with a message
        alert //(fighter1[0] + "'s HEALTH = " + fighter1[2] + "  ** START FIGHT!! **  " + fighter2[0] + "'s HEALTH = " + fighter2[2]);

        Syntax Formula
        for (var i = 0; i < 10; i++)

        Random Syntax Formula: Math.floor(Math.random() * (max - min) + min);
        var player1MinDamage = fighter1[1] * .5;
        var player2MinDamage = fighter2[1] * .5;
		*/
		
        fighter1_txt.innerHTML = fighters[0].name + " : " + fighters[0].health;
        fighter2_txt.innerHTML = fighters[1].name + " : " + fighters[1].health;

            //Formula to determine damage
            var formula1 = Math.floor(Math.random() * (fighters[0].damage + fighters[0].damage *.5));
            var formula2 = Math.floor(Math.random() * (fighters[1].damage + fighters[1].damage *.5));

            // Players Damage Inflicted
            fighters[0].health -= formula1;
            fighters[1].health -= formula2;

            // Fighters Health Prints In The Console
            console.log(fighters[0].health, fighters[1].health);

            // Checks for Winner
            var results = winnerCheck();
            console.log(results);// Fight Results Print In The Console

            round_txt.innerHTML = "Round #" + round + " Results:";
            round++;
            if (results === "NO WINNER") //If no winner Displays results of Remaining Fights Health
            {
                fighter1_txt.innerHTML = fighters[0].name + " : " + fighters[0].health;
                fighter2_txt.innerHTML = fighters[1].name + " : " + fighters[1].health;

            } else{
                fighter1_txt.innerHTML = results;
                fighter2_txt.innerHTML = "";

                button.removeEventListener("click", fight, false);

                document.querySelector('.buttonblue').innerHTML = 'DONE!!!'; //Button changes from "FIGHT" to "DONE!!!"
            };

        };


    function winnerCheck(){
        var result = "NO WINNER";
        if (fighters[0].health < 1 && fighters[1].health < 1)
        {
            result = "YOU BOTH DIE!!! NO WINNER THIS GAME!!!"; // "YOU BOTH DIE!!! NO WINNER THIS GAME!!!" Prints In The Console

        } else if(fighters[0].health < 1){
            result = "**GAME OVER** " + fighters[1].name + " WINS!!!" // "**GAME OVER** Batman Wins" Prints In The Console
        } else if (fighters[1].health < 1)
        {
            result = "**GAME OVER** " + fighters[0].name + " WINS!!!" // "**GAME OVER** Spiderman Wins" Prints In The Console
        }
        return result;
    }

})();

//I am happy with the final results!! But the FIGHT BUTTON is just upsetting me