function hasTargetSum(array, target) {

  const seenNumbers = {}

  // Write your algorithm here
for(const number of array){
  const complement = target- number
if(complement in seenNumbers) return true
  seenNumbers[number] = true
}
return false
}

/* 
  Write the Big O time complexity of your function here
  Runtime: O(n)
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  I made a function called hasTargetSum that checks if two numbers in an array adds up to some target.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
}

module.exports = hasTargetSum;
