/*

Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
  reverseInParentheses(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
  reverseInParentheses(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
  reverseInParentheses(inputString) = "foorabbazmilb";
For inputString = "foo(bar(baz))blim", the output should be
  reverseInParentheses(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

Input/Output

[input] string inputString

A string consisting of lowercase English letters and the characters ( and ). It is guaranteed that all parentheses in inputString form a regular bracket sequence.

Guaranteed constraints:
0 ≤ inputString.length ≤ 50.

[output] string

Return inputString, with all the characters that were in parentheses reversed.
*/


function reverseInParentheses(inputString) {
  let hasParentheses;
  do {
      let openIdx;
      let closeIdx;
      let isPair = false;
      hasParentheses = false;
      for (let i = 0; i < inputString.length; i++) {
          const currentChar = inputString[i];
          if (currentChar === '(' && !isPair) {
              openIdx = i;
              hasParentheses = true;
          } else if (currentChar === ')' && !isPair) {
              closeIdx = i;
              isPair = true;
              hasParentheses = true;
          }
      }
      if (isPair) {
          let left = inputString.substring(0,openIdx);
          let middle = inputString.substring(openIdx + 1, closeIdx);
          let right = inputString.substring(closeIdx + 1);
          let reversedMiddle = middle.split('').reverse().join('');
          inputString = left + reversedMiddle + right;
      }
  } while (hasParentheses)
  return inputString;
}



// function reverseInParentheses(inputString) {
//     var hasPending;
//     var countOpen = 0;
//     var currentStr = inputString;
//     var candidateStr = '';
//     var resultStr = '';

//     do {
//         hasPending = false;

//         for (var i = 0; i < currentStr.length; i++) {
//             var char = currentStr.charAt(i);

//             if (char === '(') {
//                 countOpen++;
//                 hasPending = countOpen > 1;
//                 if (hasPending) {
//                     candidateStr += ')';
//                 }
//             } else if (char === ')') {
//                 if (countOpen > 1) {
//                     candidateStr += '(';
//                 }

//                 if (countOpen === 1) {
//                     resultStr += candidateStr.split('').reverse().join('');
//                     candidateStr = '';
//                 }
//                 countOpen--;

//             } else {
//                if (countOpen > 0) {
//                    candidateStr += char;
//                } else {
//                    resultStr += char;
//                }
//             }
//         }

//         if (hasPending) {
//             currentStr = resultStr;
//             resultStr = '';
//         }

//     } while (hasPending)
//     return resultStr;
// }

