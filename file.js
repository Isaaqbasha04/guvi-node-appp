const fs = require('fs');

// const quote = "No beauty shines brighter than that of a good heart"
// fs.writeFile('./awesome.html',quote,(err) =>{
//     console.log("completedd writing");
// });

// const quote2="Live more, worry less";

// //console.log(process.argv);
// const[ , , noOfFiles]= process.argv;


// for(let i=1; i<=noOfFiles;i++)
// {
//     fs.writeFile(`./backup/text-${i}.html`,quote2,(err) =>{
//         //console.log(err);
//         console.log("completedd writing");
//     });
// }

fs.readFile("./cool.txt", "utf-8", (err,data)=>{
    console.log(data);
})

const quote3="Make everyday a little less ordinary";

fs.writeFile("./nice.txt", "\n" + quote3, (err) =>{
        console.log("completed writing");
});
