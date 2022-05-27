const request = require("request");

console.log("Before");

request("https://www.espncricinfo.com/series/indian-premier-league-2022-1298423", cb);
function cb(error, response, html) {
    if(error){
        console.log("Some error", error);
    }else{
        console.log(html);
    }
}

console.log("After");