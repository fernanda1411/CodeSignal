/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.
Input/Output


[input] integer n

A ticket number represented as a positive integer with an even number of digits.

Guaranteed constraints:
10 ≤ n < 106.

[output] boolean

true if n is a lucky ticket number, false otherwise.
*/

function isLucky(n) {
  var nStr = n.toString();
  var firstHalfArr = nStr.slice(0, nStr.length / 2).split('');
  var secondHalfArr = nStr.slice(nStr.length / 2, nStr.length).split('');

  var firstHalfSum = firstHalfArr.reduce(function(acc, cur) {
    acc + parseInt(cur);
  }, 0);

  var secondHalfSum = secondHalfArr.reduce(function(acc, cur) {
    acc + parseInt(cur);
  }, 0);

  return firstHalfSum === secondHalfSum;
}



//second version using for loop

// function isLucky(n) {
//     const nStr = n.toString();

//     const firstHalfArr = nStr.slice(0, nStr.length / 2).split('');
//     const secondHalfArr = nStr.slice(nStr.length / 2, nStr.length).split('');

//     let firstHalfSum = 0;
//     for (let i = 0; i < firstHalfArr.length; i++){
//         firstHalfSum += parseInt(firstHalfArr[i]);
//     }

//      let secondHalfSum = 0;
//     for (let i = 0; i < secondHalfArr.length; i++){
//         secondHalfSum += parseInt(secondHalfArr[i]);
//     }
//}