const readline = require('readline'); 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
 
rl.question("Enter a year: ", (year) => {

	
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
