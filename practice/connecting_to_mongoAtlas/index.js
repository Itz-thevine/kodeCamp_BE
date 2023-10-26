const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()
const {
    testDb
} = require('./schema/subjectsSchema')

const app = express()
const port = process.env.PORT

const connect = mongoose.connect(process.env.MONGO_URL)
connect.then(() => {
    console.log('successfully connect to the db')
}).catch((err) => {
    console.log('could not connect to the db :', err)
})

app.use(express.json())

app.get('/', async (req, res) => {
    const subjects = await testDb.find();
    res.json(subjects)
})

app.listen(port, () => {
    console.log('app is running on port', port)
})
