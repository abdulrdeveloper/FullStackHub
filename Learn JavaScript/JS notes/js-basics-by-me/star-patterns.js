for (let i = 0; i < 5; i++) {
     let row = "";

    for (let j = 0; j <= i; j++) {
        row += "*";
    }
    console.log(row.trim());
}
/* this is the pattern 

* 
* * 
* * * 
* * * * 
* * * * *                 */

for (let i = 5; i >= 0; i--) {
     let row = "";

    for (let j = 0; j <= i; j++) {
        row += "*";
    }
    console.log(row.trim());
}

/* this is the pattern 

* * * * * 
* * * * 
* * *                
* *
*                    */