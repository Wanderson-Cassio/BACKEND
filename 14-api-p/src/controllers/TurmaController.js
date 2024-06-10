const Turma = require('../models/Turma')

async function create(req, res) {
    const turma = new Turma(req.body)
    const turmaCriado = await turma.save()
    res.status(201).json(turmaCriado)
}

async function getAll(req, res) {
    res.json(await Turma.find().populate(['curso', 'disciplina', 'professor']))
}

async function getById(req, res) {
    const turma = await Turma.findById(req.params.id).populate(['curso', 'disciplina', 'professor'])
    if (turma) {
        res.json(turma)
    } else {
        res.status(404).json({ mensagem: "Turma não encontrato!" })
    }
}

async function update(req, res) {
    const turmaAtulizado = await Turma.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (turmaAtulizado) {
        res.json(turmaAtulizado)
    } else {
        res.status(404).json({ mensagem: "Turma não encontrato!" })
    }

}

async function remove(req, res) {
    const turmaExcluido = await Turma.findByIdAndDelete(req.params.id)
    if (turmaExcluido) {
        res.json({
            mensagem: "Turma excluido com sucesso!",
            turmaExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Turma não encontrato!" })
    }
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}