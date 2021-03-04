// import React from "react";
// import ReactDOM from "react-dom";
// import "./styles.css";

// ReactDOM.render(<h1>Hello</h1>, document.getElementById("root"));

//Map function
//var numbers = [3, 4, 8, 12];

// function square(num) {
//   return num * num;
// }
// const newNumbers = numbers.map(square);
// console.log(newNumbers);

//using foreach
// var newNumbers = [];

// numbers.forEach(function (num) {
//   newNumbers.push(num * num);
// });
// console.log(newNumbers);

//using map
// const newNumbers = numbers.map(function (num) {
//   return num * num;
// });
// console.log(newNumbers);

//filter function
// const newNumbers = numbers.filter(function (num) {
//   return num > 5;
// });
// console.log(newNumbers);

//using foreach
// const newNumbers = [];
// numbers.forEach(function (num) {
//   if (num < 10) {
//     newNumbers.push(num);
//   }
// });
// console.log(newNumbers);

//Reduce function
//using reduce
// var newNumbers = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("accumulator =" + accumulator);
//   console.log("currentNumber =" + currentNumber);
//   return accumulator + currentNumber;
// });
// console.log(newNumbers);

//using foreach
// var newNumbers = 0;

// numbers.forEach(function (currentNumber) {
//   newNumbers += currentNumber;
// });
// console.log(newNumbers);

//Find-find the first item that matches from the array
// const newNumbers=numbers.find(function (num){
//   return num > 5;
// });
// console.log(newNumbers);

//FindIndex-findIndex the first idex that matches from the array
// const newNumbers = numbers.findIndex(function (num) {
//   return num > 5;
// });
// console.log(newNumbers);
import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiData) {
  return emojiData.description.substring(0, 100);
});

console.log(newEmojipedia);
