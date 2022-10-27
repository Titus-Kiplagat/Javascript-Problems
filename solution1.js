let scores = [60, 90, 25, 25, 30, 60, 30, 60, 90];
//forEach
let scoresObject = {};
scores.forEach(val => scoresObject[val] = (scoresObject[val] || 0) + 1);
console.log(scoresObject);

//reduce
const reducerObj = scores.reduce((acc, val) => (acc[val] = (acc[val] || 0) + 1, acc), {});
console.log(reducerObj)