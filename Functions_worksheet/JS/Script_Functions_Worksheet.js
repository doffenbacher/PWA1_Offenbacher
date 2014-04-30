// David Offenbacher 04-29-14 Functions Worksheet

// Circumference

// Calculate the Circumference of a circle is C = radius x 2 x pie

	var calcCircumference = function(radius, pie){
		radius = Number(prompt("Enter the radius of the circle in inches" , 0));
		var circumference = radius * 2 * pie;
		return circumference;
	}

	var x = calcCircumference(0, 3.14); 
	document.write("The circumference of the circle is " + x + " inches");
	console.log("The circumference of the circle is " + x + " inches");


// Stung!

// It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function 
// 8.666666667 x weigth = stingsPerPound

	var calcNumBeeStings = function(beeStings, pounds){
		var pounds = Number(prompt("Enter the the weight of the animal" , 0));
		var stingsPerPound = beeStings * pounds;
		return stingsPerPound;
	}

