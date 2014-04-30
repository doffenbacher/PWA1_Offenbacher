// David Offenbacher 04-29-14 Functions Worksheet

// Calculate the Circumference of a circle is C = radius x 2 x pie

	var calcCircumference = function(radius, pie){
		radius = Number(prompt("Enter the radius of the circle" , 0));
		var circumference = radius * 2 * pie;
		return circumference;
	}

