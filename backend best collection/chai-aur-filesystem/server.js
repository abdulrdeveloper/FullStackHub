import "dotenv/config"
import app from "./src/app.js"
import connectDB from "./src/common/config/db.js"

const PORT = process.env.PORT || 5000

const start = async () => {
  await connectDB()
  app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} in ${process.env.NODE_ENV} mode`)
  })
}

start().catch((err) => {
  console.error("Failed to start server", err)
  process.exit(1)
})
