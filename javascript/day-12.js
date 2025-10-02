//functions-reusable code blocks

// function functioName(paramtere){
//     //code block
// }

//non- parameter function
//  function greet(){
//     console.log("Hello");
//  }

//  greet();
//  greet();
//  greet();

//paramter function
// function add(a,b){
//     return a+b;
// }

// let sum=add(2,3);
// console.log(sum);

// function mul(){
//     return add(2,3)*2;
// }

// console.log(mul());

//function expression
// const add=function(a,b){
//     return a+b;
// }

// console.log(add(2,4));

//arrow function expression
// const greet = () =>{
//     console.log("Hello");
// }
// greet();

//create a function to calculate  the cube of a number

const cube = (n)=>{
    return n*n*n;
}

console.log(cube(3));