const express = require('express')
const app = express()
const port = 3000

app.get('/saludo', (req, res) => {
  res.send('Hola como estan!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})