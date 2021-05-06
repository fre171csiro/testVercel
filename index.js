const express = require('express')
const app = express()
const port = 3000
const statusdb = {shane:'farts', andrew:'smells'}

app.get('/', (req, res) => {
  res.send(statusdb)
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})