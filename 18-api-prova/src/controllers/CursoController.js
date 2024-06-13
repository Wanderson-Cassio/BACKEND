const Curso = require('../models/Curso')

async function create(req, res) {
    const curso = new Curso(req.body)
    const cursoCriado = await curso.save()
    res.status(201).json(cursoCriado)
}

async function getAll(req, res) {
    res.json(await Curso.find().populate('departamento'))
}

async function getById(req, res) {
    const curso = await Curso.findById(req.params.id).populate('departamento')
    if (curso) {
        res.json(curso)
    } else {
        res.status(404).json({ mensagem: "Curso não encontrato!" })
    }
}

async function update(req, res) {
    const cursoAtulizado = await Curso.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (cursoAtulizado) {
        res.json(cursoAtulizado)
    } else {
        res.status(404).json({ mensagem: "Curso não encontrato!" })
    }

}

async function remove(req, res) {
    const cursoExcluido = await Curso.findByIdAndDelete(req.params.id)
    if (cursoExcluido) {
        res.json({
            mensagem: "Curso excluido com sucesso!",
            cursoExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Curso não encontrato!" })
    }
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}