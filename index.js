function isPalindrome(word) {
  // Write your algorithm here
  let reverseString = word.split('').reverse().join('')
  return word === reverseString


}

/* 
  Add your pseudocode here
  Take a parameter and read the word
  If word is read forward and backwards as the same then its true
  If word if not read the same as forward and backward then its comes back false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
