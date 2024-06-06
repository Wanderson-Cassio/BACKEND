const Aluno = require('../models/Aluno')

async function create(req, res) {
    const aluno = new Aluno(req.body)
    const alunoCriado = await aluno.save()
    res.status(201).json(alunoCriado)
}

async function getAll(req, res) {
    res.json(await Aluno.find().populate(['aluno', 'departamento']))
}

async function getById(req, res) {
    const aluno = await Aluno.findById(req.params.id).populate(['cargo', 'departamento'])
    if (aluno) {
        res.json(aluno)
    } else {
        res.status(404).json({ mensagem: "Aluno não encontrato!" })
    }
}

async function update(req, res) {
    const alunoAtualizado = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (alunoAtualizado) {
        res.json(alunoAtualizado)
    } else {
        res.status(404).json({ mensagem: "Aluno não encontrato!" })
    }

}

async function remove(req, res) {
    const alunoExcluido = await Aluno.findByIdAndDelete(req.params.id)
    if (alunoExcluido) {
        res.json({
            mensagem: "Aluno excluido com sucesso!",
            alunoExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Aluno não encontrato!" })
    }
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}