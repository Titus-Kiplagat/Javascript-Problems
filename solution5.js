const array = [1, 3, 5, 6, 7, 8, 5, 4]

const newArray = array.filter((elem, index) => (index + 1) % 2 !== 0)
console.log(newArray)