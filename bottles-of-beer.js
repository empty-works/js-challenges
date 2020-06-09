var numBottles = 99;
var bottlesWord = "bottles";

while(numBottles > 0) {
	console.log(numBottles + " " + bottlesWord + " of beer on the wall, " + numBottles + " " + bottlesWord + " of beer.");
	--numBottles;
	bottlesWord = getBottleWord(numBottles);
	console.log("Take one down and pass it around, " + numBottles + " " + bottlesWord + " of beer on the wall");
}

function getBottleWord(numBottles) {
	if(numBottles === 1) {
		return "bottle";
	}
}
