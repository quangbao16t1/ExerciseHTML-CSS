const fs = require('fs');
const path = require('path');
let sum = 0;
function getSum() {
    for(let i = 1; i < 11; i++) {
        // let data1 = String(Math.floor(Math.random()*100));
        let startDate = new Date().getTime();
        let endDate = startDate;
        
        // cho 4s
        while (endDate - startDate < 1000) {
            endDate = new Date().getTime();
        }

        let pathFile1 = path.join('../', 'folder', String(i), `file1.txt`);
        const data1 = fs.readFileSync(pathFile1, "utf8",  (err, data) => {
            if(err) {
                throw err;
            }
            
        });
        let pathFile2 = path.join('../', 'folder', String(i), `file2.txt`);
        const data2 = fs.readFileSync(pathFile2, "utf8",  (err) => {
            if(err) {
                throw err;
            }
            
        });  
        sum += Number(data1) + Number(data2);     
        console.log(sum);   
    }
}
// getSum();
const listFolder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function getSumByMap() {
    listFolder.map(i => {
        let startDate = new Date().getTime();
        let endDate = startDate;
        
        while (endDate - startDate < 1000) {
            endDate = new Date().getTime();
        }

        let pathFile1 = path.join('../', 'folder', String(i), `file1.txt`);
        const data1 = fs.readFileSync(pathFile1, "utf8",  (err) => {
            if(err) {
                throw err;
            }
            
        });
        let pathFile2 = path.join('../', 'folder', String(i), `file2.txt`);
        const data2 = fs.readFileSync(pathFile2, "utf8",  (err) => {
            if(err) {
                throw err;
            }
        });  
        sum += Number(data1) + Number(data2);     
        console.log(sum); 
    });
    console.log("Sum: "+sum);
          
}
getSumByMap();