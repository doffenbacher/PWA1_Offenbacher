/**
 * Created by David Offenbacher
 * Class: PWA1
 * Goal: Advanced Objects person.js
 */

(function(){

    window.Person=Person;

    Person.jobs = ["teacher", "actor", "student", "pilot"];
    Person.actions = ["sleeping", "eating", "working"];

    function Person(name, row){
        console.log("Person Created: ", name);

        this.name = name;

        this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];

        this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)];

        this.row = row;

        var id = document.getElementById("r"+this.row+"c3");
        id.innerHTML=this.action;
    }

    


}