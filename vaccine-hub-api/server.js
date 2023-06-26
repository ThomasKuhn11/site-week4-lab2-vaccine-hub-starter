
const express = require('express')
const cors = require("cors")
const morgan = require("morgan")

const {BadRequestError, NotFoundError} = require("./utils/errors")

const app= express()

app.use(cors())

app.use(express.json())

app.use(morgan("tiny"))

app.use((req, res, nextr) => {
    return nextr(new NotFoundError())
})

const PORT = process.env.SERVER_PORT || 3009


// app.get('/', (req, res) => {
//     res.send("<h1>Virtual Hair Salon </h1>")
// })

app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`);
})