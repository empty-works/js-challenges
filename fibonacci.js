console.log("Check with 1: [" + getFibSequence(1) + "]");
console.log("Check with 2: [" + getFibSequence(2) + "]");
console.log("Check with 3: [" + getFibSequence(3) + "]");
console.log("Check with 10: [" + getFibSequence(10) + "]");
console.log("Check with 40: [" + getFibSequence(40) + "]");


function getFibSequence(num) {
	var fibArray = [0];

	if(num === 2) {
		fibArray.push(1);
	}
	else if(num > 2) {
		fibArray.push(1);
		var previous = 0;
		for(var i = 1; i < num; i++) {
			fibArray.push(previous + fibArray[i]);	
			previous = fibArray[i];
		}
	}
	return fibArray;
}
