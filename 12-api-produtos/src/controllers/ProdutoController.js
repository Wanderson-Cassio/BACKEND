const Produto =  require('../models/produto')


    async function getAll(req, res) {
        const produtos = await Produto.find()
        res.json(produtos)
    }

    async function create(req, res) {
        const produto = new Produto(req.body)
        const produtoCriado = await produto.save()
        res.status(201).json(produtoCriado)
    }




module.exports = {
    getAll,
    create
}