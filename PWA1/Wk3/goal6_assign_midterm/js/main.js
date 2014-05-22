/*
	* Mid Terms for PWA-1
*/

(function(){

	var button = document.querySelector(".buttonred");
	var i = 0;
	
	var students = [
	
		{
			username: 'Professor Xavier',
			address: {street: '3300 University', city: 'Winter Park', state: 'Florida'},
			gpa: [3.7, 3.8, 3.9],
			date: new Date()
		},
		{
			username: 'Spiderman',
			address: {street: '123 Test Dr', city: 'Universal', state: 'Florida'},
			gpa: [2.9, 3.6, 3.8],
			date: new Date()
	
		}];
	
	var consoleData = function(){
	
			for (var i = 0, j = students.lenght; i < j; i++){
				console.log('Name: ' + students[i].username);
				console.log('Address: ' + students[i].address.street + ' ' + students[0].address.city + ' ' + students[0].address.state);
				console.log('GPA: ' + students[i].gpa);
				console.log('Date: '
					+ students[i].date.getMonth() + "/"
					+ students[i].date.getDate() + "/"
					+ students[i].date.getFullYear()
			);
		}
		return false;
	};

	var addData = function(newname, newstreet, newcity, newstate, newgpa, newdate){
		
		students.push({
			username: newname,
			address: {street: newstreet, city: newcity, state: newstate},
			gpa: newgpa,
			date: newdate
		});
	};

	var gpaAvg = function(myAry){
		
		var gradeAvg = 0;
		for (var i = 0, max = myAry.lenght; i < max; i++){
			gradeAvg = gradeAvg + myAry[i];
			
		}
		
		var num = gradeAvg/max;
		return num.toFixed(2);
	};
	
	var displayData = function(){
		
		var innerName = document.getElementById("name");
		var innerAddress = document.getElementById("address");
		var innerGpa = document.getElementById("gpa");
		var innerDate = document.getElementById("date");
		var innerAvgGpa = document.getElementById("gpaavg");

        if (i !== max + 1) {
            innerName.innerHTML = 'Name: ' + students[i].username;
            innerAddress.innerHTML = 'Address: ' + students[i].address.street + ' ' + students[i].address.city + ' ' + students[i].address.state;
            innerGpa.innerHTML = 'GPA: ' + students[i].gpa;

            innerDate.innerHTML = 'Date: '
                + students[i].date.getMonth() + "/"
                + students[i].date.getDay() + "/"
                + students[i].date.getFullYear();

            var avg = gpaAvg(students[i].gpa);

            innerAvgGpa.innerHTML = 'Average GPA: ' + avg;
            console.log(students[i].gpa.lenght);

        } else {
            button.onclick = "return false";
            document.querySelector('.buttonred').innerHTML = 'DONE!!!';

        }
        i++
		return false;
	};
	
	var max = students.lenght;
	
	button.onclick = displayData;
	
	console.log('********** Below shows the original objects **********');
	consoleData();
	addData('Batman', '123 Test Dr', 'Universal', 'Florida', [3.5, 3.8, 3.9], new Date());
	console.log(' ');
	console.log('********** Below shows the new object added to the original object **********');
	consoleData();
	displayData();
	
})();
	
	
	
	
	
	
	
	
	
	
	
	
	

