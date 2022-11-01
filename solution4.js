const array = [10, 5, 15, 31, 1, 34];

let index = array.findIndex((elem) => elem > 30)

let result = array.find((elem) => elem > 30);
console.log(array.indexOf(result))
console.log(index);


let arr = [];
array.forEach((elem) => {
	if (elem > 30) return arr.push(elem)
})
console.log(arr)