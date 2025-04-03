// //reverse characters
// let str="hello";

// str.split("");

// let rev="";

// for(let i=str.length-1; i>=0; i--){

//     rev+=str[i];

// }

// console.log(rev);

// reverse words --------------------------

// let str="Hello Words welcome";

// str.split(" ");
// let rev="";

// for(let i=str.length-1; i>=0; i--) {

//     rev+=str[i];

// }
// console.log(rev);



let str="Hello Words welcome";
let words=str.split(" ");
let rev="";

for(let i=words.length-1; i>=0; i--){

    rev+=words[i];
    if(i !== 0){

        rev+=" ";
    }
}

console.log(rev);

// let str = "Hello Words welcome";
// let rev = str.split(" ").reverse().join(" ");
// console.log(rev);

// let str = "Hello Words welcome";
// let rev = str.split("").reverse().join("");
// console.log(rev);
