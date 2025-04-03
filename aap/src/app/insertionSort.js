
// Start with the second element i = 1.

// Key is 3, compare with 2.
// Since 2 <= 3, no shifting is required.
// Array remains: [2, 3, 4, 1, 5, 6, 4, 3, 9, 8]
// Move to i = 2.

// Key is 4, compare with 3.
// No shifting is required.
// Array remains: [2, 3, 4, 1, 5, 6, 4, 3, 9, 8]
// Move to i = 3.

// Key is 1, compare with 4, 3, and 2.
// Shift all elements greater than 1.
// Insert 1 at the correct position.
// Array becomes: [1, 2, 3, 4, 5, 6, 4, 3, 9, 8]
// Move to i = 4.

// Key is 5, no shifting required.
// Array remains: [1, 2, 3, 4, 5, 6, 4, 3, 9, 8]
// Move to i = 5.

// Key is 6, no shifting required.
// Array remains: [1, 2, 3, 4, 5, 6, 4, 3, 9, 8]
// Move to i = 6.

// Key is 4, compare with 6 and 5.
// Shift elements 6 and 5.
// Insert 4 at the correct position.
// Array becomes: [1, 2, 3, 4, 4, 5, 6, 3, 9, 8]

let arr=[2,3,4,1,5,6,4,3,9,8];

// for(let i=1; i<arr.length; i++){

//     let key= arr[i];
//     let j=i-1; //previous value of i

//     while(j >=0 && arr[j] > key){

//         arr[j+1]=arr[j];

//         j--;
//     }
//     arr[j+1]=key;
// }

// arr.forEach((val) => {
//     console.log(val);
// })

// for(let i=1; i<arr.length; i++){

//     let key=arr[i];
//     let j=i-1; //store the previous value of i;

//     while(j >= 0 && arr[j] > key){

//         arr[j+1]=arr[j];

//         j--;
//     }

//     arr[j+1] = key;
// }

// arr.forEach((valu) => {

//     console.log(valu);
// })


