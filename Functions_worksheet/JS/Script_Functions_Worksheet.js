// David Offenbacher 04-29-14 Functions Worksheet

// Circumference

// Calculate the Circumference of a circle is C = radius x 2 x pie

	var calcCircumference = function(radius, pie){
		radius = Number(prompt("Enter the radius of the circle in inches" , 0)); //User is asked to enter in radius of the circle in inches
		var circumference = radius * 2 * pie; //the Circumference of a circle is C = radius x 2 x pie
		return circumference;
	}

	var x = calcCircumference(0, 3.14); //calcCircumference equation above is now defined by var x
	document.write("The circumference of the circle is " + x + " inches!"); //results appears in the Browser's Console
	console.log("The circumference of the circle is " + x + " inches!"); //results prints in the Console


// Stung!

// It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function 
// 8.666666667 x weigth = stingsPerPound

	var calcNumBeeStings = function(beeStings, pounds){
		var pounds = Number(prompt("Enter the the weight of the animal" , 0));
		var stingsPerPound = beeStings * pounds;
		return stingsPerPound;
	}

	var x = calcNumBeeStings(8.666666667, 0);
	document.write("It takes " + x + " bee stings to kill this animal!!");
	console.log("It takes " + x + " bee stings to kill this animal!!");
