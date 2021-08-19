/*
You are given a two-digit integer n. Return the sum of its digits.

Example

For n = 29, the output should be
addTwoDigits(n) = 11.
*/


function addTwoDigits(n) {
  const str = n.toString();
  return parseInt(str[0]) + parseInt(str[1]);
}
