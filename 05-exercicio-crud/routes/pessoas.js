const express = require('express')
const router = express.Router()

listaPessoas = [
    {
        "id": 1,
        "nome": "João",
        "idade": 20,
        "email": "joão@email.com",
        "telefone": "61900010002"
    },
    {
        "id": 2,
        "nome": "Maria",
        "idade": 19,
        "email": "maria@outlook.com",
        "telefone": "62900010019"
    }
]

// Recuperar todas as pessoas.
router.get('/pessoas', (req, res) =>{
    res.json(listaPessoas)
})

// Recuperar uma pessoa específica por meio de seu identificador.
router.get('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const index =  listaPessoas.findIndex(pessoa => pessoa.id == id)
    const pessoa = listaPessoas[index]
    res.json(pessoa)
})

// Adicionar uma nova pessoa.
router.post('/pessoas', (req, res) => {
    const novosDados = req.body

    const pessoa = {
        "id": listaPessoas.length +1,
        "nome": novosDados.nome,
        "idade": novosDados.idade,
        "email": novosDados.email,
        "telefone": novosDados.telefone
    }
    listaPessoas.push(pessoa)

    res.json({ mensagem: "Pessoa adicionada com sucesso!"})
})

// Atualizar uma pessoa existente com base em seu identificador.
router.put('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const novoPessoa = req.body

    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)

    const atualizarPessoa = {
        "id": id,
        "nome": novoPessoa.nome,
        "idade": novoPessoa.idade,
        "email": novoPessoa.email,
        "telefone": novoPessoa.telefone
    }
    listaPessoas[index] = atualizarPessoa

    res.json({ mensagem: "Pessoa atualizada com sucesso!"})
    
})

// Remover uma pessoa da lista com base em seu identificador.
router.delete('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)

    listaPessoas.splice(index, 1)

    res.json({ mensagem: "Pessoa removida com sucesso!"})
})



module.exports = router