console.log("Check with 1: [" + getFibSequence(1) + "]");
console.log("Check with 2: [" + getFibSequence(2) + "]");

function getFibSequence(num) {
	var fibArray = [0];

	if(num === 2) {
		fibArray.push(1);
	}
	return fibArray;
}
