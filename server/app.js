const express = require("express")
const cors = require("cors")
const rateLimit = require("express-rate-limit")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Fix IPv6 issue!
app.set("trust proxy", 1)

    // Rate Limiter Per User
    const limiter = rateLimit({
        windowMs: 60 * 1000, // 1 minute window
        max: 10,            // only 10 searches per minute per user
        // Fix IPv6 key generation!
        keyGenerator: (req) => {
            const ip = req.ip || req.connection.remoteAddress  // track by IP address
            // Convert IPv6 to IPv4 if needed
            return ip.includes('::ffff:')
            ? ip.split('::ffff:')[1]
            : ip
        },  
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


