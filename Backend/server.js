const express = require('express')

const PORT = 8000
const app = express()

app.get('/', (req, res) => {
  res.status(200).send('Hello world!')
})

app.listen(PORT, console.log(`server started! http://localhost:${PORT}`))