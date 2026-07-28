// Task 1 Problem statement:
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



// Task 2 Problem statement:
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