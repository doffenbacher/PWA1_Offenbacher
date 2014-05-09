// David Offenbacher 04-30-14 Functions

//Functions Personal
//How much concrete stain will a person need based on the square footage of a sidewalk.

	var alertUser;
		
		alertUser = "In this Concrete Stain Calculator, you will enter in the Width and Length of your sidewalk to determine how many gallons of Concrete Stain you will need to stain your sidewalk.";
		alert (alertUser); //Alerts user with a message about what the calculators function 
		
		function calulationSqFt(){
			var width = Number(prompt("Enter the width of the sidewalk in feet." , 0));//prompts user to Enter the width of the sidewalk in feet
			var length = Number(prompt("Enter the overall length of the sidewalk in feet." , 0));//prompts user Enter the overall length of the sidewalk in feet
			var gallofStain = 200;//var gallofStain = 200
			var sqft = width * length / gallofStain;//calculation for var sgft width * length / gallofStain
		
		document.write("You will need "+ sqft +" gallons of stain to complete your project!");//result appears in the browser's console
		console.log("You will need "+ sqft +" gallons of stain to complete your project!");//result prints in the Console
		
		}

		calulationSqFt();