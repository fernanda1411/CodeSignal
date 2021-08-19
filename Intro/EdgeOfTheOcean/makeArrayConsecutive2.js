/* Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. 
Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. 
He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.*/

function makeArrayConsecutive2(statues){
    let smallest = 20;
    let tallest = 0;

    for(let i = 0; i < statues.length; i++){
        const currentEl = statues[i];

        if(currentEl < smallest){
            smallest = currentEl;
        }

        if(currentEl > tallest){
            tallest = currentEl;
        }
    }
    const total = tallest - smallest + 1;
    const result = total - statues.length;
    console.log('smallest: ',smallest, 'tallest: ', tallest, 'total: ',total, 'result: ', result);
    return result;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
