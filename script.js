// Problem 1 statement:
/*Write a function checkTemperature that takes a temperature (in Celsius) and returns "Hot" if it is 30 or above, "Cold" if it is 15 or below, and "Normal" otherwise.*/

function checkTemperature(temp) {
  if (temp >= 30) {
    return "Hot"
  } else if(temp <= 15){
    return "Cold"
  }else{
    return "Normal"
  }
 
}
 
// console.log(checkTemperature(35)); // Expected: "Hot"
// console.log(checkTemperature(10)); // Expected: "Cold"
// console.log(checkTemperature(20)); // Expected: "Normal"



// Problem 2 statement:
/*Write a function reverseNumber that takes a positive whole number and returns it with its digits reversed. (Hint: convert the number to a string first.)*/

function reverseNumber(num) {
  let str = num.toString();
  let numberReverse = '';
  for (const number of str) {
    numberReverse = number + numberReverse    

  }
  return numberReverse
}
 
// console.log(reverseNumber(1234)); // Expected: 4321
// console.log(reverseNumber(7));    // Expected: 7


// Problem 3 statement:
/*Write a function getOddNumbers that takes a number n and returns an array of all odd numbers from 1 to n (inclusive).*/

function getOddNumbers(n) {
  let odds = [];
  for (let i = 1; i <= n; i= i + 2) {
    odds.push(i)
  }
 
  return odds;
}
 
// console.log(getOddNumbers(10));


// Problem 4 statement:
/*Write a function countVowels that takes a string and returns how many vowels it contains. Assume the string contains lowercase and uppercase letters, no spaces.*/

function countVowels(str) {
  let uppercaseStr = str;
  let lowercaseStr = uppercaseStr.toLowerCase();
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < lowercaseStr.length; i++) {
    let letter = lowercaseStr[i];
    if (vowels.includes(letter)) {
      count++
    }    
  }
  return count;
}
 
// console.log(countVowels("RadwanhosEn"));


// Problem 5 statement:
/*Write a function removeFirstAndLast that takes a string and returns it with the first and last character removed.*/

function removeFirstAndLast(str) {
  let sliceStr = str.slice(1, str.length-1);
  return sliceStr
}
 
// console.log(removeFirstAndLast("hello"));


// Problem 6 statement:
/*Write a function isPalindrome that takes a string and returns true if it reads the same forwards and backwards, otherwise false. Assume lowercase, no spaces.*/

function isPalindrome(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    let reverse = str[i];    
    reverseStr = reverseStr + reverse;
  }
  if (reverseStr === str) {
    return true;
  }else{
    return false;
  }
  
}
 
// console.log(isPalindrome("level")); // Expected: true
// console.log(isPalindrome("hello")); // Expected: false


// Problem 7 statement:
/*Write a function findShortestWord that takes a sentence and returns the shortest word in it.*/

function findShortestWord(sentence) {
  let words = sentence.split(" ");
  let shortest = words[0];
  for (const eachWord of words) {
    if (eachWord.length < shortest.length) {
      shortest = eachWord
    }
  }
 
  return shortest;
}

// console.log(findShortestWord("JavaScript is a fun language")); // Expected: "a"
// console.log(findShortestWord("Hello, my friend!")); // Expected: "my"


// Problem 8 statement:
/* Write a function findSecondSmallest that takes an array of numbers and returns the second smallest distinct value. */

function findSecondSmallest(numbers) {
  let smallest = numbers[0];
  let secondSmallest = numbers[1];
  for (let i = 0; i < numbers.length; i++) {
    let current = numbers[i];
    if (current < smallest) {
      secondSmallest = smallest;
      smallest = current;
    } else if(current > smallest && current < secondSmallest){
      secondSmallest = current;
    }
  }
  
  return secondSmallest;
}
 
// console.log(findSecondSmallest([10, 5, 8, 20, 15])); // Expected: 8


// Problem 9 statement: Write a function averageOfArray that takes an array of numbers and returns their average.

function averageOfArray(numbers) {
  let total = 0;
  let sum = 0;
  for (const number of numbers) {
    let totalSum = sum += number
    total = totalSum / numbers.length
  }
  console.log(sum)
  return total;
}

// console.log(averageOfArray([2, 4, 6])); // Expected: 4


// Problem 10 statement: Write a function keepEvenNumbers that takes an array of numbers and returns a new array with only the even numbers.

function keepEvenNumbers(numbers) {
  let result = [];
  for (const eachNumber of numbers) {
    if (eachNumber % 2 === 0) {
     result.push(eachNumber)
    }
  } 
  return result;
}
 
// console.log(keepEvenNumbers([3, -5, 8, -1, 0])); // Expected: [8, 0]
