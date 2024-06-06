const Disciplina = require('../models/Disciplina')

async function create(req, res) {
    const disciplina = new Disciplina(req.body)
    const disciplinaCriado = await disciplina.save()
    res.status(201).json(disciplinaCriado)
}

async function getAll(req, res) {
    res.json(await Disciplina.find())
}

async function getById(req, res) {
    const disciplina = await Disciplina.findById(req.params.id)
    if (disciplina) {
        res.json(disciplina)
    } else {
        res.status(404).json({ mensagem: "Disciplina não encontrato!" })
    }
}

async function update(req, res) {
    const disciplinaAtualizado = await Disciplina.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (disciplinaAtualizado) {
        res.json(disciplinaAtualizado)
    } else {
        res.status(404).json({ mensagem: "Disciplina não encontrato!" })
    }

}

async function remove(req, res) {
    const disciplinaExcluido = await Disciplina.findByIdAndDelete(req.params.id)
    if (disciplinaExcluido) {
        res.json({
            mensagem: "Disciplina excluido com sucesso!",
            disciplinaExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Disciplina não encontrato!" })
    }
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}