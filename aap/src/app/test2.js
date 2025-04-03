
let arr=[3,8,7,9,6,3,4,1,2];

// bubble sort--------------

// for(let i=0; i<arr.length; i++){

//     let temp;

//     for(let j=0; j<arr.length; j++){

//         if(arr[j] > arr[j+1]){

//             temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }
//     }
// }

// arr.forEach((val) =>{
//     console.log(val)

// selection sort

// for(let i=0; i<arr.length; i++){

//     let min=i;

//     for(let j=i+1; j<arr.length; j++){

//         if(arr[j] < arr[min]){

//             min=j;
//         }
//     }
//     let temp=arr[i];
//     arr[i]=arr[min];
//     arr[min]= temp;
// }

// arr.forEach((val) =>{

//     console.log(val);
// })


// insertion sort------------

// for(let i=1; i<arr.length; i++){

//     let key=arr[i];
//     let j=i-1;

//     while(j >= 0 && arr[j] > key){

//         arr[j+1] = arr[j];
//         j--;
//     }

//     arr[j+1] = key;

// }

// arr.forEach((val) =>{
//     console.log(val);
// })

//     let str1="listen";
//     let str2="silent";

//     let char1=str1.split('');
//     let char2=str2.split('');

//     if(char1.length === char2.length){

//         char1.sort((a,b) => a.localeCompare(b));
//         char2.sort((a,b) => a.localeCompare(b));

//         if(char1.join('') === char2.join('')){
//             console.log("anagram");
//         }
//         else{
//             console.log("not a anagram");
//         }
//     }
// //other way-------------------------------------------
//     function isAnagram(str1, str2) {
//         return str1.length === str2.length && 
//                str1.split('').sort().join('') === str2.split('').sort().join('');
//     }
    
//     console.log(isAnagram("listen", "silent")); // true
//     console.log(isAnagram("hello", "world"));   // false
    
// insertion sort with return

// function insertionSort(arr){


//     for(let i=1; i<arr.length; i++){
    
//         let key=arr[i];
//         let j=i-1;
    
//         while(j >=0 && arr[j] > key){
    
//             arr[j+1]=arr[j];
//             j--;
//         }
//         arr[j+1]=key;
//     }
//     return arr;
//     }
    
//     let ar=[3,8,7,9,6,3,4,1,2];
//     let result=insertionSort(ar);
//     console.log(result);
    
//     // or----
    
//     result.forEach((val) => {
//         console.log(val);
//     });
    
// callback Function

function A(){

    console.log("this is callback function");
}

function B(name, callback){

    console.log("normal function calling with name is" + name);

    return callback();
}

B("Sagar" , ()=>{

    // console.log("This is function 1st");
    B("Dev" , () =>{

        B("Devender" , A);
    })
});