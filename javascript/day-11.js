//Arrays
let fruit=[1,2,"Apple","banana"];


//push-add element to the end of the array
// fruit.push("mongo");
// console.log(fruit);

//pop-remove an element from the last

// console.log(fruit.pop());
// console.log(fruit);

//unshift()-to add element to the start of the aaray

// fruit.unshift(234);
// console.log(fruit);

//shift-used to remove element from begining of the array

// console.log(fruit.shift());
// console.log(fruit);

//indexOf-to compute index of the value in an array

// console.log(fruit.indexOf('Apple'));

//includes()-check if a value is included in an array or not

// console.log(fruit.includes(45));

//slice(start,ending)-return part of the array
// console.log(fruit.slice(1,4))

let num=[1,2,3,4,5,6];

for(let i=0;i<num.length;i++){
    num[i]+=2;
}

console.log(num);

//Try implementing push,pop, shift,unshift,slice


//STRING-combination of all alphabets,numbers, and special character

// S T R I N G
// 0 1 2 3 4 5

let str="String@123";
console.log(str);


// for(let i=0;i<str.length;i++){
//   console.log(str.charAt(i));
// }

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf('7'));
console.log(str.includes('n'));
console.log(str.slice(2,6));
console.log(str.substring(2,6));
console.log(str.substr(0,5));

let a =" Anshul Ojha ";
//trim()-removes space from starting and ending of the string
console.log(a.trim());

let b="used to split a senetence";
console.log(b.split(" "));

let sname="Anshul";
let lname="Ojha";

let total=sname+" "+lname;

console.log(total);



