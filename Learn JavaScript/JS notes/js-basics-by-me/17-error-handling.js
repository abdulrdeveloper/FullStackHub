function bootNavigation(mapLoaded) {
   
    try{

        console.log(` is Navigation loaded:${mapLoaded}`);
        
        if(!mapLoaded){
            throw new Error("Map was not passed in this funtion")
        }
        return "NAV_OK"

    } catch(error){

        console.log(error);
        console.log(`Navigation Failed: ${error.message}`);
    
    } finally {
        console.log(`Navigation sequance completed`);
    }
}
const status1 = bootNavigation(false); // we can write here directly true or false 
console.log(`Result: ${status1}`);

/* ise ham gracefully handle kr saktay hain , code crash nai hota even false condition per bi failed show hota e and error control mai rehta he */