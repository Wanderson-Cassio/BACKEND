const express = require('express')
// Criar um router
const router = express.Router()

// Criar uma lista
listaTarefas = []


// Recuperar todas as tarefas.
router.get('/tarefas', (req, res) => {
    res.json(listaTarefas)
})

// Recuperar uma tarefa específica por meio de seu identificador.
router.get('/tarefas/:id', (req, res) => {
    const id = req.params.id
    const tarefa = listaTarefas.find(tarefa => tarefa.id == id)
    if (tarefa) {
        res.json(tarefa)
    } else {
        res.json({ mensagem: "Tarefa não encontrada!"})
    }
    
})

// Adicionar uma nova tarefa.
router.post('/tarefas', (req, res) => {
    const novaTarefa = req.body
    
    const tarefa = {
        id: listaTarefas.length + 1,
        nome: novaTarefa.nome
    }
    listaTarefas.push(tarefa)

    res.json({ mensagem: "Tarefa cadastrada com sucesso!"})
})

// Remover uma tarefa da lista com base em seu identificador.
router.delete('/tarefas/:id', (req, res) => {
    const id = req.params.id
    const index = listaTarefas.findIndex(tarefa => tarefa.id == id)
    listaTarefas.splice(index, 1)
    res.json({ mensagem: "Tarefa exluida com sucesso!"})
})

// Atualizar uma tarefa existente com base em seu identificador.
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