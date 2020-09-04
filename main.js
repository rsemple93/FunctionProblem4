/* Checking to see if number entered
is a prime number*/

function isPrimeNumber(num){

	if (num % 2 === 0) {
		return false + '..this is not a prime number ' ;
	}
	return true +  ' ..it is a prime number.' ;
}

console.log(isPrimeNumber());