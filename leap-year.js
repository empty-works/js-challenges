const readline = require('readline'); 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
 
rl.question("Enter a year: ", (year) => {
	var isLeap = isLeapYear(year);
	if(isLeap === true) {
		console.log(year + " is a leap year.");
	}
	else {
		console.log(year + " is not a leap year.");
	}
	rl.close();
});

function isLeapYear(year) {
	var isLeap = false;
	if(year % 4 === 0) {
		isLeap = true;
		if(year % 100 === 0) {
			isLeap = false;
			if(year % 400 === 0) {
				isLeap = true;
			}
		}
	}
	return isLeap;
}
