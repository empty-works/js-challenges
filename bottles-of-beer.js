var numBottles = 99;
var bottlesWord = "bottles";

while(numBottles > 0) {
	console.log(numBottles + " " + bottlesWord + " of beer on the wall, " + numBottles + " " + bottlesWord + " of beer.");
	--numBottles;
	if(numBottles === 1) {bottlesWord = "bottle";}
	console.log("Take one down and pass it around, " + numBottles + " " + bottlesWord + " of beer on the wall");
}
