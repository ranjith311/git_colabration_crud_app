require("dotenv").config()
const app = require('express')()
const PORT = process.env.PORT || 3000

const connectDB = require("./helpers/mongo_init")
connectDB()



app.listen(3000,()=>console.log(`server is running at port ${PORT}`))
