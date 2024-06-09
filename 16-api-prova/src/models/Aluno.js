const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        telefone: {
            type: String,
            required: true
        },
        dataNascimento: {
            type: Date,
            required: true
        },
        curso: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'curso',
            required: false
        },
    },
    {
        timestamps: true
    }
)

const Aluno = mongoose.model('aluno', schema)

module.exports = Aluno