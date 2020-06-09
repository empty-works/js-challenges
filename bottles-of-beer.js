var numBottles = 99;
var bottlesWord = "bottles";

while(numBottles > 0) {
	if(numBottles === 1) {bottlesWord = "bottle";}	
	console.log(numBottles + " " + bottlesWord + " of beer on the wall, " + numBottles + " " + bottlesWord + " of beer.");
	console.log("Take one down and pass it around, " + --numBottles + " " + bottlesWord + " of beer on the wall");
}
