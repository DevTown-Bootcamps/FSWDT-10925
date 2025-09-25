let a=[1,2,3,4,5,6,7,8,9];
// let sum=0;
// for(let i=0;i<a.length;i++){
//     sum+=a[i];
// }

// console.log(sum);

//for each()-
// a.forEach((i,index )=>{
//     console.log(i);
// })

//map()
// a.map((i,index)=>{
//     console.log(i);
// })

// let square=a.map(a=>a*a);
// console.log(square);

//.filter()-used to implement filtering of array by using any condition
// let even=a.filter(a=>a%2===0);
// console.log(even);

//.reduce()
let sum=a.reduce((total,current)=>total+current,0);
console.log(sum);