const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: false
        },
        duracao: {
            type: String,
            required: true
        },
        modalidade: {
            type: String,
            required: true
        },
        departamento: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'departamento',
            required: false
        }
    },
    {
        timestamps: true
    }
)

const Curso = mongoose.model('curso', schema)

module.exports = Curso