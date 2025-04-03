let arr=[2,3,4,1,5,6,4,3,9,8];

for(let i=0; i<arr.length; i++){
    let temp;

    for(let j=0; j<arr.length; j++){

        if(arr[j] > arr[j+1]){
            temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }

}

for(let val of arr){
    console.log(val);
}

let newArr=[...new Set(arr)].sort((a,b) => a-b);

for(let a of newArr){
    console.log("new "+ a);
}