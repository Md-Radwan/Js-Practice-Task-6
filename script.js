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
 
console.log(checkTemperature(35)); // Expected: "Hot"
console.log(checkTemperature(10)); // Expected: "Cold"
console.log(checkTemperature(20)); // Expected: "Normal"



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
 
console.log(reverseNumber(1234)); // Expected: 4321
console.log(reverseNumber(7));    // Expected: 7


// Problem 3 statement:
/*Write a function getOddNumbers that takes a number n and returns an array of all odd numbers from 1 to n (inclusive).*/

function getOddNumbers(n) {
  let odds = [];
  for (let i = 1; i <= n; i= i + 2) {
    odds.push(i)
  }
 
  return odds;
}
 
console.log(getOddNumbers(10));


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
 
console.log(countVowels("RadwanhosEn"));


// Problem 5 statement:
/*Write a function removeFirstAndLast that takes a string and returns it with the first and last character removed.*/

function removeFirstAndLast(str) {
  let sliceStr = str.slice(1, str.length-1);
  return sliceStr
}
 
console.log(removeFirstAndLast("hello"));