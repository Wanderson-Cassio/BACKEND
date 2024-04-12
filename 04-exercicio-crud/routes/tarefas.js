const express = require('express')
// Criar um router
const router = express.Router()

// Criar uma lista
listaTarefas = []

router.get('/tarefas', (req, res) => {
    res.json(listaTarefas)
})

router.get('/tarefas/:id', (req, res) => {
    const id = req.params.id
    const tarefa = listaTarefas.find(tarefa => tarefa.id == id)
    if (tarefa) {
        res.json(tarefa)
    } else {
        res.json({ mensagem: "Tarefa não encontrada!"})
    }
    
})

router.post('/tarefas', (req, res) => {
    const novaTarefa = req.body
    
    const tarefa = {
        id: listaTarefas.length + 1,
        nome: novaTarefa.nome
    }
    listaTarefas.push(tarefa)

    res.json({ mensagem: "Tarefa cadastrada com sucesso!"})
})

router.delete('/tarefas/:id', (req, res) => {
    const id = req.params.id
    const index = listaTarefas.findIndex(tarefa => tarefa.id == id)
    listaTarefas.splice(index, 1)
    res.json({ mensagem: "Tarefa exluida com sucesso!"})
})

router.put('/tarefas/:id', (req, res) => {
    const id = req.params.id
    const novaTarefa = req.body
    
    const index = listaTarefas.findIndex(tarefa => tarefa.id == id)

    const tarefaAlterada = {
        id: id,
        nome: novaTarefa.nome
    }

    listaTarefas[index] = tarefaAlterada

    res.json({ mensagem: "Tarefa alterada com sucesso!"})
})



// Exportar o router
module.exports = router