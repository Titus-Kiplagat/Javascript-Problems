//solution one
function simpleWayFibonacci(result, len) {
	let num1 = result[0],
		num2 = result[1],
		next,
		count = 2;
	
	while (count < len) {
		next = num1 + num2;
		num1 = num2;
		num2 = next;
		result.push(next)
		count++;
	}
	return result;
}
console.log(simpleWayFibonacci([0, 1], 15));

//solution two
function recursiveFibonacci(result, len) {
	const n = result.length;
	if (n >= len) return result;
	result.push(result[n - 2] + result[n - 1]);
	return recursiveFibonacci(result, len);
}

console.log(recursiveFibonacci([0, 1], 15))