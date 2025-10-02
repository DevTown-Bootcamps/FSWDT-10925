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

// const cube = (n)=>{
//     return n*n*n;
// }

// console.log(cube(3));

// function greet(name="Guest"){
//     console.log("Hello ",name);
// }

// greet();
// greet("Aman");

// function mul(a=1,b=1){
//     console.log(a*b);
// }

// mul();
// mul(2);
// mul(3);
// mul(2,3);

function sum(...n){
    let sum=0;

    for(let num of n){
        sum+=num;
    }

    console.log(sum);
}

sum(1,2,3,4);
sum(1,2,3,4,5,6,7,8,9);

//create a function to take n number of parameters ans perform product of those numbers if they are even.