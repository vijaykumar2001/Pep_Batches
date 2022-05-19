let helpfn=require("./commands/help"); // importing help function; // helpfn is dummy variable to import help fn
let organizefn=require("./commands/organize");
let viewfn=require("./commands/view");

let input=process.argv.slice(2); // taking input // returns array

 // console.log(input);  


 let command= input[0];

 switch(command){
     case "view" :
         viewfn.view(input[1], input[2]);
         break;
     case "organize" :
         organizefn.organize();
        break;
    default: // help
        helpfn.help();
        // help
        break;

 }