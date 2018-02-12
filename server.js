const express = require('express')
const { giveRandomWord } = require('./random')
const app = express()

const toSend = giveRandomWord()
app.get('/', (req, res) => res.send(toSend))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))