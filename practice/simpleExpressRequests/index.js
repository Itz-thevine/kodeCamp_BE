const express = require('express')
const app = express()
const port = 8000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/name', (req, res) => {
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})