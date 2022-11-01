
//for loop
function range(start, end) {
	let array = [];
	for (let i = start; i <= end; i++) {
		array.push(i);
	}
	return array;
}


function sum(array) {
	let total = 0;
	for (let i = 0; i < array.length; i++) {
		total += array[i]
	}
	return total;
}

//while loop
function secondRange(start, end) {
	let array = [],
		digit = start;
	while (digit <= end) {
		array.push(digit)
		digit++
	}
	return array;
}

function secondSum(array) {
	let total = 0;
	while (array.length > 0) {
		total += array.pop();
	}
	return total;
}

//recursion on range function
const thirdRange = function(start, end) {
	let array = [],
		digit = start;
	function increaseCount(digit) {
		if (digit >= end) return array.push(end);
		array.push(digit);
		increaseCount(++digit);
	}
	increaseCount(digit);
	return array;
}


//reduce methos on sum function
function thirdSum(array) {
	return array.reduce((acc, value) => acc + value, 0)
}

console.log(thirdSum(thirdRange(1, 10)))