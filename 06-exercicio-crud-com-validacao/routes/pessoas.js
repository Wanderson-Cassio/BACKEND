const express = require('express')
const router = express.Router()

let listaPessoas = [
    {
        "id": 1,
        "nome": "Adriano",
        "idade": 27,
        "email": "adriano@gmail.com",
        "telefone": "61900010027"
    },
    {
        "id": 2,
        "nome": "Beatriz",
        "idade": 25,
        "email": "beatriz@outlook.com",
        "telefone": "62900010025"
    }
]

// Recuperar todas as pessoas.
router.get('/pessoas', (req, res) =>{
    res.status(200).json(listaPessoas)
})

// Recuperar uma pessoa específica por meio de seu identificador.
router.get('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const pessoa =  listaPessoas.find(pessoa => pessoa.id == id)
    if (pessoa) {
        res.status(200).json(pessoa)
    } else {
        res.status(404).json({ mensagem: "Pessoa não encontrada!"})
    }
})

// Adicionar uma nova pessoa.
router.post('/pessoas', (req, res) => {
    const dados = req.body

    if (!dados.nome || !dados.idade || !dados.email || !dados.telefone) {
        res.status(400).json({ mensagem: "Nome, idade, email e telefone são obrigatórios!"})
    } else {
        const pessoa = {
            "id": Math.round(Math.random() * 1000),
            "nome": dados.nome,
            "idade": dados.idade,
            "email": dados.email,
            "telefone": dados.telefone
        }  
        
        listaPessoas.push(pessoa)

        res.status(201).json({ mensagem: "Pessoa adicionada com sucesso!", pessoa})
    }   
})

// Atualizar uma pessoa existente com base em seu identificador.
router.put('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const novosDados = req.body

    if (!novosDados.nome || !novosDados.idade || !novosDados.email || !novosDados.telefone) {
        res.status(400).json({ mensagem: "Nome, idade, email e telefone são obrigatórios!"})
    } else {
        const index = listaPessoas.findIndex(pessoa => pessoa.id == id)
        if (index == -1) {
            res.status(404).json({ mensagem: "Pessoa não encontrada!"})
        } else {
            const pessoa = {
                "id": Number(id),
                "nome": novosDados.nome,
                "idade": novosDados.idade,
                "email": novosDados.email,
                "telefone": novosDados.telefone
            }
            listaPessoas[index] = pessoa
        
            res.status(200).json({ mensagem: "Pessoa atualizada com sucesso!", pessoa})
        }
    }     
})

// Remover uma pessoa da lista com base em seu identificador.
router.delete('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)
    if (index == -1) {
        res.status(404).json({ mensagem: "Pessoa não encontrada!"})
    } else {
        listaPessoas.splice(index, 1)
        res.status(200).json({ mensagem: "Pessoa removida com sucesso!"})
    }


})


module.exports = router