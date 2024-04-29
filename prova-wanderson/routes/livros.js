const express = require('express')

const router = express.Router()

let listaLivros = [
    {
        id: 1,
        titulo: "A arte da guerra",
        autor: "Sun Tzu",
        editora: "Principis",
        ano: 1996,
        preco: 99.99
    },
    {
        id: 2,
        titulo: "A batalha do apocalipse",
        autor: "Eduardo Spohr",
        editora: "Verus",
        ano: 2010,
        preco: 36.99
    }
]

// READ
router.get('/livros', (req, res) => {
    res.json(listaLivros)
})

// READ
router.get('/livros/:id', (req, res) => {
    const id = req.params.id
    
    livro = listaLivros.find(livro => livro.id == id)

    if(livro) {
        return res.json(livro)
    }
    return res.status(404).json({ mensagem: "Livro não encontrado!"})
})

//CREATE
router.post('/livros', (req, res) => {
    const corpo = req.body

    if(!corpo.titulo || !corpo.autor || !corpo.editora || !corpo.ano || !corpo.preco) {
        return res.status(400).json({
            menagem: "Compos titulo, autor, editora, ano e preco são obrigatóros!"
        })
    } 
    const livro = {
        id: Math.round(Math.random()* 1000),
        titulo: corpo.titulo,
        autor: corpo.autor,
        editora: corpo.editora,
        ano: corpo.ano,
        preco: corpo.preco
    }
    listaLivros.push(livro)
    return res.status(201).json({
        mensagem: "Livro cadastrado com sucesso!",
        livro
    })

})

/// UPDATE 
router.put('/livros/:id', (req, res) => {
    const id = req.params.id
    const corpo = req.body

    if(!corpo.titulo || !corpo.autor || !corpo.editora || !corpo.ano || !corpo.preco) {
        return res.status(400).json({
            menagem: "Compos titulo, autor, editora, ano e preco são obrigatóros!"
        })
    }
    const index = listaLivros.findIndex(livro => livro.id == id)
    if (index == -1) {
        return res.status(404).json({ menagem: "livro não encontrado!"})
    }

    const livroAtualizado = {
        id: Number(id),
        titulo: corpo.titulo,
        autor: corpo.autor,
        editora: corpo.editora,
        ano: Number(corpo.ano),
        preco: corpo.preco
    }
    listaLivros[index] = livroAtualizado
    return res.json({
        mensagem: "Livro atualizado com sucesso!",
        livroAtualizado
    })
})

// DELETE
router.delete('/livros/:id', (req, res) => {
    const id = req.params.id
    const index = listaLivros.findIndex(livro => livro.id == id)

    if(index == -1) {
        return res.status(404).json({ mensagem: "Livro não encontrado!"})
    }

    listaLivros.splice(index, 1)
    return res.json({ mensagem: `O Livro foi ${id} exluido com sucesso!`})
})

// READ ->  Busca de todos os livros do mesmo autor
router.get('/livros/autor/:autor', (req, res) => {
    const autor = req.params.autor
    const livrosPorAutor = listaLivros.filter(livro => livro.autor.toUpperCase() == autor.toUpperCase())
    res.json(livrosPorAutor)
})

// READ -> Calcular e retornar o preço médio de todos os livros da lista
router.get('/livros/preco/media', (req, res) => {
    const totalLivros = listaLivros.length
    let precoTotal = 0


    listaLivros.forEach(livro => {
        precoTotal += livro.preco
    })

    const precoMedia = totalLivros > 0 ? precoTotal / totalLivros : 0

    res.json({
        quantidadeLivros: totalLivros,
        precoMedia: precoMedia.toFixed(2) 
    })
})





module.exports = router