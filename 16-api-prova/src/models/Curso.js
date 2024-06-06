const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        duracao: {
            type: String,
            required: false
        },
        disciplinas: {
            type: Date,
            required: false
        }
    },
    {
        timestamps: true
    }
)

const Curso = mongoose.model('curso', schema)

module.exports = Curso