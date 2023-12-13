// EX1
// function concatArray(array1, array2) {
//     let ArrayAll = [...array1, ...array2]
//     let A1
//     let A2

//     if (ArrayAll.some((curr_t) => curr_t === null || curr_t === undefined)) {
//         return undefined
//     } else {
//         for (let j = 0; j < ArrayAll.length; j++) {
//             for (let i = 0; i < ArrayAll.length - j - 1; i++) {
//                 if (ArrayAll[i] > ArrayAll[i + 1]) {
//                     A1 = ArrayAll[i + 1]
//                     A2 = ArrayAll[i]
//                     ArrayAll[i + 1] = A2
//                     ArrayAll[i] = A1
//                 }
//             }

//         }
//     }
//     return ArrayAll
// }
// console.log(concatArray([7,19,20], [1, 2, 3]))



// EX2
// function concatAndSortArrays(array1, array2) {
//     let ArrayAll = [...array1, ...array2];
//     if (ArrayAll.some((a_curr)=> a_curr === null || a_curr === undefined)) {
//         return undefined
//     }
//     ArrayAll.sort((a, b) => a - b); // Sort the array in ascending order
//     return ArrayAll;
// }

// console.log(concatAndSortArrays(["model5","model1"], [1, 2, 3]));



// Ex3
function concatAndSortArrays(array1, array2) {
    let ArrayAll = [...array1, ...array2];
    
    if (ArrayAll.some(a_curr => a_curr === null || a_curr === undefined)) {
        return undefined;
    }

    ArrayAll.sort((a, b) => {
        if (typeof a === 'number' && typeof b === 'number') {
            return a - b;
        } else {
            return String(a).localeCompare(String(b));
        }
    });

    return ArrayAll;
}

console.log(concatAndSortArrays(["model5", "model1"], [1, 2, 3]));
