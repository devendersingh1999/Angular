let arr=[2,3,4,2,20,28,13,4];

// bubble sort------------------------------------

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
// })

// Selection sort---------------------------------

// for(let i=0; i<arr.length; i++){

//     let min=i;

//     for(j=i+1; j<arr.length; j++){

//         if(arr[j] < arr[min]){
//             min=j
//         }
//     }
//     let temp=arr[i];
//     arr[i]= arr[min];
//     arr[min]=temp;

// }

// arr.forEach((val) =>{

//     console.log(val);
// })

// insertion sort---------------

// for(let i=1; i<arr.length; i++){

//     let key=arr[i];
//     let j=i-1;

//     while(j >= 0 && arr[j] > key){

//         arr[j+1]=arr[j];
//         j--;
//     }

//     arr[j+1]=key;
// }

// arr.forEach((val) =>{

//     console.log(val);

// })


// callback Function---------

// function A() {

//     console.log("This is callback function");
// }

// function B(name, callback){

//     console.log(`hi how are you ${name}`);
//     callback();
// }

// B("sagar" , A)

// clouser Function----------


function Animal(name){

    this.name=name;

}

Animal.prototype.walk=(() =>{

    console.log(`Animal is walking`);
});

Animal.prototype.run=true;

let rabbit= Object.create(Animal.prototype);

rabbit.eats=true;

console.log(rabbit.eats)
rabbit.walk();


// function Animal(){

    // }
    //  Animal.prototype.hi =(()=>{
    //     console.log("HOW ARE YOU");
    
    // });
    
    // Animal.prototype.eats=true;
    // let rabbit=Object.create(Animal.prototype);
    
    // rabbit.run=(()=>{
    //   console.log("rabbit running");
    // })
    // rabbit.jump="HELLO";
    // rabbit.hi();
    // rabbit.run();
    // console.log(rabbit.eats);
    
    // let animal = {
    
    //     eat:true,
    
    //     hi(){
    //         console.log("hello");
    //     }
    // }
    
    // let rabbit = Object.create(animal);
    
    // rabbit.jump=true;
    
    // console.log(rabbit.eat)
    // rabbit.hi();
    