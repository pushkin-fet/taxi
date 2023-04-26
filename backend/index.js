const express = require('express')
const cors = require('cors')
const cookie_parser = require('cookie-parser')


const PORT = 5000
const app = express()


const userRoutes = require('./routes/user.routes')
app.use(cookie_parser())
app.use(cors())
app.use(express.json())
app.use('/api', userRoutes)





app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT} port...`)
})