const express = require('express')
const router = express.Router()

let listaPessoas = [
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

// middlewares de validação
// Validar se a pessoa existe
function validarPessoa(req, res, next) {
    const id = req.params.id
    const pessoa = listaPessoas.find(pessoa => pessoa.id == id)
    if (pessoa) {
        req.pessoa = pessoa
        next()
    } else {
        return res.status(404).json({ mensagem: "Pessoa não encontrada!" })
    }
}

// validar os atributos do corpo
function validarAtributos(req, res, next) {
    const dadosRecebidos = req.body
    if (!dadosRecebidos.nome || !dadosRecebidos.idade || !dadosRecebidos.email || !dadosRecebidos.telefone) {
        return res.status(400).json({ mensagem: "Nome, idade, email e telefone são obrigatórios" })
    } else {
        next()
    }
}


// Recuperar todas as pessoas.
router.get('/pessoas', (req, res) =>{
    res.json(listaPessoas)
})

// Recuperar uma pessoa específica por meio de seu identificador.
router.get('/pessoas/:id', validarPessoa, (req, res) => {
    res.json(req.pessoa)
})

// Adicionar uma nova pessoa.
router.post('/pessoas', validarAtributos, (req, res) => {
    const novosDados = req.body

    const pessoa = {
        "id": Math.round(Math.random() * 1000),
        "nome": novosDados.nome,
        "idade": novosDados.idade,
        "email": novosDados.email,
        "telefone": novosDados.telefone
    }
    listaPessoas.push(pessoa)

    res.status(201).json({ mensagem: "Pessoa adicionada com sucesso!"})
})

// Atualizar uma pessoa existente com base em seu identificador.
router.put('/pessoas/:id', validarAtributos, validarPessoa, (req, res) => {
    const id = req.params.id
    const novaPessoa = req.body

    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)

    const atualizarPessoa = {
        "id": Number(id),
        "nome": novaPessoa.nome,
        "idade": novaPessoa.idade,
        "email": novaPessoa.email,
        "telefone": novaPessoa.telefone
    }
    listaPessoas[index] = atualizarPessoa

    res.json({ mensagem: "Pessoa atualizada com sucesso!",
    pessoa: atualizarPessoa})
    
})

// Remover uma pessoa da lista com base em seu identificador.
router.delete('/pessoas/:id', validarPessoa, (req, res) => {
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)

    listaPessoas.splice(index, 1)

    res.json({ mensagem: "Pessoa removida com sucesso!"})
})



module.exports = router