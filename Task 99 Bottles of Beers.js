var beerNumber = 99;
while (beerNumber != 0) {
    if (beerNumber > 1) {console.log(beerNumber + " bottles of beer on the wall," + beerNumber + " bottles of beer.");
        console.log("Take one down and pass it around," + beerNumber + " bottles of beer on the wall.");
    } else if (beerNumber === 1) {
        console.log(beerNumber + " bottles of beer on the wall," + beerNumber + " bottles of beer.");
        console.log("Take one down and pass it around," + " no more bottles of beer on the wall.");
    } else {
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
    beerNumber--;
}