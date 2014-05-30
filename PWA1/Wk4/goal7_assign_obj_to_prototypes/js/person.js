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

        //sets initial action for each person randomly
        this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];

        //sets job per person randomly
        this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)];

        //defines row so JS knows what row in the HTML to update the text in
        this.row = row;

        //displays initial action
        var id = document.getElementById("r"+this.row+"c3");
        id.innerHTML=this.action;
    }


    Person.prototype.update = function(){
        if (Math.floor(Math.random() <.01)){
            var i = Math.floor(Math.random()*Person.actions.length);
            this.action = Person.actions[i];
            var id = document.getElementById("r"+this.row+"c3");
            id.innerHTML=this.action;
        }
    }



    })();