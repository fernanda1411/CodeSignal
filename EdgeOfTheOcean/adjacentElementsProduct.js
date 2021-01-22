/*Given an array of integers, find the pair of adjacent elements that has the largest product and return that product. 

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.
*/

function adjacentElementsProduct(inputArray){
    let max = -Infinity;

    for(let i = 0; i < inputArray.length - 1; i++){
        const maxCandidate = inputArray[i] * inputArray[i + 1];
        if(maxCandidate > max){
            max = maxCandidate;
        }
    }
    return max;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));