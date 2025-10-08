const math=require("./math");

// console.log(math.add(2,4));
// console.log(math.mul(4,5));
// console.log(math.check(4));

const fs=require('fs');

// writing inside a file.

// fs.writeFileSync('test.txt','replace the text');

fs.writeFile('test.txt',"I am writing inside the file",err=>{
    if(err) throw err;
    console.log("File written");
})



