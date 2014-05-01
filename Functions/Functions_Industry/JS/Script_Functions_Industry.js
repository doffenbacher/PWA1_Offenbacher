// David Offenbacher 04-30-14 Functions

//Functions Industry

//How many gallons of oil will an Oil Stop collect in one day? Users will be prompted to enter in values to determine the outcome.

		var alertUser;
		
		alertUser = "In this Calculator, you will enter in the average amount of oil in quarts a vehicle will take, and you will enter in how many vehicles you serviced in 1 day.";
		alert (alertUser);
		
		function calulationGallons(){
			var quarts = Number(prompt("Enter the average amount of oil in quarts a vehicle take." , 0));
			var vehicle = Number(prompt("Enter how many vehicles serviced in 1 day." , 0));
			var gallons = .25 * quarts;
			var gallonsCollected = gallons * vehicle;
		
		document.write("If an Oil Stop services " + vehicle + " car's per day, they will collect " + gallonsCollected + " gallons of oil.");	
		console.log("If an Oil Stop services " + vehicle + " car's per day, they will collect " + gallonsCollected + " gallons of oil.");
		
			var drum = gallonsCollected
			var disposal
			
		disposal = (drum < 55) ? "The 55gal drum of oil has room for more oil, and does not need to be disposed of." : "The 55gal drums of oil are full, and they need to be properly disposed of."
		
		document.write("  " + disposal);
		console.log(disposal);
		
		}

		calulationGallons();	