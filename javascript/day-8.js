//Condition 
//if conditional

let c=19;


// simple if else statement
// if(c<20){
//   console.log("C is less than 20");
// }else{
//     console.log("C is either equal to or greater than 20");
// }

// if..else if..else

// if(c<10){
//     console.log("c is greater than 10");
// }else if(c<20){
//     console.log("C is greater than 20");
// }else{
//     console.log("C is greter than something");
// }


// Nested if else

// let age=20;
// let sub=true;

// if(age>18){
//   if(sub){
//     console.log("Allowed");
//   }else{
//     console.log("Not allowed");
//   }
// }else{
//     console.log("Not allowed");
// }

//ternary operator

// (condition)? "result1-gets executed as if block":"(result2-gets executed as else block)"

// let result=c<20?true:false;

// console.log(result);


//logical operators

// let age=20;
// let sub=true;

// if(age>18 && sub){
//     console.log("Allowed");
// }else{
//     console.log("Not allowed");
// }

// suppose you have a,b,c variable having numbers , using if else tell me which of the three is biggest number.
// you have variable a,b- if a>b then perform a/b else perform b/a;
// you have variable a, if a is greater than 10 then do a/10, if it is greater than 20 then do a/20,
// and if it is greater than 40 then do a/40;


let day=8;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Sat");
        break;
    case 7:
        console.log("SUN");
        break;
    default:
        console.log("Invalid input");
    
}



