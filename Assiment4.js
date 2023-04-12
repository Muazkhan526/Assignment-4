//Question #1. Write a function that takes an array of numbers as input and returns the sum of all even numbers in the array.

// Solution:

function sumOfEvenNumbers(number) {
  var sum = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
      sum += number[i];
    }
  }
  return sum;
}
var myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenSum = sumOfEvenNumbers(myNumber);
console.log("(01) sumOfEvenNumbers: " + evenSum);
console.log("")

//Question #2. Write a function that takes a string as input and returns the number of vowels in the string.

// Solution:

function countVowelsWords(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  }
  var myWord = "I Love Pakistan";
var Countvowel = countVowelsWords(myWord);
console.log("(02) Number Of Vowels: " + Countvowel);
console.log("")

// Question #3. Write a function that takes an array of strings as input and returns the length of the longest string in the array.

// Solution:

  function LongestringLenth(name){
  Longeststring = 0;
  for(var i = 0; i < name.length;i++){
    if(name[i].length > Longeststring){
      Longeststring = name[i].length;
    }
  }
return Longeststring;
}

var myname = ['Muhammaz Muaz','Muhammad Umar','Fayyaz','aezaz'];
var Longeststring = LongestringLenth(myname);
console.log("(03) Longest String: " + Longeststring)
console.log("")

// Question #4. Write a function that takes an array of numbers as input and returns the average of all the numbers in the array.

// Solution:

function calculateAverage(avg) {
  var sum = 0;
  for (let i = 0; i < avg.length; i++) {
    sum += avg[i];
  }
  var average = sum / avg.length;
  return average;
}
var myAverage = [1, 2, 3, 4, 5];
var average = calculateAverage(myAverage);
console.log("(04) Average is: " + average);
console.log("")

// Question #5. Write a function that takes an object as input and returns an array of all the keys in the object.

// Solution:

function getarryKeys(obj) {
  return Object.keys(obj);
}
var myData = { 
  name: "Muhammad Muaz", 
  age: 28, 
  gender: "Male",
  contect:"03408709001",
  City:"Karachi" 
};
var keysArray = getarryKeys(myData);
console.log("(05) Number Of KeyArry: " + keysArray);
console.log("")

// Question #6. Write a function that takes an array of objects as input and returns an array of all the values for a specified key in each object.

// Solution:

function ValueswithKey(value , key) {
  var Totalvalues = [];
  for (let i = 0; i < value.length; i++) {
    if (key in value[i]) {
      Totalvalues.push(value[i][key]);
    }
  }
  return Totalvalues;
}
var Mysheet = [
  { name: "Muhamamd Muaz", age: 28, gender: "Male" },
  { name: "Muhammad Umar", age: 2, gender: "Male" },
  { name: "Fayyaz Ahmed", age: 25,gender:"Male" },
  { name: "Aezaz Khan", age: 28, gender: "Male" }
];
var Arrayvalues = ValueswithKey(Mysheet, "name");
console.log("(06) Total Arry value: " + Arrayvalues);
console.log("")

// Question #7. Write a function that takes an array of strings as input and returns an array of all the unique strings in the array.

// Solution:

function UniqueStrings(Name) {
  return [...new Set(Name)];
}
var myData = ["Pakkstan ","China ","Dubai ","India ","USA"];

var uniqueStrings = UniqueStrings(myData);
console.log("(7) Total uniqueStrings: " + uniqueStrings);
console.log("")

// Question #8. Write a function that takes an array of numbers as input and returns the product of all the numbers in the array.

// Solution:

function NumbersOfProduct(Number) {
  var product = 1;
  for (let i = 0; i < Number.length; i++) {
    product *= Number[i];
  }
  return product;
}
var myNumber = [2, 3, 5, 7];
var product = NumbersOfProduct(myNumber);
console.log("(8) Total Number Of Product: " + product);
