const express = require('express')

const app = express()

app.use(express.json())

const livrosRouter = require('./routes/livros')
const router = require('./routes/livros')
app.use(livrosRouter)





app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})
