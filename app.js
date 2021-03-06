const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3000


//short
//combined
app.use(morgan('short'))
app.use(cors())


app.listen(PORT, () =>{
    console.log("Server Running")
})

app.get("/", (req, res) =>{
    res.send("Server Running")
})

const userRoute = require('./routes/user.js')
const adminRoute = require('./routes/admin.js')
const authRoute = require('./routes/auth.js')
const transactionRoute = require('./routes/transaction.js')

app.use(userRoute)
app.use(adminRoute)
app.use(authRoute)
app.use(transactionRoute)