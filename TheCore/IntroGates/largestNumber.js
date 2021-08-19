/*
Given an integer n, return the largest number that contains exactly n digits.

Example

For n = 2, the output should be
largestNumber(n) = 99.
*/

function largestNumber(n) {
  var result = 0;

  for (var i = 0; i < n; i++) {
    result += Math.pow(10, i) * 9;
  }
  return result;
}


// function largestNumber(n) {
//     var result = '';

//     for (var i = 0; i < n; i++) {
//         result += '9';
//     }
//     return parseInt(result);
// }