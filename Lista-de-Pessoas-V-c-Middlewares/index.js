const express = require('express')

const app = express()

// Middleware
app.use(express.json())

//Rota
const pessoas = require('./routes/pessoas')
app.use(pessoas)




app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})