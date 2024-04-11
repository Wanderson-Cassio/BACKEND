const express = require('express')
// Criar um router
const router = express.Router()

listaTarefas = []

router.get('/tarefas', (req, res) => {
    res.json(listaTarefas)
})

router.get('/tarefas/:id', (req, res) => {
    const id = req.params.id
    const tarefa = listaTarefas[id]
    res.json(tarefa)
})

router.post('/tarefas', (req, res) => {
    const tarefa = req.body
    listaTarefas.push(tarefa.nome)
    res.status(201).json({ mensagem: "Tarefa cadastrada com sucesso!"})
})

router.delete('/tarefas/:id', (req, res) => {
    const id = req.params.id
    listaTarefas.splice(id, 1)
    res.json({ mensagem: "Tarefa exluida com sucesso!"})
})

router.put('/tarefas/:id', (req, res) => {
    const id = req.params.id
    const tarefa = req.body
    listaTarefas[id] = tarefa.nome
    res.json({ mensagem: "Tarefa alterada com sucesso!"})
})



// Exportar o router
module.exports = router