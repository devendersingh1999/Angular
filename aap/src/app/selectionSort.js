// let arr=[2,3,4,1,5,6,4,3,9,8];

// for(let i=0; i<arr.length; i++){

//     let min=i;
//     // console.log(`this is minimum value ${min}`);

//     for(let j=i+1; j<arr.length; j++){

//         if(arr[j] < arr[min]){

//          min=j;
//         //  console.log(`min ${min} = j ${j}`);
//         }
//     }
//     let temp=arr[i];
//     arr[i]=arr[min];
//     arr[min]=temp;

// }

// arr.forEach((val) => {

//     console.log(val);

// })



function bigSorting(unsorted) {
    for(let i=0; i<unsorted.length; i++){
        
        let min=i;
        
        for(let j=i+1; j<unsorted.length; j++){
            
            if(unsorted[j] < unsorted[min]){
                
                min=j;
            }
    }
    let temp=unsorted[i];
    unsorted[i]=unsorted[min];
    unsorted[min]=temp;

}

}


let unsorted=[2,3,4,5,6,4,6];
let res=unsorted;
bigSorting(res);
console.log(res);