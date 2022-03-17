const timeoutScheduled = Date.now();
setTimeout(() => {
    const timeDelay = Date.now() - timeoutScheduled;
    console.log(timeDelay);
    console.log('Hello!!!');
    }, 1000);
    
    let startDate = new Date().getTime();
    let endDate = startDate;
    
    // cho 4s
    while (endDate - startDate < 4000) {
        endDate = new Date().getTime();
    }
    

// const fs = require('fs');

// let data = String(Math.floor(Math.random()*100));
// fs.writeFileSync("file1.txt", data, (err) => {
//     if(err) {
//         throw err;
//     }
// });
// console.log("Write File successfully!!");
// console.log(fs.readFileSync("file1.txt", "utf8"));