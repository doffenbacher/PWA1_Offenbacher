/**
 * Created by David Offenbacher
 * Class: PWA1
 * Goal: Advanced Objects main.js
 */

(function(){

    var numOfPeople = 3;
    var people = [];
    var names = ["David", "Caden", "Crystal", "Dayton", "Isabella"];
    var interval;

    for (var i = 0; i < numOfPeople ; i++) {

        var personIndex = Math.floor(Math.random()*names.length);

        var person = new Person(names[personIndex], i+1);

        populateHTML(person.name,"r"+(i+1)+"c1");
        populateHTML(person.job,"r"+(i+1)+"c2");

        people.push(person);
        names.splice(personIndex,1);
    }

    clearInterval(interval);
}