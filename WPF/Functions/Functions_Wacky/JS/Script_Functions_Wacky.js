// David Offenbacher 04-30-14 Functions

//Functions Wacky
//Calculates how many pull ups a person has done in a week.

	var alertUser;
		
		alertUser = "In this Pull Up Calculator, you will enter in the amount of Pull Ups you did each day.";
		alert (alertUser);//Alerts user to the functions of this Calculator

	var calcPullUps = function(monday, tuesday, wednesday, thursday, friday, saturday, sunday){
	
	var monday = Number(prompt("Enter the amount of pull ups you did on Monday" , 0)); //User is prompted to enter amout of pull ups done in a day
	var tuesday = Number(prompt("Enter the amount of pull ups you did on Tuesday" , 0)); //User is prompted to enter amout of pull ups done in a day
	var wednesday = Number(prompt("Enter the amount of pull ups you did on Wednesday" , 0)); //User is prompted to enter amout of pull ups done in a day
	var thursday = Number(prompt("Enter the amount of pull ups you did on Thursday" , 0)); //User is prompted to enter amout of pull ups done in a day
	var friday = Number(prompt("Enter the amount of pull ups you did on Friday" , 0)); //User is prompted to enter amout of pull ups done in a day
	var saturday = Number(prompt("Enter the amount of pull ups you did on Saturday" , 0)); //User is prompted to enter amout of pull ups done in a day
	var sunday = Number(prompt("Enter the amount of pull ups you did on Sunday" , 0)); //User is prompted to enter amout of pull ups done in a day
	var totalPullUps = monday + tuesday + wednesday + thursday + friday + saturday + sunday; //adds the days together to get total pull ups done in a week
	return totalPullUps; 
	
	}

	var a = calcPullUps(0, 0, 0, 0, 0, 0, 0); 

document.write("You did " + a + " Pull Ups this week!!!  "); //result appears in the browser's console
console.log("You did " + a + " Pull Ups this week!!!  "); //result prints in the Console

//calculates the average amount of pull ups in a week

	var averagedPullUps = a / 7;  

document.write("You averaged " + averagedPullUps + " Pull Ups per day this week!!!"); //results appears in the Browser's Console
console.log("You averaged " + averagedPullUps + " Pull Ups per day this week!!!"); //results prints in the Console
