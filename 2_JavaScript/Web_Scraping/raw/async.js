const fs = require("fs");

console.log("Before");

let data = fs.readFile("./f1.txt", cb); // Async
function cb(error, data) { // Callback
    if(error){
        return;
    }else{
        console.log(data+"");
    }
}

console.log("After");