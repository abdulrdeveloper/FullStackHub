import fs from "node:fs"

// old way of doing things : call back hell

fs.readFile("b.txt" , "utf-8" , (error , data)=>{
    if(error){
        console.log(error)
        return;
    }
    console.log("Data read successfully")

    fs.writeFile("c.txt" , data, (err)=>{
        if(err){
            console.log(err)
            return;
        }
        console.log("File written successfully")

        fs.appendFile("c.txt" , "\nDone Everything working" , (err)=>{
            if(err){
                console.log(err)
                return;
            }
            console.log("Data appended successfully")

            fs.unlink("b.txt" , (err)=>{
                if(err){
                    console.log(err)
                    return;
                }
                console.log("b.txt deleted")
            })
        })
    })
})