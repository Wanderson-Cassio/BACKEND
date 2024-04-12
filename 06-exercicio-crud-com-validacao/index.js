const express = require('express')
const app = express()

app.use(express.json())

//Rotas
const pessoas = require('./routes/pessoas')
app.use(pessoas)



app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})