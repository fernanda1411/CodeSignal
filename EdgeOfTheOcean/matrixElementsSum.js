/*
After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

Example

For

matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]]
the output should be
matrixElementsSum(matrix) = 9.

There are several haunted rooms, so we'll disregard them as well as any rooms beneath them. Thus, the answer is 1 + 5 + 1 + 2 = 9.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer matrix

A 2-dimensional array of integers representing the cost of each room in the building. A value of 0 indicates that the room is haunted.

Guaranteed constraints:
1 ≤ matrix.length ≤ 5,
1 ≤ matrix[i].length ≤ 5,
0 ≤ matrix[i][j] ≤ 10.

[output] integer

The total price of all the rooms that are suitable for the CodeBots to live in.
*/

function matrixElementsSum(matrix) {
    
    const aptPerFloor = matrix[0].length;    
    const ghostDoors = {};
    let totalCost = 0;
    
    for(let floor = 0; floor < matrix.length; floor++) {
        for (let aptNumber = 0; aptNumber < aptPerFloor; aptNumber++) {
            
            const aptValue = matrix[floor][aptNumber];
            
            if (aptValue === 0) {                
                ghostDoors[aptNumber] = true;
            } else if (!ghostDoors[aptNumber]){                
                totalCost += aptValue;
            }  
        }
    }   
    return totalCost;   
}