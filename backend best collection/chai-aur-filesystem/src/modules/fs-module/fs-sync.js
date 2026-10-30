import fs from "node:fs"

// 1. WRITE
fs.writeFileSync("test.txt" , "kya haal chal")


// 2. READ
const data = fs.readFileSync("test.txt" , "utf-8")

console.log(data)


// 3. APPEND
fs.appendFileSync("test.txt" , "\nHello from append")


// 4. CREATE FOLDER
fs.mkdirSync("myFolder/innerFolder" , {recursive:true}); //recursive will check if parent folder is present or not, if not it will create it 


// 5. RENAME
fs.renameSync("test.txt" , "test1.txt")


// 6. COPY FILE
fs.cpSync("test1.txt" , "finalTest.txt") 


// 8. DELETE FILE (OLD/SPECIFIC WAY)
fs.unlinkSync("test1.txt");
fs.unlinkSync("finalTest.txt");


// 10. DELETE ANYTHING - FILE OR FOLDER (MODERN ALL-IN-ONE WAY)
fs.rmSync("myFolder", { recursive: true, force: true });
