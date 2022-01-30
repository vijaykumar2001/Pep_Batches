function helpfn(){

    // use backticks for multiline strings
    console.log(`
         Your  Entered command is wrong, Check the below ones:

         node <file> <command> <folder> <argument>
         node mycli view "E:\\FJP_ENG\\2_JavaScript" tree
         node mycli view "E:\\FJP_ENG\\2_JavaScript" flat
         node mycli organize "E:\\FJP_ENG\\2_JavaScript" // last command is optional
         node mycli help
    `)
}

module.exports={ // exporting help function
    help: helpfn// help is the key and helpfn is fn name
}


