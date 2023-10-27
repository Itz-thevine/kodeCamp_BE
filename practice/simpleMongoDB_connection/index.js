const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

const port = 8000

mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
}).catch((err) => {
    console.log(err)
})
