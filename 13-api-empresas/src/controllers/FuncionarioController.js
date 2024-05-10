const Funcionario = require('../models/Funcionario')


async function create(req, res) {
    try {
        const funcionario = new Funcionario
        const funcionarioCriado = await funcionario.save()
        res.status(201).json(funcionarioCriado)
    } catch (error) {
        constole.erro("Erro ao criar funcionario: ", error)
        res.status(400).json(
            {
                mensagem: "Erro ao criar funcionario!",
                erro: error.message
            }
        )
    }
}

async function getById(req, res) {
    const funcionario = await Funcionario.findById(req.params.id).populate('cargo')
    if (funcionario) {
        res.json(funcionario)
    } else {
        res.status(404).json({ mensagem: "Funcionario não encontrado!"})
    }
}

// atualização, delete, buscatodos




module.exports = {
    create,
    getById
}