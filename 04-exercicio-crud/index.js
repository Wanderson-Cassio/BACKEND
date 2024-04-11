// Importações
const express = require('express')
const tarefas = require('./routes/tarefas')

// Configuração
const app = express()

// Middleware
app.use(express.json())

// Rota
app.use(tarefas)


app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})