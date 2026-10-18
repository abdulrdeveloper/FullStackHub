import app from "./src/app.js";
import { connectDB } from "./src/common/config/db.js";
import 'dotenv/config.js';

const PORT = process.env.PORT || 5000;

const start = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`);
    });
}

start().catch((error) => {
    console.log(`Server failed to start: ${error}`);
    process.exit(1);
});
