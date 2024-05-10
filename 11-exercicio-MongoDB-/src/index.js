const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
require('dotenv').config()

// Conexão com o MongoDB
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.rvfa146.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log("Conectado ao banco Mongo"))
    .catch((err) => console.log("Erro ao conectar no Mongo: ", err))

// Middlewares
app.use(express.json())

// DB Modelos
const Pessoa = mongoose.model('pessoa', { nome: String })


// Rotas
// Buscar todas as pessoas
app.get('/pessoas', async (req, res) => {
    const pessoas = await Pessoa.find()
    res.json(pessoas)
})

// Buscar uma pessoa específica por meio de seu identificador
app.get('/pessoas/:id', async (req, res) => {
    const pessoa = await Pessoa.findById(req.params.id)
    res.json(pessoa)
})

// Cadastrar uma nova pessoa
app.post('/pessoas', async (req, res) => {
    const pessoa = new Pessoa({nome: req.body.nome })
    await pessoa.save()
    res.json(pessoa)
})

// Atualizar uma pessoa com base em seu identificador
app.put('/pessoas/:id', async (req, res) => {
    const pessoa = await Pessoa.findByIdAndUpdate(req.params.id, {nome: req.body.nome }, {new: true})
    res.json(pessoa)
})

// Remover uma pessoa com base em seu identificador
app.delete('/pessoas/:id', async (req, res) => {
    await Pessoa.findOneAndDelete(req.params.id)
    res.json()
})


app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})