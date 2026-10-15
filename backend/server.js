import "dotenv/config";
import app from "./dist/app.js";
import { connectDB } from "./dist/common/config/db.js";

const PORT = process.env.PORT || 3000;

await connectDB();

app.listen(PORT, () => {
  console.log(`BazaarCore Server is running on port ${PORT}`);
});
