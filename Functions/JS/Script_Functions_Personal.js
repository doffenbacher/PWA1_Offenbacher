// David Offenbacher 04-30-14 Functions

//Functions Personal
//How much concrete stain will a person need based on the square footage of a sidewalk.

	var alertUser;
		
		alertUser = "In this Concrete Stain Calculator, you will enter in the Width and Length of your sidewalk to determine how many gallons of Concrete Stain you will need to stain your sidewalk.";
		alert (alertUser);
		
		function calulationSqFt(){
			var width = Number(prompt("Enter the width of the sidewalk in inches" , 0));
			var length = Number(prompt("Enter the overall length of the sidewalk" , 0));
			var gallofStain = 200;
			var sqft = width * length / gallofStain;
			
		console.log(sqft);
		}
