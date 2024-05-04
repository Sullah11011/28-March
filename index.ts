console.log("Hello, World!");

let temperature: number = 15;
if (temperature < 20) {
  console.log("It's cold!");
}

let apples: number = 10;
let applesGivenAway: number = 3;
let applesLeft: number = apples - applesGivenAway;
console.log(`You have ${applesLeft} apples left.`);

let firstName: string = "John";
let lastName: string = "Doe";
let fullName: string = `${firstName} ${lastName}`;
console.log(`Full Name: ${fullName}`);

if (5 > 3) {
  console.log("Yes");
} else {
  console.log("No");
}

function calculateArea(radius: number): number {
  return Math.PI * radius * radius;
}

for (let index = 1; index <= 50; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log("FizzBuzz");
  } else if (index % 3 === 0) {
    console.log("Fizz");
  } else if (index % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(index);
  }
}

let temperatures: number[] = [20, 15, 25, 30, 18, 22];
let highestTemperature: number = Math.max(...temperatures);
console.log(`Highest Temperature: ${highestTemperature}`);

let age: number = 18;
if (age < 18) {
  console.log("You are a minor.");
} else {
  console.log("You are an adult.");
}

function countPositiveNumbers(numbers: number[]): number {
  return numbers.filter((number) => number > 0).length;
}

let numbers: number[] = [-1, 0, 1, 2, -3, 4, 5];
console.log(`Count of positive numbers: ${countPositiveNumbers(numbers)}`);

function filterWords(words: string[]): string[] {
  return words.filter((word) => word.charAt(0) == "a");
}
console.log(filterWords(["hasan", "ahmed", "ali", "jahanzeb"]));

let fruits: string[] = ["apple", "banana", "cherry", "date"];
console.log(fruits[fruits.length - 2]);

function squareNumbers(numbers: number[]): number[] {
  return numbers.map((number) => number ** 2);
}

function reverseArray(arr: any[]): any[] {
  return arr.slice().reverse();
}

function countScoreExceedances(scores: number[]): void {
  const maxScore = Math.max(...scores);
  const minScore = Math.min(...scores);
  const exceedances = scores.filter((score) => score > maxScore).length;
  const fallBelow = scores.filter((score) => score < minScore).length;
  console.log(`Exceedances: ${exceedances}, Fall below: ${fallBelow}`);
}

function removeFalsyValues(arr: any[]): any[] {
  return arr.filter(Boolean);
}

function concatenateArrays(arr1: any[], arr2: any[]): any[] {
  return [...arr1, ...arr2];
}

let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5, 6];
console.log(concatenateArrays(arr1, arr2));
