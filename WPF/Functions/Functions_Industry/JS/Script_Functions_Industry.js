// David Offenbacher 04-30-14 Functions

//Functions Industry

//How many gallons of oil will an Oil Stop collect in one day? Users will be prompted to enter in values to determine the outcome.

		var alertUser;
		
		alertUser = "In this Calculator, you will enter in the average amount of oil in quarts a vehicle will take, and you will enter in how many vehicles you serviced in 1 day.";
		alert (alertUser); //Alerts user with a message about what the calculators function 
		
		function calulationGallons(){
			var quarts = Number(prompt("Enter the average amount of oil in quarts a vehicle take." , 0));//Information collected from the user
			var vehicle = Number(prompt("Enter how many vehicles serviced in 1 day." , 0));//Information collected from the user
			var gallons = .25 * quarts;//There are 4 quarts in a Gallon
			var gallonsCollected = gallons * vehicle;//Calculates how many gallons got collected 
		
		document.write("If an Oil Stop services " + vehicle + " car's per day, they will collect " + gallonsCollected + " gallons of oil.");//result appears in the browser's console	
		console.log("If an Oil Stop services " + vehicle + " car's per day, they will collect " + gallonsCollected + " gallons of oil.");//result prints in the Console
		//If the 55 gallon drum is full the employee needs to dispose of the oil properly.
		
			var drum = gallonsCollected //55 gallons is a full drum
			var disposal 
			
		disposal = (drum < 55) ? "The 55gal drum of oil has room for more oil, and does not need to be disposed of." : "The 55gal drums of oil are full, and they need to be properly disposed of."
		//Depending how full the drum of oil is the results will print the outcome
		
		document.write("  " + disposal); //result appears in the browser's console	
		console.log(disposal); //result prints in the Console
		
		}

		calulationGallons();	