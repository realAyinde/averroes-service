const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Averroes!')
})

app.listen(PORT, () => {
  console.log(`Averroes service listening on port localhost:${PORT}`)
})