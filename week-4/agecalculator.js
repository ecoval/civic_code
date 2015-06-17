var ageCalculator = function(dateOfBirth){
	var year = Number(dateOfBirth.substr(0,4));
	var month = Number(dateOfBirth.substr(4,2));
	var day = Number(dateOfBirth.substr(6,2));

	var today = new Date();
	var todayYear = today.getFullYear();
	var todayMonth = today.getMonth() + 1; // count of months starts at 0!!
	var todayDate = today.getDate();

	var age = todayYear - year;

	if ((todayMonth < month) || (todayMonth === month && todayDate < day)) {
	 	age -= 1;
	 }

	console.log("Your age is " + age);
};

ageCalculator('20000516');