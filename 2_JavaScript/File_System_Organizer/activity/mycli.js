let helpFn=require("./commands/help"); // importing help function; // helpfn is dummy variable to import help fn
let organizeFn=require("./commands/organize");
let viewFn=require("./commands/view");

let input=process.argv.slice(2); // taking input // returns array

 console.log(input);  


 let command = input[0];

 switch(command){
     case "view" :
         viewFn.view(input[1],input[2]);
         break;
     case "organize" :
         organizeFn.organize();
        break;
    default: // help
        helpFn.help();
        // help
        break;

 }