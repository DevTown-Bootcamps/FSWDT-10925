function add(a,b){
    return a+b;
}

function mul(a,b){
    return a*b;
}

function check(a){
    if(a%2==0){
        return true;
    }else{
        return false;
    }
}

module.exports={add,mul,check};