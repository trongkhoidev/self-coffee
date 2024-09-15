const express = require('express')
const app = express()
const port = 3000

app.get('/ntk', (req, res) => {
  res.send('Nguyen Trong Khoi')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})