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
            required: false
        },
        modalidade: {
            type: String,
            required: false
        },
        disciplinas: {
            type: Array,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Curso = mongoose.model('curso', schema)

module.exports = Curso