import fs from "node:fs/promises";

try {
    // 1. Read file
    const data = await fs.readFile("c.txt", "utf-8");
    console.log("Data read successfully");

    // 2. Write file
    await fs.writeFile("async-test.txt", data);
    console.log("File written successfully");

    // 3. Append file
    await fs.appendFile("async-test.txt", "\nDone Everything working");
    console.log("Data appended successfully");

    // 4. Delete file
    await fs.unlink("c.txt");
    console.log("c.txt deleted");

} catch (error) {
    console.log("Something went wrong:", error.message);
}