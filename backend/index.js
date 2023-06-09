const express = require('express')
const cors = require('cors')
const cookie_parser = require('cookie-parser')

const PORT = 5000
const app = express()

const userRoutes = require('./routes/user.routes')
const orderRoutes = require('./routes/order.routes')

app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))

app.use(express.json())
app.use(userRoutes)
app.use(orderRoutes)




app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT} port...`)
})