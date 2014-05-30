/**
 * Created by David Offenbacher
 * Class: PWA1
 * Goal: Advanced Objects main.js
 */

(function(){

    //Define all Variables
    var numOfPeople = 3;
    var people = [];
    var names = ["David", "Caden", "Crystal", "Dayton", "Isabella"];
    var interval;

    //Create a loop that instantiates three (3) person objects
    for (var i = 0; i < numOfPeople ; i++) {

        //Generates a number up to the names.length which is five (5)
        var personIndex = Math.floor(Math.random()*names.length);

        //Use keyword to setup * NEW * person object
        var person = new Person(names[personIndex], i+1);

        populateHTML(person.name,"r"+(i+1)+"c1");
        populateHTML(person.job,"r"+(i+1)+"c2");

        people.push(person);
        names.splice(personIndex,1);
    }

    //Make sure only one interval is running at a time & clear  out the old before running the new
    clearInterval(interval);

    interval = setInterval(runUpdate, 1000 / 30);

    /*
    Set the interval to 30 FPS
    The setInterval() method will continue calling the function until clearInterval is called, or window closes.
    The id value returned by setInterval() is used as the parameter for the clearInterval() method.
     */
    function populateHTML(data,field){
        var id=document.getElementById(field);
        id.innerHTML = data;
    }

    function runUpdate(){
        /*
        console.log(element);
        element = the items in the people array
        .update = the prototype method in the person.js file
         */
        people.forEach(function(elemnt){
            elemnt.update();
        });
    }
})();