var FastMath = require('../src/fast-math.js');

var startDate, stopDate, tempResult;
var testedNumber = -1.61803398;
var loopNumber = 999999999;

console.log("Start testing");
console.log("Each method will be invoke " + loopNumber + " times");



console.log();
console.log("Test abs() method");
startDate = +new Date();
for(var i = 0 ; i < loopNumber ; i++){
	tempResult = Math.abs(testedNumber);
}
stopDate = +new Date();
console.log("Node Math time: " + (stopDate - startDate)  + "ms");

startDate = +new Date();
for(var i = 0 ; i < loopNumber ; i++){
	tempResult = FastMath.abs(testedNumber);
}
stopDate = +new Date();
console.log("FastMath time: " + (stopDate - startDate)  + "ms");



console.log();
console.log("Test ceil() method");

startDate = +new Date();
for(var i = 0 ; i < loopNumber ; i++){
	tempResult = Math.ceil(testedNumber);
}
stopDate = +new Date();
console.log("Node Math time: " + (stopDate - startDate)  + "ms");

startDate = +new Date();
for(var i = 0 ; i < loopNumber ; i++){
	tempResult = FastMath.ceil(testedNumber);
}
stopDate = +new Date();
console.log("FastMath time: " + (stopDate - startDate)  + "ms");



console.log();
console.log("Test floor() method");

startDate = +new Date();
for(var i = 0 ; i < loopNumber ; i++){
	tempResult = Math.floor(testedNumber);
}
stopDate = +new Date();
console.log("Node Math time: " + (stopDate - startDate)  + "ms");

startDate = +new Date();
for(var i = 0 ; i < loopNumber ; i++){
	tempResult = FastMath.floor(testedNumber);
}
stopDate = +new Date();
console.log("FastMath time: " + (stopDate - startDate)  + "ms");



console.log();
console.log("Test round() method");

startDate = +new Date();
for(var i = 0 ; i < loopNumber ; i++){
	tempResult = Math.round(testedNumber);
}
stopDate = +new Date();
console.log("Node Math time: " + (stopDate - startDate)  + "ms");

startDate = +new Date();
for(var i = 0 ; i < loopNumber ; i++){
	tempResult = FastMath.round(testedNumber);
}
stopDate = +new Date();
console.log("FastMath time: " + (stopDate - startDate)  + "ms");



console.log();
console.log("Test sign() method");

startDate = +new Date();
for(var i = 0 ; i < loopNumber ; i++){
	tempResult = Math.sign(testedNumber);
}
stopDate = +new Date();
console.log("Node Math time: " + (stopDate - startDate)  + "ms");

startDate = +new Date();
for(var i = 0 ; i < loopNumber ; i++){
	tempResult = FastMath.sign(testedNumber);
}
stopDate = +new Date();
console.log("FastMath time: " + (stopDate - startDate)  + "ms");



console.log();
console.log("Stop testing");