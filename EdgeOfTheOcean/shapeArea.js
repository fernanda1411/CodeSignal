/*
Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

Example

For n = 2, the output should be
shapeArea(n) = 5;
For n = 3, the output should be
shapeArea(n) = 13. 

n = 1   area 1      dif 0
n = 2   area 5      dif 4
n = 3   area 13     dif 8
n = 4   area 25     dif 12 
n = 5   area 41     dif 16

*/

function shapeArea(n){
    let area = 1;

    for(let i = 1; i <= n; i++){
        const dif = (i - 1) * 4;
        area += dif;
    }
    return area;
}

console.log(shapeArea(4));