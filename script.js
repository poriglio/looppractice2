var animals = ["rat", "cat", "butterfly", "marmot", "ocelot"];

// PROBLEM 1

for ( i = 0 ; i < animals.length -1 ; i ++) {
	console.log(animals[i]);
};

// PROBLEM 2

for ( i = 0 ; i < animals.length ; i+=2 ) {
	console.log(animals[i]);
};

// PROBLEM 3

for ( i = animals.length - 1 ; i >= 0 ; i-- ) {
	console.log(animals[i]);
};

// PROBLEM 4

for ( i = 0 ; i < animals.length ; i++ ) {
	if ( i === 0 ) {
		console.log (animals[i]);
	}
	else if ( i === animals.length -1 ) {
		console.log(animals[i]);
	}
	else {
		console.log(animals[i]);
		console.log(animals[i]);
	}
};