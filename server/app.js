const express = require("express")
const cors = require("cors")
const rateLimit = require("express-rate-limit")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

    // Rate Limiter Per User
    const limiter = rateLimit({
        windowMs: 60 * 1000, // 1 minute window
        max: 5,             // only 5 searches per minute per user
        keyGenerator: (req) => req.ip, // track by IP address
        message: {
            error: "Too many searches! Please wait 1 minute."
        }
    })

app.use('/api/search' , limiter)

    // Routes 
const searchRoute = require("./routes/search")
app.use('/api', searchRoute)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


