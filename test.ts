let arr = 'as dfa   b';
// let brr = arr.split()

for(let i of arr.split(' ')){
    if(i){
        console.log(i)
    }
    else{
        continue
    }
}