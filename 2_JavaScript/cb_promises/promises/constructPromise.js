// new Promise() is a callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the 
// promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.

let promise = new Promise(function(resolve,reject){
    const a = 4;
    const b = 4;
    if(a==b){
        resolve("Both are equal");
    }else{
        reject("Both are not equal");
    }

});

promise.then(function(data){
    console.log(data);
})

promise.catch(function(error){
    console.log(error);
})